<template>
<div class="lottery">
    <div class="lottery-section mx-5 mb-5"> 
    <div class="blog-header text-center w-100 my-5 py-4">
    <h2>JOIN OUR LOTTERY</h2>
    <div class="header-line mx-auto"></div>
    </div>
    <div class="container">
        <div class="yellow-box w-100 rounded-5 align-items-center text-start container-fluid">
        <div class="box-desc pt-2 ps-5">
        <div class="box-header text-start fw-semibold">Lorem Ipsum <br> <span class="fw-light">of dream lottery</span></div>
        <router-link :to="{name: 'LotteryPage'}" class="text-decoration-none"><div class="btn learn-btn ms-0 text-start border-black fw-semibold fs-5 rounded-2 px-5 py-3 d-none d-sm-none d-md-block d-lg-block">LEARN MORE  <font-awesome-icon :icon="['fas', 'arrow-right']" /></div></router-link>
        </div>
        <div class="money-img"><img src="../assets/images/moneybag.png" alt=""></div>
        <div class="lottery-img"><img src="../assets/images/lottery.png" alt=""></div>
        </div>
    </div>  
    </div>
</div>
</template>
<script>
export default {
  name: "Lottery",
}
</script>
<style scoped>
.btn:hover{
  background-color: rgba(112, 112, 112, 0.429);
  color: black;
}
.header-line {
  width: 200px;
  height: 3px;
  background-color: rgba(255, 215, 0, 1);
}
.yellow-box{
  background-color: #FFD700;  
  height: 300px;
  overflow: hidden;
  z-index: 0;
  position: relative;
}
.yellow-box .box-desc .box-header {
  font-size: 60px;
}

.lottery-img { 
  top: 12px;
  right: -10px;
  z-index: 1;  
  position: absolute;
}

.money-img {
  z-index: 2;
  top: -30px;
  right: 40px;
  overflow: visible;
  position: absolute;
  }
  
  .box-desc .learn-btn{
  width: 280px;
  }
  
  @media only screen and (max-width: 600px) {
  
  .container .yellow-box .box-desc .box-header{
    font-size: 30px;
  }
  .yellow-box .money-img img{
   width: 300px;
  }
  .money-img{
    top: 60px;
    right: 0px;
  }
  .lottery-img {
    top: 80px;
    right: -20px;
  }
}

@media only screen and (min-width: 576px) {

.container .yellow-box .box-desc .box-header{
  font-size: 35px;
}
.yellow-box .money-img img{
 width: 300px;
}
.money-img{
  top: 60px;
  right: 0px;
}
.lottery-img {
  top: 80px;
  right: -20px;
}
}

@media only screen and (min-width: 768px) {

.container .yellow-box .box-desc .box-header{
  font-size: 30px;
}
.yellow-box .money-img img{
 width: 300px;
}
.money-img{
  top: 60px;
  right: 0px;
}
.lottery-img {
  top: 80px;
  right: -20px;
}
}

@media only screen and (min-width: 992px) {

.lottery-img { 
top:42px;
right: -20px;
z-index: 1;  
position: absolute;
}
.money-img {
z-index: 2;
top: -40px;
right: 40px;
overflow: visible;
position: absolute;
}
.money-img img{
  width: 470px!important;
}
.yellow-box .box-desc .box-header {
font-size: 50px!important;
}
}
  </style>