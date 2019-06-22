(function() {
    var $backToTopTxt = "返回顶部", $backToTopEle = $('<div class="backToTop"></div>').appendTo($("body"))
        .text($backToTopTxt).attr("title", $backToTopTxt).click(function() {
            $("html, body").animate({ scrollTop: 0 }, 120);
    }), $backToTopFun = function() {
        var st = $(document).scrollTop(), winh = $(window).height();
        (st > 0)? $backToTopEle.show(): $backToTopEle.hide();
    };
    $(window).bind("scroll", $backToTopFun);
    $(function() { $backToTopFun(); });
})();
$(document).ready(function(){
  $("div#landlord").mouseenter(function(){
    $("div.live_ico_box").fadeIn();
  });
  $("div#landlord").mouseleave(function(){
    $("div.live_ico_box").fadeOut();
  });
});

function showHitCount() {
    var visitors=document.getElementsByClassName("visitors");
    var i = 0;
    function showHitS() {
        $.get("https://yuri.gear.host/counter.php?action=show&id="+visitors[i].id,function(data){
            visitors[i].innerHTML=Number(data);
            i++;
            if (i < visitors.length){
                showHitS();
            }
        });
    }
    showHitS();
}
function addCount() {
var visitors=document.getElementsByClassName("visitors");
    $.get("https://yuri.gear.host/counter.php?action=add&id="+visitors[0].id,function(data){
        visitors[0].innerHTML=Number(data);
    });
}
$(function (){
    if (window.location.pathname !== '/' && $('.visitors').length == 1) {
        // in post.html, so add 1 to hit counts
        addCount();
    } else if ($('.post-link').length > 0){
        // in index.html, there are many 'visitors' and 'post-link', so just show hit counts.
        showHitCount();
    }
});

var message_Path = '/Live2dHistoire/live2d/';
var talkAPI = "https://yuri.gear.host/talk.php";
