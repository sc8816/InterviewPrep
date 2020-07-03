function fb(n) {
    if(n==0) return 1
    if(n==1) return 1
    return fb(n-1)+fb(n-2)
}
