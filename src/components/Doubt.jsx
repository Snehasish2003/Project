import React from 'react';
import doubtImage from '../assets/doubt1.png'; // Import the local image

const MainSection = () => {
  return (
    <div className="mt-[1rem] flex flex-col justify-center items-center gap-y-4 relative">
      <div className="text-white w-[1294px] flex flex-col justify-start items-start gap-y-8 max-[1025px]:gap-y-12 max-[1025px]:w-[300px] min-[1200px]:mt-16">
        
        <p className="font-sans font-semibold text-5xl leading-[38px] w-full max-w-[969px] h-[38px] text-left max-[1025px]:text-xl max-[1025px]:w-full max-[1025px]:max-w-[400px] max-[1025px]:leading-[26px] max-[1025px]:h-[12px] max-[1025px]:font-medium max-[400px]:max-w-[200px] max-[400px]:h-[8px]
          bg-clip-text text-transparent bg-gradient-to-r from-[rgba(190,90,251,0.88)] via-[rgba(251,248,255,0.88)] to-[rgba(251,248,255,0.88)]">
          Have Questions?
        </p>
        
        <p className="w-full max-w-[886px] h-[52px] font-sans font-normal text-[26px] leading-[28px] text-left max-[1025px]:text-[16px] max-[600px]:w-full max-[600px]:max-w-[240px] max-[800px]:h-[26px] max-[800px]:leading-[18px]">
          Get Help with Our AI-Powered Learning platform
        </p>
        
        <p className="w-full max-w-[1000px] h-[100px] text-left font-sans font-normal text-[21px] leading-[25px] max-[1025px]:w-full max-[1025px]:max-w-[360px] max-[1025px]:h-[100px] max-[1025px]:text-[14px] max-[1025px]:leading-[18px] max-[400px]:w-full max-[400px]:max-w-[250px] max-[400px]:h-[200px] max-[400px]:text-[16px]">
          Maximize your learning with our AI-powered note-taking feature. Our system not only converts your study materials from PDFs or text into engaging videos but also provides you with downloadable notes for each lesson. Enhance your study sessions with structured, easy-to-follow notes that you can review anytime, anywhere.
        </p>
        
        <img
          src={doubtImage}
          alt="Doubt"
          className="w-[700px] border-[0px] ml-[5px]"
          style={{
            borderImageSource: `linear-gradient(0deg, #FFFFFF, #FFFFFF),
                                linear-gradient(0deg, #FFFFFF, #FFFFFF),
                                linear-gradient(0deg, #FFFFFF, #FFFFFF)`,
            borderImageSlice: 1,
            alignSelf: 'flex-end'
          }}
        />
        
      </div>
    </div>
  );
}

export default MainSection;
