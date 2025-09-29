<template>
    <div class="fag-section bg-light">
        <HeaderPoster><h5 class="text-light text-center text-break">FREQUENTLY ASKED <br>
     <span> QUESTIONS </span></h5></HeaderPoster>
     <div class=" container container-fluid about-services">
        <h2 class="mt-5">ABOUT SERVICES</h2>
        <div class="header-line mx-0 mb-5"></div>

        
        <div class="accordion fs-6 bg-light pb-5" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button bg-light text-body-secondary pb-5 fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What appliances and systems are repaired?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show bg-light" data-bs-parent="#accordionExample">
        <div class="accordion-body bg-light">
        There is no cap to the number of service appointments you can schedule with Super. We're here to help you
        care for your home, whether you prefer annual check-ups or monthly maintenance.
      </div>
    </div>
  </div>
  <div class="accordion-item ">
    <h2 class="accordion-header">
      <button class="accordion-button bg-light collapsed text-body-secondary pb-5 fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        When can i request service?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body bg-light">
        There is no cap to the number of service appointments you can schedule with Super. We're here to help you
        care for your home, whether you prefer annual check-ups or monthly maintenance.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed bg-light text-body-secondary pb-5 fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        How often can i schedule service?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body bg-light">
        There is no cap to the number of service appointments you can schedule with Super. We're here to help you
        care for your home, whether you prefer annual check-ups or monthly maintenance.
      </div>
    </div>
  </div>
  <div class="accordion-item border-bottom">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed bg-light text-body-secondary pb-5 fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        What appliances and systems are repaired?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body bg-light">
        There is no cap to the number of service appointments you can schedule with Super. We're here to help you
        care for your home, whether you prefer annual check-ups or monthly maintenance.
      </div>
    </div>
  </div>
        </div>

    </div>
<div class="fix-it mb-5"><FixItBox></FixItBox></div>
    </div>
</template>
<script>
import FixItBox from '@/components/FixItBox.vue';
import HeaderPoster from '@/components/HeaderPoster.vue';

export default{
    name: "FAQ",
    components:{
        FixItBox,
        HeaderPoster
    }
}
</script>

<style scoped>
.show {
    color: #212529;
}
.show .accordion-item {
    color: #212529;
 
}
.poster-caption h5 {
    font-size: 60px;
    font-weight: 700;
  }
.poster-caption h5 span {
    color: #ffd700;
  }
  .header-line {
    width: 250px;
    height: 3px;
    background-color: rgba(255, 215, 0, 1);
  }

@media only screen and (max-width: 768px) {
    .poster-caption h5{
     font-size: 40px;
     
    }
}
  </style>