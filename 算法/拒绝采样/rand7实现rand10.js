/**
 * 已知存在rand7生成1-7随机数，通过rand7实现rand10，生成1-10随机数
 */

function rand10() {
  let tmp = (rand7() - 1) * 7 + rand7(); //生成1-49随机数
  while (tmp > 40) {
    tmp = (rand7() - 1) * 7 + rand7();
  }

  return (tmp % 10) + 1;
}

function rand10() {
  while (true) {
    let tmp = (rand7() - 1) * 7 + rand7(); //生成1-49随机数
    if (tmp <= 40) return (tmp % 10) + 1;
    tmp = (tmp - 40 - 1) * 7 + rand7();
    if (tmp <= 60) return (tmp % 10) + 1;
    tmp = (tmp - 60 - 1) * 7 + rand7();
    if (tmp <= 20) return (tmp % 10) + 1;
  }
}
