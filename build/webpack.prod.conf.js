//webpack打包生产环境
'use strict'
const path = require('path');
const utils = require('./utils')
const config = require('../config')
const merge = require('webpack-merge');//webpack参数合并插件
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.conf');
const CopyWebpackPlugin = require('copy-webpack-plugin');//webpack复制文件插件
// const HtmlWebpackPlugin = require('html-webpack-plugin')打包html插件
// const ExtractTextPlugin = require('extract-text-webpack-plugin')打包css插件
// const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')压缩css插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')//丑化js


function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

// const env = require('../config/'+process.env.env_config+'.env')//获取打包环境变量

const webpackConfig = merge(baseWebpackConfig,{
    output:{
		// webpack 如何输出结果的相关选项
		path: config.build.assetsRoot, // 输出目录
		// 「入口分块(entry chunk)」的文件输出模块
		filename:utils.assetsPath('[name].js'),//string类型指定为输出文件名称为入口名称文件
		library:config.build.library,//导出库的名称
		libraryTarget:config.build.libraryTarget,// 通用模块定义
		sourceMapFilename: "[file].map", // string
		// filename: utils.assetsPath('js/[name].[chunkhash].js'),////string类型指定为输出文件名称为入口名称文件
		chunkFilename: utils.assetsPath('[id].[chunkhash].js')
	},
	//防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖
	// externals:'',字符串、数组、或者对象、函数
	// stats:'',//如果你不希望使用 quiet 或 noInfo 这样的不显示信息，而是又不想得到全部的信息，
	//只是想要获取某部分 bundle 的信息，使用 stats 选项是比较好的折衷方式。获取构建信息
	
})
module.exports = webpackConfig