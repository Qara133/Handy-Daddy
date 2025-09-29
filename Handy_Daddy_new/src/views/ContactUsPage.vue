<template>
 <div class="contact-us">
<HeaderPoster><h5 class="text-light text-center">CONTACT<span> US </span></h5></HeaderPoster>
<div class="help-form d-flex  align-items-center container container-fluid">
   <div class="header-area mt-0">
    <div class="section-header text-start">
              <h2 class="fs-1 fw-semilight">How can <br> <span class="fw-bold">we help you?</span></h2>
              <div class="header-line mx-0"></div>
        </div>
        <div class="img-area me-5 my-5 d-none d-lg-block">
            <img src="../assets/images/Handy.png"  class="img-fluid" alt="">
            <img src="../assets/images/yellowbox.png" class="img-fluid" alt="">
        </div>
</div>
<div class="form-area my-5">

<form class="row g-3 border rounded-2 p-5" style="max-width: 600px;">
  <div class="col-md-12">
    <label for="inputFullName" class="form-label">Full Name</label>
    <input type="text" class="form-control" id="inputFullName" placeholder="Name Surname">
  </div>
  <div class="col-md-12 ">
    <label for="inputEmail" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail" placeholder="example@gmail.com">
  </div>
  <div class="col-12">
    <label for="TextArea" class="form-label">Your Message</label>
    <textarea class="form-control" id="validationTextarea" placeholder="Write your message" required style="height: 250px;"></textarea>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-outline-secondary py-2 px-5 text-dark">SEND</button>
  </div>
</form>
</div>
   </div>
  <div class="fix-it my-5"><FixItBox></FixItBox></div>
  <div class="map-section container-fluid d-flex flex-column align-items-center">
    <div class="header-area mt-0">
        <div class="section-header text-center">
            <h2 class="fs-1 fw-semilight">FIND US ON MAPS</h2>
            <div class="header-line mx-auto"></div>
        </div>
        <div class="my-5 d-flex justify-content-center w-100">
            <div class="map-container mb-5">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16662.358882530887!2d-79.40152860321048!3d43.687420109080826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3344455901e1%3A0x47e26257c1387fa6!2zMTYwOSBZb25nZSBTdCwgVG9yb250bywgT04gTTRUIDFUOCwg0JrQsNC90LDQtNCw!5e0!3m2!1sru!2saz!4v1738140217996!5m2!1sru!2saz" 
                    class="map-iframe"
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            
        </div>
        <div class="container card-area my-5">
  <div class="row g-4 justify-content-center">
    <div class="col-sm-6 col-md-6 text-center col-sm-6 col-xs-12">
      <div class="card p-4 border border-tertiary rounded-2">
        <font-awesome-icon icon="fa-solid fa-phone-volume" class="fs-2" />
        <p class="mt-3 mb-0">(+1) 997 962 87 2</p>
        <p>(+1) 997 759 87 2</p>
      </div>
    </div>
    <div class="col-sm-6 col-md-6 col-sm-6  col-xs-12 text-center">
      <div class="card p-4 border border-tertiary rounded-2">
        <font-awesome-icon :icon="['far', 'envelope']" class="fs-2" />
        <p class="mt-3 mb-0">info@handydaddy.ca</p>
        <p>career@handydaddy.ca</p>
      </div>
    </div>
    <div class="col-sm-6 col-md-12 col-sm-12 col-xs-12 text-center">
      <div class="card p-4 border border-tertiary rounded-2">
        <font-awesome-icon :icon="['fas', 'location-dot']" class="fs-2" />
        <p class="mt-3 mb-0">1609 Yonge Street, Toronto,</p>
        <p>Ontario, Canada</p>
      </div>
    </div>
  </div>
</div>


    </div>
</div>

 </div>
</template>
<script>
import HeaderPoster from '@/components/HeaderPoster.vue';
import FixItBox from '@/components/FixItBox.vue';
export default {
    name:"ContactUsPage",
    components:{
    HeaderPoster,
    FixItBox,
    
    }
}
</script>
<style scoped>
.map-container {
  width: 1000px; 
  height: 400px; 
  max-width: 100%; 
  position: relative;
}

.map-iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

/* Responsive */
@media (max-width: 1200px) {
  .map-container {
  width: 700px; 
  height: 400px;
  }
  .map-iframe {
  width: 100%;
  height: 100%;
  }
}

@media (max-width: 768px) {
    .map-container {
  width: 450px; 
  height: 350px;
  }
  .map-iframe {
  width: 100%;
  height: 100%;
  }
}
@media (max-width: 600px) {
    .map-container {
  width: 300px; 
  height: 300px;
  }
  .map-iframe {
  width: 100%;
  height: 100%;
  }
}



 .poster-caption h5 {
    font-size: 70px;
    font-weight: 700;
  }
  .poster-caption h5 span {
    color: #ffd700;
  }
  .header-line {
    width: 250px;
    height: 3px;
    background-color: rgba(255, 215, 0, 1);
  }
  .img-area {
    position: relative;
  }
.img-area :nth-child(1){
    position: absolute;
    left: 13%;
    top:4%;
    width:200px ;
    height:230px;
    z-index: 1;
}
.img-area :nth-child(2){
    width:280px ;
    height:239px;
    z-index: 0;
}
@media only screen and (max-width: 992px) {

        .help-form {
       flex-direction: column;
       margin-top: 50px;
        }
        .help-form .header-area{
            margin-bottom: 50px;
        }
        .form-area .btn {
        width: 100%;
        font-weight: bold;
        background-color: #ffd700;
        border: #ffd700;
        margin-top: 20px;
    }
    }
  

</style>