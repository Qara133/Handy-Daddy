<template>
    <div class="container my-5 w-60">
      <div class="row g-4">
        <div class="col-md-6 col-lg-4 d-flex" v-for="(item, index) in BlogCards" :key="index">
              <div class="card-item text-start">
       <router-link :to="{name:'BlogDetails'}">
       <div class="img-container">
        <img :src="item.img" alt="" class="img-fluid">
      </div></router-link>
      <div class="card-description mt-3 px-3">
        <div class="date fw-light">{{ item.date }}</div>
        <div class="desc fs-5 py-2">{{ item.desc }}</div>
        <router-link :to="{name:'BlogDetails'}" class="button align-items-center text-start mb-3 btn">
          READ MORE <font-awesome-icon class="arrow" :icon="['fas', 'arrow-right']" />
        </router-link>
      </div>
    </div>
        </div>
      </div>
    </div>
  </template>
<script >


export default {
  name: "BlogCard",
  
  data() {
      return {
        BlogCards: [
          {
            img: "/src/assets/images/Refrigerator.png",
            date: "23  Nov 2022",
            desc: "Top 6 issues With Dishwashers and Solutions!",
          
          },
          {
            img: "/src/assets/images/Cardimg.png",
            date: "23  Nov 2022",
            desc: "It’s time to Beat the heat this summer with save-on bills",
          },
          {
            img: "/src/assets/images/Refrigerator.png",
            date: "23  Nov 2022",
            desc:"Common Freezer Problems Solutions at Glance",
          },
          {
            img: "/src/assets/images/Cardimg.png",
            date: "23  Nov 2022",
            desc: "It’s time to Beat the heat this summer with save-on bills",
          },
          {
            img: "/src/assets/images/Refrigerator.png",
            date: "23  Nov 2022",
            desc: "It’s time to Beat the heat this summer with save-on bills",
          },
          {
            img: "/src/assets/images/Cardimg.png",
            date: "23  Nov 2022",
            desc:"Common Freezer Problems Solutions at Glance",
          },
          
        ],
      };
    },
};
    
  
</script>
<style  scoped>
.card-item {
  height: auto;
  border: 1px solid rgba(183, 183, 183, 0.55);
}

.card-item {
  position: relative;
  overflow: hidden;
}

.img-container {
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
}

.img-container img {
  width: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.img-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}


.img-container:hover::before {
  opacity: 1;
}
.card-item:hover{
    background-color: rgba(255, 215, 0, 0.8);
    transform: translateY(-5px);
    transition: 0.2s ease-in-out;
}
.card-item:hover .button{
  background-color: white;
}
.button {
  font-size: 13px;
  font-weight: 400;
  background-color: #FFD700; 
}
.button .arrow {
  font-size: 12px;
  padding-left: 5px;
}

</style>