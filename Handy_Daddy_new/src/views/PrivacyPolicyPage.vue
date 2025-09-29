<template>
    <div class="privacy-policy bg-light">
        <HeaderPoster><h5 class="text-light text-center">PRIVACY<span> POLICY </span></h5></HeaderPoster>
        <div class="container container-fluid py-5 px-3 custom-justify" style="max-width: 1200px;">
            <h1>GENERAL TERMS AND CONDITIONS OF USE</h1>
            <p>Last updated: May 2022</p>
            <hr class="py-3">
            <p>Thank you for visiting GlassesUSA.com, a website owned and operated by Optimax Investments Ltd. (“Optimax”). Please read these Terms and Conditions of Use (“Terms”) carefully. They contain the legal terms and conditions that govern the use of and access to our websites, www.glassesusa.com and www.m.glassesusa.com, as well as any other websites, mobile sites, (our “Websites”) and mobile applications (our “Apps”) (collectively, our “Sites”) owned, operated and/or distributed by Optimax, Glasses USA, Inc., Optimax Eyewear, Inc., Glasses California, Inc., GlassesUSA Fulfillment Center, Inc. (hereinafter, collectively referred to as “GlassesUSA.com,” “GlassesUSA,” “we,” “us,” or “our”), as well as our provision of products and services provided or made available by GlassesUSA. Certain offline or online services, promotions, events, and features may have additional terms and conditions specific to them as communicated at the point of purchase, in advertising, or in person, and those additional terms and conditions are incorporated herein by reference.</p>
            <br>
            <h5>Acceptance of This Agreement, Modification & Severability</h5>
            <p>By visiting any of our Sites that link to these Terms, you are acknowledging that you have read these Terms and our Privacy Policy , which is incorporated by reference herein, and you expressly acknowledge and agree that you are entering into a legal agreement with GlassesUSA (or any of its affiliates) and have understood and agree to comply with, and be legally bound by, these Terms. Please review our Privacy Policy which also governs your use of our Sites, to understand our practices. Any products ordered or services used through any of our Sites are also governed by these Terms. You hereby waive any applicable rights to require an original (non-electronic) signature or delivery or retention of non-electronic records, to the extent not prohibited under applicable law. If you do not agree to be bound by these Terms and Conditions, please do not access our Sites or make any purchases through our Sites.</p>
            <p>You hereby waive any applicable rights to require an original (non-electronic) signature or delivery or retention of non-electronic records, to the extent not prohibited under applicable law. If you do not agree to be bound by these Terms and Conditions, please do not access our Sites or make any purchases through our Sites.</p>
            <p>We may make changes to these Terms from time to time. If GlassesUSA.com makes changes, it will provide you with notice of such changes, such as by sending an email, providing a notice through our Sites, or updating the date at the top of these Terms. Unless GlassesUSA.com says otherwise in its notice, the amended Terms will be effective immediately and your continued access to and use of the Sites after GlassesUSA.com provides such notice will confirm your acceptance of the changes. If you do not agree to the amended Terms, you must stop accessing and using the Sites. If any of these Terms shall be deemed invalid, void, or for any reason unenforceable, that Term shell be deemed severable and shall not affect the validity and enforceability of any remaining Term.</p>
            <p>YOUR CONTINUED USE OF ANY OF THE SITES AFTER WE POST ANY CHANGES WILL CONSTITUTE YOUR ACCEPTANCE OF SUCH CHANGES. IN ADDITION, BY ORDERING PRODUCTS OR USING SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ AND REVIEWED THESE TERMS IN THEIR ENTIRETY, YOU AGREE TO THESE TERMS AND THE PRIVACY POLICY, AND YOU AGREE THAT THESE TERMS CONSTITUTE BINDING AND ENFORCEABLE OBLIGATIONS ON YOU.</p>
            <br>
            <h5>NOTE: THESE TERMS CONTAIN A BINDING ARBITRATION AND CLASS ACTION WAIVER PROVISION IN THE “ARBITRATION AGREEMENT” SECTION BELOW THAT AFFECTS YOUR RIGHTS UNDER THESE TERMS AND WITH RESPECT TO ANY DISPUTE BETWEEN YOU AND GLASSESUSA.COM. THESE TERMS PROVIDE THAT ALL DISPUTES BETWEEN YOU AND OPTIMAX THAT IN ANY WAY RELATE TO THESE TERMS OF USE OR YOUR USE OF OUR SITES WILL BE RESOLVED BY BINDING ARBITRATION. ACCORDINGLY, YOU AGREE TO GIVE UP YOUR RIGHT TO GO TO COURT (INCLUDING IN A CLASS ACTION PROCEEDING) TO ASSERT OR DEFEND YOUR RIGHTS UNDER THESE TERMS (EXCEPT FOR MATTERS THAT MAY BE TAKEN TO SMALL CLAIMS COURT). YOUR RIGHTS WILL BE DETERMINED BY A NEUTRAL ARBITRATOR AND NOT A JUDGE OR JURY AND YOUR CLAIMS CANNOT BE BROUGHT AS A CLASS ACTION.</h5>
            <br>
            <h5>No professional advice</h5> 
            <p>Any information supplied through our Sites, by any form of e-mail communication or by any of our employees or agents, whether by telephone, e-mail, letter, facsimile or other form of communication, is for informational purposes or general guidance and does not constitute medical or other professional advice. Health-related information provided through our Sites is not a substitute for medical advice and it is important that you not make medical decisions without first consulting your personal physician, optometrist, ophthalmologist or other healthcare professional. The receipt of any questions or feedback you submit to us does not create a professional relationship and does not create any privacy interests other than those described in our Privacy Policy.</p>
            <p>The information presented on or through our Sites or by any form of e-mail communication is made available solely for general information purposes. We do not warrant the accuracy, completeness, or usefulness of this information. Any reliance you place on such information is strictly at your own risk. We disclaim all liability and responsibility arising from any reliance placed on such materials by you or any other visitor to our Sites, or by anyone who may be informed of any of its contents.</p>
            <br>
            <h5>General information</h5>
            <p>These Terms and Privacy Policy govern the use of the Sites. You also may be subject to additional terms and conditions that may apply when you use third-party content or third-party software. Our failure to exercise or enforce any right or provision of the Terms shall not constitute a waiver of such right or provision. If any provision of the Terms is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties’ intentions as reflected in the provision, and the other provisions of the Terms remain in full force and effect.</p>
            <br>
            <h5>DISPUTE RESOLUTION; ARBITRATION; CLASS ACTION WAIVER PROVISION ARBITRATION AGREEMENT</h5>
            <br>
            <h5>Please read this section carefully. It affects your rights. It requires you to arbitrate disputes with GlassesUSA.com and limits the manner in which you can seek relief. It further provides that you waive your rights to try any claim in court before a judge or jury and to bring or participate in any class, collective, or other representative action. This section of the Terms shall be referred to as the “Arbitration Agreement.”</h5>
             
            <div class="btn-area d-flex py-5">
                <div class="btn btn-light py-3 px-5 border-dark rounded-2">BACK</div>
            </div>
        </div>
        <div class="fix-it my-5"><FixItBox></FixItBox></div>
    </div>
</template>
<script>
import HeaderPoster from '@/components/HeaderPoster.vue';
import FixItBox from '@/components/FixItBox.vue';
export default {
    name:"PrivacyPolicyPage",
    components: {
        HeaderPoster,
        FixItBox,
    }
}
</script>
<style  scoped>
.custom-justify {
  text-align: justify;
}

.poster-caption h5 {
    font-size: 70px;
    font-weight: 700;
  }
.poster-caption h5 span {
    color: #ffd700;
  }
</style>