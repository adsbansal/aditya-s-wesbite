import React from 'react';
import FadeIn from 'react-fade-in';

import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import twitter from "react-useanimations/lib/twitter";
import linkedin from "react-useanimations/lib/linkedin";
import mail from "react-useanimations/lib/mail";
import loading2 from "react-useanimations/lib/loading2";


function Home({ Component, pageProps }) {
  return (
    <div className="text-slate-300 sm:px-16 sm:mx-16">
      {/* <FadeIn transitionDuration={800}> */}
      {/* <h1 className="mt-10 mb-5 text-slate-300 font-semibold text-4xl underline">blogs and learnings.</h1> */}
      <div class="flex items-center flex-wrap mt-40">
        <div class="w-full md:w-1/2">
          <div className="px-1">
            <FadeIn transitionDuration={600} delay={80}>
              <h4 class="text-3xl font-bold mb-3">Exercise Metric</h4>
              <p class="mb-8">
                Our Smart Health Monitoring Wristwatch is able to capture you vitals while you exercise. 
                You can create different category of exercises and can track your vitals on the go.
              </p>
              {/* the icons */}
              <div className='flex flex-row'>
                <div className="social-icons">
                  <a href="https://bobbyhadz.com"
                  target="_blank"
                  rel="noreferrer">
                      <UseAnimations animation={twitter} strokeColor={"white"} speed={0.3} size={35} />
                  </a>
                </div>
                <div className="social-icons">
                  <a href="https://bobbyhadz.com"
                  target="_blank"
                  rel="noreferrer">
                      <UseAnimations animation={linkedin} strokeColor={"white"} speed={0.5} size={35} />
                  </a>
                </div>
                <div className="social-icons">
                  <a href="https://bobbyhadz.com"
                  target="_blank"
                  rel="noreferrer">
                      <UseAnimations animation={github} strokeColor={"white"} speed={1} size={35} />
                  </a>
                </div>
                <div className="social-icons">
                  <a href="https://bobbyhadz.com"
                  target="_blank"
                  rel="noreferrer">
                      <UseAnimations animation={mail} strokeColor={"white"} speed={3} size={35} />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <FadeIn transitionDuration={600} delay={80}>
            <div className="px-1">
              <img src="/ads.png" alt="Ads" />
            </div>
          </FadeIn>
        </div>
      </div>
      {/* </FadeIn> */}
    </div>
  );
}

export default Home;


{/* <div class="flex items-center flex-wrap mb-20">
  <div class="w-full md:w-1/2">
    <h4 class="text-3xl font-bold mb-3">Exercise Metric</h4>
    <p class="mb-8">Our Smart Health Monitoring Wristwatch is able to capture you vitals while you exercise. You can create different category of exercises and can track your vitals on the go.</p>
  </div>
  <div class="w-full md:w-1/2">
    <img src="assets/ads.jpg" alt="Ads" />
  </div>
</div> */}

