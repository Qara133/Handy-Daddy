<template>
    <div class="whyus-section d-flex bg-light">
        <div class="img-area img-fluid me-0">
          <img :src="currentImg" alt="">
         </div>
        <div class="desc-area bg-light ms-0  align-items-baseline">
             <div class="text-start mt-4 py-4 d-flex align-items-center">
             <div class="header ms-0 ps-5">
                <h2>WHY US</h2>
             <div class="header-line m-0 text-start"></div>
             </div>
             <div v-if="showMore" @click="toggleItems" class="arrow-up btn my-4 d-flex me-5">
                <font-awesome-icon icon="fa-solid fa-chevron-up" /></div>
             </div>
         <ul class="text-start list-unstyled bg-light">
           <li class="bg-light ps-5" v-for="(item, index) in displayedItems" :key="index">
           <font-awesome-icon icon="check" class="pe-2" />{{ item }}
           <hr>
           </li> 
         </ul>
      <div class="buttons ps-5 bg-light">
        <div class="btn see-more-btn mb-3 d-sm-block d-none" v-if="!showMore" @click="toggleItems">SEE MORE</div> 
        <div class="arrow-down my-4 d-flex d-block d-sm-none fs-1 mb-3" v-if="!showMore" @click="toggleItems">
        <font-awesome-icon icon="fa-solid fa-chevron-down" /></div>
      </div>
         </div>
    </div>
</template>
<script>

export default {
  name: "WhyUs",
  data() {
    return {
        showMore: false,

      initialItems: [
        "Same day service",
        "No hourly charge - flat rate",
        "No extra charge for evening and week-end services",
        "3 month warranty on spare parts and labor",
        "No surprise or hidden fees",
      ],
      moreItems: [
        "Genuine spare parts",
        "Fully insured technicians",
        "Technicians trained by industry leaders",
        "Criminal/background check for technicians",
        "We work with all major brands",
        "Over 15 years of experience",
        "Double vaccinated against COVID",
      ],
     
      images: {
        default: new URL('@/assets/images/Leftimg.png', import.meta.url).href,
        expanded: new URL('@/assets/images/LeftImgUpdated.png', import.meta.url).href
      },
    };
  },
  computed: {
    displayedItems() {
      return this.showMore ? [...this.initialItems, ...this.moreItems] : this.initialItems;
    },
    currentImg() {
        return this.showMore ? this.images.expanded : this.images.default;
    },
  
  },
  methods: {
    toggleItems() {
      this.showMore = !this.showMore;
    },
  },
};
</script>
<style scoped>
.img-selector {
    display: flex;
    padding-top: 30px;
    padding-bottom: 30px;
}
.img-selector img{
    width: 240px!important;
    height: 180px!important;
}
.arrow-down, .arrow-up {
background-color: #FFD700;
padding: 10px;
width: 60px;
height: 55px;
border-radius: 50%;
align-items: center;
font-size: 25px;
}
.header-line {
  width: 200px;
  height: 3px;
  background-color: rgba(255, 215, 0, 1);
}
.desc-area{
  width: 55%;
  z-index: 3;
}
.desc-area ul  {
  padding-right: 50px;
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

  @media only screen and (max-width: 600px) {
  
  .whyus-section {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .whyus-section .desc-area,.whyus-section .img-area {
    width: 100%;
  }
  .whyus-section .img-area img{
    width: 100%;
    margin-bottom: 20px;
  }
 
}
  @media only screen and (min-width: 576px) {
    .whyus-section {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .whyus-section .desc-area,.whyus-section .img-area {
    width: 100%;
  }
  .whyus-section .img-area img{
    width: 100%;
    margin-bottom: 20px;
  }
  }

  @media only screen and (min-width: 768px) {
  .whyus-section {
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
  .whyus-section .desc-area,.whyus-section .img-area {
      width: 100%;
  }
  .whyus-section .img-area img{
      width: 100%;
      margin-bottom: 20px;
  }
  .slider-section {
      width: 100%;
  }

  }
  @media only screen and (min-width: 992px) {
    .whyus-section {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .whyus-section .img-area img{
    height: 500px;
    margin-bottom: 0px;
  }
 .whyus-section .desc-area {
  height: 500px;}
}
</style>