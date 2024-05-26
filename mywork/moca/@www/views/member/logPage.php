<!DOCTYPE html>
<html lang="en">


<head>
  <?php include('../layout/head.php');?>
</head>


<body class="logPage member" id="member">

  <?php include('../layout/cg.php');?>

  <div class="cgAnimate">

    <main>
      <!--回到前頁-->
      <a class="chrisCloseBtn cg" href="javascript:void(0)" title="">
        <p class="text">CLOSE</p>
        <div class="iconBox"></div>
      </a>
    
      <!--背景-->
      <div class="bgPic">
        <div class="bgDecoration degA">
          <img class="img" src="../../upload/fa2/member/bk02.png" alt="" title="">
        </div>
        <div class="bgDecoration degB">
          <img class="img" src="../../upload/fa2/member/bk03.png" alt="" title="">
        </div>
      </div>

      <!--登入畫面-->
      <div class="logArea">
        <div class="logFrame">
          <section class="mocaTitleSec">
            <h2 class="title"><span class="aa">MEMBER SERVICE</span><span class="bb">會員服務</span></h2>
            <h3 class="subTitle">請輸入下方資訊以登入您的會員</h3>
          </section>

          <form id="form1" class="formLog memberForm" action="">
            <div class="list w100">
              <label class="lableTitle" for=""><span>E-MAIL</span><span>電子郵件</span></label>
              <input type="email" name="" id="" value="" placeholder="">
            </div>
            <div class="list w100">
              <label class="lableTitle" for=""><span>PASSWORD</span><span>密碼</span></label>
              <input type="password" name="" id="" value="" placeholder="">
            </div>
            <div class="list w100 verifi">
              <label class="lableTitle" for=""><span>VERIFICATION</span><span>驗證碼</span></label>
              <input type="input" placeholder="點擊驗證碼可刷新內容" name="" id="" value="">
              <img class="code" src="../../assets/img/code.png" alt="" title="">
            </div>
          </form>

          <div class="forgotArea">
            <p class="text openFpassword">
              <span class="en">Forget password </span>
              <span>忘記密碼了嗎 ?</span>
            </p>
            <p class="text openFaccount">
              <span class="en">Forget account </span>
              <span>忘記帳號了嗎 ?</span>
            </p>
          </div>

          <div class="ctrlArea">
            <a class="link cgNot regist btnA" href="javascript:void(0)" title="">
              <span class="text">註冊帳號</span>
            </a>
            <a class="link cg cgB loggin btnB" href="../member/index.php" title="">
              <span class="text">確定登入</span>
            </a>
          </div>

        </div>
      </div>

    </main>

    <!--註冊畫面-->
    <div class="registAccount hideAccountType">
      <!--背景-->
      <div class="bgDecoration degA">
        <img class="img" src="../../upload/fa2/member/bk02.png" alt="" title="">
      </div>
      <div class="bgDecoration degB">
        <img class="img" src="../../upload/fa2/member/bk03.png" alt="" title="">
      </div>

      <!--關閉註冊畫面-->
      <div class="chrisCloseBtn closeRegist">
        <p class="text">CLOSE</p>
        <div class="iconBox"></div>
      </div>

      <!--pizzaBox 加了 showUp 就可以看到-->
      <div class="pageA">
        <div class="pageAbox pizzaBox showUp">
          <section class="mocaTitleSec">
            <h2 class="title"><span class="aa">REGISTER</span><span class="bb">歡迎加入當代會員</span></h2>
            <h3 class="subTitle">您好，請將基本資料填寫於下方表單，信箱將成為會員帳號，並確保您的資訊正確無虞，以保障後續在使用、查詢、優惠等會員權益，謝謝！</h3>
          </section>

          <form id="form2" class="formRegister memberForm" action="">
            <div class="list w100">
              <label class="lableTitle" for=""><span>Name</span><span>姓名</span></label>
              <input type="text" name="" id="" value="" placeholder="">
            </div>

            <div class="list w50 break">
              <label class="lableTitle" for=""><span>Mobile</span><span>手機號碼</span></label>
              <input type="tel" name="" id="" value="" placeholder="">
            </div>

            <div class="list w50 break">
              <label class="lableTitle" for=""><span>Nationality</span><span>國籍</span></label>
              <div class="chrisSelect nationSelect" data-placeholder="TAIWAN +886">
                <div class="dropShow">
                  <div class="showBox">
                    <p class="character">TAIWAN +886</p>
                  </div>
                  <span class="icon icon-christriangle-down"></span>
                </div>

                <ul class="dropList">
                  <li class="list">
                    <p class="character">香港 +852</p>
                  </li>
                  <li class="list">
                    <p class="character">澳門 +853</p>
                  </li>
                  <li class="list">
                    <p class="character">美國 +011</p>
                  </li>
                  <li class="list">
                    <p class="character">香港 +852</p>
                  </li>
                  <li class="list">
                    <p class="character">澳門 +853</p>
                  </li>
                  <li class="list">
                    <p class="character">美國 +011</p>
                  </li>
                </ul>
              </div>
            </div>

            <div class="list w100">
              <label class="lableTitle" for=""><span>Account</span><span>設定帳號</span></label>
              <input type="text" name="" id="" value="" placeholder="請輸入您的常用信箱，做為登入之帳號">
            </div>

            <div class="list w100">
              <label class="lableTitle" for=""><span>Account confirm</span><span>再次輸入您的帳號</span></label>
              <input type="text" name="" id="" value="" placeholder="">
            </div>

            <div class="list w100">
              <label class="lableTitle" for=""><span>Password</span><span>設定密碼</span></label>
              <input type="password" name="" id="" value="" placeholder="請將密碼設定八位數以上，包含英文及數字">
            </div>

            <div class="list w100 break">
              <label class="lableTitle" for=""><span>Password confirm</span><span>再次輸入您的號碼</span></label>
              <input type="password" name="" id="" value="" placeholder="">
            </div>

            <div class="list w100 verifi">
              <label class="lableTitle" for=""><span>VERIFICATION</span><span>驗證碼</span></label>
              <input type="input" placeholder="點擊驗證碼可刷新內容" name="" id="" value="">
              <img class="code" src="../../assets/img/code.png" alt="" title="">
            </div>
          </form>

          <div class="serviceRule">
            <div class="iconBox">
              <span class="icon icon-chrisagree"></span>
            </div>
            <p class="text">
              <span>我同意收到當代最新訊息及電子報，並已經詳細閱讀並接受</span>
              <span class="openRule">當代會員服務條款</span>
            </p>
          </div>

          <div class="ctrlArea">
            <button class="link btnA resetFormBtn" type="reset" form="form2">
              <span class="text">重新填寫</span>
            </button>
            <div class="link btnB callPageBbox">
              <span class="text">確定送出</span>
            </div>
          </div>
        </div>

        <div class="pageBbox pizzaBox">
          <figure class="imgFrame">
            <img class="img" src="../../assets/img/cgLogo/mocaHouse.png" alt="台北當代藝術館 官方網站 Museum of Contemporary Art, Taipei" title="台北當代藝術館 官方網站 Museum of Contemporary Art, Taipei">
          </figure>

          <p class="textInfo">為了確保註冊為您本人我們將發送驗證連結至您註冊的信箱，24小時內為有效的驗證時間，請至您的信箱確認，謝謝。驗證完成後您將成為台北當代藝術館的網路會員，之後您可以進行各項展覽活動的線上報名，享受我們的會員服務，打造自己的藝術人生！</p>

          <div class="ctrlArea">
            <div class="link btnB closeRegist">
              <span class="text">確認</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--服務條款-->
    <div class="serviceRuleHideBox scarlett">
      <div class="bg closeRule"></div>
      <div class="container">
        <div class="closeBtnBox closeRule">
          <span class="icon icon-chriscross"></span>
        </div>
        <section class="mocaTitleSec">
          <h2 class="title">Member Terms of Service</h2>
          <h3 class="subTitle">當代會員服務條款</h3>
          <span class="line"></span>
        </section>
        <ul class="content">
          <li class="list">
            <p class="title">一、認知與接受條款</p>
            <p class="text">
              1. 台北當代藝術館(以下簡稱”當代”)係依據本服務條款提供當代會員服務(以下簡稱”本服務”)。當會員完成當代之會員註冊手續、或開始使用本服務時，即表示已閱讀、瞭解並同意接受本服務條款之所有內容，並完全接受本服務現有與未來衍生的服務項目及內容。當代藝術館有權於任何時間修改或變更本服務條款之內容，修改後的服務條款內容將公佈網站上，當代將不會個別通知會員，建議會員隨時注意該等修改或變更。會員於任何修改或變更後繼續使用本服務時，視為會員已閱讀、瞭解並同意接受該等修改或變更。若不同意上述的服務條款修訂或更新方式，或不接受本服務條款的其他任一約定，會員應立即停止使用本服務。<br/><br/>
              2. 若會員為未滿二十歲之未成年人，應於會員的家長（或監護人）閱讀、瞭解並同意本約定書之所有內容及其後修改變更後，方得註冊為會員、使用或繼續使用本服務。當會員使用或繼續使用當代時，即推定會員的家長（或監護人）已閱讀、瞭解並同意接受本約定書之所有內容及其後修改變更。<br/><br/>
              3. 台北當代藝術館(以下簡稱”當代”)係依據本服務條款提供當代會員服務(以下簡稱”本服務”)。當會員完成當代之會員註冊手續、或開始使用本服務時，即表示已閱讀、瞭解並同意接受本服務條款之所有內容，並完全接受本服務現有與未來衍生的服務項目及內容。當代藝術館有權於任何時間修改或變更本服務條款之內容，修改後的服務條款內容將公佈網站上，當代將不會個別通知會員，建議會員隨時注意該等修改或變更。會員於任何修改或變更後繼續使用本服務時，視為會員已閱讀、瞭解並同意接受該等修改或變更。若不同意上述的服務條款修訂或更新方式，或不接受本服務條款的其他任一約定，會員應立即停止使用本服務。
            </p>
          </li>
          <li class="list">
            <p class="title">二、認知與接受條款</p>
            <p class="text">
              1. 台北當代藝術館(以下簡稱”當代”)係依據本服務條款提供當代會員服務(以下簡稱”本服務”)。當會員完成當代之會員註冊手續、或開始使用本服務時，即表示已閱讀、瞭解並同意接受本服務條款之所有內容，並完全接受本服務現有與未來衍生的服務項目及內容。當代藝術館有權於任何時間修改或變更本服務條款之內容，修改後的服務條款內容將公佈網站上，當代將不會個別通知會員，建議會員隨時注意該等修改或變更。會員於任何修改或變更後繼續使用本服務時，視為會員已閱讀、瞭解並同意接受該等修改或變更。若不同意上述的服務條款修訂或更新方式，或不接受本服務條款的其他任一約定，會員應立即停止使用本服務。<br/><br/>
              2. 若會員為未滿二十歲之未成年人，應於會員的家長（或監護人）閱讀、瞭解並同意本約定書之所有內容及其後修改變更後，方得註冊為會員、使用或繼續使用本服務。當會員使用或繼續使用當代時，即推定會員的家長（或監護人）已閱讀、瞭解並同意接受本約定書之所有內容及其後修改變更。<br/><br/>
              3. 台北當代藝術館(以下簡稱”當代”)係依據本服務條款提供當代會員服務(以下簡稱”本服務”)。當會員完成當代之會員註冊手續、或開始使用本服務時，即表示已閱讀、瞭解並同意接受本服務條款之所有內容，並完全接受本服務現有與未來衍生的服務項目及內容。當代藝術館有權於任何時間修改或變更本服務條款之內容，修改後的服務條款內容將公佈網站上，當代將不會個別通知會員，建議會員隨時注意該等修改或變更。會員於任何修改或變更後繼續使用本服務時，視為會員已閱讀、瞭解並同意接受該等修改或變更。若不同意上述的服務條款修訂或更新方式，或不接受本服務條款的其他任一約定，會員應立即停止使用本服務。
            </p>
          </li>
          <li class="list">
            <p class="title">三、認知與接受條款</p>
            <p class="text">
              1. 台北當代藝術館(以下簡稱”當代”)係依據本服務條款提供當代會員服務(以下簡稱”本服務”)。當會員完成當代之會員註冊手續、或開始使用本服務時，即表示已閱讀、瞭解並同意接受本服務條款之所有內容，並完全接受本服務現有與未來衍生的服務項目及內容。當代藝術館有權於任何時間修改或變更本服務條款之內容，修改後的服務條款內容將公佈網站上，當代將不會個別通知會員，建議會員隨時注意該等修改或變更。會員於任何修改或變更後繼續使用本服務時，視為會員已閱讀、瞭解並同意接受該等修改或變更。若不同意上述的服務條款修訂或更新方式，或不接受本服務條款的其他任一約定，會員應立即停止使用本服務。<br/><br/>
              2. 若會員為未滿二十歲之未成年人，應於會員的家長（或監護人）閱讀、瞭解並同意本約定書之所有內容及其後修改變更後，方得註冊為會員、使用或繼續使用本服務。當會員使用或繼續使用當代時，即推定會員的家長（或監護人）已閱讀、瞭解並同意接受本約定書之所有內容及其後修改變更。<br/><br/>
              3. 台北當代藝術館(以下簡稱”當代”)係依據本服務條款提供當代會員服務(以下簡稱”本服務”)。當會員完成當代之會員註冊手續、或開始使用本服務時，即表示已閱讀、瞭解並同意接受本服務條款之所有內容，並完全接受本服務現有與未來衍生的服務項目及內容。當代藝術館有權於任何時間修改或變更本服務條款之內容，修改後的服務條款內容將公佈網站上，當代將不會個別通知會員，建議會員隨時注意該等修改或變更。會員於任何修改或變更後繼續使用本服務時，視為會員已閱讀、瞭解並同意接受該等修改或變更。若不同意上述的服務條款修訂或更新方式，或不接受本服務條款的其他任一約定，會員應立即停止使用本服務。
            </p>
          </li>
        </ul>
      </div>
      <div class="btnStyle">
        <div class="btn styleG w50 closeRule">返回前頁</div>
        <div class="btn styleA w50 closeRule agree">我已經詳閱並且已經同意</div>
      </div>
    </div>

    <!--忘記帳號-->
    <div class="fAccountA modelA hideAccountType">
      <!--背景-->
      <div class="bgDecoration degA">
        <img class="img" src="../../upload/fa2/member/bk02.png" alt="" title="">
      </div>
      <div class="bgDecoration degB">
        <img class="img" src="../../upload/fa2/member/bk03.png" alt="" title="">
      </div>

      <!--關閉畫面-->
      <div class="chrisCloseBtn closeDoor">
        <p class="text">CLOSE</p>
        <div class="iconBox"></div>
      </div>

      <!---->
      <div class="pageA">
        <div class="pageAbox pizzaBox showUp">
          <section class="mocaTitleSec">
            <h4 class="title">Forget Account</h2>
            <h5 class="subTitle">忘記會員帳號</h3>
            <p class="text">親愛的會員您好，請輸入您的備援信箱，我們將寄送註冊信箱的相關資訊至您的備援信箱，請盡速至信箱確認，以進行重新登入。</p>
          </section>

          <form id="formFaccount" class="formFaccount memberForm" action="">
            <div class="list w100">
              <label class="lableTitle" for=""><span>Backup E-mail</span><span>備援信箱</span></label>
              <input type="email" name="" id="" value="" placeholder="請輸入備援的電子信箱">
            </div>
            <div class="list w100 verifi">
              <label class="lableTitle" for=""><span>Vertification</span><span>驗證碼</span></label>
              <input type="input" placeholder="點擊驗證碼可刷新內容" name="" id="" value="">
              <img class="code" src="../../assets/img/code.png" alt="" title="">
            </div>
          </form>

          <div class="ctrlArea">
            <div class="link btnB callPageBbox">
              <span class="text">確定送出</span>
            </div>
          </div>
        </div>

        <div class="pageBbox pizzaBox">
          <section class="mocaTitleSec">
            <h4 class="title">Success !</h2>
            <h5 class="subTitle">註冊信箱資訊已發送</h3>
            <p class="text">註冊信箱相關資訊已發送至您的備援信箱，請盡速至信箱確認，以進行會員重新登入，享受我們的會員服務。</p>
          </section>

          <div class="ctrlArea">
            <div class="link btnB closeDoor">
              <span class="text">確定</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--忘記密碼-->
    <div class="fPasswordA modelA hideAccountType">
      <!--背景-->
      <div class="bgDecoration degA">
        <img class="img" src="../../upload/fa2/member/bk02.png" alt="" title="">
      </div>
      <div class="bgDecoration degB">
        <img class="img" src="../../upload/fa2/member/bk03.png" alt="" title="">
      </div>

      <!--關閉畫面-->
      <div class="chrisCloseBtn closeDoor">
        <p class="text">CLOSE</p>
        <div class="iconBox"></div>
      </div>

      <!---->
      <div class="pageA">
        <div class="pageAbox pizzaBox showUp">
          <section class="mocaTitleSec">
            <h4 class="title">Forget Password</h2>
            <h5 class="subTitle">忘記會員密碼</h3>
            <p class="text">親愛的會員您好，請輸入您註冊時所使用的電子信箱，我們將寄送密碼重設連結至您的信箱，請點擊連結進行後續的更改流程。</p>
          </section>

          <form id="formFpassword" class="formFpassword memberForm" action="">
            <div class="list w100">
              <label class="lableTitle" for=""><span>E-mail</span><span>電子信箱</span></label>
              <input type="email" name="" id="" value="" placeholder="請輸入註冊時的電子信箱">
            </div>
            <div class="list w100 verifi">
              <label class="lableTitle" for=""><span>Vertification</span><span>驗證碼</span></label>
              <input type="input" placeholder="點擊驗證碼可刷新內容" name="" id="" value="">
              <img class="code" src="../../assets/img/code.png" alt="" title="">
            </div>
          </form>

          <div class="ctrlArea">
            <div class="link btnB callPageBbox">
              <span class="text">確定送出</span>
            </div>
          </div>
        </div>

        <div class="pageBbox pizzaBox">
          <section class="mocaTitleSec">
            <h4 class="title">Success !</h2>
            <h5 class="subTitle">重設密碼連結已發送</h3>
            <p class="text">重設密碼連結已發送至您註冊的信箱，24小時內為信件有效期限，請盡速至信箱取信，點擊連結進行密碼重新設定流程，完成即可重新登入，享受我們的會員服務。</p>
          </section>

          <div class="ctrlArea">
            <div class="link btnB closeDoor">
              <span class="text">確定</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--重設密碼-->
    <div class="RePassword modelA hideAccountType">
      <!--背景-->
      <div class="bgDecoration degA">
        <img class="img" src="../../upload/fa2/member/bk02.png" alt="" title="">
      </div>
      <div class="bgDecoration degB">
        <img class="img" src="../../upload/fa2/member/bk03.png" alt="" title="">
      </div>

      <!--關閉畫面-->
      <div class="chrisCloseBtn closeDoor">
        <p class="text">CLOSE</p>
        <div class="iconBox"></div>
      </div>

      <!---->
      <div class="pageA">
        <div class="pageAbox pizzaBox showUp">
          <section class="mocaTitleSec">
            <h4 class="title">Reset Password</h2>
            <h5 class="subTitle">重設您的密碼</h3>
            <p class="text">親愛的會員您好，請填寫您欲重新設定的密碼。</p>
          </section>

          <form id="formRpassword" class="formRpassword memberForm" action="">
            <div class="list w100">
              <label class="lableTitle" for=""><span>New Password</span><span>設定新密碼</span></label>
              <input type="password" name="" id="" value="" placeholder="請將密碼設定至少八位數以上，並包含英文與數字">
            </div>
            <div class="list w100">
              <label class="lableTitle" for=""><span>Password Confirm</span><span>再次輸入新密碼</span></label>
              <input type="password" name="" id="" value="" placeholder="請將密碼設定至少八位數以上，並包含英文與數字">
            </div>
          </form>

          <div class="ctrlArea">
            <div class="link btnB callPageBbox">
              <span class="text">確定送出</span>
            </div>
          </div>
        </div>

        <div class="pageBbox pizzaBox">
          <section class="mocaTitleSec">
            <h4 class="title">Success !</h2>
            <h5 class="subTitle">已完成重設密碼</h3>
            <p class="text">恭喜您完成重設密碼的流程，現在您可使用新密碼重新登入會員，享受我們的會員服務。</p>
          </section>

          <div class="ctrlArea">
            <div class="link btnB closeDoor">
              <span class="text">登入會員</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--驗證成功-->
    <!-- $('.successHideBox').addClass('open'); 叫出畫面 -->
    <div class="successHideBox scarlett">
      <div class="bg closeRule"></div>
      <div class="container">
        <div class="closeBtnBox closeRule">
          <span class="icon icon-chriscross"></span>
        </div>
        <section class="mocaTitleSec">
          <h2 class="title">Success !</h2>
          <h3 class="subTitle">恭喜您完成信箱驗證</h3>
          <span class="line"></span>
        </section>
        <div class="content">
          <p class="text">親愛的會員您好，恭喜您完成信箱驗證手續，現在您可以登入會員，享受台北當代藝術館的會員服務。</p>
        </div>
      </div>
      <div class="btnStyle"> 
        <div class="btn styleA w50 closeRule">進行會員登入</div>
      </div>
    </div>

    <!--驗證逾時-->
    <!-- $('.timeoutHideBox').addClass('open'); 叫出畫面 -->
    <div class="timeoutHideBox scarlett">
      <div class="bg closeRule"></div>
      <div class="container">
        <div class="closeBtnBox closeRule">
          <span class="icon icon-chriscross"></span>
        </div>
        <section class="mocaTitleSec">
          <h2 class="title">Timeout !</h2>
          <h3 class="subTitle">您的信箱驗證已逾時</h3>
          <span class="line"></span>
        </section>
        <div class="content">
          <p class="text">親愛的會員您好，由於您並未在信箱驗證有效期限24小時內完成驗證手續，您將無法使用會員服務，請點擊重新發送驗證連結按鈕，再次進行信箱驗證手續，謝謝。</p>
        </div>
      </div>
      <div class="btnStyle"> 
        <div class="btn styleA w50 closeRule">重新發送驗證連結</div>
      </div>
    </div>

  </div>

</body>

<?php include('../layout/jsLayout.php');?> 
</html>