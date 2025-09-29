<template>
    <div class="container my-5 w-60">
      <div class="row g-4">
        <div class="col-6 col-md-6 col-lg-3" v-for="(item, index) in appliances" :key="index">
         <router-link class="text-decoration-none" 
         v-if="item.route" 
         :to="{ name: item.route }" >
           <div class="grid-item p-4 text-center" :style="{ backgroundColor: backgroundColor }">
            <div class="icon">
              <img :src="item.icon" alt="" class="img-fluid">
            </div>
            <div class="label text-dark mt-3">{{ item.label }}</div>
          </div>
         </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Appliance",
    props: {
    backgroundColor: {
      type: String,
      default: "white",
    },
    route: {
      type: String,
      default: 'FreezerRepair'
    }
  },
    data() {
      return {
        appliances: [
          {
            icon: "/src/assets/images/9132480_washing machine_laundry_cleaning_housekeeping_washing_icon.png",
            label: "WASHER",
            route: 'NotFound'
          },
          {
            icon: "/src/assets/images/976610_appliances_clothes washer_laundry_washer_washing machine_icon.png",
            label: "DRYER",
            route: 'NotFound'
          },
          {
            icon: "/src/assets/images/1469733_freezer_fridge_kitchen_refrigerator_snowflake_icon.png",
            label: "FREEZER",
            route: "FreezerRepair"
          },
          {
            icon: "/src/assets/images/976631_appliances_cooler_food saver_freezer_fridge_icon.png",
            label: "REFRIGERATOR",
            route: 'RefrigeratorRepair'
          },
          {
            icon: "/src/assets/images/751087_microwave_oven_cook_cooking_kitchen_icon.png",
            label: "OVEN, STOVE",
            route: 'NotFound'
          },
          {
            icon: "/src/assets/images/809092_appliance_cook_interior_kitchen_oven_icon.png",
            label: "COOKTOP",
            route: 'NotFound'
          },
          {
            icon: "/src/assets/images/10772826_oven_kitchen_food_and_restaurant_icon.png",
            label: "RANGES",
            route: 'NotFound'
          },
          {
            icon: "/src/assets/images/2357052_dish_dishwasher_kitchen_machine_washer_icon.png",
            label: "DISHWASHER",
            route: 'NotFound'
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .grid-item {
    border: 1px solid #444;
    border-radius: 10px;
    transition: 0.3s ease;
  }
  
  .grid-item:hover {
    background-color: rgba(255, 215, 0, 0.8);
    transform: translateY(-5px);
  }
  
  .grid-item img {
    width: 60px;
    height: 60px;
  }
  
  .label {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
  }
  </style>
  