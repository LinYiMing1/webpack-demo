// 1. 利用 reduce 方法，封装从 a-b 的和
export const getSum = function (a, b) {
  if (b - a > 0) {
    let arr = []
    for (let i = a; i < b + 1; i++) {
      arr.push(i)
    }
    return arr.reduce((total, item) => total + item)
  }
}
// console.log(getSum(1, 100))

// 2. 利用 reduce 方法，封装自定义 url 函数
export const process = function (url) {
  // 2.1 获取 url 中 ? 的位置
  const index = url.indexOf('?')
  if (index != -1) {
    // 2.2 利用 substring 方法截取字符串
    const urls = url.substring(index + 1)
    // 2.3 将截取出的字符串转化为数组
    const arr = urls.split('&')
    // 2.4 利用 reduce 方法将数组中的元素转化为对象【初始值为一个空对象，不断累加】
    return arr.reduce((obj, item) => {
      // 利用 split 方法将 arr 数组的每个 item 分割成长度为 2 的数组，分别将该数组的第 0 项和第 1 项作为 obj 的属性名和属性值
      obj[item.split('=')[0]] = item.split('=')[1]
      return obj
    }, {})
  }
}
// const url = 'http://www.baidu.com/?name=zhangsan&age=18&sex=nan'
// console.log(process(url))
