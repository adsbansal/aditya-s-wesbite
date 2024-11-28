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
      <div className=''>
        {/* SECTION ONE */}
        <div className=''>
          <FadeIn transitionDuration={800}>
            <div className='mb-2 text-teal-200 text-3xl xmd:text-4xl w-2/3 mt-10 xmd:mt-20'>
              Hi, I am Aditya Bansal.
            </div>
            <div className='w-2/3 italic pt-1'>
              ~ Welcome to my space on the internet. 
            </div>
            <div className='w-3/3 pt-1'>
              I am a 22 something curious energy-ball. 
              Currently building automous evalutation systems for "Better Drives, Better Lives" at Cars24 🚗. You'd be suprised just how much DL a pre-owned car marketplace utilizes.
            </div>
          </FadeIn>
        </div>

        <FadeIn transitionDuration={800}>
          {/* SECTION TWO */}
          <div className="flex flex-col items-center flex-wrap conatiner xmd:flex-row xmd:flex-wrap mt-10">

            {/* SECTION TWO.ONE */}
            <div className='pl-auto pr-auto w-2/3 pb-14 xmd:w-1/2 xmd:pr-10 '>
              <img className="" src="/picture.jpeg" alt="Aditya Bansal"/>
            </div>

            {/* SECTION TWO.TWO */}
            <div className='xmd:pb-5 xmd:w-1/2 flex xmd:items-center'>
              <div>
                <div>
                  <br></br>
                  Previously a <b>research intern</b> at IIT Delhi, I enjoy trying to make sense of multimodal medical data at the computer vision lab.<br></br>
                  I like to explore difference fields, hence the interest in product development. I hope to think out-of 
                  the box solutions someday ¯\_(ツ)_/¯
                </div>

                <div className='pt-14'>
                If I am not working on something or reading research papers 📝, you’d find me binge-watching 
                Suits 👔 or geeking out on Food Recipes 🍝 and Motorsports. <br></br> <br></br>
                </div>
              </div>
            </div>
          </div>  

          {/* SECTION THREE */}
          <div className='xmd:mt-1 xmd:pt-1 pt-10 pb-2 mb-5'>
            <div className='pb-1 mb-1'>
              Someday I'd like to explore the effect of psychology on product development and building great advertisement campaingns. Also, maybe build something related to time-series along the way. <br></br><br></br>
              I am always open to opportunities and meeting new people! <br></br>
              <div className='mt-1 pt-1 text-xl text-teal-200'>
                Let's get in touch →
              </div> 
            </div>
            <div className='pt-0.5 mt-0.5'>
              <div className='flex flex-row'>
                <div className="social-icons">
                  <a href="https://twitter.com/adsbansal"
                  target="_blank"
                  rel="noreferrer">
                      <UseAnimations animation={twitter} strokeColor={"#99f6e4"} speed={0.3} size={30} />
                  </a>
                </div>
                <div className="social-icons">
                  <a href="https://www.linkedin.com/in/adsbansal/"
                  target="_blank"
                  rel="noreferrer">
                      <UseAnimations animation={linkedin} strokeColor={"#99f6e4"} speed={0.5} size={30} />
                  </a>
                </div>
                <div className="social-icons">
                  <a href="https://github.com/adsbansal"
                  target="_blank"
                  rel="noreferrer">
                      <UseAnimations animation={github} strokeColor={"#99f6e4"} speed={1} size={30} />
                  </a>
                </div>
                <div className="social-icons">
                  <a href="mailto:adsb.works5@gmail.com"
                  target="_blank"
                  rel="noreferrer">
                      <UseAnimations animation={mail} strokeColor={"#99f6e4"} speed={1.5} size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
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
      //       </div>
      //     </FadeIn>
      //   </div>
      // </div> 

{/* <div className="mb-2 pb-2 postion-relative">
  <img className="z-10 w-2/4 -mt-14 float-top float-right -mr-10" src="/final.jpg" alt="Workplace"/>
  <img className="z-20 w-3/4 mt-10 float-left -ml-24" src="/buildings.jpg" width="600" />
  <img className="z-30 w-1/2 mt-10 float-right -mr-5" src="/silloutte.jpg" width="600" />
</div> */}


// <FadeIn transitionDuration={800}>
// <div className='mb-2 text-teal-200 text-3xl xmd:text-4xl w-2/3 mt-10 xmd:mt-20'>
//   Hi, I am Aditya Bansal.
// </div>
// <div className='w-2/3 italic pt-1'>
//   ~ Welcome to my space on the internet. 
// </div>
// <div className='w-3/3 pt-1'>
//   I am a 4rd year CS student. 
//   I like to invest my time in studying machine learning, product
//   development, and Generative AI Development. 
// </div>
// </FadeIn>
// </div>

// <FadeIn transitionDuration={800}>
// {/* SECTION TWO */}
// <div className="flex flex-col items-center flex-wrap conatiner xmd:flex-row xmd:flex-wrap mt-16">

// {/* SECTION TWO.ONE */}
// <div className='pl-auto pr-auto w-2/3 pb-14 xmd:w-1/2 xmd:pr-10 '>
//   <img className="" src="/picture.jpeg" alt="Aditya Bansal"/>
// </div>

// {/* SECTION TWO.TWO */}
// <div className='xmd:pb-5 xmd:w-1/2 flex xmd:items-center'>
//   <div>
//     <div>
//       Some other fields I find really intersting are statistics and game-theory.<br></br>
//       I’m hoping doing all this together will help think out-of 
//       the box solutions ¯\_(ツ)_/¯
//     </div>

//     <div className='pt-14'>
//     If I am not trying to build something, you’d find me binge-watching 
//     Suits <br></br>
//     or geeking out on Economics, Food Recipes and Motorsports. 
//     </div>
//   </div>
// </div>