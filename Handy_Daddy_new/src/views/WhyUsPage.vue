<template>
<div class="bg-light">
    <HeaderPoster> 
        <h5 class="text-light">
        WHY<span> US</span>
        </h5>
    </HeaderPoster>
    <div class="container">
        <div class="responsive-replacement d-block d-lg-none px-0 mb-5" style="height: 250px;">
                    <div class="responsive-container d-flex align-items-center">
                        <img class="me-0" src="../assets/images/Handyman1.png" alt="" style="width: 250px;height: 250px;">
                        <div class="text-area d-flex flex-column align-items-center ms-0">
                            <p class="text-dark fw-semibold fs-2">WE'LL FIX IT!</p>
                            <button class="btn btn-dark  fs-5 px-4">CALL NOW</button>
                        </div>
                    </div>
                </div>
        
            <div class=" first-item pb-5 px-5">
                <div class="item-header mb-5 pt-5">   
                   <h2>WHY US</h2>
                   <div class="header-line m-0 text-start"></div>
                </div>
                    <div class="item-content d-flex align-items-center">
                        <div class="img-area ms-0 d-none d-lg-block">
                        <img src="../assets/images/HandyMan1.png"  class="img-fluid" alt="">
                        <img src="../assets/images/Rectangle 2562.png" class="img-fluid" alt="">
                    </div>
                    <div class="desc-area pt-4 ms-0">
                         <ul class="text-start list-unstyled">
           <li class="ps-5 py-2">
            <span class="count">1</span>Same day service
           <hr>
           </li> 
           <li class="ps-5 py-2">
            <span class="count">2</span>No hourly charge - flat rate
           <hr>
           </li> 
           <li class="ps-5 py-2">
            <span class="count">3</span>No extra charge for evening and
           week-end services
           <hr>
           </li> 
           <li class="ps-5 py-2">
            <span class="count">4</span>3 month warranty on spare parts
           and labor
           <hr>
           </li> 
                         </ul>
                    </div>
                    </div>
                
            </div>         
        </div>
        <div class="fix-it mb-5"><FixItBox></FixItBox></div>
        <div class="container">
            <div class="second-item pt-5 py-5">
                
                <div class="item-content d-flex align-items-center">
                   
                    <div class="desc-area pt-4 ms-0">
                        <ul class="text-start list-unstyled">
       <li class="ps-5 py-2">
        <span class="count">1</span>Same day service
       <hr>
       </li> 
       <li class="ps-5 py-2">
        <span class="count">2</span>No hourly charge - flat rate
       <hr>
       </li> 
       <li class="ps-5 py-2">
        <span class="count">3</span>No extra charge for evening and
       week-end services
       <hr>
       </li> 
       <li class="ps-5 py-2">
        <span class="count">4</span>3 month warranty on spare parts
       and labor
       <hr>
       </li> 
     </ul>
         </div>
         <div class="img-area ms-0 d-none d-lg-block">
             <img src="../assets/images/toolbox.png" class="img-fluid" alt="" style="height: 250px; width: 350px; top: 60%;">
            <img src="../assets/images/Rectangle 2562.png" class="img-fluid" alt="">
        </div>
      </div>
            
        </div>
        <div class="responsive-adv d-block d-lg-none px-0 mb-5" style="">
                    <div class="responsive-container align-items-center">
                        <img class="me-0" src="../assets/images/Posterpic.png" alt="" style="width: 100%;  margin-top: 50px;">
                        </div>
                    </div>
             <div class="third-item pb-5 px-5">
                
                <div class="item-content d-flex align-items-center">
                    <div class="img-area ms-0 d-none d-lg-block">
                    <img src="../assets/images/HandyMan1.png"  class="img-fluid" alt="">
                    <img src="../assets/images/Rectangle 2562.png" class="img-fluid" alt="">
                </div>
                    <div class="desc-area pt-4 ms-0">
                        <ul class="text-start list-unstyled">
       <li class="ps-5 py-2">
        <span class="count">1</span>Same day service
       <hr>
       </li> 
       <li class="ps-5 py-2">
        <span class="count">2</span>No hourly charge - flat rate
       <hr>
       </li> 
       <li class="ps-5 py-2">
        <span class="count">3</span>No extra charge for evening and
       week-end services
       <hr>
       </li> 
       <li class="ps-5 py-2">
        <span class="count">4</span>3 month warranty on spare parts
       and labor
       <hr>
       </li> 
     </ul>
                </div>
                </div>
            
        </div>
                </div>
       
        </div>
            
            
    
    <div class="fix-it"><FixItBox></FixItBox></div>
</template>
<script>
import HeaderPoster from '@/components/HeaderPoster.vue'
import FixItBox from '@/components/FixItBox.vue';
import WhyUsItem from '@/components/WhyUsItem.vue';
export default {
name: "WhyUsPage",
components: {
 HeaderPoster,
 FixItBox,
 WhyUsItem,
},

}

</script>

<style  scoped>

.container{
    padding: 50px  0!important;
}
.header-line {
  width: 200px;
  height: 3px;
  background-color: rgba(255, 215, 0, 1);
}
.img-area{
    position: relative;
}
.img-area :nth-child(1){
    position: absolute;
    top: 42%;   
    left: 50%;
    transform: translate(-50%, -50%);
    width:380px ;
    height:371px;
}
.img-area :nth-child(2){
    width:430px ;
    height:320px;
}
.count {
    background-color: #ffd700;
    border-radius: 50%;
    padding: 5px 10px;
    margin-right: 10px;
}
.second-item{
    background: rgb(241, 241, 241);
}
.first-item, .third-item{
    background: white;
}

.form-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}
.form-container {
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}
.close-btn {
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  color: #000;
  position: absolute;
  right: 15px;
  top: 10px;
}
.form-control,
.form-select {
  border: 1px solid #ddd;
  height: 50px;
  font-size: 16px;
}
.submit-btn {
  background-color: #ffd700;
  color: black;
  font-weight: bold;
  height: 50px;
  border-radius: 5px;
  border: none;
}
.submit-btn:hover {
  background-color: #e5c100;
}

.header-line {
    width: 200px;
    height: 3px;
    background-color: rgba(255, 215, 0, 1);
  }
  .img-area {
    position: relative;
  }
  .img-area img:nth-child(1) {
    position: absolute;
    top: 42%;   
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 370px;
    z-index: 1;
  }
  .img-area img:nth-child(2) {
    width: 430px;
    height: 320px;
    z-index: 0;
  }
  .count {
    background-color: #ffd700;
    border-radius: 50%;
    padding: 5px 10px;
    margin-right: 10px;
  }


.poster-caption h5 {
  font-size: 100px;
  font-weight: 700;
}
.poster-caption h5 span {
  color: #ffd700;
}

.container {
  padding: 100px;
}
.fix-it {
    margin-bottom: 50px;
}
.responsive-replacement {
    background-color: #ffd700;
}
@media only screen and (max-width: 992px) {
    .first-item .item-content {
        flex-direction: column;
        align-items: center;
    }
}
</style>