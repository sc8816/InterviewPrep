//策略模式：：一个问题可能用到多种解决方案，不一定用到哪一个
// 而且有可能随时增加多个方案
/*
eg：购物车计算
    => 多种折扣计算方式
    => 满100减20
    => 满200减25
    => 8折
    => 添加一个七折(折扣日)
 */

//接收价格和折扣种类

function calcPrice(price, type) {
    if (type === '100_10') {
        price -= 30
    } else if (type === '200_25') {
        price -= 25
    } else if (type === '80%') {
        price *= 0.8
    }
    return price
}

const res = calcPrice(300, '80%')
console.log(res)

/*
*1.把多种方案以闭包的形式把折扣方案保存下来
* 对外保留一个接口
* 可以添加和减少
*
 */

const calcPrices = (function () {
    const sales = {
        '100_10': function (price) {
            return price -= 10
        },
        '200_25': function (price) {
            return price -= 25
        },
        '80%': function (price) {
            return price *= 0.8
        }
    }

    function calcP (price, type) {
        //判断折扣类型
        //如果有调用
        //没有告诉他没有这个折扣

        if(!sales[type]) return '没有这个折扣'
        return sales[type](price)
    }
    calcP.add = function (type, fn) {
        //用来添加折扣
        if(sales[type]) return '折扣存在'
        sales[type] = fn
    }

    calcP.delete = function (type) {
        delete sales[type]
    }
    return calcP
}())

calcPrice.add()
