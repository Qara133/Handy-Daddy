<template>
  <Header></Header>
  <main>
   <router-view></router-view>
  </main>
 <Footer></Footer>
 </template>
 <script >
 import Header from '@/components/shared/Header.vue';
 import Footer from '@/components/shared/Footer.vue';
 export default {
    name: "DefaultLayout",
    components: {
    Header,
    Footer,
  },
 }
 </script>