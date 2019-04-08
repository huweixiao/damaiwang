
var xq_spxq =document.getElementsByClassName("xq_spxq");

var xq_gpxz =document.getElementsByClassName("xq_gpxz");
xq_spxq.onclick=function(){
	xq_gpxz.css.display="none";
}
//搜索跳转至大麦网
$(".searchButton").click(function(){
    var keyWord=$(".searchInput").val();
    console.log(keyWord);
    location.href="https://search.damai.cn/search.html?keyword="+keyWord;
 })

function getdata(url){  
 	     
    var  data ="";//定义一个空值接受res
 $.ajax({
           url:url,
           type:"get",
           dataType:"json",
           async:false,//同步
        //    data:{start,count},
           success:function(res){
               data =res;//让res的值赋给date
           }
           })
     return data;//把date弹出去！
}

//获取到传过来的did
var getUrl=window.location.search;
var didNum =getUrl.substr(1);
console.log(didNum);
var did=didNum.split("=")[1];
console.log(did);


var datas =getdata("http://47.99.153.121:8021/index.php/index/detailsContent/did/"+did);
 console.log(datas);
 $(".xq_main_left img").attr("src",datas[0].poster);
 $(".xq_main_right p").html(datas[0].title);
 $(".showTime").html("时间："+datas[0].releasetime);
 $(".showAddress").html("场馆："+datas[0].city+"&nbsp;|&nbsp;"+datas[0].address);
 $(".ccb1").html(datas[0].starttime);
 $(".ccb2").html(datas[0].price);
 $(".starName").html(datas[0].profermer);
 $(".aboutShow").html(datas[0].content);
 console.log(datas[0].content);