function instanceOf(L, R) {
    let pro = R.prototype
    L = L.__proto__
    while (true) {
        if (L === null) return false
        if (pro === L) return true
        L = L.__proto__
    }
}
