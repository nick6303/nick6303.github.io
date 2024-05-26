

// 固定參數
const publicKey ='3784472752a22e4d39788485ce59b668'; //公鑰
const htmlService = 'http://apitest.hanshin.com.tw/supercard/'; // 伺服器網址
const cors = 'http://cors-anywhere.herokuapp.com/'; // cors 套件

/***************************************************************************************************************************/

///////////////////////////////////////
//            電子商品卷              //
///////////////////////////////////////

Vue.component('commodityComponent', {
    template: "#commodity",
    props: ['datajson','success','show','userexsit'],
    data(){
        return{
            num:0,
            norecord: true
        }
    },
    methods:{
        // 檢測兌換紀錄是否為0
        ticket(ele){
            if(ele[this.num].aItem[0].ticket_list[0].aAttrib.count === 0){
                this.norecord = true
            }else{
                this.norecord = false
            }
        },
        // 檢測使用紀錄是否為0
        use(ele){
            if(ele[this.num].aItem[0].return_list[0].aAttrib.count === 0){
                this.norecord = true
            }else{
                this.norecord = false
            }
        },
        // 活動兌換金額小計
        actionTotal(list){
            var total = 0
            list.forEach((item)=>{
                total += Number(item.invoice_nolist[0].aItem[0].amount)
            })
            return total
        },
        // 兌換紀錄總計
        changFinal(list){
            var total = 0
            list.forEach((item)=>{
                total += Number(item.aAttrib.date_amount)
            })
            return total
        },
        // 使用紀錄總計
        usedFinal(list){
            var total = 0
            list.forEach((item)=>{
                total += Number(item.rtn_amt)
            })
            return total
        }
    },
    filters:{
        // 為日期加上/
        date(value){
            var textarray = value.split("")
            textarray.splice(4,0,"/")
            textarray.splice(7,0,"/")
            var final = textarray.join("")
            return final
        },
        // 加上千分號
        dot(num){
            const n = Number(num);
            var plus = (n>-1)?"":"-"
            return `${plus}${Math.abs(n).toFixed(0).replace(/./g, (c, i, a) => {
                const currency = (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c);
                return currency;
            })}`;
        }
    },
    watch:{
        success(){
            this.ticket(this.datajson)
        },
        datajson(){
            this.ticket(this.datajson)
        }
    },
    created(){
        if(this.success){
            this.ticket(this.datajson)
        }
    },
    computed: {
        // 顯示的資料
        showData(){
            var list = this.datajson[this.num].aItem[0]
            var i = $(".container .content .typeBox .box .select p.active").index()
            if(i==0){
                if(this.datajson[this.num].aItem[0].ticket_list[0].aAttrib.count === 0){
                    this.norecord = true
                }else{
                    this.norecord = false
                }
            }else if(i==1){
                if(this.datajson[this.num].aItem[0].return_list[0].aAttrib.count === 0){
                    this.norecord = true
                }else{
                    this.norecord = false
                }
            }
            return list
        },
    },
})

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//            漢神集星樂              //
///////////////////////////////////////

Vue.component('pointComponent', {
    template: '#point',
    props: ['datajson','success','show','userexsit'],
    data(){
        return{
            num:0,
            norecord: true
        }
    },
    methods:{
        act(ele){
            if(ele[this.num].aItem[0].act_list[0].aAttrib.count === 0){
                this.norecord = true
            }else{
                this.norecord = false
            }
        },
        b(ele){
            if(ele[this.num].aItem[0].b_list[0].aAttrib.count === 0){
                this.norecord = true
            }else{
                this.norecord = false
            }
        }
    },
    filters:{
        date(value){
            var textarray = value.split("")
            textarray.splice(4,0,"/")
            textarray.splice(7,0,"/")
            var final = textarray.join("")
            return final
        },
        dot(num){
            const n = Number(num);
            return `$${n.toFixed(0).replace(/./g, (c, i, a) => {
                const currency = (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c);
                return currency;
            })}`;
        }
    },
    watch:{
        success(){
            this.act(this.datajson)
        },
        datajson(){
            this.act(this.datajson)
        }
    },
    created(){
        if(this.success){
            this.act(this.datajson)
        }
    },
    computed: {
        showData(){
            var list = this.datajson[this.num].aItem[0]
            var i = $(".container .content .typeBox .box .select p.active").index()
            if(i==0){
                if(this.datajson[this.num].aItem[0].act_list[0].aAttrib.count === 0){
                    this.norecord = true
                }else{
                    this.norecord = false
                }
            }else if (i==1){
                if(this.datajson[this.num].aItem[0].b_list[0].aAttrib.count === 0){
                    this.norecord = true
                }else{
                    this.norecord = false
                }
            }
            return list
        }
    },
})

/***************************************************************************************************************************/

/***************************************************************************************************************************/
///////////////////////////////////////
//            電子摸彩卷              //
///////////////////////////////////////
Vue.component('lotteryComponent', {
    template: '#lottery',
    props: ['datajson','success','show','userexsit'],
    data(){
        return{
            num:0,
            norecord: true,
            notice: ""
        }
    },
    methods:{
        act(ele){
            if(ele[this.num].aItem[0].act_list[0].aAttrib.count === 0){
                this.norecord = true
            }else{
                this.norecord = false
            }
        },
        // getNotice(api){
        //     const vm = this

        //     $.get(cors + api).then(function (response) {
        //         var text = $($(response)[3]).html()
        //         var textArray = text.split("<br><br>")
        //         textArray.splice(textArray.indexOf(""),1)
        //         vm.notice = textArray
        //     })
        // }
    },
    filters:{
        date(value){
            var textarray = value.split("")
            textarray.splice(4,0,"/")
            textarray.splice(7,0,"/")
            var final = textarray.join("")
            return final
        },
        time(value){
            var textarray = value.split("")
            textarray.splice(2,0,":")
            textarray.splice(5,2)
            var final = textarray.join("")
            return final
        },
    },
    watch:{
        success(){
            this.act(this.datajson)
        },
        datajson(){
            this.act(this.datajson)
        }
    },
    created(){
        if(this.success){
            this.act(this.datajson)
        }
    },
    computed: {
        showData(){
            var list = this.datajson[this.num].aItem[0]
            var i = $(".container .content .typeBox .box .select p.active").index()
            if(i==0){
                if(this.datajson[this.num].aItem[0].act_list[0].aAttrib.count === 0){
                    this.norecord = true
                }else{
                    this.norecord = false
                }
            }
            return list
        },
    },
})

/***************************************************************************************************************************/

// A999999997 / 1234
// A999999999 / 123
// A223212047 / 047550913

const app = new Vue({
    data:{
        // 私鑰
        personKey:"",
        // 系統時間 
        timeStamp:"",
        // 哪間百貨:  (700 漢神、710 巨蛋)
        whitchOne: "700",
        // 顯示哪一筆資料
        show:"commodity",
        //電子商品卷-資料
        commodityData:{},
        commoditySuccess: false,
        // 漢神集星樂-資料
        pointData:{},
        pointSuccess: false,
        // 電子摸彩卷-資料
        lotteryData:{},
        lotterySuccess: false,
        // 使用者帳號
        user: '', 
        //帳號是否存在
        userexsit: undefined,
        // 使用者密碼
        // password: "" ,
        // 倒數計時是否不須暫停
        noStop:true
    },
    methods: {
        // 取得時間參數
        getTimeStamp(){
            const vm = this
            // 傳送參數
            const parameter = 'MT=00&A2=15032216553301&Format=json'
            // 驗證碼(為家私鑰版本)
            const vcode = md5(parameter+publicKey)
            // 串接網址
            const api = htmlService + '?'+ parameter+'&A9='+vcode;
            // 傳送
            $.get(cors + api).then(function (response) {
                vm.timeStamp = response.Response.A8
                // 登入
                // vm.login();
                // 檔期/DM 活動查詢
                // vm.DM();
            })
        },
        // 登入
        // login(){
        //     const vm = this
        //     const c9 = md5(vm.password)
        //     // 傳送參數 
        //     const parameter = 'MT=94&A2=15032216553301&A8='+ this.timeStamp +'&C5='+this.user+'&C9='+c9+'&D0=D&Format=json'
            
        //     // 驗證碼(未加私鑰版本)
        //     const vcode = md5(parameter+publicKey)
        //     // 串接網址
        //     const api = htmlService + '?'+ parameter+'&A9='+vcode;
        //     // 傳送
        //     $.get(cors + api).then(function (response) {
        //         //取得私鑰
        //         vm.personKey = response.Response.H2
        //         vm.afterLogin()
        //     })
        // },
        // 判斷會員 ID 是否存在
        // isIdExist(){
        //     const vm = this
        //     // 傳送參數 
        //     const parameter = 'MT=95&A2=15032216553301&A8='+this.timeStamp+'&C5='+this.user+'&D0=D&Format=json'
        //     // 驗證碼
        //     const vcode = md5(parameter+publicKey)
        //      // 串接網址
        //     const api = htmlService + '?'+ parameter+'&A9='+vcode;
        //     // 傳送
        //     $.get(cors + api).then(function (response) {
        //     })
        // },
        //電子商品卷
        commodity(){
            const vm = this
            // 傳送參數 
            const B6 = (this.timeStamp+this.user)
            const parameter = 'MT=82A&A2=15032216553301&A8='+this.timeStamp+'&B1='+this.whitchOne+'&BI=P&B0=2&C5='+this.user+'&B6='+B6+'&D0=D&Format=json'
            // 驗證碼
            const vcode = md5(parameter+publicKey)
             // 串接網址
            const api = htmlService + '?'+ parameter+'&A9='+vcode;
            // 傳送
            $.get(cors + api).then(function (response) {
                // 確認帳號是否存在
                if(response.Response.AC2 == undefined){
                    vm.userexsit = response.Response.Z0
                }

                vm.commodityData = response.Response.AC2.SpcItem.aItem
                vm.commoditySuccess = true
                setTimeout(function(){
                    dropDown();
                    winform.all();
                },1)
            })
        },
        // 漢神集星樂
        point(){
            const vm = this
            // 傳送參數 
            const B6 = (this.timeStamp+this.user)
            const parameter = 'MT=82A&A2=15032216553301&A8='+this.timeStamp+'&B1='+this.whitchOne+'&BI=F&B0=2&C5='+this.user+'&B6='+B6+'&D0=D&Format=json'
            // 驗證碼
            const vcode = md5(parameter+publicKey)
             // 串接網址
            const api = htmlService + '?'+ parameter+'&A9='+vcode;
            // 傳送
            $.get(cors + api).then(function (response) {
                vm.pointData = response.Response.AC2.SpcItem.aItem

                vm.pointSuccess = true
            })
        },
        // 點子摸彩卷
        lottery(){
            const vm = this
            // 傳送參數 
            const B6 = (this.timeStamp+this.user)
            const parameter = 'MT=82A&A2=15032216553301&A8='+this.timeStamp+'&B1='+this.whitchOne+'&BI=L&B0=2&C5='+this.user+'&B6='+B6+'&D0=D&Format=json'
            // 驗證碼
            const vcode = md5(parameter+publicKey)
             // 串接網址
            const api = htmlService + '?'+ parameter+'&A9='+vcode;
            // 傳送
            $.get(cors + api).then(function (response) {
                console.log(response.Response.AC2.SpcItem.aItem)
                vm.lotteryData = response.Response.AC2.SpcItem.aItem
                vm.lotterySuccess = true
            })
        },
        // 會員資料
        // memberInfo(){
        //     const vm = this
        //     // 傳送參數 
        //     const parameter = 'MT=97&A2=15032216553301&A8='+this.timeStamp+'&C5='+this.user+'&D0=D&Format=json'
        //     // 驗證碼
        //     const vcode = md5(parameter+publicKey)
        //      // 串接網址
        //     const api = htmlService + '?'+ parameter+'&A9='+vcode;
        //     // 傳送
        //     $.get(cors + api).then(function (response) {
        //     })
        // },
        // 檔期/DM 活動查詢
        // DM(){
        //     const vm = this
        //     //交易日期
        //     const date = "20190610"
        //     // 活動查詢類別(0:檔期 1:DM)
        //     const e3 = "1"
        //     // 傳送參數 
        //     const parameter = 'MT=08&A2=15032216553301&A8='+this.timeStamp+'&B0=0&B1='+this.whitchOne+'&BA='+date+'&E3='+e3+'&D0=D&Format=json'
        //     // 驗證碼
        //     const vcode = md5(parameter+publicKey)
        //      // 串接網址
        //     const api = htmlService + '?'+ parameter+'&A9='+vcode;
        //     // 傳送
        //     $.get(cors + api).then(function (response) {
        //     });
        // },
        // 點數查詢
        // pointQuery(){
        //     const vm = this
        //     // 傳送參數 
        //     const parameter = 'MT=11&A2=15032216553301&A8='+this.timeStamp+'&C5='+this.user+'&B1='+this.whitchOne+'&B6='+this.user+'&D0=D&Format=json'
        //     // 驗證碼
        //     const vcode = md5(parameter+publicKey+this.personKey)
        //      // 串接網址
        //     const api = htmlService + '?'+ parameter+'&A9='+vcode;
        //     // 傳送
        //     $.get(cors + api).then(function (response) {
        //         // 遊戲剩餘次數
        //         // console.log(response.Response.CD)
        //         // 今年到期遊戲次數 
        //         // console.log(response.Response.CK)
        //         // 明年到期遊戲次數
        //         // console.log(response.Response.CL)
        //         // 明日生效遊戲次數
        //         // console.log(response.Response.CN)
        //     });
        // },
        // 消費記錄查詢
        // shoppingRecord(){
        //     const vm = this
        //     // 交易年月
        //     const date = "201905"
        //     // 傳送參數 
        //     const parameter = 'MT=99&A2=15032216553301&A8='+this.timeStamp+'&C5='+this.user+'&BH='+date+'&D0=D&Format=json'
        //     // 驗證碼
        //     const vcode = md5(parameter+publicKey+this.personKey)
        //      // 串接網址
        //     const api = htmlService + '?'+ parameter+'&A9='+vcode;
        //     // 傳送
        //     $.get(cors + api).then(function (response) {
        //     });
        // },
        // 需要在登入後才做的事
        // afterLogin(){
            // 會員資料
            // this.memberInfo();
            //電子商品卷
            // this.commodity();
            // 漢神集星樂
            // this.point();
            // 點子摸彩卷
            // this.lottery();
            // 點數查詢
            // this.pointQuery();
            // 判斷會員 ID 是否存在
            // this.isIdExist();
            // 消費記錄查詢
            // this.shoppingRecord();
            // 無動作偵測
            // this.noMovement();
        // },
        changBranch(){
            if(this.commoditySuccess){
                this.commoditySuccess = false
                this.pointSuccess = false
                this.lotterySuccess = false
                this.show = 'commodity'
                $(".container .type ul li:first-child").addClass("active").siblings().removeClass("active")
            }
        },
        noMovement() { 
            const vm =this
            const second = $(".countDown").attr("data-noMovement")
            ifvisible.setIdleDuration(second)
            ifvisible.on("idle", function(){
                $(".countDown").css("display","block");
                vm.strat_countdown("https://tw.yahoo.com/")
            });

            ifvisible.on("wakeup", function(){
                //返回更新的数据
            });
        },

        countDown() {
            const count_text = $(".countDown").find(".second")
            const seconds = $(".countDown").attr('data-second') / 1
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            count_text.text(seconds);
        },

        strat_countdown(href) {
            const vm = this
            setTimeout(function() {
                vm.noStop = true
            }, 1000);
            setTimeout(function() {
                var count_text = $(".countDown").find(".second")
                var seconds = $(".countDown").attr('data-second') / 1
                /***** 起始值 *****/
        
                //秒數
                var ippp = seconds
                if (seconds == 0) {
                    var ippp = 60;
                }
                ippp = ippp - 1;
                if (ippp < 10) {
                    ippp = '0' + ippp;
                }
                count_text.text(ippp);
        
                //啟動計時器
                setDelay();
                /***** 起始值 *****/
                //計時器功能
                function setDelay() {
        
                    if (ippp > 0 && vm.noStop) {
                        //分 秒 皆大於0 (ex: 2:35, 2:39之類的)
                        t = setTimeout(function() {
                            ippp = ippp - 1;
                            if (ippp < 10) {
                                ippp = '0' + ippp;
                            }
                            count_text.text(ippp);
                            setDelay();
                        }, 1000)
        
                    } else if (ippp > 0 && vm.noStop) {
                        //分為0 秒數還大於0 (ex: 0:09, 0:36之類的)
                        t = setTimeout(function() {
                            // 秒
                            ippp = ippp - 1;
                            if (ippp < 10) {
                                ippp = '0' + ippp;
                            }
                            count_text.text(ippp);
                            setDelay();
                        }, 1000)
                    } else if (ippp == 0 && vm.noStop) {
                        // 倒數完畢
                        // 有填入function才啟動
                        // $("html").delay(100).animate({ opacity: "0" }, {
                        //     queue: true,
                        //     duration: 800,
                        //     easing: "easeOutQuad",
                        //     complete: function() {
                        //         window.location.assign(href);
                        //     }
                        // });
                    }
                }
            }, 1001);
            vm.noStop = false
        },
        getUserAndPassword(){
            if(location.href.split("?")[1]==undefined){
                this.userexsit = "未填入帳號參數"
            }
            // 取得使用者資料
            var userx = location.href.split("?")[1].split("=")[1]
            // var passwordx = location.href.split("?")[1].split("&")[1].split("=")[1]
            this.user = userx
            // this.password = passwordx 
        }
    },
    created() {
        this.getUserAndPassword()
        this.getTimeStamp();
        // this.countDown();
        this.strat_countdown()
    },
    mounted() {
        // 切換分館
        winform.branchLink()
    },
    watch: {
        timeStamp(){
            this.commodity();
            this.point();
            this.lottery();
        },
        whitchOne(){
            this.commodity();
            this.point();
            this.lottery();
        }
    }
}).$mount('#app')