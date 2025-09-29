<template>
    <footer >
         <div class="footer-section">
          <div class="footer-top ">
        <div class="container-fluid">
          <router-link :to="{name: 'DesktopMain'}" class="logo"><img src="/src/assets/images/Handy Daddy logo yellow 1.png" alt=""></router-link>
        <div class="subscribe-container d-none d-sm-none d-lg-block d-md-block">
          <h2>Subscribe for news</h2>
          <form class="subscribe-form">
            <input 
              type="email" 
              placeholder="Type your email here" 
              class="subscribe-input"
              aria-label="Email Input"
            />
            <button type="submit" class="subscribe-btn">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>

          <div class="footer-column rate d-block d-sm-block d-md-none  d-lg-none">
              <h3>Rate us on</h3>
              <img src="/src/assets/images/image.png" alt="">
            </div>
  
        </div>
      </div>
      <div class="footer-middle">
        <div class="container-fluid">
         
          <div class="footer-columns d-flex">
                <div class="subscribe-container d-block d-sm-block d-md-none d-lg-none">
          <h2>Subscribe for news</h2>
          <form class="subscribe-form">
            <input 
              type="email" 
              placeholder="Type your email here" 
              class="subscribe-input"
              aria-label="Email Input"
            />
            <button type="submit" class="subscribe-btn">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </form>
              </div>

            <div class="footer-column d-flex flex-column align-items-center rate d-none	d-sm-none d-lg-block d-md-block">

              <h3>Rate us on</h3>
              <img src="/src/assets/images/image.png" alt="">
              <div class="btn yellowBtn fs-5 text-dark">CALL NOW</div>
              <div class="social-icons">
                <a href="https://www.facebook.com/?locale=ru_RU"><i class="fa-brands fa-facebook fs-5 me-3"></i></a>
                <a href="https://www.linkedin.com/home"><i class="fa-brands fa-youtube fs-5 me-3"></i></a>
                <a href="https://www.youtube.com/"><i class="fa-brands fa-linkedin fs-5"></i></a>
              </div>
            </div>
            
              <div class="columns gap-3 d-flex">
                <div class="footer-column company">
                  <h3>Company</h3>
                  <ul >
                    <router-link :to="{name: 'WhyUsPage'}" class="text-decoration-none"><li>Why us</li></router-link>
                    <router-link :to="{name: 'Appliances'}" class="text-decoration-none"><li>Services</li></router-link>
                    <router-link :to="{name: 'JoinUs'}" class="text-decoration-none"><li>Join us</li></router-link>
                    <router-link :to="{name: 'ContactUsPage'}" class="text-decoration-none"><li>Contact</li></router-link>
                    <br>
                    <br>
                    <p class="text-white text-start mb-1 d-block d-sm-block d-md-none  d-lg-none">
                      📞 <span class="text-warning">(+587) 000 000 000</span>
                    </p> 
                    <li class="d-none	d-sm-none d-lg-block d-md-block"><p class="created-by"><i>created by </i><span>PeopleBrand</span></p></li>
                   <p class=" text-center d-sm-block d-md-none  d-lg-none text-secondary d-flex justify-content-center">© 2022 Handy Daddy | All rights reserved.</p>
                  </ul>
                  
                </div>
          
                <div class="footer-column legal">
                  <h3>Legal</h3>
                  <ul>
                    <router-link :to="{name:'PrivacyPolicyPage'}" class="text-decoration-none"><li>Terms & Conditions</li></router-link>
                    <router-link :to="{name:'PrivacyPolicyPage'}" class="text-decoration-none"><li>Privacy policy</li></router-link>
                    <router-link :to="{name:'NotFound'}" class="text-decoration-none"><li>Refund Policy</li></router-link>
                    <router-link :to="{name: 'FAQ'}" class="text-decoration-none"><li>FAQs</li></router-link>
                  </ul>
                </div>
          
                <div class="footer-column contact d-none d-md-block">
                  <h3>Get in Touch with Us</h3>
                  <p>1609 Yonge Street, Toronto,<br>Ontario, Canada</p>
                  <p>📞 (+1) 997 962 87 2</p>
                  <p><i class="fa-regular fa-envelope"></i> info@handydaddy.ca</p>
                </div>
              </div>
           
          </div>  
         
        </div>
      </div>
        <div class="footer-bottom">
          <p class="d-none	d-sm-none d-lg-block d-md-block">© 2025 Handy Daddy | All rights reserved.</p>
          <div class="d-block d-sm-block d-md-none  d-lg-none"><p class="created-by"><i>created by </i><span class="text-warning">PeopleBrand</span></p></div>
        </div>
         </div>
      </footer>
</template>
<script>


export default {
  name: "Footer",
 
};
</script>
<style scoped>

.footer-top {
  background-color: rgba(40, 40, 40, 1);
  border-bottom: 1px solid #FFC300;
}
.footer-top .container-fluid{
  height: 254px;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
}
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

.subscribe-container h2 {
  font-size: 24px;
  font-weight: 400;
  color: white;
  margin-bottom: 20px;
  text-align: start;
}

.subscribe-form {
  display: flex;
  width: 100%;
}

.subscribe-input {
  flex: 1;
  padding: 15px;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  font-size: 14px;
  outline: none;
  background-color: rgb(67, 67, 67);
  
}

.subscribe-input::placeholder {
  color: rgb(224, 224, 224);
  font-size: 18px;
}

.subscribe-btn {
  background-color: #FFD700; 
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 0 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.subscribe-btn .arrow {
  font-size: 20px;
  color: #000; 
}

.subscribe-btn:hover {
  background-color: #FFC300; 
}
.footer-middle .container-fluid {
  padding-top: 40px;
  background-color: rgba(23, 23, 23, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.rate img {
  width: 130px;
  height: 40px;
}
.rate p {
 color: #FFC300;
 font-weight: 500;
 font-size: 20px;
 
}

.rate .social-icons i{
 font-size: 25px;
 margin-right: 10px;
 color: white;
}


.social-icons i:hover {
  color: #FFD700;
}

.footer-columns {
  
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
}

.footer-column {
  gap: 15px;

}

.footer-column h3 {
  color: #FFD700;
  font-size: 22px;
  margin-bottom: 10px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column li {
  margin-bottom: 5px;
  font-size: 14px;
  color: white;
  cursor: pointer;
}

.footer-column li:hover {
  color: #FFD700;
}

.footer-column p {
  font-size: 14px;
  line-height: 1.6;
  color: white;
}

.footer-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 18px;
  border-top: 1px solid #333;
  padding-top: 20px;
  padding-bottom: 20px;
  color: lightgray;
  background-color: rgba(52, 52, 52, 1);
}

.footer-bottom p {
  margin: 0;
}
.footer-columns .created-by {
  font-size: 14px;
}
.footer-columns .created-by span {
  color: #FFD700;
  font-size: 18px;

}
</style>




