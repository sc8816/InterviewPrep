const config = require('./minipack.config')
const fs = require('fs')
const path = require('path')
const babelParse = require('@babel/parser')
const {transformFromAst} = require('@babel/core');
const traverse = require('@babel/traverse').default
const entry = config.entry
const output = config.output

// 1.获取入口文件的内容
// 2.使用babel/parser插件将代码转换成ast
// 3.使用babel/core里面的transformFromAst方法将我们得到的ast转换成ES5语法
// 4.使用babel/traverse获取到所有的依赖模块
// 5.对我们的依赖模块重复之前的步骤，进行一个递归操作找到所有的依赖模块，生成一个图
// 6.根据图的数据我们进行重写require方法，通过字符串拼接自执行的方式生成一个bundle文件


/**
 * 解析文件内容及其依赖，
 * 期望返回：
 *      dependencies: 文件依赖模块
 *      code: 文件解析内容
 * @param {string} filename 文件路径
 */
function createAsset(filename) {
    const content = fs.readFileSync(filename, 'utf-8');
    const ast = babelParse.parse(content, {
        sourceType: "module"
    })
    const {code} = transformFromAst(ast, null, {
        presets: ['@babel/preset-env'],
    })

    const dependencies = []
    traverse(ast, {
        ImportDeclaration: ({node}) => {
            dependencies.push(node.source.value)
        }
    })
    // console.log(filename, dependencies);
    return {
        code,
        dependencies
    }
}

/**
 *递归遍历，查找所有依赖
 * @param {*} assert 入口文件
 */
function recursionDep(filename, assert) {
    assert.mapping = {}
    const dirname = path.dirname(filename)
    assert.dependencies.forEach(relativePath => {
        let absolutePath = path.join(dirname, relativePath)
        console.log(dirname, relativePath, absolutePath)
        assert.mapping[relativePath] = absolutePath
        if (!graph[absolutePath]) {
            const child = createAsset(absolutePath)
            graph[absolutePath] = child
            if (child.dependencies.length > 0) {
                // 继续递归
                recursionDep(absolutePath, child)
            }
        }
    })
}

function bundle(graph) {
    let modules = ''
    for (let filename in graph) {
        let mod = graph[filename]
        modules += `'${filename}': [
    function(require, module, exports) {
      ${mod.code}
    },
    ${JSON.stringify(mod.mapping)},
  ],`
    }
    const result = `
  (function(modules) {
    function require(moduleId) {
      const [fn, mapping] = modules[moduleId]
      function localRequire(name) {
        return require(mapping[name])
      }
      const module = {exports: {}}
      fn(localRequire, module, module.exports)
      return module.exports
    }
    require('${entry}')
  })({${modules}})
`
    return result
}

const graph = {
    [entry]: createAsset(entry)
}
for (let filename in graph) {
    let assert = graph[filename]
    recursionDep(filename, assert)
}
const result = bundle(graph)
// 写入 ./dist/bundle.js
fs.writeFile(`${output.path}/${output.filename}`, result, (err) => {
    if (err) throw err;
    console.log('文件已被保存');
})
console.log(graph)

