 //搜索框聚焦
 $(".searchInput").focus(function () {
    $(this).css("border-color", "#FF1268");
})
$(".searchInput").blur(function () {
    $(this).css("border-color", "");
})
//子菜单部分
$(".allCity").hover(function () {
    $(".cityMenu").css("display", "block");
}, function () {
    $(".cityMenu").css("display", "none");
})

$(".cityMenu").hover(function () {
    $(".cityMenu").css("display", "block");
}, function () {
    $(".cityMenu").css("display", "none");
})

//登录子菜单部分
$(".loginHover").hover(function () {
    $(".loginMenu").css("display", "block");
}, function () {
    $(".loginMenu").css("display", "none");
})
$(".loginMenu").hover(function () {
    $(".loginMenu").css("display", "block");
}, function () {
    $(".loginMenu").css("display", "none");
})
//二维码部分
$(".downHover").hover(function () {
    $(".downCode").css("display", "block");
}, function () {
    $(".downCode").css("display", "none");
})
$(".downCode").hover(function () {
    $(".downCode").css("display", "block");
}, function () {
    $(".downCode").css("display", "none");
})
//视图按钮
$(".sort_column_right_middle").click(function () {
    $(".sort_main").css("height","776px")
    $(".sort_list").css("display", "none")
    $(".class_sort").css("display", "block")
    $(".class_sort").css("height", "733px")
    $(".sort_column_right_middle").css("background", "#ed0a75")
    $(".sort_column_right_middle").css("color", "#fff")
    $(".sort_column_right_top").css("background", "#f5f5f5")
    $(".sort_column_right_top").css("color", "black")
})
$(".sort_column_right_top").click(function () {
    $(".sort_main").css("height","2200")
    $(".class_sort").css("height", "2200px")
    $(".sort_list").css("display", "block")
    $(".class_sort").css("display", "none")
    $(".sort_column_right_middle").css("background", "#f5f5f5")
    $(".sort_column_right_middle").css("color", "black")
    $(".sort_column_right_top").css("background", "#ed0a75")
    $(".sort_column_right_top").css("color", "#fff")
})
//定义ajax---》通用版
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
  //搜索跳转至大麦网
  $(".searchButton").click(function(){
    var keyWord=$(".searchInput").val();
    console.log(keyWord);
    location.href="https://search.damai.cn/search.html?keyword="+keyWord;
 })
  function getUrlParam(name) {   //定义获取分类cid值得函数
         var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象  
         var r = window.location.search.substr(1).match(reg);  //匹配目标参数   
         if (r != null) return unescape(r[2]); return null; //返回参数值  
    } 
    var cid=getUrlParam("cid");//获取当前url的cid
    var shuju = getdata("http://47.99.153.121:8021/index.php/index/details/typeId/"+cid,count=8,start=0);//获取当前cid分类的数据
    auto();
    function auto(){
        for(var i in shuju){
        //拼接字符串！
        var zifuchuan = `<li class="deldel">
            <div class="sort_list_img" >
                <img src="${shuju[i].poster}" alt="" width="153px" height="206px">
            </div>
            <div class="sort_list_font">
                <p class="sort_list_font_title">${shuju[i].city}<a href="javascript:void(0);" onclick="svip(${shuju[i].did})">${shuju[i].title}</a></p>
                <p><span class="iconfont icon-rili1"></span><span class="sort_list_font_time">${shuju[i].releasetime}</span></p>
                <p><span class="iconfont icon-dibiao"></span><span class="sort_list_font_address">${shuju[i].address}</span></p>
                <p><span class="sort_list_font_price">${shuju[i].price}</span><span class="sort_list_font_ticket">&nbsp;&nbsp;售票中</span></p>
            </div>
            <div class="clear"></div>
            <div class="line"></div>
        </li>` ;

            $(".sort_list").append(zifuchuan);//添加
                //拼接字符串！
            var shuju2 =`<div class="class_note_one_box">
                <div class="box_img">
                    <img src="${shuju[i].poster}" alt="">
                </div>
                <div class="box_word">
                    <h3><a href="javascript:void(0);"  target="_blank" onclick="svip(${shuju[i].did})">${shuju[i].title}</a></h3>
                    <p class="box_word_c">${shuju[i].releasetime}</p>
                    <p> <span class="box_word_r">${shuju[i].price}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="box_word_c">售票中</span></p>
                </div>
            </div>`
            $(".class_note_one").append(shuju2);//添加
                
    }
    }
    
    
    
function svip(did){//定义到详情页的带参数的函数！
location.href="xiangqing.html?did="+did;
}
//定义删除函数！
function del(){
$(".deldel").remove();
$('.class_note_one_box').remove();
}
//定义下一页按钮
var start=0;
$(".sort_column_right_bottom2").click(function(){


start=start+8;

if(start>8){
    start=8;
    
}else{
    del();
    var shuju = getdata("http://47.99.153.121:8021/index.php/index/details/typeId/"+cid,start,count=8);//获取当前cid分类的数据
}

for(var i in shuju){
        //拼接字符串！
        var zifuchuan = `<li class="deldel">
            <div class="sort_list_img" >
                <img src="${shuju[i].poster}" alt="" width="153px" height="206px">
            </div>
            <div class="sort_list_font">
                <p class="sort_list_font_title">${shuju[i].city}<a href="javascript:void(0);" onclick="svip(${shuju[i].did})">${shuju[i].title}</a></p>
                <p><span class="iconfont icon-rili1"></span><span class="sort_list_font_time">${shuju[i].releasetime}</span></p>
                <p><span class="iconfont icon-dibiao"></span><span class="sort_list_font_address">${shuju[i].address}</span></p>
                <p><span class="sort_list_font_price">${shuju[i].price}</span><span class="sort_list_font_ticket">&nbsp;&nbsp;售票中</span></p>
            </div>
            <div class="clear"></div>
            <div class="line"></div>
        </li>` ;

            $(".sort_list").append(zifuchuan);//添加
                //拼接字符串！
            var shuju2 =`<div class="class_note_one_box">
                <div class="box_img">
                    <img src="${shuju[i].poster}" alt="">
                </div>
                <div class="box_word">
                    <h3><a href="javascript:void(0);"  target="_blank" onclick="svip(${shuju[i].did})">${shuju[i].title}</a></h3>
                    <p class="box_word_c">${shuju[i].releasetime}</p>
                    <p> <span class="box_word_r">${shuju[i].price}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="box_word_c">售票中</span></p>
                </div>
            </div>`
            $(".class_note_one").append(shuju2);//添加
                
    }



})
$(".sort_column_right_bottom1").click(function(){


start=start-8;

var shuju = getdata("http://47.99.153.121:8021/index.php/index/details/typeId/"+cid,start,count=8);//获取当前cid分类的数据
if(start<0){
    start=0;
}else{
    del();
}

for(var i in shuju){
        //拼接字符串！
        var zifuchuan = `<li class="deldel">
            <div class="sort_list_img" >
                <img src="${shuju[i].poster}" alt="" width="153px" height="206px">
            </div>
            <div class="sort_list_font">
                <p class="sort_list_font_title">${shuju[i].city}<a href="javascript:void(0);" onclick="svip(${shuju[i].did})">${shuju[i].title}</a></p>
                <p><span class="iconfont icon-rili1"></span><span class="sort_list_font_time">${shuju[i].releasetime}</span></p>
                <p><span class="iconfont icon-dibiao"></span><span class="sort_list_font_address">${shuju[i].address}</span></p>
                <p><span class="sort_list_font_price">${shuju[i].price}</span><span class="sort_list_font_ticket">&nbsp;&nbsp;售票中</span></p>
            </div>
            <div class="clear"></div>
            <div class="line"></div>
        </li>` ;

            $(".sort_list").append(zifuchuan);//添加
                //拼接字符串！
            var shuju2 =`<div class="class_note_one_box">
                <div class="box_img">
                    <img src="${shuju[i].poster}" alt="">
                </div>
                <div class="box_word">
                    <h3><a href="javascript:void(0);"  target="_blank" onclick="svip(${shuju[i].did})">${shuju[i].title}</a></h3>
                    <p class="box_word_c">${shuju[i].releasetime}</p>
                    <p> <span class="box_word_r">${shuju[i].price}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="box_word_c">售票中</span></p>
                </div>
            </div>`
            $(".class_note_one").append(shuju2);//添加
                
    }



})