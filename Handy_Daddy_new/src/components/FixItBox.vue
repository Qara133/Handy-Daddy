<template>
    <section class="fix-it text-center text-lg-start py-4 mt-5" :style="{ backgroundColor: backgroundColor, color: textColor }">
      <div class="fix-container">
        <div class="row align-items-center">
          <div class="col-lg-8 mb-3 mb-lg-0 d-flex text-dark">
            <p class="fs-4 mb-2 ">Is something wrong? <br />
              <span class="fw-bold fs-3">We’ll fix it!</span>
            </p>
            <img src="/src/assets/images/Line_20.png" alt="Separator" class="img-fluid my-3 d-md-block d-none">
            <p class="fs-4 d-none d-md-block">
              Call now: <br />
              <span class="fw-bold fs-3">(+000) 000 00 00</span>
            </p>
          </div>
          <div class="col-lg-4 text-center">
            <button class="btn btn-lg btn-dark px-5" :style="{ backgroundColor: buttonBackgroundColor, color: buttonTextColor }"  @click="showForm = true"><slot>ORDER NOW</slot></button>

          </div>
        </div>
        <OrderForm v-model:showForm="showForm" />
      </div>
    </section>
  </template>
  
  <script>
import OrderForm from './OrderForm.vue';

  export default {
    name: "FixItBox",
    components:{
      OrderForm
    },
    data() {
    return {
      showForm: false,
      
    };
  },
    props: {
    backgroundColor: {
      type: String,
      default: "rgba(255, 215, 0, 1)",
    },
    textColor: {
      type: String,
      default: "rgba(255, 215, 0, 1)",
    },
    buttonBackgroundColor: {
      type: String,
      default:  "#343a40",
    },
    buttonTextColor: {
      type: String,
      default: "#fff", 
    }
  },
  };
  </script>
  
  <style scoped>
  .fix-it p {
  font-size: 30px; 
  font-weight: 200;
}
.fix-it p span{
  font-size: 35px;
  font-weight: 500;
}

  .fix-it{
    padding: 35px 180px;
}
  .btn {
    font-size: 1.2rem;
    background-color: #343a40;
    color: #fff;
  }


@media only screen and (max-width: 550px) {
    
     .fix-it{
      padding: 0;
     }
    }


  </style>
  