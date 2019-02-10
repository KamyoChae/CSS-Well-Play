
const homeList =  [ 

        {
            id:"2", 
            nav:"/show/content#2019-02-021",
            imgsrc:"../../images/2019-02-0201.png",
            title:"纯h5+css实现视觉错觉",
            time:"2019-02-04",
            tags:["css3","h5"], 
            innerHtml:'<div class="entry" id="impossible-cube"><div></div></div>',
            innerCss:`#impossible-cube div {
                width: 220px;
                height: 200px;
                margin-left: -110px;
                margin-top: -72px;
                background-repeat: no-repeat;
                background-image: linear-gradient(30deg,transparent 62%,#d9cdf2 62%,#d9cdf2 71.2%,transparent 71.2%),linear-gradient(30deg,transparent 35%,#d9cdf2 35%,#d9cdf2 89%,transparent 89%),linear-gradient(30deg,transparent 24.5%,#d9cdf2 24.5%,#d9cdf2 32%,transparent 32%),linear-gradient(-30deg,transparent 39%,#bea9e9 39%,#bea9e9 78%,transparent 78%),linear-gradient(30deg,transparent 28%,#f4f1fb 28%,#f4f1fb 39.5%,transparent 39.5%),linear-gradient(-30deg,transparent 62%,#bea9e9 62%,#bea9e9 71.2%,transparent 71.2%),linear-gradient(-30deg,transparent 35%,#bea9e9 35%,#bea9e9 89%,transparent 89%),linear-gradient(-30deg,transparent 24.5%,#bea9e9 24.5%,#bea9e9 32%,transparent 32%),linear-gradient(30deg,transparent 39%,#d9cdf2 39%,#d9cdf2 78%,transparent 78%),linear-gradient(-30deg,transparent 28%,#f4f1fb 28%,#f4f1fb 39.5%,transparent 39.5%),linear-gradient(30deg,transparent 41%,#d9cdf2 41%,#d9cdf2 50.5%,transparent 50.5%),linear-gradient(30deg,transparent 56%,#f4f1fb 56%,#f4f1fb 68%,transparent 68%),linear-gradient(-30deg,transparent 41%,#bea9e9 41%,#bea9e9 50.5%,transparent 50.5%),linear-gradient(-30deg,transparent 56%,#f4f1fb 56%,#f4f1fb 68%,transparent 68%),linear-gradient(150deg,transparent 10.2%,#f4f1fb 10.2%,#f4f1fb 26%,transparent 26%),linear-gradient(150deg,transparent 24%,#bea9e9 24%,#bea9e9 43%,transparent 43%),linear-gradient(-150deg,transparent 10.2%,#f4f1fb 10.2%,#f4f1fb 26%,transparent 26%),linear-gradient(-150deg,transparent 24%,#d9cdf2 24%,#d9cdf2 43%,transparent 43%);
                background-size: 50% 100%,9% 100%,50% 100%,10% 100%,50% 100%,50% 100%,9% 100%,50% 100%,10% 100%,50% 100%,40% 100%,90% 93.8%,40% 100%,90% 93.8%,50% 30%,50% 30%,50% 30%,50% 30%;
                background-position: 0 100%,0 100%,0 100%,8% 100%,0 100%,100% 100%,100.2% 100%,100% 100%,92% 100%,100% 100%,80% 100%,0 100%,20% 100%,100% 100%,0 0,0 0,100% 0,100% 0;
            }
            #impossible-cube div:before {
                width: 18%;
                height: 230px;
                left: 50%;
                margin-left: -9%;
                bottom: 0;
                background-repeat: no-repeat;
                background-image: linear-gradient(30deg,transparent 6%,#d9cdf2 6%),linear-gradient(-30deg,transparent 6%,#bea9e9 6%);
                background-size: 50.5% 100%;
                background-position: 0 0,100% 0;
            }
            #impossible-cube div:after {
                width: 220px;
                height: 70px;
                top: -60px;
                background-repeat: no-repeat;
                background-image: linear-gradient(150deg,transparent 54.6%,#f4f1fb 54.6%,#f4f1fb 69.1%,transparent 69.1%),linear-gradient(-150deg,transparent 54.6%,#f4f1fb 54.6%,#f4f1fb 69.1%,transparent 69.1%),linear-gradient(150deg,transparent 60%,#bea9e9 60%,#bea9e9 83.6%,transparent 83.6%),linear-gradient(-150deg,transparent 60%,#d9cdf2 60%,#d9cdf2 84%,transparent 84%);
                background-size: 50.1% 100%;
                background-position: 0 0,100% 0,0 0,100% 0;
            }
            .entry div:before, .entry div:after {
                display: block;
                content: '';
                position: absolute;
            }
            .entry {
                text-align: center;
                min-height: 400px;
                position: relative;
            }
            #impossible-cube {
                background: #9370db;
            }
            .entry div {
                position: absolute;
                left: 50%;
                top: 50%;
            }`,
        },
        {
            id:"1", 
            nav:"/show/content#2019-02-0",
            imgsrc:"../../images/2019-02-0201.png",
            title:"一个div画出来的小脑斧",
            time:"2018-02-02",
            tags:["canvas", "svg","css3","h5"], 
            innerHtml:'<div class="entry" id="tiger"><div></div></div>',
            innerCss:`#tiger {
                background: #899d4e;
            }
            #tiger div {
                width: 200px;
                height: 150px;
                margin-left: -100px;
                margin-top: -75px;
                background-color: #ff8c00;
                background-image: linear-gradient(100deg,transparent 42%,#ff4500 42%),linear-gradient(-100deg,transparent 42%,#ff4500 42%),linear-gradient(15deg,transparent 45%,#ff8c00 45%),linear-gradient(-15deg,transparent 45%,#ff8c00 45%),radial-gradient(circle at 65px 65px,white 3px,transparent 3px),radial-gradient(circle at 62px 68px,black 5px,transparent 5px),radial-gradient(circle at 62px 68px,#ffd700 11px,transparent 11px),radial-gradient(ellipse at 60px 70px,black 26px,transparent 26px),radial-gradient(circle at 140px 65px,white 3px,transparent 3px),radial-gradient(circle at 137px 68px,black 5px,transparent 5px),radial-gradient(circle at 137px 68px,#ffd700 11px,transparent 11px),radial-gradient(ellipse at 139px 70px,black 26px,transparent 26px),radial-gradient(circle at center 65px,transparent 66%,#fdf5e6 66%),radial-gradient(ellipse at center 90px,#ff8c00 52%,transparent 52%),radial-gradient(ellipse at center 40px,transparent 63%,black 63%),radial-gradient(ellipse at center 5px,black 7px,transparent 7px),radial-gradient(ellipse at 75px 2px,black 6px,transparent 6px),radial-gradient(ellipse at 125px 2px,black 6px,transparent 6px);
                background-repeat: no-repeat;
                background-size: 15px 68px,15px 68px,60px 20px,60px 20px,100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100%;
                background-position: 85px 30px,100px 30px,40px 50px,102px 50px,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0;
                border-top-left-radius: 80px 100px;
                border-top-right-radius: 80px 100px;
                border-bottom-left-radius: 100px 40px;
                border-bottom-right-radius: 100px 40px;
            }
            .entry div {
                position: absolute;
                left: 50%;
                top: 50%;
            }
            #tiger div:before {
                width: 60px;
                height: 45px;
                left: 50%;
                bottom: 10px;
                margin-left: -55px;
                background-color: #f5deb3;
                border-radius: 50%;
                -webkit-box-shadow: 50px 0 0 #f5deb3, 25px 15px 0 -16px black, 25px 20px 0 -3px #eec67b;
                box-shadow: 50px 0 0 #f5deb3, 25px 15px 0 -16px black, 25px 20px 0 -3px #eec67b;
            }
            
            .entry div:before, .entry div:after {
                display: block;
                content: '';
                position: absolute;
            }
            #tiger div:after {
                width: 30px;
                height: 12px;
                left: 50%;
                bottom: 42px;
                margin-left: -15px;
                background-color: black;
                border-radius: 2px 2px 10px 10px;
                -webkit-box-shadow: -85px -75px 0 -2px rgba(0,0,0,0.3), -81px -80px 0 10px #ff8c00, 84px -75px 0 -2px rgba(0,0,0,0.3), 80px -80px 0 10px #ff8c00, -48px 8px 0 -5px white, -50px 18px 0 -5px white, 48px 8px 0 -5px white, 50px 18px 0 -5px white;
                box-shadow: -85px -75px 0 -2px rgba(0,0,0,0.3), -81px -80px 0 10px #ff8c00, 84px -75px 0 -2px rgba(0,0,0,0.3), 80px -80px 0 10px #ff8c00, -48px 8px 0 -5px white, -50px 18px 0 -5px white, 48px 8px 0 -5px white, 50px 18px 0 -5px white;
            }
            .entry {
                float: left;
                width: 100%;
            }
            .entry {
                text-align: center;
                min-height: 400px;
                position: relative;
            }`,
        },
        {
            id:"0", 
            nav:"/show/content#2019-02-1",
            imgsrc:"../../images/2019-02-0201.png",
            title:"用css画一个披萨饼",
            time:"2019-01-02",
            tags:["css3", "h5"], 
            innerHtml:'<div class="entry threes" id="pizza-pie"><div></div></div>',
            innerCss:`#pizza-pie {
                background-color: #f5f5dc;
            }
            .entry {
                float: left;
                width: 100%;
            }
            .entry {
                text-align: center;
                min-height: 400px;
                position: relative;
            }
            #pizza-pie div {
                width: 120px;
                height: 120px;
                margin-left: -63px;
                margin-top: -63px;
                background-color: #deb887;
                background-image: radial-gradient(#ffe970 50px,transparent 50px),radial-gradient(#cd853f 15%,transparent 16%),radial-gradient(#cd853f 15%,transparent 16%);
                background-size: 100% 100%,10px 10px,10px 10px;
                background-position: center center,0 0,5px 5px;
                border-radius: 50%;
                border: 3px solid #c88937;
            }
            
            .entry div {
                position: absolute;
                left: 50%;
                top: 50%;
            }
            #pizza-pie div:before {
                width: 120px;
                height: 120px;
                background-repeat: no-repeat;
                background-image: radial-gradient(#b22222 50%,transparent 50%),radial-gradient(#b22222 50%,transparent 50%),radial-gradient(#b22222 50%,transparent 50%),radial-gradient(#b22222 50%,transparent 50%),radial-gradient(#b22222 50%,transparent 50%),radial-gradient(#b22222 50%,transparent 50%),radial-gradient(#b22222 50%,transparent 50%);
                background-size: 24px 24px;
                background-position: 24px 26px,52px 16px,78px 36px,48px 46px,18px 54px,38px 76px,70px 68px;
            }
            .entry div:before, .entry div:after {
                display: block;
                content: '';
                position: absolute;
            }
            `,
        },

    ] 

    export default homeList