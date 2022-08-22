// 1. 引入 js 文件
import './marquee.js'
import './box.js'
// 1.2 引入自定义函数
import { getSum, process } from './demo'
console.log(getSum(1, 100))
const url = 'http://www.baidu.com/?name=zhangsan&age=18&sex=nan'
console.log(process(url))

// 2. 引入 .css 文件
import './styles/index.css'
// 3. 引入 .less 文件
import './styles/index.less'
// 4. 引入 .vue 文件
import App from './app.vue'

// 5. 引入图片
import pngSrc from './assets/logo_small.png'
const img = document.createElement('img')
img.src = pngSrc
document.body.appendChild(img)

import gifSrc from './assets/1.gif'
const gif = document.createElement('img')
gif.src = gifSrc
document.body.appendChild(gif)
// 6. 引入字体图标
import './assets/fonts/iconfont.css'
