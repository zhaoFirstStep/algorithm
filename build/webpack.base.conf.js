//webpack打包基础方法
'use strict'
const path = require('path');
const config = require('../config');
var webpack = require("webpack");

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const  baseConfig = {
	context: path.resolve(__dirname, "../"),// 这里应用程序开始执行
	entry:{//入口文件
		algorithm:'./src/index.js'
	},
	output:{
		// webpack 如何输出结果的相关选项
		path:config.build.assetsRoot, // 输出目录
		// 「入口分块(entry chunk)」的文件输出模块
		filename:'[name].js',//string类型指定为输出文件名称为入口名称文件
		publicPath: process.env.NODE_ENV === 'production' ?
      config.build.assetsPublicPath :
      config.dev.assetsPublicPath,//输出
// 		library:'algorithm',//导出库的名称
// 		libraryTarget:'umd',// 通用模块定义
// 		libraryTarget: "commonjs2", // exported with module.exports
//         libraryTarget: "commonjs-module", // 使用 module.exports 导出
//         libraryTarget: "commonjs", // 作为 exports 的属性导出
//         libraryTarget: "amd", // 使用 AMD 定义方法来定义
	},
	module:{
		//关于模块配置
		// 这里是匹配条件，每个选项都接收一个正则表达式或字符串
        // test 和 include 具有相同的作用，都是必须匹配选项
        // exclude 是必不匹配选项（优先于 test 和 include）
        // 最佳实践：
        // - 只在 test 和 文件名匹配 中使用正则表达式
        // - 在 include 和 exclude 中使用绝对路径数组
        // - 尽量避免 exclude，更倾向于使用 include
		rules:[
			//模块规则配置loader、解析器等选项
			{
				// 通过babel-plugin-transform-runtime插件可以禁用babel向每个文件注入helper
				test:'/\.js$/',//匹配文件规则规则
				loader:'babel-loader?cacheDirectory',//解析文件的解析模块名称
				include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')],
				// include:[],//绝对路径数组，表示解析包含的文件
				// exclude:['/(node_modules|bower_components)/'],//是必不匹配选项（优先于 test 和 include）
				// issuer:{test,include,exclude},匹配条件相当于将三者整合
// 				options:{ // loader 的可选项
// 					
// 				},
                // use:[],应用多个loader和选项
			}
		],
		noParse: [/special-library\.js$/],//不解析的模块
	},
	resolve: {
		// 解析模块请求的选项
        // （不适用于对 loader 解析）
		// modules:[],//告诉 webpack 解析模块时应该搜索的目录。默认为node_modules
		extensions:['.js','.json'],//使用扩展名
		alias:{//创建 import 或 require 的别名，来确保模块引入变得更简单
			'@': resolve('src'),
		}
// 		symlinks: true,
// 		// 遵循符号链接(symlinks)到新位置
// 
// 		descriptionFiles: ["package.json"],
// 		// 从 package 描述中读取的文件
// 
// 		mainFields: ["main"],
// 		// 从描述文件中读取的属性
// 		// 当请求文件夹时
// 
// 		aliasFields: ["browser"],
// 		// 从描述文件中读取的属性
// 		// 以对此 package 的请求起别名
// 
// 		enforceExtension: false,
// 		// 如果为 true，请求必不包括扩展名
// 		// 如果为 false，请求可以包括扩展名
	},
	//配置如何展示性能提示。例如，如果一个资源超过 250kb，webpack 会对此输出一个警告来通知你。
	performance:{
		
	},
	// devtool:''//此选项控制是否生成，以及如何生成 source map。
	/**
	 *  async-node
	 * 编译为类 Node.js 环境可用（使用 fs 和 vm 异步加载分块）
	 * electron-main
	 * 编译为 Electron 主进程。
	 * electron-renderer
	 * 编译为 Electron 渲染进程，使用 JsonpTemplatePlugin,
	 * FunctionModulePlugin 来为浏览器环境提供目标，
	 * 使用 NodeTargetPlugin 和 ExternalsPlugin 为 CommonJS 和 Electron 内置模块提供目标。
	 * node编译为类 Node.js 环境可用（使用 Node.js require 加载 chunk）
	 * node-webkit
	 * 编译为 Webkit 可用，并且使用 jsonp 去加载分块。支持 Node.js 内置模块和 nw.gui 导入（实验性质）
	 * web编译为类浏览器环境里可用（默认）
	 * webworker编译成一个 WebWorker
	 * 
	 * 如果传入一个函数，此函数调用时会传入一个 compiler 作为参数。
	 * 如果以上列表中没有一个预定义的目标(target)符合你的要求，
	 * 请将其设置为一个函数。
	 */
	// target:'',//告知 webpack 为目标(target)指定一个环境。
	/**
	 * 这些选项可以配置是否 polyfill 或 mock 某些 Node.js 全局变量和模块。
	 * 这可以使最初为 Node.js 环境编写的代码，在其他环境（如浏览器）中运行。
	 */
	node: {
		// Polyfills and mocks to run Node.js-
		// environment code in non-Node environments.

// 		console: false, // boolean | "mock"
// 		global: true, // boolean | "mock"
// 		process: true, // boolean
// 		__filename: "mock", // boolean | "mock"
// 		__dirname: "mock", // boolean | "mock"
// 		Buffer: true, // boolean | "mock"
		setImmediate: false ,// boolean | "mock" | "empty"
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	},
    plugins: [//插件数组
		new webpack.optimize.CommonsChunkPlugin('common')
	]
	
}

module.exports = baseConfig