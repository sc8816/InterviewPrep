/*
var entry = {
    a: {
        b: {
            c: {
                dd: 'abcdd'
            }
        },
        d: {
            xx: 'adxx'
        },
        e: 'ae'
    }
}

// 要求转换成如下对象
var output = {
    'a.b.c.dd': 'abcdd',
    'a.d.xx': 'adxx',
    'a.e': 'ae'
}

 */
var entry = {
    a: {
        b: {
            c: {
                dd: 'abcdd'
            }
        },
        d: {
            xx: 'adxx'
        },
        e: 'ae'
    }
}

function objFlat(obj) {
    let result = {}

    function helper(obj, path) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                let keyName = `${path}${key}`
                if (typeof obj[key] === 'object') {
                    helper(obj[key], keyName + '.')
                } else {
                    result[keyName] = obj[key]
                }
            }
        }
    }

    helper(obj, '')
    return result
}

function map(entry) {
    const obj = Object.create(null);
    for (const key in entry) {
        const keymap = key.split('.');
        set(obj, keymap, entry[key])
    }
    return obj;
}

function set(obj, map, val) {
    let tmp;
    if (!obj[map[0]]) obj[map[0]] = Object.create(null);
    tmp = obj[map[0]];
    for (let i = 1; i < map.length; i++) {
        if (!tmp[map[i]]) tmp[map[i]] = map.length - 1 === i ? val : Object.create(null);
        tmp = tmp[map[i]];
    }
}
console.log(map({'a.b.c.dd': 'abcdd', 'a.d.xx': 'adxx', 'a.e': 'ae'}));

console.log(objFlat(entry));
