/*
const value = '112'
const fn = (value) => {
...
}
fn(value) // 输出 [1， 11， 112]
 */
const cityData = [{
    id: '1',
    name: '广东省',
    children: [
        {
            id: '11',
            name: '深圳市',
            children: [
                {
                    id: '111',
                    name: '南山区'
                },
                {
                    id: '112',
                    name: '福田区',
                    children: [{
                        id: '1121',
                        name: 'A街道'
                    }]
                }
            ]
        },
        {
            id: '12',
            name: '东莞市',
            children: [
                {
                    id: '121',
                    name: 'A区'
                },
                {
                    id: '122',
                    name: 'B区',
                }
            ]
        }
    ]
}];

function findParentId(list, target) {
    let res
    let dfs = (node, path, target) => {
        if (node.id === target) return res = path
        if (node.children) {
            for (let child of node.children) {
                dfs(child, [...path, node.id], target)
            }
        }
    }

    for (let node of list) {
        dfs(node, [], target)
    }

    return []
}

function findParentIds(list, target) {
    let res = []
    let dfs = (list, path, target) => {
        for (let node of list) {
            if (node.id === target) return res = path
            node.children && dfs(node.children, [...path, node.id], target)
        }
    }
    dfs(list, [], target)
    return res
}

console.log(findParentIds(cityData, '1121'));
