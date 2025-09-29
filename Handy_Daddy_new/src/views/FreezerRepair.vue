<template>
<div class="freezer-repair-section bg-light">
    <HeaderPoster  :style="{ backgroundImage: `url(${backgroundImage})` }"  >
        <h5 class="text-light text-center">
            FREEZER<span> REPAIR</span>
            </h5>
    </HeaderPoster>
    <div class="container container-fluid">
        <div class="section-header mt-5 text-center">
                    <h2>FREEZER</h2>
                    <p  class="fs-5" >We Proudly Provide These  Services</p>
                    <div class="header-line mx-auto"></div>

                    <div class="responsive-replacement d-block d-lg-none px-0 my-5" style="height: 250px; background-color: #ffd700;">
                    <div class="responsive-container d-flex align-items-center">
                        <img class="ms-5" src="../assets/images/fridge.png" alt="" style="width: 200px;height: 250px;">
                        <div class="text-area d-flex flex-column align-items-center ms-0">
                            <p class="text-dark fw-semibold fs-2">WE'LL FIX IT!</p>
                            <button class="btn btn-dark  fs-5 px-4">CALL NOW</button>
                        </div>
                    </div>
                </div>

                    <div class="first-item p-5 mt-5 d-flex align-items-center">
                        <div class="img-area me-5 d-none d-lg-block">
                        <img src="../assets/images/fridge.png"  class="img-fluid" alt="">
                        <img src="../assets/images/yellowbox.png" class="img-fluid" alt="">
                    </div>
                    <div class="desc-area text-justify fs-5 fw-light" style="margin-left:40px;">
                     <p>Refrigerators are rather complex devices, and it is <br> possible to determine the exact cause of a breakdown <br> only with the help of special diagnostic equipment. <br>
                     <span class="fw-semibold">-Do not try to find the problem "by touch" </span>
                    </p>
                    </div>
                    </div>
                    <div class="responsive-item d-block d-lg-none text-justify fs-5 fw-light p-5">
                        <p>It is better to contact Handy Daddy specialists, who have all the necessary tools and impressive experience in repairing refrigerators of various types and brands. In the shortest time possible, our masters will determine the cause of the breakdown and bring your refrigerator to working condition. </p>
                         <p> We recommend that you contact refrigerator repair specialists as soon as you notice the problem. We believe that there is no defect too small to check. A quick check could save you the expense of costly refrigerator repairs.</p>
                        
                    </div>
                    <div class="advert my-5 d-none d-lg-block"> 
                        <img src="../assets/images/freezer.png" alt="" class="img-fluid" style="width: 1075px; height: 500px;">
                        <hr style="max-width: 1080px; margin-left: 108px; margin-top: 50px;">
                    </div>
                   <div class="second-item d-none d-lg-block">
                    <div class="p-5 d-flex align-items-center ">
                        <div class="img-area me-5">
                        <img src="../assets/images/HandyMan1.png"  alt="">
                        <img src="../assets/images/yellowbox.png" alt="">
                    </div>
                    <div class="desc-area text-justify fs-5 fw-light" style="margin-left:40px;">
                     <p>It is better to contact Handy Daddy specialists, who have all the necessary tools and impressive experience in repairing refrigerators of various types and brands. In the shortest time possible, our masters will determine the cause of the breakdown and bring your refrigerator to working condition.
                    </p>
                    </div>
                    </div>
                   </div>
            </div>
         </div>
         <FixItBox></FixItBox>
         <div class="container container-fluid">
            <div class="recommendation fs-4 bg-light p-4 my-5 d-none d-lg-block" style="max-width: 1080px;">
                <hr>
                <p class="text-justify fw-light">We recommend that you contact refrigerator repair specialists as soon as you notice the problem. We believe that there is no defect too small to check. A quick check could save you the expense of costly refrigerator repairs.
                </p>
            </div>
         </div>
         <div class="call-to-action text-center position-relative mb-5 d-none d-lg-block">
            <p class="text">
            Call us now to schedule <br />
            a refrigerator repair <span class="highlight">+587 000 000</span>!
            </p>
        </div> 

        <div class=" container container-fluid appliance py-5">
      <div class="text-center">
        <h3>OTHER APPLIANCE</h3>
        <div class="header-line mx-auto"></div>
        <Appliance />
      </div>
    </div>
    <div class="d-block d-lg-none mb-5">
        <FixItBox></FixItBox>
    </div>
        
</div>
</template>
<script>
import FixItBox from '@/components/FixItBox.vue';
import HeaderPoster from '@/components/HeaderPoster.vue';
import Appliance from '@/components/Appliance.vue';
export default {
    name: "FreezerRepair",
    components: {
        HeaderPoster,
        FixItBox,
        Appliance
    },
    data() {
    return {
      backgroundImage: new URL('@/assets/images/Poster4.png', import.meta.url).href
    };
  }
}
</script>
<style scoped>
.call-to-action {
  background-color: #1e1b1b;
  color: #ffd700;
  padding: 20px 0;
  font-size: 26px;
  font-weight: 400;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.call-to-action::before,
.call-to-action::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 25%;
  height: 2px;
  background-color: #ffd700;
}


.call-to-action::before {
  left: 0;
}

.call-to-action::after {
  right: 0;
}



.first-item, .second-item {
    background-color: white;
    max-width: 1080px;
}
.img-area{
    position: relative;
}
.img-area :nth-child(1){
    position: absolute;
    top: 52%;   
    left: 50%;
    transform: translate(-50%, -50%);
    width:180px ;
    height:230px;
}
.img-area :nth-child(2){
    width:280px ;
    height:239px;
}
    .poster-caption h5 {
      font-size: 70px;
      font-weight: 700;
    }
    .poster-caption h5 span {
      color: #ffd700;
    }
    .poster-area{
        height: 374px;
    }
    .header-line {
      width: 200px;
      height: 3px;
      background-color: rgba(255, 215, 0, 1);
    }

</style>