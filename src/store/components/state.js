import homeList from './homeList.js'
export default{
    homeList,
    "content": {
        id:"0", 
        nav:"/show/content#2019-02-1",
        imgsrc:"../../images/0102.JPG",
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
    "nowIndex":"",
    "preTitle":"",
    "nextTitle":"",
}