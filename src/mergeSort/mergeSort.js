import { _extend } from '../utils/util'
/**
 * 归并算法 
 */
const __DEFT__ ={
	comparison:function(a,b){//比较方法
			return a>b
	}
}
const mergeSort = function(arr,options){
		options = options||{};
		if(!(arr instanceof Array)){
			return new Error('排序传入数据必须为数组格式');
		}
        if(typeof arr[0] != 'number'&&!options.comparison){
			return new Error('排序内容不是数字类型,请添加排序比较方法')
		}
		var __options__ = _extend({},__DEFT__,options);
		 //合并
		var merge = function(leftarr,rightarr){
			let newArrayList = [];
			while(leftarr.length>0&&rightarr.length>0){
				if(__options__.comparison(leftarr[0],rightarr[0])){
		           newArrayList.push(rightarr.shift());
				}else{
				   newArrayList.push(leftarr.shift());
				}
			}
			return newArrayList.concat(leftarr).concat(rightarr)
		};
		
		//拆分
		var mergeSplit = function(arr){
			if(arr.length === 1){
				return arr
			}
			// console.log(this);
			var arrMiddle = Math.floor(arr.length/2);
			var leftarr = arr.slice(0,arrMiddle);
			var rightarr = arr.slice(arrMiddle);
			// debugger
			return merge(mergeSplit(leftarr),mergeSplit(rightarr));
		}
		
		return mergeSplit(arr)
};
 
export default mergeSort