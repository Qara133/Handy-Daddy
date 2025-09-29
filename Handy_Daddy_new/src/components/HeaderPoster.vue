<template >
    <div class="poster-area " :style="{ backgroundImage: `url(${backgroundImage})` }">
 <div class="poster-caption d-flex flex-column">
    <div class="poster-header align-items-center">
        <slot></slot>
    </div>
    <div class="buttons align-items-center d-flex pt-5 ">
        <div class="btn btn-light fs-4 call-btn me-3 d-sm-none d-md-block d-none d-sm-block">CALL NOW</div>
        <div class="btn fs-4 order-btn ms-3 d-sm-none d-md-block d-none d-sm-block" @click="showForm = true">ORDER NOW</div>
  </div>
 </div>
 <OrderForm v-model:showForm="showForm" />
    </div>
</template>
<script>
import OrderForm from './OrderForm.vue';
export default {
  props: {
    backgroundImage: {
      type: String,
      default: new URL('@/assets/images/Mask_Group.png', import.meta.url).href
    }
  },
  components: {OrderForm},
  data() {
    return {
      showForm: false,
      
    };
  },
};
</script>
<style scoped>


.call-btn {
  border: none;
  border-radius: 10px;
  padding: 8px 20px;
  justify-content: center;
  font-weight: 500;
  display: flex;
  color: black;
  width: 200px;
}
.order-btn {
  background-color: #ffd700;
  border: none;
  border-radius: 10px;
  padding: 8px 20px;
  justify-content: center;
  font-weight: 500;
  display: flex;
  color: black;
  width: 200px;
}
.order-btn:hover{
  background-color: rgb(159, 151, 50);
}
.poster-area {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh; 
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: white; 
}

@media only screen and (max-width: 600px) {
  .buttons {
    flex-direction: column;
  }
  .poster-caption h5{
    font-size: 50px!important;
  }
  .buttons{
    gap: 15px;
  }
  .buttons .call-btn, .order-btn {
    margin-left: 0!important;
    margin-right: 0!important;
   }
   .poster-area {
    height: 60vh;
  }
}


</style>