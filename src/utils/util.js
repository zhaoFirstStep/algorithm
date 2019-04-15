//拷贝
export function _extend(){
	   var _le = arguments.length;
	   var 	_target = arguments[0]||{};
	   if(typeof _target != 'object' && typeof _target != 'function'){
		   _target = {};
	   }
	   if(_le === 1){
		   _target = this;
	   }
	   
	   for(var i=1;i<_le;i++){
		   var source = arguments[i];
		   for(var key in source){
			   if(Object.prototype.hasOwnProperty.call(source,key)){
				   _target[key] = source[key];
			   }
		   }
	   }
	   return _target
}