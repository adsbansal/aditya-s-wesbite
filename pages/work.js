import FadeIn from 'react-fade-in';

export default function Work() {
    return (
      <div className="text-slate-300 sm:px-16 sm:mx-16">
        <FadeIn transitionDuration={600} delay={80}>
          <div className="py-4 my-4">
              <h1 className="mt-6 mb-5 font-semibold text-teal-200 text-3xl underline">Currently</h1>
              <p>Learning about Product Development NLP and Advanced Data Science.</p>        
          </div>
          {/* <h1 className="mt-6 mb-5 text-slate-300 font-semibold text-xl underline">Previously:</h1>
          <p></p> */}
          <div className="py-4 my-4">
              <h1 className="mt-6 mb-5 font-semibold text-teal-200 text-3xl underline">Previously</h1>
              <h1 className="font-bold underline">Accenture Solutions</h1>
              <ul className="list-disc px-1 mx-1">
                <li>Designed a solution for un-labeled clustering of textual data and further gained insights on the clusters using LLMs.</li>
                <li>Researched and analysed different LLMs for various use-cases. Dwelled deeper into frameworks like Langchain and Llamaindex. Implemented ReAct Framework(Langchain) for one of the use-cases.</li>
                <li>Worked on translation metrics to quantify the accuracy of machine translations methods.</li>
              </ul>        
          </div>

          <div className="py-4 my-4">
              <h1 className="mt-6 mb-5 font-semibold text-teal-200 text-3xl underline">Projects I've worked on</h1>
              <div className="px-1 mx-1">
                  <h3 className="font text-base my-4">
                      → 
                      <a href="https://360researchpapers.streamlit.app" className="ml-2 underline hover:text-teal-200" target="_blank" rel="noopener noreferrer">360-ResearchPapers</a>
                      : Generative AI app that helps you kickstart your research paper writing journey by providing a brief on the topic along with few recent high citation papers and started YouTube Links.
                  </h3> 
                  <h3 className="font text-base my-4">
                      → 
                      <a href="https://huggingface.co/adsbtb/jobs" className="ml-2 underline hover:text-teal-200" target="_blank" rel="noopener noreferrer">Market Like SteveJobs</a>
                      : Fine tuned the Llama2 LLM model using PEFT techniques to enable the model to suggest marketing techniques like the ones used Steve Jobs for Apple products.
                  </h3> 
                  <h3 className="font text-base my-4">
                      → 
                      <a href="https://github.com/adsbansal/FetalHealthClassificaiton" className="ml-2 underline hover:text-teal-200" target="_blank" rel="noopener noreferrer">Fetal Health Classification System</a>
                      : Developed an machine learning classification project for Fetal Health Classification using multiple models.
                  </h3> 
                  <h3 className="font text-base my-4">
                      → 
                      <a href="https://github.com/adsbansal/buildspace-dao-starter" className="ml-2 underline hover:text-teal-200" target="_blank" rel="noopener noreferrer">Decentralized Autonomous Organization App</a>
                      : Learned the basics of blockchain application and tinkered with solidity
                  </h3> 
                  <h3 className="font text-base my-4">
                      → 
                      <a href="https://drive.google.com/file/d/17I5NAYTWR4uHz6YarFoFSHRz-oo8_y6I/view?usp=sharing" className="ml-2 underline hover:text-teal-200" target="_blank" rel="noopener noreferrer">Ideation Phase: Graphical-Alphabetical Password Authentication System </a>
                      : Designed a authentication system to increase security by increasing password length whilst not making it difficult for the
                      user to remember the password.
                  </h3> 
              </div>
          </div>

          <div className="py-4 my-4">
            <h1 className="mt-6 mb-5 font-semibold text-teal-200 text-3xl underline">Product Articles</h1>
            <h3 className="font text-base my-4">
              → 
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7116841358841016320/" className="ml-2 underline hover:text-teal-200" target="_blank" rel="noopener noreferrer">Reducing ride cancellations on Uber</a>
              "Customers require accurate time estimates to be shown on the app. In case their ride is getting delayed, they want to understand the reason of delay to ease their minds. Restlessness pushes them to look for alternative and cancel their rides.”
            </h3>        
          </div>
        </FadeIn>
      </div>
    );
  }
  