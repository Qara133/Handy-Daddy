<template>
    <div class="home-appliance-section">
        <HeaderPoster> <h5 class="text-light text-center">
            HOME<span> APPLIANCES</span>
            </h5>
        </HeaderPoster>
        <div class="appliance-section pb-5 container-fluid container align-items-center d-flex flex-column">
            <div class="section-header mt-5 text-center">
                    <h2>HOME APPLIANCES</h2>
                    <p  class="fs-5" >We Proudly Provide These  Services</p>
                    <div class="header-line mx-auto"></div>
            </div>
            <Appliance></Appliance>
    
            <div class=" btn btn-light border-dark px-5 py-2 fw-semibold fs-5">CALL NOW</div>
        </div>
        <div class="fixit mb-5 pb-3"><FixItBox></FixItBox></div>
    </div>
    </template>
    <script>
    import HeaderPoster from '@/components/HeaderPoster.vue';
    import Appliance from '@/components/Appliance.vue';
    import FixItBox from '@/components/FixItBox.vue';
    export default {
        name:"Appliances",
        components: {
            HeaderPoster,
            Appliance,
            FixItBox
        }
    }
    </script>
    <style scoped>

    .poster-caption h5 {
      font-size: 70px;
      font-weight: 700;
    }
    .poster-caption h5 span {
      color: #ffd700;
    }
    .header-line {
      width: 200px;
      height: 3px;
      background-color: rgba(255, 215, 0, 1);
    }
    @media only screen and (max-width: 992px) {
        .poster-caption h5 {
      font-size: 45px;
      font-weight: 700;
      
    }
    .poster-caption h5 span {
      color: #ffd700;
    }
    }
    </style>