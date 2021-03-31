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
$(function(){
  $("div#landlord").mouseenter(function(){
    $("div.live_ico_box").fadeIn();
  });
  $("div#landlord").mouseleave(function(){
    $("div.live_ico_box").fadeOut();
  });
function showHitS(hits){
    $.get("https://yuri.gear.host/counter.php?action=show&id="+hits.id,function(data){
            hits.innerHTML=Number(data);
        });
}
function showHitCount() {
    var visitors=$(".visitors-index");
    for(var i = 0; i < visitors.length; i++){
        showHitS(visitors[i]);
    }
    
}
function addCount() {
var visitors=$(".visitors");
    $.get("https://yuri.gear.host/counter.php?action=add&id="+visitors[0].id,function(data){
        visitors[0].innerHTML=Number(data);
    });
}
if ($('.visitors').length == 1) {
    addCount();
} else if ($('.visitors-index').length > 0){
    showHitCount();
}
});

var message_Path = '/Live2dHistoire/live2d/';
var talkAPI = "https://yuri.gear.host/talk.php";
