/*
n = 360时候
    0-99
    100 - 199
    200 - 299
    300 - 360

    f(360) = f()
 */

function countones(n) {
    if (n < 1) return 0
    if (n < 10) return 1
    let str = String(n)
    let head = str.slice(0, 1)
    let pow = 10 ** (str.length - 1)
    let rest = str.slice(1) - '0'

    if (head == 1) {
        return countones(pow - 1) + countones(rest) + rest + 1
    } else {
        return countones(pow - 1) * head + countones(rest) + pow
    }
}
console.log(countones(14))
