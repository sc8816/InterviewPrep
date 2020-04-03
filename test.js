function getSix() {
    let sum = 0
    for(let i=0;i<1000;i++) {
        let j = i
        while (j>0){
            if(j%10 === 6) {
                sum++
            }
            j =Math.floor(j/10)
        }
    }
    return sum
}
console.log(getSix())