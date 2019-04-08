//首页分类读取目录部分
var dates = getdata("http://47.99.153.121:8021/index.php/index/types");//加载栏目资源！
for(var i in dates){
    var span=`<span onclick="svip(${dates[i].cid})">${dates[i].cname}</span>`;
    $('.text').append(span);
    }
//首页分类读取目录部分结束！


//定义分类目录重定向函数(给分类页面传达唯一标识的参数-cid)
function svip(cid){
    location.href="fenlei.html?cid="+cid;
}
//分类目录重定向函数结束
      //搜索跳转至大麦网
      $(".searchButton").click(function(){
         var keyWord=$(".searchInput").val();
         console.log(keyWord);
         location.href="https://search.damai.cn/search.html?keyword="+keyWord;
      })
      
      

    //搜索框聚焦
    $(".searchInput").focus(function(){
       $(this).css("border-color","#FF1268");
    })
    $(".searchInput").blur(function(){
       $(this).css("border-color","");
    })
 
 
    //轮播
    var i=0;
    var t =null;
    var dots = $(".banner ul li");
   function move(){//设置移动函数
   $(".banner img").css("opacity",0);
   $(".banner img").eq(i).css("opacity",1);
   dots.css("background","rgba(255,255,255,.8)");
   dots.eq(i).css("background","rgb(255,255,255)");
   }
 move();
   function  autoMove(){//设置自增函数 循环遍历
     if(i>=$(".banner img").length-1){
        i=0;
     }else{
        i++;
     }
      move();
   }
 $(".next").on("click",function(){
    autoMove();
 })
 $(".prev").on("click",function(){
    if(i<=0){
       i=$(".banner img").length-1;
    }
    else{
       i--;
    }
   move();
 })//两个按钮
 
 
 $(".banner").hover(function(){
    clearInterval(t);
 }
 ,function(){
    t=setInterval(autoMove,2000);
 })
 t=setInterval(autoMove,2000);
 //设置计时器  移入移出执行方法  以及 没有动作时自动播放
 
 dots.hover(function(){
    dots.css("background","rgba(255,255,255,.8)");
    for(i=0;i<=dots.length;i++){
       $(this).eq(i).css("background","rgb(255,255,255)");
       $(".banner img").css("opacity",0);
       $(".banner img").eq($(this).index()).css("opacity",1);
    }
 //设置圆点的覆盖
 },function(){
    i=$(this).index();
 })
 //使鼠标离开圆点 并从当前下标开始继续轮播
 
 //以上为轮播效果
 
 //子菜单部分
    $(".allCity").hover(function(){
       $(".cityMenu").css("display","block");
    },function(){
       $(".cityMenu").css("display","none");
    })
 
    $(".cityMenu").hover(function(){
       $(".cityMenu").css("display","block");
    },function(){
       $(".cityMenu").css("display","none");
    })
 
 //登录子菜单部分
    $(".loginHover").hover(function(){
       $(".loginMenu").css("display","block");
    },function(){
       $(".loginMenu").css("display","none");
    })   
    $(".loginMenu").hover(function(){
       $(".loginMenu").css("display","block");
    },function(){
       $(".loginMenu").css("display","none");
    })
 //二维码部分
    $(".downHover").hover(function(){
       $(".downCode").css("display","block");
    },function(){
       $(".downCode").css("display","none");
    })   
    $(".downCode").hover(function(){
       $(".downCode").css("display","block");
    },function(){
       $(".downCode").css("display","none");
    })



 //分类内容

 //定义分类目录重定向函数(给分类页面传达唯一标识的参数-cid)
function change(did){
   location.href="xiangqing.html?did="+did;
}
//分类目录重定向函数结束

//演唱会
 var details = getdata("http://47.99.153.121:8021/index.php/index/details/typeId/1")
 console.log(details)
//  for(var i in details){
//    var div=`<span onclick="change(${dates[i].cid})">${dates[i].cname}</span>`;
//    $('.text').append(span);
//    }
   
      // var img=`<img class="percher" src="${details[i].poster}"`;
      
         //首位图
         var div=`<div class="tex" onclick="change(${details[0].did})">${details[0].title}</div><div class="textx" onclick="change(${details[0].did})">${details[0].price}</div>`;
         $(".luo").append(div)

         var img=`<img class="percher" onclick="change(${details[0].did})" src="${details[0].poster}">`;
         $(".peop").append(img);
      
         //第一章图片
         var div = `<div class="tit" onclick="change(${details[1].did})" title="${details[1].title}">${details[1].title}</div><div class="tit-bom" onclick="change(${details[1].did})">${details[1].address}</div><div class="tit-bom-bom" onclick="change(${details[1].did})">${details[1].releasetime}</div><div class="tit-bom-boms" onclick="change(${details[1].did})">${details[1].price}</div>`;
         $(".title-zxc").append(div)
        
         var img = `<img class="imgs" onclick="change(${details[1].did})" src="${details[1].poster}"/>`;
         $(".zxc").append(img)
      
         //第二章图片

         var div = `<div class="tit" onclick="change(${details[2].did})" title="${details[2].title}">${details[2].title}</div><div class="tit-bom" onclick="change(${details[2].did})">${details[2].address}</div><div class="tit-bom-bom" onclick="change(${details[2].did})">${details[2].releasetime}</div><div class="tit-bom-boms" onclick="change(${details[2].did})">${details[2].price}</div>`;
         $(".title-qwe").append(div)

         var img = `<img class="imgs" onclick="change(${details[2].did})" src="${details[2].poster}"/>`;
         $(".qwe").append(img)

         // var div = `<div class="tit" title="${details[2].title}>${details[2].title}</div><div class="tit-bom">${details[2].address}</div><div class="tit-bom-bom">${details[2].releasetime}</div><div class="tit-bom-boms">${details[2].price}</div>`;
         // $(".title-qwe").append(div)

         //第三张图片
         var img = `<img class="imgs" onclick="change(${details[3].did})" src="${details[3].poster}"/>`;
         $(".asd").append(img)

         var div = `<div class="tit" onclick="change(${details[3].did})" title="${details[3].title}">${details[3].title}</div><div class="tit-bom" onclick="change(${details[3].did})">${details[3].address}</div><div class="tit-bom-bom" onclick="change(${details[3].did})">${details[3].releasetime}</div><div class="tit-bom-boms" onclick="change(${details[3].did})">${details[3].price}</div>`;
         $(".title-asd").append(div)

         //第四张图片
         var img = `<img class="imgs" onclick="change(${details[4].did})" src="${details[4].poster}"/>`;
         $(".qaz").append(img)

         var div = `<div class="tit" onclick="change(${details[4].did})" title="${details[4].title}">${details[4].title}</div><div class="tit-bom" onclick="change(${details[4].did})">${details[4].address}</div><div class="tit-bom-bom" onclick="change(${details[4].did})">${details[4].releasetime}</div><div class="tit-bom-boms" onclick="change(${details[4].did})">${details[4].price}</div>`;
         $(".title-qaz").append(div)

         //第五张图片
         var img = `<img class="imgs" onclick="change(${details[5].did})" src="${details[5].poster}"/>`;
         $(".wsx").append(img)

         var div = `<div class="tit" onclick="change(${details[5].did})" title="${details[5].title}">${details[5].title}</div><div class="tit-bom" onclick="change(${details[5].did})">${details[5].address}</div><div class="tit-bom-bom" onclick="change(${details[5].did})">${details[5].releasetime}</div><div class="tit-bom-boms" onclick="change(${details[5].did})">${details[5].price}</div>`;
         $(".title-wsx").append(div)

         //第六张图片
         var img = `<img class="imgs" onclick="change(${details[6].did})" src="${details[6].poster}"/>`;
         $(".edc").append(img)

         var div = `<div class="tit" onclick="change(${details[6].did})" title="${details[6].title}">${details[6].title}</div><div class="tit-bom" onclick="change(${details[6].did})">${details[6].address}</div><div class="tit-bom-bom" onclick="change(${details[6].did})">${details[6].releasetime}</div><div class="tit-bom-boms" onclick="change(${details[6].did})">${details[6].price}</div>`;
         $(".title-edc").append(div)


//歌舞剧
         var details_one = getdata("http://47.99.153.121:8021/index.php/index/details/typeId/2")
         console.log(details_one)

         //首位图
         var div=`<div class="tex" onclick="change(${details_one[0].did})">${details_one[0].title}</div><div class="textx" details_one>${details_one[0].price}</div>`;
         $(".tou").append(div)

         var img=`<img class="percher" onclick="change(${details_one[0].did})" src="${details_one[0].poster}">`;
         $(".tu").append(img);

         //第一张图片
         var div = `<div class="tit" onclick="change(${details_one[1].did})" title="${details_one[1].title}">${details_one[1].title}</div><div class="tit-bom" onclick="change(${details_one[1].did})">${details_one[1].address}</div><div class="tit-bom-bom" onclick="change(${details_one[1].did})">${details_one[1].releasetime}</div><div class="tit-bom-boms" onclick="change(${details_one[1].did})">${details_one[1].price}</div>`;
         $(".title-1").append(div)
        
         var img = `<img class="imgs" onclick="change(${details_one[1].did})" src="${details_one[1].poster}"/>`;
         $(".shang").append(img)

         //第二章图片
         var img = `<img class="imgs" onclick="change(${details_one[2].did})" src="${details_one[2].poster}"/>`;
         $(".bei").append(img)

         var div = `<div class="tit" onclick="change(${details_one[2].did})" title="${details_one[2].title}">${details_one[2].title}</div><div class="tit-bom" onclick="change(${details_one[2].did})">${details_one[2].address}</div><div class="tit-bom-bom" onclick="change(${details_one[2].did})">${details_one[2].releasetime}</div><div class="tit-bom-boms" onclick="change(${details_one[2].did})">${details_one[2].price}</div>`;
         $(".title-bei").append(div)

         //第三张图片
         var img = `<img class="imgs" onclick="change(${details_one[3].did})" src="${details_one[3].poster}"/>`;
         $(".nv").append(img)

         var div = `<div class="tit" onclick="change(${details_one[3].did})" title="${details_one[3].title}">${details_one[3].title}</div><div class="tit-bom" onclick="change(${details_one[3].did})">${details_one[3].address}</div><div class="tit-bom-bom" onclick="change(${details_one[3].did})">${details_one[3].releasetime}</div><div class="tit-bom-boms" onclick="change(${details_one[3].did})">${details_one[3].price}</div>`;
         $(".title-nv").append(div)

         //第四张图片
         var img = `<img class="imgs" onclick="change(${details_one[4].did})" src="${details_one[4].poster}"/>`;
         $(".da").append(img)

         var div = `<div class="tit" onclick="change(${details_one[4].did})" title="${details_one[4].title}">${details_one[4].title}</div><div class="tit-bom" onclick="change(${details_one[3].did})">${details_one[4].address}</div><div class="tit-bom-bom" onclick="change(${details_one[3].did})">${details_one[4].releasetime}</div><div class="tit-bom-boms" onclick="change(${details_one[3].did})">${details_one[4].price}</div>`;
         $(".title-da").append(div)

         //第五张图片
         var img = `<img class="imgs" onclick="change(${details_one[5].did})" src="${details_one[5].poster}"/>`;
         $(".ma").append(img)

         var div = `<div class="tit" onclick="change(${details_one[5].did})" title="${details_one[5].title}">${details_one[5].title}</div><div class="tit-bom" onclick="change(${details_one[5].did})">${details_one[5].address}</div><div class="tit-bom-bom" onclick="change(${details_one[5].did})">${details_one[5].releasetime}</div><div class="tit-bom-boms" onclick="change(${details_one[5].did})">${details_one[5].price}</div>`;
         $(".title-ma").append(div)

         //第六张图片
         var img = `<img class="imgs" onclick="change(${details_one[6].did})" src="${details_one[6].poster}"/>`;
         $(".ju").append(img)

         var div = `<div class="tit" onclick="change(${details_one[6].did})" title="${details_one[6].title}">${details_one[6].title}</div><div class="tit-bom" onclick="change(${details_one[6].did})">${details_one[6].address}</div><div class="tit-bom-bom" onclick="change(${details_one[6].did})">${details_one[6].releasetime}</div><div class="tit-bom-boms" onclick="change(${details_one[6].did})">${details_one[6].price}</div>`;
         $(".title-ju").append(div)

         //音乐会

         var details_two = getdata("http://47.99.153.121:8021/index.php/index/details/typeId/3")
         console.log(details_two)

         //首位图
         var div=`<div class="tex" onclick="change(${details_two[0].did})">${details_two[0].title}</div><div class="textx" onclick="change(${details_two[0].did})">${details_two[0].price}</div>`;
         $(".zi").append(div)

         var img=`<img class="percher" onclick="change(${details_two[0].did})" src="${details_two[0].poster}">`;
         $(".pian").append(img);

         //第一张图片
         var div = `<div class="tit" onclick="change(${details_two[1].did})" title="${details_two[1].title}">${details_two[1].title}</div><div class="tit-bom" onclick="change(${details_two[1].did})">${details_two[1].address}</div><div class="tit-bom-bom" onclick="change(${details_two[1].did})">${details_two[1].releasetime}</div><div class="tit-bom-boms" onclick="change(${details_two[1].did})">${details_two[1].price}</div>`;
         $(".title-yin").append(div)
        
         var img = `<img class="imgs" onclick="change(${details_two[1].did})" src="${details_two[1].poster}"/>`;
         $(".yin").append(img)
         
         //第二章图片
         var img = `<img class="imgs" onclick="change(${details_two[2].did})" src="${details_two[2].poster}"/>`;
         $(".di").append(img)

         var div = `<div class="tit" onclick="change(${details_two[2].did})" title="${details_two[2].title}">${details_two[2].title}</div><div class="tit-bom" onclick="change(${details_two[2].did})">${details_two[2].address}</div><div class="tit-bom-bom" onclick="change(${details_two[2].did})">${details_two[2].releasetime}</div><div class="tit-bom-boms" onclick="change(${details_two[2].did})">${details_two[2].price}</div>`;
         $(".title-di").append(div)

         //第三张图片
         var img = `<img class="imgs"  onclick="change(${details_two[3].did})" src="${details_two[3].poster}"/>`;
         $(".chang").append(img)

         var div = `<div class="tit" onclick="change(${details_two[3].did})" title="${details_two[3].title}">${details_two[3].title}</div><div class="tit-bom" onclick="change(${details_two[3].did})">${details_two[3].address}</div><div class="tit-bom-bom" onclick="change(${details_two[3].did})">${details_two[3].releasetime}</div><div class="tit-bom-boms" onclick="change(${details_two[3].did})">${details_two[3].price}</div>`;
         $(".title-chang").append(div)

         //第四张图片
         var img = `<img class="imgs" onclick="change(${details_two[4].did})" src="${details_two[4].poster}"/>`;
         $(".tiao").append(img)

         var div = `<div class="tit" onclick="change(${details_two[4].did})" title="${details_two[4].title}">${details_two[4].title}</div><div class="tit-bom" onclick="change(${details_two[4].did})">${details_two[4].address}</div><div class="tit-bom-bom" onclick="change(${details_two[4].did})">${details_two[4].releasetime}</div><div class="tit-bom-boms" onclick="change(${details_two[4].did})">${details_two[4].price}</div>`;
         $(".title-tiao").append(div)

         //第五张图片
         var img = `<img class="imgs" onclick="change(${details_two[5].did})" src="${details_two[5].poster}"/>`;
         $(".sing").append(img)

         var div = `<div class="tit" onclick="change(${details_two[5].did})" title="${details_two[5].title}">${details_two[5].title}</div><div class="tit-bom" onclick="change(${details_two[5].did})">${details_two[5].address}</div><div class="tit-bom-bom" onclick="change(${details_two[5].did})">${details_two[5].releasetime}</div><div class="tit-bom-boms" onclick="change(${details_two[5].did})">${details_two[5].price}</div>`;
         $(".title-sing").append(div)

         //第六张图片
         var img = `<img class="imgs" onclick="change(${details_two[6].did})" src="${details_two[6].poster}"/>`;
         $(".danc").append(img)

         var div = `<div class="tit" onclick="change(${details_two[6].did})" title="${details_two[6].title}">${details_two[6].title}</div><div class="tit-bom" onclick="change(${details_two[6].did})">${details_two[6].address}</div><div class="tit-bom-bom" onclick="change(${details_two[6].did})">${details_two[6].releasetime}</div><div class="tit-bom-boms" onclick="change(${details_two[6].did})">${details_two[6].price}</div>`;
         $(".title-danc").append(div)

         // //音乐会

         // var details_three = getdata("http://47.99.153.121:8021/index.php/index/details/typeId/4")
         // console.log(details_three)

         // //首位图
         // var div=`<div class="tex" onclick="change(${details_three[0].did})">${details_three[0].title}</div><div class="textx" onclick="change(${details_three[0].did})">${details_three[0].price}</div>`;
         // $(".xxz").append(div)

         // var img=`<img class="percher" onclick="change(${details_three[0].did})" src="${details_three[0].poster}">`;
         // $(".zzx").append(img);

         // //第一张图片
         // var div = `<div class="tit" onclick="change(${details_three[1].did})" title="${details_three[1].title}">${details_three[1].title}</div><div class="tit-bom" onclick="change(${details_three[1].did})">${details_three[1].address}</div><div class="tit-bom-bom" onclick="change(${details_three[1].did})">${details_three[1].releasetime}</div><div class="tit-bom-boms" onclick="change(${details_three[1].did})">${details_three[1].price}</div>`;
         // $(".title-liu").append(div)
        
         // var img = `<img class="imgs" onclick="change(${details_three[1].did})" src="${details_three[1].poster}"/>`;
         // $(".liu").append(img)
         function change(did){//定义到详情页的带参数的函数！
            location.href="xiangqing.html?did="+did;
            }