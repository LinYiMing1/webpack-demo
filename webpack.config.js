// webpack 自定义配置

// 1. 引入相应配置文件
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 2. 暴露设置
module.exports = {
  // 2.3 mode 模式
  mode: 'development',

  // 2.1 更改默认出入口配置
  // 2.1.1 更改默认入口路径
  entry: './src/main.js',
  //  2..1.2 更改默认出口路径
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    clean: true,
  },

  // 2.2 自动生成 html 文件
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin()
  ],

  // 2.4 webpack-dev-server配置
  devServer: {
    open: true,
    port: 30000,
  },

  // 2.5 配置模块解析规则(loader)
  module: {
    rules: [
      // 2.5.1 css-loader
      {
        test: /.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
        ],
      },
      // 2.5.2 less-loader
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      // 2.5.3 vue-loader
      {
        test: /\.vue$/i,
        use: ['vue-loader'],
      },

      // 2.5.4 处理图片
      {
        test: /\.(gif|png|jpg|svg|ico)$/,
        type: 'asset',
        generator: {
          filename: 'images/[name]-[hash:6][ext]',
        },
        parser: {
          // base64 打包的时候的选项调教
          dataUrlCondition: {
            // maxSize 单位是字节  1kb=1024字节
            maxSize: 25 * 1024, //25kb
          },
        },
      },
      // 2.5.5 处理字体图标
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        // assetModule:asset/ asset/inline  asset/resource
        type: 'asset/resource',
        // 将文件打包到指定目录
        generator: {
          filename: 'fonts/[name]-[hash:10][ext]',
        },
      },
    ],
  },
}
