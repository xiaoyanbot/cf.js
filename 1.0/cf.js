// cf.js v1.0

// 公共方法JS 

var cf = function(){};

/*

 * 获取参数的公共方法
 * 同时获取参数?和#号

*/

cf.getParam = function (variable)
{
       var querySearch = window.location.search.substring(1);
	   var queryHash   = window.location.hash.substring(1);
	   
	   var query = "";
	   
	   if(  querySearch != "" && queryHash != ""  ){
		   query = querySearch + "&" + queryHash;
	   }else if (querySearch == "" && queryHash != "" ){
		   query = queryHash;
	   }else if(querySearch != "" && queryHash == ""){
		   query = querySearch;
	   }
	   
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
	   
       return(false);
}