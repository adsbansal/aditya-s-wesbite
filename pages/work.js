import FadeIn from 'react-fade-in';

export default function Work() {
    return (
      <div className="text-slate-300 sm:px-16 sm:mx-16">
        <FadeIn transitionDuration={600} delay={80}>
          <div className="py-4 my-4">
              <h1 className="mt-6 mb-5 font-semibold text-teal-200 text-3xl underline">Currently</h1>
              <p>Learning about blockchains and studying courses including NLP and Advanced Data Science.</p>        
          </div>
          {/* <h1 className="mt-6 mb-5 text-slate-300 font-semibold text-xl underline">Previously:</h1>
          <p></p> */}

          <div className="py-4 my-4">
              <h1 className="mt-6 mb-5 font-semibold text-teal-200 text-3xl underline">Projects I've worked on</h1>
              <div className="px-1 mx-1">
                  <h3 className="font text-base my-4">
                      → 
                      <a href="https://github.com/adsbansal/buildspace-dao-starter" className="ml-2 underline hover:text-teal-200" target="_blank" rel="noopener noreferrer">Decentralized Autonomous Organization App</a>
                      : Learned the basics of blockchain application and tinkered with web3.js
                  </h3> 
                  <h3 className="font text-base my-4">
                      → 
                      <a href="https://github.com/adsbansal/FetalHealthClassificaiton" className="ml-2 underline hover:text-teal-200" target="_blank" rel="noopener noreferrer">Fetal Health Classification System</a>
                      : Developed an machine learning classification project for Fetal Health Classification using multiple models.
                  </h3> 
                  <h3 className="font text-base my-4">
                      → 
                      <a href="https://drive.google.com/file/d/17I5NAYTWR4uHz6YarFoFSHRz-oo8_y6I/view?usp=sharing" className="ml-2 underline hover:text-teal-200" target="_blank" rel="noopener noreferrer">Ideation Phase: Graphical-Alphabetical Password Authentication System </a>
                      : Designed a authentication system to increase security by increasing password length whilst not making it difficult for the
                      user to remember the password.
                  </h3> 
              </div>
          </div>
        </FadeIn>
      </div>
    );
  }
  