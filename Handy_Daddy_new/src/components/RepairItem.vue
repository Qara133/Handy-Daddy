<template>

<div class="item p-5 mt-5 d-flex align-items-center">
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
</template>
<script>
export default {
  name: "RepairItem",
}
</script>
<style scoped>
  .item {
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
  
  </style>