import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import inbox from "../assets/inbox.svg";
import { useNavigate } from 'react-router-dom';
import search from "../assets/search.png"
import send from "../assets/send.png"
import Popup from './Popup';

export default function Dropdown({ className }) {
  const [text, setText] = useState("");
  const handelText = (e) => {
    setText(e.target.value);
  }
  const navigate = useNavigate();
  const sending = () => {
    if (text === "") {
      alert("please enter Something")
    }
    else {

      navigate("/uploader")
    }
  }
  const [isUpload,setUpload]=useState(false);

  const [file, setFile] = useState([]);
  console.log(file)
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);

    setFile(acceptedFiles)
    setUpload(true)
  }, []);


  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <section className='w-full h-[90vh] hero-background flex flex-col justify-center items-center'>
      { isUpload 
      ? <Popup /> 
      : <div className='z-[2] w-full h-[90%] md:w-[90%] md:h-[80%] flex justify-center items-center flex-col  '>
        <h1 className='sm:text-4xl lg:text-[2.5rem]  text-[1.75rem] w-full font-bold text-[#FFFFFF] text-center  '>Study with any Text/Image/PDF</h1>
        <p className='text-[#B9B9B9] font-bold text-sm  sm-text-lg  md:text-xl p-3 w-[90%] lg:w-[60%]  text-center'>Join millions of students, researchers and professionals to  instantly answer questions and understand research with AI </p>

        <div {...getRootProps()} className='m-2 h-[30%] w-[80%] sm:h-[60%] sm:w-[60%] lg:w-[50%] border-[2px] border-dashed rounded-lg text-white flex justify-center items-center  border-[#D9D9D9] bg-[#010C16] mt-10 max-h-80' >
          <input {...getInputProps()} name='file' className='w-full h-full ' />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p className='text-md  text-[#B9B9B9]  justify-center items-center flex flex-col gap-2'>
                <img src={inbox} alt="" className='w-[20%] h-[20%] m-0 rounded-none' />
                Drop PDF here
              </p>
          }
        </div>


        <div className=" my-3 w-[80%]  sm:w-[60%] md:w-[52%] bg-[#010C16] rounded-3xl h-[3.75rem] flex   items-center justify-between border-none  shadow-sm mt-8 gap-4 px-6">
          <div className='flex gap-3 '>
            <img src={search} width={20} height={20} alt="" />
            <input type="text" onChange={handelText}  value={text} className='bg-[#010C16] border-none outline-none w-[10rem]' placeholder="Ask a Question" />
          </div>
          <div className='bg-none rounded-lg flex justify-center items-center w-[25px] h-[25px] cursor-pointer'><img src={send}  alt="" onClick={sending} /></div>
        </div>
      </div>

      }
    </section>

  );
}
