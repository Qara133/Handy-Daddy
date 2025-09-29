<template>
  <div class="freezer-repair-section bg-light">
      <HeaderPoster  :style="{ backgroundImage: `url(${backgroundImage})` }">
          <h4 class="text-light text-center">
              REFRIGERATOR<span> REPAIR</span>
              </h4>
      </HeaderPoster>
      <div class="container container-fluid">
        <div class="section-header mt-5 text-center">
              <h2>REFRIGERATOR</h2>
              <p  class="fs-5" >We Proudly Provide These  Services</p>
              <div class="header-line mx-auto"></div>
        </div>
              <div class="responsive-replacement d-block d-lg-none px-0 my-5" style="height: 250px; background-color: #ffd700;">
              <div class="responsive-container d-flex align-items-center">
                  <img class="ms-5" src="../assets/images/fridge.png" alt="" style="width: 200px;height: 250px;">
                  <div class="text-area d-flex flex-column align-items-center ms-0">
                      <p class="text-dark fw-semibold fs-2">WE'LL FIX IT!</p>
                      <button class="btn btn-dark  fs-5 px-4">CALL NOW</button>
                  </div>
              </div>
          </div>
            <div class="first-item">
              <RepairItem></RepairItem>
            </div>
              <div class="text-area text-start fs-5 fw-light p-5" style="max-width: 1080px;">
                  <p>It is better to contact <span class="fw-semibold">Handy Daddy specialists</span>, who have all the necessary tools and impressive experience in repairing refrigerators of various types and brands. In the shortest time possible, our masters will determine the cause of the breakdown and bring your refrigerator to working condition. </p>
                   <br> 
                  <p> We recommend that you contact refrigerator repair specialists as soon as you notice the problem. We believe that there is no defect too small to check. A quick check could save you the expense of costly refrigerator repairs.</p>  
              </div>     
          <div class="section-header mt-5 text-center">
             <h2 style="text-transform: uppercase;">Brands we serve</h2>
             <div class="header-line mx-auto"></div>
           </div>
              
          
     <div class="table table-borderless py-5 d-none d-md-block d-lg-block d-xl-block d-xxl-block">
      <table class="table-responsive text-center table fs-5 my-5 table-light table-borderless" style="max-width: 1000px;">
    <tbody>
      <tr>
      <td class="border-right">Amana</td>
      <td class="border-right">Electrolux</td>
      <td class="border-right">Kenmore</td>
      <td >Miele</td>
      </tr>
 
    <tr>
      <td class="border-right">Bosch</td>
      <td class="border-right">Frigidaire</td>
      <td class="border-right">GE</td>
      <td >Jenn-air</td>
    </tr>
    <tr>
      <td class="border-right">Broan</td>
      <td class="border-right">LG</td>
      <td class="border-right">KitchenAid</td>
      <td>Maytag</td>
    </tr>
    <tr>
      <td class="border-right">Miele</td>
      <td class="border-right">Panasonic</td>
      <td class="border-right">Samsung</td>
      <td>WhirlPool</td>
    </tr>
    </tbody>
   </table>
     </div>

     <div class="container my-5 py-5 d-md-none d-lg-none d-xl-none d-xxl-none">
  <div class="row">

    <div class="col-md-6">
      <table class="table text-center table-light table-borderless w-100">
        <tbody>
          <tr>
            <td class="border-right">Amana</td>
            <td>Electrolux</td>
          </tr>
          <tr>
            <td class="border-right">Bosch</td>
            <td>Frigidaire</td>
          </tr>
          <tr>
            <td class="border-right">Broan</td>
            <td>LG</td>
          </tr>
          <tr>
            <td class="border-right">Miele</td>
            <td>Panasonic</td>
          </tr>
          <tr>
            <td class="border-right">Kenmore</td>
            <td>Miele</td>
          </tr>
          <tr>
            <td class="border-right">GE</td>
            <td>Jenn-air</td>
          </tr>
          <tr>
            <td class="border-right">KitchenAid</td>
            <td>Maytag</td>
          </tr>
          <tr>
            <td class="border-right">Samsung</td>
            <td>WhirlPool</td>
          </tr>
         </tbody>
       </table>
     </div>
    </div>
   </div>
           </div>
              <FixItBox></FixItBox>
              <div class=" container container-fluid appliance py-5">
            <div class="text-center">
              <h3>OTHER APPLIANCE</h3>
              <div class="header-line mx-auto"></div>
              <Appliance />
            </div>
          </div>  
          <div class="d-block d-lg-none mb-5 ">
        <FixItBox></FixItBox>
    </div>        
  </div>
  </template>
  <script>
  import FixItBox from '@/components/FixItBox.vue';
  import HeaderPoster from '@/components/HeaderPoster.vue';
  import Appliance from '@/components/Appliance.vue';
  import RepairItem from '@/components/RepairItem.vue'
  export default {
      name: "RefrigeratorRepair",
      components: {
          HeaderPoster,
          FixItBox,
          Appliance,
          RepairItem,
      },
      data() {
      return {
        backgroundImage: new URL('@/assets/images/Ref.png', import.meta.url).href
      };
    }
  }
  </script>
  <style scoped>
  .border-right {
  border-right: 2px solid #c5c5c5;
}
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
  
   .second-item {
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
      width:230px ;
      height:230px;
  }
  .img-area :nth-child(2){
      width:280px ;
      height:239px;
  }
      .poster-caption h4 {
        font-size: 60px;
        font-weight: 700;
      }
      .poster-caption h4 span {
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
      @media only screen and (max-width: 600px) {
        .poster-caption h4 {
        font-size: 40px;
        font-weight: 700;
        }
 
      
      }
  </style>