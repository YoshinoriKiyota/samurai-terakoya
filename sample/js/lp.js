$(function(){
    $('a[href^="#"]').click(function (){
      var adjust = -30;
      var speed = 500;
      var href =$(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top + adjust;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
  });
  
    /*=================================================
    Inview（画面に表示されたタイミングで処理を実行）
    ===================================================*/
    // BBBが選ばれる理由（スライド左）
    $('.inview-slide-left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if(isInView){
        // 要素が表示されたらslide-leftクラスを追加
        $(this).stop().addClass('slide-left');
      }
    });
    // BBBが選ばれる理由（スライド右）
    $('.inview-slide-right').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if(isInView){
        // 要素が表示されたらslide-rightクラスを追加
        $(this).stop().addClass('slide-right');
      }
    });
    // 受講生の声（ふきだし）
    $('.inview-balloon').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if(isInView){
        // 要素が表示されたらballoonクラスを追加
        $(this).stop().addClass('balloon');
      }
    });
  });