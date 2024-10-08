import React from 'react';
import Gradient1 from '../Assets/Gradient1.png';
import Gradient2 from '../Assets/Gradient2.png';
import RoadmapImg from '../Assets/Roadmap.png';
import EventsImg from '../Assets/Events.png';
import AiSupportImg from '../Assets/AIsupport.png';
import CommunityImg from '../Assets/Community.png';


const Home = () => {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
    <div id="home" className="bg-black text-white min-h-screen flex flex-col items-center justify-center pt-24 lg:pt-0 relative overflow-hidden">
      <img 
        src={Gradient1} 
        alt="Gradient 1" 
        className="absolute top-0 left-0 w-full h-full opacity-50 z-10 object-cover"
      />
      <img 
        src={Gradient2} 
        alt="Gradient 2" 
        className="absolute bottom-0 right-0 w-full h-full opacity-50 z-10 object-cover"
      />
      <div className="text-center mb-12 mx-4 lg:mx-0 relative z-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
          Ready to elevate <span className="text-cyan-500 font-extrabold">your</span> tech career and skills to new heights?
        </h1>
      </div>
      <div className="text-center mb-8 relative z-20">
        <p className="text-2xl font-bold">Here we provide</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 relative z-20">
        <a href="#roadmap" className="bg-black border border-gray-300 p-4 rounded-lg shadow-lg w-56 h-40 flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:border-cyan-500">
          <img src={RoadmapImg} alt="Roadmaps" className="w-12 h-12 mb-2" />
          <p className="text-lg font-semibold mb-2 text-center">ROADMAPS</p>
          <p className="text-sm font-thin text-left hidden md:block">Roadmaps and resources to boost your tech journey.</p>
        </a>
        <a href="#community" className="bg-black border border-gray-300 p-4 rounded-lg shadow-lg w-56 h-40 flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:border-cyan-500">
          <img src={CommunityImg} alt="Community" className="w-12 h-12 mb-2" />
          <p className="text-lg font-semibold mb-2 text-center">COMMUNITY</p>
          <p className="text-sm font-thin text-left hidden md:block">Join communities to collab and network.</p>
        </a>
        <a href="#aitutor" className="bg-black border border-gray-300 p-4 rounded-lg shadow-lg w-56 h-40 flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:border-cyan-500">
          <img src={AiSupportImg} alt="AI Support" className="w-12 h-12 mb-2" />
          <p className="text-lg font-semibold mb-2 text-center">AI SUPPORT</p>
          <p className="text-sm font-thin text-left hidden md:block">Get personalized guidance and support with AI Tutor.</p>
        </a>
        <a href="#findevents" className="bg-black border border-gray-300 p-4 rounded-lg shadow-lg w-56 h-40 flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:border-cyan-500">
          <img src={EventsImg} alt="Events" className="w-12 h-12 mb-2" />
          <p className="text-lg font-semibold mb-2 text-center">EVENTS</p>
          <p className="text-sm font-thin text-left hidden md:block">Stay ahead with curated events and tips.</p>
        </a> 
      </div>
      </div>
    </div>
  );
};

export default Home;