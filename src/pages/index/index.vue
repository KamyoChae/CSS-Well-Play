<template>
  <div class="index_wrapper">
    
    <div class="entry wide tall" id="bb8">
      <div class="no-scale"></div>
    </div>

    <router-link to="/Home" class="navto">CSS Well Play!</router-link>
  </div>
</template>

<script>
export default {
  name: "Index"
};
</script>

<style lang="stylus" scoped>
.index_wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #eee;
} 
.navto{
    display block
    font-size 60px
    width 50%
    padding-top 4em 
    padding-bottom 1em
    background #444
    text-align center
    margin auto
    transition all .25s
}
.navto:hover{
    color #fff
}

#bb8 {
  background: #444;
  z-index: 5;
}
.entry.tall {
  min-height: 450px;
}
.entry {
  float: left;
  width: 100%;
}
.entry {
  text-align: center;
  min-height: 100%;
  position: relative;
}
#bb8 div {
  width: 120px;
  height: 78px;
  margin-left: -60px;
  margin-top: -145px;
  background-color: white;
  background-image: radial-gradient(
      circle at 85px 50px,
      #555 5px,
      transparent 6px
    ),
    radial-gradient(circle at 85px 50px, white 7px, transparent 8px),
    radial-gradient(circle at 85px 50px, #555 10px, transparent 11px),
    radial-gradient(
      circle at 58px 32px,
      rgba(255, 255, 255, 0.9) 2px,
      transparent 3px
    ),
    radial-gradient(circle at 52px 36px, #333 12px, transparent 13px),
    radial-gradient(circle at 52px 36px, #555 16px, transparent 17px),
    radial-gradient(circle at 52px 37px, white 20px, transparent 20px),
    linear-gradient(to top, #aaa 7px, transparent 7px),
    linear-gradient(
      to bottom,
      white 7px,
      #ccc 7px,
      #aaa 15px,
      white 15px,
      white 18px,
      #ffa500 18px,
      #ffa500 24px,
      transparent 24px
    ),
    linear-gradient(
      to right,
      transparent 29px,
      #ccc 30px,
      #ccc 31px,
      transparent 31px,
      transparent 60px,
      #ccc 61px,
      #ccc 62px,
      transparent 62px
    ),
    linear-gradient(
      to right,
      transparent 5px,
      white 5px,
      white 10px,
      transparent 10px,
      transparent 30px,
      white 30px,
      white 40px,
      transparent 40px,
      transparent 50px,
      white 50px,
      white 100px,
      transparent 100px,
      transparent 115px,
      white 115px
    ),
    linear-gradient(to top, #ffa500 16px, transparent 16px);
  border-radius: 50%/60px;
  border-bottom-right-radius: 50px 10px;
  border-bottom-left-radius: 50px 10px;
  border-bottom: 8px solid #ccc;
  -webkit-box-shadow: inset -5px -2px 20px rgba(0, 0, 0, 0.4);
  box-shadow: inset -5px -2px 20px rgba(0, 0, 0, 0.4);
}
.entry div {
  position: absolute;
  left: 50%;
  top: 50%;
}
#bb8 div:before {
  width: 200px;
  height: 200px;
  margin-left: -100px;
  margin-top: 79px;
  left: 50%;
  background-color: white;
  background-image: radial-gradient(
      ellipse at top right,
      #ffa500 50px,
      transparent 50px
    ),
    radial-gradient(ellipse at bottom right, #ffa500 50px, transparent 50px),
    radial-gradient(ellipse at top left, #ffa500 50px, transparent 50px),
    radial-gradient(ellipse at bottom left, #ffa500 50px, transparent 50px),
    radial-gradient(circle at 100px 100px, transparent 60px, white 61px),
    radial-gradient(circle at 100px 100px, transparent 44px, #ffa500 45px),
    linear-gradient(
      to bottom,
      transparent 90px,
      white 90px,
      white 93px,
      transparent 93px,
      transparent 99px,
      white 99px,
      white 103px,
      transparent 103px,
      transparent 108px,
      white 108px,
      white 112px,
      transparent 112px
    ),
    radial-gradient(circle at 100px 100px, #aaa 24px, transparent 25px),
    radial-gradient(circle at 100px 100px, white 28px, transparent 29px),
    linear-gradient(
      -45deg,
      transparent 132px,
      white 132px,
      white 136px,
      #ffa500 136px,
      #ffa500 152px,
      white 152px,
      white 155px,
      transparent 155px
    ),
    linear-gradient(
      45deg,
      transparent 129px,
      white 129px,
      white 133px,
      #ffa500 133px,
      #ffa500 150px,
      white 150px,
      white 153px,
      transparent 153px
    ),
    linear-gradient(
      to bottom,
      transparent 75px,
      white 75px,
      white 119px,
      transparent 119px
    ),
    radial-gradient(circle at 100px 100px, #aaa 40px, transparent 41px),
    radial-gradient(circle at 100px 100px, white 44px, transparent 45px);
  border-radius: 50%;
  z-index: -2;
  -webkit-animation: spin 0.8s infinite linear;
  animation: spin 0.8s infinite linear;
}
.entry div:before,
.entry div:after {
  display: block;
  content: "";
  position: absolute;
}
#bb8 div:after {
  width: 200px;
  height: 200px;
  margin-left: -100px;
  margin-top: 79px;
  left: 50%;
  border-radius: 50%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6) 10px,
    transparent 15px
  );
  -webkit-box-shadow: inset 0 -20px 30px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 -20px 30px rgba(0, 0, 0, 0.5);
  z-index: -1;
  -webkit-transform: translate3d(0, 0, 0);
}

@-webkit-keyframes spin {
  0 {
    -webkit-transform: rotate(0) translateZ(0);
    transform: rotate(0) translateZ(0);
  }
  100% {
    -webkit-transform: rotate(-360deg) translateZ(0);
    transform: rotate(-360deg) translateZ(0);
  }
}
@keyframes spin {
  0 {
    -webkit-transform: rotate(0) translateZ(0);
    transform: rotate(0) translateZ(0);
  }
  100% {
    -webkit-transform: rotate(-360deg) translateZ(0);
    transform: rotate(-360deg) translateZ(0);
  }
}
 
</style>
