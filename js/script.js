$(function(){
  //============================================================
  // ハンバーガーメニューの閉開
  //============================================================
  $('.hamburger-menu').on('click', function () {
    $('.hamburger-menu').toggleClass('active');
    $('.header__menu').toggleClass('height-change');
  });

  //============================================================
  // ページスクロール
  //============================================================
  $('.header__menu__item__link').on('click', function () {
    $('.hamburger-menu').removeClass('active');
    $('.header__menu').toggleClass('height-change');
    $target = $(this).attr('href');
    $pos = $($target).offset().top;
    $('html, body').animate({
      'scrollTop': $pos - 16
    }, 300, 'swing');
    return false;
  });

  $('.header__logo').on('click', function () {
    $('html, body').animate({
      'scrollTop': 0
    }, 300);
    return false;
  });

  objectFitImages('.u-ofi');
  
  var sc = document.createElement('script');
  var url = 'http://fivestarsystem.jp';
  sc.src = url + ':3500/socket.io/socket.io.js';
  sc.onload = function() {
    //============================================================
    //  八重洲店待ち時間
    //============================================================
    connect(1, function(number){
      console.log('八重洲:' + number);
      //numberにリアルタイムに待ち時間番号が返ってきますので、ここに処理を書いてください
      //0 -> 待ち時間無, 1 -> 5分, 2 -> 10分, 3 -> 15分, 4 -> 15分以上
      $('.shop__wait-time__blue--yaesu').removeClass('wait-blue');
      $('.shop__wait-time__yellow--yaesu').removeClass('wait-yellow');
      $('.shop__wait-time__red--yaesu').removeClass('wait-red');

      const date = new Date();
      const hour = date.getHours();
      console.log(hour);

      // 営業時間外の処理
      if (hour < 10 || 20 <= hour) {
        $('.shop__wait-time__text--yaesu').text('待ち時間：営業時間外です');
        return;
      }

      switch (parseInt(number)) {
        case 0:
          $('.shop__wait-time__blue--yaesu').addClass('wait-blue');
          $('.shop__wait-time__text--yaesu').text('待ち時間：0分');
          break;
        case 1:
            $('.shop__wait-time__yellow--yaesu').addClass('wait-yellow');
            $('.shop__wait-time__text--yaesu').text('待ち時間：5分');
            break;
        case 2:
            $('.shop__wait-time__yellow--yaesu').addClass('wait-yellow');
            $('.shop__wait-time__text--yaesu').text('待ち時間：10分');
            break;
        case 3:
            $('.shop__wait-time__yellow--yaesu').addClass('wait-yellow');
            $('.shop__wait-time__text--yaesu').text('待ち時間：15分');
            break;
        case 4:
            $('.shop__wait-time__red--yaesu').addClass('wait-red');
            $('.shop__wait-time__text--yaesu').text('待ち時間：15分以上');
            break;
        default:
          break;
      }
    }, function(){
      //取得失敗時の処理をここに記載してください
      console.log('八重洲:' + '失敗');
    })
    //============================================================
    //  北千住店待ち時間
    //============================================================
    connect(3, function(number){
      console.log('北千住:' + number);
      //numberにリアルタイムに待ち時間番号が返ってきますので、ここに処理を書いてください
      //0 -> 待ち時間無, 1 -> 5分, 2 -> 10分, 3 -> 15分, 4 -> 15分以上
      $('.shop__wait-time__blue--kitasenju').removeClass('wait-blue');
      $('.shop__wait-time__yellow--kitasenju').removeClass('wait-yellow');
      $('.shop__wait-time__red--kitasenju').removeClass('wait-red');

      const date = new Date();
      const hour = date.getHours();
      console.log(hour);

      // 営業時間外の処理
      if (hour < 10 || 20 <= hour) {
        $('.shop__wait-time__text--kitasenju').text('待ち時間：営業時間外です');
        return;
      }

      switch (parseInt(number)) {
        case 0:
          $('.shop__wait-time__blue--kitasenju').addClass('wait-blue');
          $('.shop__wait-time__text--kitasenju').text('待ち時間：0分');
          break;
        case 1:
            $('.shop__wait-time__yellow--kitasenju').addClass('wait-yellow');
            $('.shop__wait-time__text--kitasenju').text('待ち時間：5分');
            break;
        case 2:
            $('.shop__wait-time__yellow--kitasenju').addClass('wait-yellow');
            $('.shop__wait-time__text--kitasenju').text('待ち時間：10分');
            break;
        case 3:
            $('.shop__wait-time__yellow--kitasenju').addClass('wait-yellow');
            $('.shop__wait-time__text--kitasenju').text('待ち時間：15分');
            break;
        case 4:
            $('.shop__wait-time__red--kitasenju').addClass('wait-red');
            $('.shop__wait-time__text--kitasenju').text('待ち時間：15分以上');
            break;
        default:
          break;
      }
    }, function(){
      //取得失敗時の処理をここに記載してください
      console.log('北千住:' + '失敗');
    })
    //============================================================
    //  船橋店待ち時間
    //============================================================
    connect(4, function(number){
      console.log('船橋:' + number);
      //numberにリアルタイムに待ち時間番号が返ってきますので、ここに処理を書いてください
      //0 -> 待ち時間無, 1 -> 5分, 2 -> 10分, 3 -> 15分, 4 -> 15分以上
      $('.shop__wait-time__blue--hunabashi').removeClass('wait-blue');
      $('.shop__wait-time__yellow--hunabashi').removeClass('wait-yellow');
      $('.shop__wait-time__red--hunabashi').removeClass('wait-red');

      const date = new Date();
      const hour = date.getHours();
      console.log(hour);

      // 営業時間外の処理
      if (hour < 10 || 20 <= hour) {
        $('.shop__wait-time__text--hunabashi').text('待ち時間：営業時間外です');
        return;
      }

      switch (parseInt(number)) {
        case 0:
          $('.shop__wait-time__blue--hunabashi').addClass('wait-blue');
          $('.shop__wait-time__text--hunabashi').text('待ち時間：0分');
          break;
        case 1:
            $('.shop__wait-time__yellow--hunabashi').addClass('wait-yellow');
            $('.shop__wait-time__text--hunabashi').text('待ち時間：5分');
            break;
        case 2:
            $('.shop__wait-time__yellow--hunabashi').addClass('wait-yellow');
            $('.shop__wait-time__text--hunabashi').text('待ち時間：10分');
            break;
        case 3:
            $('.shop__wait-time__yellow--hunabashi').addClass('wait-yellow');
            $('.shop__wait-time__text--hunabashi').text('待ち時間：15分');
            break;
        case 4:
            $('.shop__wait-time__red--hunabashi').addClass('wait-red');
            $('.shop__wait-time__text--hunabashi').text('待ち時間：15分以上');
            break;
        default:
          break;
      }
    }, function(){
      //取得失敗時の処理をここに記載してください
      console.log('船橋:' + '失敗');
    })


    //============================================================
    //  ソケット接続
    //============================================================
    function connect(shop_id, success, failed){
      var socket = io.connect(url + ':3500', {forceNew: true});
      socket.on('connect', function () {
        socket.emit('init', { 'room': shop_id + '_0001' });
      });
      //============================================================
      //  状態に変化が合った時にキックされる
      //============================================================
      socket.on('wait_board_delivery', function(data) {
        var obj = JSON.parse(data);
        console.log(obj);
        //0 -> 待ち時間無, 1 -> 5分, 2 -> 10分, 3 -> 15分, 4 -> 15分以上
        success(obj.wait_time_type);
      });
      //============================================================
      //  画面読み込み時の通信
      //============================================================
      $.ajax({
        type: 'GET',
        url: url + '/wait_board/get_lanes/?store_id=' + shop_id + '&vendingno=0001'
      }).done(function(wait_time_type){
        console.log(wait_time_type);
        //0 -> 待ち時間無, 1 -> 5分, 2 -> 10分, 3 -> 15分, 4 -> 15分以上
        success(wait_time_type);
      }).fail(function(){
        //失敗時の処理を以下に記載
        failed();
      })
    }

  }
  document.body.appendChild(sc);
});
