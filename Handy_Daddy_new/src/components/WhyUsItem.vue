<template>
    <div class="why-us-item pb-5 px-5 pt-5" :style="{ background }">
      <div v-if="title" class="item-header mb-5 d-none d-lg-block">   
        <h2>{{ title }}</h2>
        <div class="header-line m-0 text-start"></div>
      </div>
      <div class="item-content d-flex align-items-center pt-5" :class="{'flex-row-reverse': reverse}">
        <div class="img-area ms-0 d-none d-lg-block">
          <img :src="image1" class="img-fluid position-absolute" alt="">
          <img :src="image2" class="img-fluid position-relative" alt="">
        </div>
          <div class="d-block d-lg-none replacement">
            <div class="replacement-container">
        <div class="row align-items-center d-flex" style="background-color:  #ffd700;">
          <div class="col-lg-8 mb-3 mb-lg-0 d-flex">
           <img src="../assets/images/HandyMan1.png" alt="">
          </div>
          <div class="col-lg-4 text-center">
            <p>WE'LL FIX IT</p>
            <button class="btn btn-dark btn-lg px-5">ORDER NOW</button>
          </div>
        </div>
      </div>
        </div>
        <div class="desc-area pt-4 ms-0">
          <ul class="text-start list-unstyled">
            <li v-for="(item, index) in listItems" :key="index" class="ps-5 py-2">
              <span class="count">{{ index + 1 }}</span>{{ item }}
              <hr>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default 
  { name: "WhyUsItem",
    props: {
      title: String,
      image1: String,
      image2: String,
      listItems: Array,
      reverse: Boolean,
      background: String,
    },
  };
  </script>
  
  <style scoped>
 
  </style>
  