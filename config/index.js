'use strict'
//配置一些可配置参数
//分为开发环境与生产环境配置
const path = require('path');

module.exports = {
	dev:{
		/**
		 * eval此选项会非常快地构建。主要缺点是，由于会映射到转换后的代码，而不是映射到原始代码
		 * eval-source-map初始化 source map 时比较慢，
		 * 但是会在重新构建时提供比较快的速度，并且生成实际的文件。
		 * 行数能够正确映射，因为会映射到原始代码中。
		 * cheap-eval-source-map类似 eval-source-map，仅显示转译后的代码。
		 * cheap-module-eval-source-map 类似 cheap-eval-source-map
		 * loader source map 会被简化为每行一个映射
		 * 
		 */
	   proxyTable:{//代理
		   
	   },
	   assetsPublicPath: '/',
	   devtool: '#cheap-source-map',//
	   assetsSubDirectory:'static',//
	   /**
		* 本地开发启动项配置
		*/
		host: 'localhost', // can be overwritten by process.env.HOST
		port: 9100, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
		autoOpenBrowser: true,
		errorOverlay: true,
		notifyOnErrors: false,
		poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

		// Use Eslint Loader?
		// If true, your code will be linted during bundling and
		// linting errors and warnings will be shown in the console.
		useEslint: false,
		// If true, eslint errors and warnings will also be shown in the error overlay
		// in the browser.
		showEslintErrorsInOverlay: false,
	},
	build:{
		// 		libraryTarget: "commonjs2", // exported with module.exports
		// 	    libraryTarget: "commonjs-module", // 使用 module.exports 导出
		// 	    libraryTarget: "commonjs", // 作为 exports 的属性导出
		// 	    libraryTarget: "amd", // 使用 AMD 定义方法来定义
	   library:'algorithm',//导出库的名称
	   libraryTarget:'umd',//导出库模式
	   assetsSubDirectory:'static',//导出文件存放地址
	   assetsPublicPath:'/',
	   assetsRoot: path.resolve(__dirname, '../dist'),//打包后输出目录
	   /**
		* (none)（省略 devtool 选项） - 不生成 source map。
		* source-map - 整个 source map 作为一个单独的文件生成。
		* 它为 bundle 添加了一个引用注释，以便开发工具知道在哪里可以找到它。
		* hidden-source-map - 与 source-map 相同，但不会为 bundle 添加引用注释。
		* nosources-source-map - 创建的 source map 不包含 sourcesContent(源代码内容)。
		* 它可以用来映射客户端上的堆栈跟踪，而无须暴露所有的源代码。
		* 在使用 uglifyjs-webpack-plugin 时，你必须提供 sourceMap：true 选项来启用 source map 支持。
		*/
	   devtool: '#source-map',//
	}
}