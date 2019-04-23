(function () {

  var speed = 20;
  function writeCode(pre, code, fn) {
    console.log(code)
    var container = document.getElementById('code');
    var style = document.getElementById('style');
    var n = 0;
    var timeId = setTimeout(function run() {
      n += 1;
      container.innerHTML = code.substring(0, n)
      style.innerHTML = code.substring(0, n);
      container.scrollTop = container.scrollHeight;
      if (n < code.length) {
        setTimeout(run, speed);
        fn && fn()
      }
    }, speed);
  }

  var code2 = '212'

  var code1 = `
 /* 画一个皮卡丘 */
  .Pikachu{
    height: 50%;
    background-color: #FFE600;
    display: flex;
    justify-content:center;
    align-items:center;
    border:1px solid black;
  }
  .wrapper{
     width:100%;
    height:192px;
    position:relative;
    
  }
  .wrapper> :not(:last-child){
    z-index: 1;
  }
  /* 画一鼻子 */
  .nose{
    width:0px;
    height:0px;
    position: absolute;
    left:50%;
    top:59px;
    border:15px solid red;
    border-radius:30px;
    border-color:#000000 transparent transparent;
   
    transform:translateX(-15px)
  
  }
  /* 画一双眼睛 */
  .eye{
    width:40px;
    height:50px;
    border:1px solid black;
    border-radius:50%;
    position:absolute;
    background-color: #292928;
  }
  .eye.right{
    right:50%;
    transform:translateX(98px);
    border:3px solid #000000;
  }
   .eye.left{
    left:50%;
    transform:translateX(-98px)
  }
  .eye::before{
    content:'';
    display: block;
    width:20px;
    height:20px;
    background: white;
    border-radius:50%;
    position: absolute;
    left:8px;
     border:3px solid #000000;
    top:5px;
  }
  /* 画一对红腮 */
  .face{
    width:55px;
    height:55px;
    background-color: #FF0000;
    position: absolute;
    border-radius:50%;
    top:76.8px;
    border:3px solid #000000;
  }
  .face.left{
     right:50%;
     transform:translateX(-100px)
  }
    .face.right{
     left:50%;
     transform:translateX(100px)
  }
  /* 最后画嘴巴 */
  .upperlip{
    width:60px;
    height:20px;
    border-bottom:2px solid black;
    border-top:none;
    position:absolute;
    background: #FFE600;
  }
  .upperlip.left{
     right:50%;
    top:70px;
     border-right:none;
  
     border-bottom-left-radius:40px 20px;
    transform:rotate(-15deg)
      
  }
  .upperlip.right{
     left:50%;
     top:70px;
    border-left:none;  
     border-bottom-right-radius:40px 20px;
    transform:rotate(15deg);
       } 
  
  .mouthbox{
    width:110px;
    height:100px;
      bottom:13px;
    position:absolute;
      left:50%;
     margin-left:-55px;
      overflow:hidden;

    }
  .mouth{
    width:110px;
    height:1000px;
    background-color: #9B000A;
    bottom:0;
      position:absolute;
    border-radius:100px/300px;
   overflow:hidden;
     border:3px solid #000000;
  }
  .mouth::after{
    content:'';
    position:absolute;
    bottom:0;
    width:80px;
    height:80px;
    background-color: #FF485F;
    left:50%;
    margin-left:-40px;
    border-radius:80px/60px;

  }
  /* 搏君微微一笑*/
  `

  writeCode('', code1)
  var s;


  $('.button').on('click','button',function(e){
    var $btn =$(e.currentTarget);
    var ct =$btn.attr('id')
    $btn.addClass('active')
    .siblings('.active').removeClass('active')
    switch(ct){
      case 'btn1':
        speed=100;
        break;
      case 'btn2':
        speed=50;
        break;
      case 'btn3':
        speed=10;
        break;
    }
  })

})();



