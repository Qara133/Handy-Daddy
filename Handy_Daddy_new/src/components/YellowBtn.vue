<template>
     <a 
   :href="href" 
   target="_blank" 
   class="yellowBtn fs-5 text-dark">
   <slot>
   </slot>
   </a>
</template>
<script>
export default {
  name: "YellowBtn",
}
</script>
<style scoped>
.yellowBtn {
  background-color: #FFD700; 
  border: none;
  border-radius: 10px;
  padding: 8px 20px;
  justify-content: center;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  text-decoration: none;
}
.yellowBtn:hover{
  background-color: rgb(67, 67, 67);
  color: white!important;
  border: 1px solid white;
}
</style>