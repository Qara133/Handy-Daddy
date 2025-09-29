<template>
    <div>
        <section>
          
               <HeaderCarousel></HeaderCarousel>
         <div class=" container container-fluid">
        
                <WhyUs></WhyUs>
                <Lottery></Lottery>
          </div>
          <div class="appliance-section pb-5 bg-light">
                  <div class="section-header mt-5 text-center">
                    <h2>HOME APPLIANCES</h2>
                    <p  class="fs-5" >We Proudly Provide These  Services</p>
                    <div class="header-line mx-auto"></div>
                  </div>
                  <Appliance></Appliance>
                  <div class="btn-area"><div class="btn ms-auto  see-more-btn">SEE MORE</div></div>
                </div>   
          <div class="container container-fluid"> 
                <Testimonials></Testimonials>       
          </div> 
        <div class="FixIt bg-light">
          <FixItBox></FixItBox>
          </div>    
        </section>
      </div>
</template>
<script>
import Appliance from '@/components/Appliance.vue';
import FixItBox from '@/components/FixItBox.vue';
import HeaderCarousel from '@/components/HeaderCarousel.vue'
import Lottery from '@/components/Lottery.vue'
import Testimonials from '@/components/Testimonials.vue'
import WhyUs from '@/components/WhyUs.vue';
import { ref, onMounted } from 'vue';

export default {
    name: "DesktopMain",
    components: {
        Appliance,
        FixItBox,
        HeaderCarousel,
        Lottery,
        Testimonials,
        WhyUs
    },
  
};
</script>
<style  scoped>
.appliance-section {
  padding-top: 20px;
}

.see-more-btn {
  background-color: #FFD700;
  border: none;
  border-radius: 5px;
  padding: 8px 30px;
  justify-content: center;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  text-decoration: none;
  color: black;
  margin-left: 0;
  width: 200px;
}
.header-line {
  width: 200px;
  height: 3px;
  background-color: rgba(255, 215, 0, 1);
}
section{
  background-color: rgb(233, 233, 233);
}
.container {
  padding-top: 50px;
  padding-bottom: 50px;
}
.FixIt{
  padding-bottom: 100px;
  padding-top: 60px;
}
</style>