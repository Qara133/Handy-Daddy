<template>
<div class="not-found">
    <div class="poster-area">
        <div class="poster-caption d-flex flex-column text-uppercase  gap-5 align-items-center py-5 mb-5">
            <h1 class="fs-1 fw-bold">404 page not found</h1>
            <h4>Sorry, the page doesn’t exist!</h4>
            <img src="../assets/images/NotFound.png" alt="" class="pb-5">
        </div>
    </div>
     <div class="container container-fluid">
            <div class="appliance text-center text-uppercase">
        <h3>don't be sad! these services are still available</h3>
        <div class="header-line mx-auto"></div>
        <Appliance backgroundColor="rgba(255, 215, 0, 1)"/>
        <div class="button my-5"><div class="btn btn-light py-3 px-5 border-dark rounded-2">CALL NOW</div></div>
      </div>
     </div>
     <div class="fix-it mb-5"><FixItBox 
        backgroundColor="rgba(35, 31, 32, 1)" 
        textColor="rgba(255, 215, 0, 1)"
        buttonBackgroundColor="#fff" 
        buttonTextColor="rgba(35, 31, 32, 1)">
        CALL ME BACK</FixItBox></div>
   
</div>
</template>
<script>
import HeaderPoster from '@/components/HeaderPoster.vue';
import Appliance from '@/components/Appliance.vue';
import FixItBox from '@/components/FixItBox.vue';
export default {
    name:"NotFound",
    components:{
    HeaderPoster,
    Appliance,
    FixItBox
    }
}
</script>
<style scoped>
.poster-area{
    background-color: rgb(234, 234, 234);
}
    .header-line {
      width: 200px;
      height: 3px;
      background-color: rgba(255, 215, 0, 1);
    }
</style>