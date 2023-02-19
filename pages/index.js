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
      <div className="flex flex-col flex-wrap mt-20">

        {/* SECTION ONE */}
        <div className='pb-5'>
          <div className='mt-6 mb-2 font-semibold text-5xl'>
            Hi, I am Aditya Bansal.
          </div>
          <div className='w-2/3'>
          Welcome to my space on the internet. I am currently a student at TIET, Patiala. <br></br>
          </div>
          <div className='w-4/5'>
          I like to invest my time in studying machine learning, product<br></br>
          development, and blockchain. 
          Some other fields I find really intersting are statistics and game-thoery.
          I’m hoping doing all this <br></br> together will help think out-of 
          the box solutions ¯\_(ツ)_/¯
          </div>
        </div>

        {/* SECTION TWO */}
        <div className="mb-2 pb-2 block">
          <img className="w-2/5 -mt-20 float-right -mr-20" src="/adsbansal.jpeg" alt="Aditya Bansal"/>
        </div>

        {/* SECTION THREE */}
        {/* pl-44 */}
        <div className='mt-5 pt-5 pb-5 mb-5'>
          <div className='pb-1 mb-1'>
            If I am not trying to build something, you’d find me binge-watching Suits or geeking out on Economics, Food Recipes and Motorsports. <br></br> <br></br>
            I am always open to opportunities and meeting new people! <br></br>
            <div className='mt-1 pt-1 text-xl text-teal-200'>
              Let's get in touch ↯ 
            </div> 
          </div>
          <div className='pt-0.5 mt-0.5'>
            <div className='flex flex-row'>
              <div className="social-icons">
                <a href="https://twitter.com/adsbansal"
                target="_blank"
                rel="noreferrer">
                    <UseAnimations animation={twitter} strokeColor={"#99f6e4"} speed={0.3} size={35} />
                </a>
              </div>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/adsbansal/"
                target="_blank"
                rel="noreferrer">
                    <UseAnimations animation={linkedin} strokeColor={"#99f6e4"} speed={0.5} size={35} />
                </a>
              </div>
              <div className="social-icons">
                <a href="https://github.com/adsbansal"
                target="_blank"
                rel="noreferrer">
                    <UseAnimations animation={github} strokeColor={"#99f6e4"} speed={1} size={35} />
                </a>
              </div>
              <div className="social-icons">
                <a href="mailto:adsb.works5@gmail.com"
                target="_blank"
                rel="noreferrer">
                    <UseAnimations animation={mail} strokeColor={"#99f6e4"} speed={1.5} size={35} />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>  
    </div>
  );
}

export default Home;


{/* <div class="w-full md:w-1/2">
          <div className="px-1">
            <FadeIn transitionDuration={600} delay={80}>
              <h4 class="text-3xl font-bold mb-3">Exercise Metric</h4>
              <p class="mb-8">
                Our Smart Health Monitoring Wristwatch is able to capture you vitals while you exercise. 
                You can create different category of exercises and can track your vitals on the go.
              </p>
              {/* the icons */}
      //       </FadeIn>
      //     </div>
      //   </div>
      //   <div class="w-full md:w-1/2">
      //     <FadeIn transitionDuration={600} delay={80}>
      //       <div className="px-1">
      //         <img src="/ads.png" alt="Ads" />
      //       </div>
      //     </FadeIn>
      //   </div>
      // </div> 

{/* <div className="mb-2 pb-2 postion-relative">
  <img className="z-10 w-2/4 -mt-14 float-top float-right -mr-10" src="/final.jpg" alt="Workplace"/>
  <img className="z-20 w-3/4 mt-10 float-left -ml-24" src="/buildings.jpg" width="600" />
  <img className="z-30 w-1/2 mt-10 float-right -mr-5" src="/silloutte.jpg" width="600" />
</div> */}