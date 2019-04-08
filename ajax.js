
//读取函数
function getdata(url,start,count){  
 	     
    var  data ="";//定义一个空值接受res
  $.ajax({
           url:url,
           type:"get",
           dataType:"json",
           async:false,//同步
            data:{start,count},
           success:function(res){
               data =res;//让res的值赋给date
           }
           })
     return data;//把date弹出去！
}
    


