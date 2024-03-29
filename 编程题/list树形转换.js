/*
以下数据结构中，id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，
现在要求实现一个 convert 方法，把原始 list 转换成树形结构，
parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下
 */
let list = [
    {id: 1, name: '部门A', parentId: 0},
    {id: 2, name: '部门B', parentId: 0},
    {id: 3, name: '部门C', parentId: 1},
    {id: 4, name: '部门D', parentId: 1},
    {id: 5, name: '部门E', parentId: 2},
    {id: 6, name: '部门F', parentId: 3},
    {id: 7, name: '部门G', parentId: 2},
    {id: 8, name: '部门H', parentId: 4}
];

function dfs(source, parentId = 0) {
    let trees = []
    source.forEach(item => {
        if (item.parentId === parentId) {
            let children = dfs(source, item.id)
            if (children.length) {
                item.children = children
            }
            trees.push(item)
        }
    })
    return trees
}

function convert(list) {
    let map = list.reduce((res, v) => {
        res[v.id] = v
        return res
    }, {})
    let result = []
    for (let item of list) {
        if (item.parentId === 0) {
            result.push(item)
            continue
        }
        if (item.parentId in map) {
            const parent = map[item.parentId]
            parent.children = parent.children || []
            parent.children.push(item)
        }
    }
    return result
}

console.log(convert(list))
