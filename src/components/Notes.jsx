import React from "react";
const Notes = () => {
  return (

    <div className="mt-[1rem] flex flex-col justify-center items-center gap-y-4">

      <div className="text-white w-[1294px] flex flex-col justify-center items-center gap-y-8 max-[1025px]:gap-y-12 max-[1025px]:w-[300px] min-[1200px]:mt-16">

        <p className="font-sans font-semibold text-5xl leading-[38px] w-[969px] h-[38px] text-center max-[1025px]:text-xl max-[1025px]:w-[400px] max-[1025px]:leading-[26px] max-[1025px]:h-[12px] max-[1025px]:font-medium
        max-[400px]:w-[200px] max-[400px]:h-[8px]">

          Access and Download Your Study Notes

        </p>

        <p className="w-[886px] h-[52px] font-sans font-normal text-[26px] leading-[28px] text-center max-[1025px]:text-[16px] max-[600px]:w-[240px] max-[800px]:h-[26px] max-[800px]:leading-[18px]">

          Experience learning like never before with AI-enhanced notes

        </p>

        <p className="w-[1000px] h-[100px] text-center font-sans font-normal text-[21px] leading-[25px] max-[1025px]:w-[360px] max-[1025px]:h-[100px] max-[1025px]:text-[14px] max-[1025px]:leading-[18px]
        max-[400px]:w-[250px] max-[400px]:h-[200px] max-[400px]:text-[16px]">

          Maximize your learning with our AI-powered note-taking feature. Our system not only converts your study materials from PDFs or text into engaging videos but also provides you with downloadable notes for each lesson. Enhance your study sessions with structured, easy-to-follow notes that you can review anytime, anywhere.

        </p>

      </div>

      <div className="w-[900px] h-[400px] flex gap-x-2 hover:cursor-pointer max-[1025px]:w-[300px] max-[1025px]:h-[190px] mx-auto relative group mt-12 max-[1200px]:pointer-events-none max-[1000px]:mt-8">

        <div className="w-[200px] h-[180px] bg-[#CED9E0] shadow-md flex flex-col items-center justify-center max-[1025px]:w-[90px] max-[1025px]:h-[60px]
        group-hover:absolute group-hover:left-[260px] group-hover:-rotate-3 group-hover:top-[30px] group-hover:z-[1] group-hover:transition-all group-hover:duration-200 group-hover:ease-in-out">

          <p className="h-[44px] w-[60px] max-[1025px]:w-[40px] max-[1025px]:h-[22px]">
            ✍️️
          </p>

          <p className="font-inter font-semibold text-[15px] leading-[18px] text-[#040212] max-[1025px]:text-[8px] max-[1025px]:leading-[9px] max-[1025px]:font-medium">
            Note to self card
          </p>

        </div>

        <div className="w-[210px] h-[210px] bg-[#FFC940] shadow-md max-[1025px]:w-[100px] max-[1025px]:h-[100px] 
        group-hover:top-[180px] group-hover:left-[300px] group-hover:absolute z-[2] group-hover:transition-all group-hover:duration-200 group-hover:ease-in-out">

          <p className="font-inter font-semibold text-[15px] leading-[18px] text-[#040212] text-center mt-8
          max-[1025px]:text-[8px] max-[1025px]:mt-4">
            This is a post-in note
          </p>
    
        </div>

        <div className="w-[240px] h-[210px] bg-[#BBB2F7] shadow-md box3 flex flex-col items-center justify-center
        max-[1025px]:w-[120px] max-[1025px]:h-[100px] gap-y-2
        group-hover:absolute group-hover:left-[500px] group-hover:rotate-3 group-hover:transition-all group-hover:duration-200 group-hover:ease-in-out">

          <p className="h-[44px] w-[60px] max-[1025px]:w-[40px] max-[1025px]:h-[22px]">
            🤔
          </p>

          <p className="font-inter font-semibold text-[15px] leading-[18px] text-[#040212]
          max-[1025px]:text-[8px] max-[1025px]:leading-[9px] max-[1025px]:font-medium">
            Question card
          </p>

        </div>

        <div className="relative group-hover:top-[230px] group-hover:rotate-[4deg] group-hover:left-[500px] z-[3] group-hover:transition-all group-hover:duration-200 group-hover:ease-in-out">
          <div className="w-[50px] h-[49px] bg-[#3DCC91] rotate-45 absolute max-[1025px]:w-[25px] max-[1025px]:h-[24.5px] max-[1025px]:top-[100px] max-[1025px]:right-[49.4125px] "/>

          <div className="absolute w-[200px] h-[180px] bg-[#3dcc91] left-[25px] bottom-[230.1px] max-[1025px]:w-[90px] max-[1025px]:h-[60px] max-[1025px]:-left-[80px] max-[1025px]:bottom-[28px]" >

          <p className="font-inter font-semibold text-[15px] leading-[18px] text-[#040212] text-center mt-6
          max-[1025px]:text-[8px] max-[1025px]:leading-[9px] max-[1025px]:font-medium">
            This is important
          </p>

          </div>
        </div>

      </div>

    </div>

    
  )
}

export default Notes;