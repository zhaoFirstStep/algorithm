//webpack打包开发环境
'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../config')
const baseWebpackConfig = require('./webpack.base.conf')
const portfinder = require('portfinder')//用于打开客户端端口
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')//webpack友好错误提示
const HtmlWebpackPlugin = require('html-webpack-plugin')//html打包插件

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

const devWebpackConfig = merge(baseWebpackConfig,{
	  devtool: config.dev.devtool,
	  // stats:'',//如果你不希望使用 quiet 或 noInfo 这样的不显示信息，而是又不想得到全部的信息，
	  //只是想要获取某部分 bundle 的信息，使用 stats 选项是比较好的折衷方式。获取构建信息
	  devServer: {
		clientLogLevel: 'warning',
		historyApiFallback: true,
		hot: true,
		compress: true,
		publicPath: config.dev.assetsPublicPath,
        proxy: config.dev.proxyTable,
		open: config.dev.autoOpenBrowser,
        overlay: config.dev.errorOverlay
		  ? { warnings: false, errors: true }
		  : false,
		quiet: true, // necessary for FriendlyErrorsPlugin
		watchOptions: {
		  poll: config.dev.poll,
		}
	  },
	  plugins:[
		  /**
		   * 允许你创建可在编译时配置的全局常量。
		   * 这对需要再开发环境构建和生产环境构建之间产生不同行为来说非常有用。
		   */
		  new webpack.DefinePlugin({
			  'process.env': require('../config/dev.env')
		  }),
		    new webpack.HotModuleReplacementPlugin(),
			new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
			new webpack.NoEmitOnErrorsPlugin(),
			new HtmlWebpackPlugin({
			  filename: 'index.html',
			  template: 'index.html',
			  inject: true,
			  favicon: resolve('favicon.ico'),
			  title: 'algorithm',
			  path: config.dev.assetsPublicPath + config.dev.assetsSubDirectory
			}),
	  ]
})
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
