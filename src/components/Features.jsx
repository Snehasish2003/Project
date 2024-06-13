import React from 'react'
import feature1 from "../assets/feature1.png"
import feature2 from "../assets/feature2.png"
import feature3 from "../assets/feature3.png"
import feature4 from "../assets/feature4.png"
import feature5 from "../assets/feature5.png"
import feature6 from "../assets/feature6.png"
import feature7 from "../assets/feature7.png"
import arrow from "../assets/Arrow.png"
import { motion } from "framer-motion"

const Features = () => {
    const features = [
        {
            title: "Feature 1",
            descriprition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: feature1,
            reverse: false

        },
        {
            title: "Feature 2",
            descriprition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: feature2,
            reverse: true

        },
        {
            title: "Feature 3",
            descriprition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: feature3,
            reverse: false

        },
        {
            title: "Feature 4",
            descriprition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: feature4,
            reverse: true

        },
        {
            title: "Feature 5",
            descriprition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: feature5,
            reverse: false

        },
        {
            title: "Feature 6",
            descriprition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: feature6,
            reverse: true

        },
        {
            title: "Feature 7",
            descriprition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: feature7,
            reverse: false

        },

    ]
    return (

        <motion.div
    className='feature z-10 max-w-[800px] xl:max-w-[1000px] w-[65%] my-3 flex flex-col items-center '
            initial={{ y: 400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
        >
            {features.map((feature, index) => (
                <div key={index} className={`flex gap-5   justify-center items-center ${!feature.reverse ? 'flex-row' : ' flex-row-reverse'}`}>
                    <img src={feature.image} alt="" className='w-[10rem] h-[8rem] md:w-[13rem] md:h-[11rem] lg:w-[20rem] lg:h-[15rem]' />
                    <div className='flex flex-col gap-4 '>
                        <h1 className=' text-xl lg:text-5xl'>{feature.title}</h1>
                        <p className='text-[8px] lg:text-[10px] w-[10rem] md:w-[14rem] lg:w-[22rem]'>{feature.descriprition}</p>
                        <div className='  text-[8px] flex w-[130px] gap-3 items-center'>
                            <p className=' text-[#B9B9B9] cursor-pointer '>Learn more </p>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>
            ))}

        </motion.div>

    )
}

export default Features
