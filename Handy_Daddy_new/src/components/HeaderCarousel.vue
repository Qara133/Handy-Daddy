<template>
    <div class="slider-section w-100">
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
  
        <div class="carousel-inner">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="carousel-item align-items-center"
            :class="{ active: index === 0 }"
          >
            <div class="carousel-caption d-flex justify-content-center flex-column d-md-block">
              <h5 class="d-none d-sm-block">
                WE'LL <span>FIX IT</span>
              </h5>
              <p class="fs-5 d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block d-lg-none d-xl-block pt-3 fw-light ">
                Liquam turpis ligula velit augue dictum quam libero.
                <br />
                Mattis elementum diam at turpis lectus maecenas.
              </p>
              <div class="buttons align-items-center d-flex pt-5">
                <div class="btn btn-light fs-5 call-btn me-3">CALL NOW</div>
                <div class="btn fs-5 order-btn ms-3" @click="showForm = true">ORDER NOW</div>
              </div>
            </div>
            <img :src="slide.img" class="d-block w-100 img-fluid" alt="..." />
          </div>
        </div>
      </div>
      <div v-if="showForm" class="form-modal" @click.self="closeForm">
        <div class="form-container" @click.stop>
          <div class="close-btn" @click="closeForm">&times;</div>
          <h5 class="text-center mb-4 fw-bold">We'll get back to you in 30 minutes!</h5>
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <input type="text" class="form-control" placeholder="Full name" required />
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" placeholder="(+994)" required />
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" placeholder="Address" required />
            </div>
            <div class="mb-3 d-flex gap-2">
              <select class="form-select">
                <option selected>09:00 - 12:00 AM</option>
                <option>12:00 - 03:00 PM</option>
                <option>03:00 - 06:00 PM</option>
              </select>
              <input type="date" class="form-control" required />
            </div>
            <div class="mb-3">
              <select class="form-select">
                <option selected>Appliance Type</option>
                <option>Refrigerator</option>
                <option>Washing Machine</option>
                <option>Microwave Oven</option>
              </select>
            </div>
            <button type="submit" class="btn submit-btn w-100">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        showForm: false,
        slides: [
          {
            img: new URL("@/assets/images/Mask_Group.png", import.meta.url).href,
          },
          {
            img: new URL("@/assets/images/Mask_Group2.png",import.meta.url).href
          },
          {
            img: new URL("@/assets/images/Mask_Group.png",import.meta.url).href
          },
        ],
      };
    },
    methods: {
      closeForm() {
        this.showForm = false;
      },
      submitForm() {
        alert("Form submitted successfully!");
        this.showForm = false;
      },
    },
  };
  </script>
<style scoped>
.carousel-indicators button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: white;
  border: none;
}
.carousel-indicators button.active {
  background-color: #ffd700;
  transform: scale(1.2);
}
.carousel-caption h5 {
  font-size: 100px;
  font-weight: 700;
}
.carousel-caption h5 span {
  color: #ffd700;
}
.carousel-caption p {
  text-transform: capitalize;
}
.carousel-caption{
    bottom: 6rem; 
}
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
.form-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}
.form-container {
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}
.close-btn {
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  color: #000;
  position: absolute;
  right: 15px;
  top: 10px;
}
.form-control,
.form-select {
  border: 1px solid #ddd;
  height: 50px;
  font-size: 16px;
}
.submit-btn {
  background-color: #ffd700;
  color: black;
  font-weight: bold;
  height: 50px;
  border-radius: 5px;
  border: none;
}
.submit-btn:hover {
  background-color: #e5c100;
}
@media only screen and (max-width: 600px) {
  .buttons {
    flex-direction: column;
  }
  .carousel-caption h5{
    font-size: 30px!important;
  }
  .call-btn,
  .order-btn {
    width: 100%;
  }
}
@media only screen and (max-width: 768px) {
   .carousel-caption{
    bottom: 2rem;
   }
   .buttons{
    flex-direction: column;
    gap: 10px;
    padding-top: 0!important;
   }
   .buttons .call-btn, .order-btn {
    margin-left: 0!important;
    margin-right: 0!important;
   }
}
@media only screen and (max-width: 992px) {

}
@media only screen and (max-width: 1200px) {
 .carousel-caption h5{
    font-size: 60px;
 }
}
</style>
  