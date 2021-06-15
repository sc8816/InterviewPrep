// 输入："abbbaca"
// 输出："ca"
// 解释："abbbaca" => "aaca"=>"ca"

function removeDuplicate(str) {
    let stack = []
    let tem, next
    let i = 0
    while (i < str.length) {
        tem = stack[stack.length - 1]
        next = str[i]
        if (next === tem) {
            stack.pop()
            while (str[i] === tem) i++
        } else {
            stack.push(next)
            i++
        }
    }
    return stack.join('')
}

console.log(removeDuplicate("abbbaca"));
