<template>
  <main>
    <section>
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-start">
            <div class="title">
              <div class="date-icons mb-3">
                23 Nov 2022 
                <img src="/src/assets/images/Ellipse 36.png" alt="Date Icon" class="mx-2"> 
                Share: 
                <img src="/src/assets/images/Group 5734.png" alt="Share Icon" class="ms-2">
              </div>
              <h1 class="text-uppercase">
                Top 6 issues With <br />
                <b>Dishwashers and Solutions!</b>
              </h1>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-8">
            <div class="article-img mb-4">
              <img src="/src/assets/images/Rectangle 2605.png" alt="Article Image" class="img-fluid">
            </div>
            <p class="article-title mt-5">
              It’s time to Beat the heat <br />
              <span class="fw-semibold">this summer with save-on bills!</span>
            </p>
            <p class="fw-light">Power stays one of the critical challenges of fortune. Businesses require to strike the balance between working efficiency and endurable development. With soaring energy prices and the improved absence of biological resources, identifying energy efficiencies – from intending to manufacturing to processes – makes reasonable industry insight. Summer pulling about means warmer temperatures are on the horizon. Whether you are even operating from home, and like to maintain cool in your house or office, or you are just glancing for ways to preserve money, energy efficiency can benefit.
                    <br>
                    <br>
                    Heat waves and power outages have been plaguing the nation in recent weeks and temperatures are expected to rise higher than usual all over the world due to increasing population. Besides being an ecological tragedy, these hot summer daytimes can likewise be a disaster for your pocket. By far, the greatest part of your power bill arrives from your home’s heating and cooling appliances. With your AC racing all summer protracted, you can anticipate some of your most elevated electric statements of the year to come between June and October.
                    <br>
                    <br>
                    1. Cook wisely
                    Rather than operating the oven or stovetop, you can preserve cooling your house by decreasing the heat in your residence. Cook outside as much as feasible. Not only does this preserve your home from overheating, but it also prevents your air conditioner from operating over time.
                    <br>
                    <br>
                    2. Soak your laundry in cold water whenever practicable
                    Relying on the clothing and local water rate, you may be competent to do laundry solely with cold water using cold dampness detergents. An intermediate household with an electric water heater can preserve $400 annually.
                    <br>
                    <br>
                    3. Keep a consistent temperature in the refrigerator
                    Place the temperature of the fridge between 36 degrees and 38 degrees for maximum effectiveness. The freezer should be maintained at 15 degrees at least.
                    <br>
                    <br>
                    4. Accommodate your water heater to a more inferior temperature
                    You can efficiently lessen your moisture heater’s temperature to 120 degrees to conserve energy and cash. Question your plumber for service so you can commence learning savings!
                    <br>
                    <br>
                    5. Utilize light appliances that you require
                    A bare light bulb can warm a space.
                    
                    </p>
          </div>

          <div class="  aside col-lg-4 mt-5 mt-lg-0">
            <div class="yellow-box text-center p-4 mb-4">
              <img src="/src/assets/images/Handy Daddy logo black 1.png" alt="Logo" class="img-fluid mb-3">
              <p>Is something wrong?</p>
              <h4 class="my-4">We’ll fix it!</h4>
              <div class="white-box mb-3">+1 (780) 800-5574</div>
              <p style="text-decoration: underline;">Order now</p>
            </div>

            <div class="aside-adverts my-5">
              <AsideAdvert />
              <AsideAdvert />
              <AsideAdvert />
            </div>

            <div class="useful-box text-center mt-4">
              <div class="yellow-box p-4">
                <p class="fs-5">Was the article <br /> useful to you?</p>
                <img src="/src/assets/images/Rectangle 2603.png" alt="Useful Icon" class="img-fluid my-4">
                <p>Share with friends:</p>
                <div class="social-icons d-flex white-box justify-content-center align-items-center">
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-youtube"></i>
                  <i class="fa-brands fa-pinterest"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FixItBox />
    
    <section class="appliance py-5">
      <div class="container text-center">
        <h2>OTHER APPLIANCE</h2>
        <div class="header-line mx-auto"></div>
        <Appliance />
      </div>
    </section>
  </main>
</template>

<script>
import Appliance from '@/components/Appliance.vue';
import AsideAdvert from '@/components/AsideAdvert.vue';
import FixItBox from '@/components/FixItBox.vue';
export default {
    name: "BlogDetails",
    components: {
    AsideAdvert,
    FixItBox,
    Appliance
   },

  }
</script>
<style scoped>
.container {
  margin-top: 100px;
}
.article-title{
  font-size: 45px;
  font-weight: 400;
}
.aside{
  width: 384px;
}
.yellow-box {
  background-color: rgba(255, 215, 0, 1);
  border-radius: 25px;
}

.yellow-box .white-box {
  background-color: white;
  border-radius: 12px;
  padding: 10px 20px;
  font-size: 1.2rem;
  width: 250px;
  
}
.header-line {
  width: 200px;
  height: 3px;
  background-color: rgba(255, 215, 0, 1);
}
</style>

  
