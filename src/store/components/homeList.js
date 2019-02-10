
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
            title:"1纯css实现动态黄包s实现动态黄包s实现动态黄包车黄包车",
            time:"2018-02-02",
            tags:["canvas", "svg","css3","h5"], 
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
            id:"0", 
            nav:"/show/content#2019-02-1",
            imgsrc:"../../images/2019-02-0201.png",
            title:"0纯css实现动态黄包s实现动态黄包s实现动态黄包车黄包车",
            time:"2019-05-02",
            tags:["canvas", "h5"], 
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

    ] 

    export default homeList