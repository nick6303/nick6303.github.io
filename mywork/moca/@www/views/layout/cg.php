<!--進場結構-->

<div class="wddLoad cgBack">

  <img class="icon" src="../../assets/img/cgLogo/cgLogo.png" alt="" title="">

</div>
<script>
  if ( window.sessionStorage.session == 'cgB' ) {
    // console.log('走子頁');
    //幫cg.php加一個cgB動畫
    document.querySelector('.wddLoad').classList.add('cgB');
    
    setTimeout(function(){
      window.sessionStorage.session = '';
    }, 0);
  }
  if ( window.sessionStorage.session == '' ) {
    // console.log('單元頁換單元頁');
  }
</script>