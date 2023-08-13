'use client'
import Link from "next/link"
import Image from "next/image"
import { imageLoader } from "../utils/imgLoader"
import LineGradient from "../components/LineGradient"
import Maps from "@/components/Location"
import { motion } from "framer-motion"
import WelcomeText from "@/components/WelcomeText"
import { playfair } from "@/utils/fonts"
import Gallery from "@/components/Gallery"

export const revalidate = 0; // revalidate this page every 60 seconds
const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};
  
const letterVariant = {
    hidden: { opacity: 0},
    visible: { opacity: 1},
};

export default function Home() {
    return (
        <div>
            {/* WELCOME IMAGE */}

            <div className="group relative ">

                <img
                    className="mx-auto w-full h-1/2 bg-white opacity-20 group-hover:opacity-60 transition"
                    loader={imageLoader}
                    src="/fb-welcome.png"
                    alt="Image"
                />
                <Link href={'https://www.facebook.com/profile.php?id=100042058017286&locale=bg_BG'}>

                    <div className="absolute bottom-[15%] sm:bottom-1/3 left-0 w-full h-full flex items-end justify-center ">
                        <motion.div 
                            className={`font-extrabold welcomeTextOnImg text-blue-600 text-center text-2xl md:text-4xl lg:text-6xl xl:text-[80px] animate-bounce `}
                            variants={container}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <motion.span variants={letterVariant}>П</motion.span>
                            <motion.span variants={letterVariant}>о</motion.span>
                            <motion.span variants={letterVariant}>с</motion.span>
                            <motion.span variants={letterVariant}>л</motion.span>
                            <motion.span variants={letterVariant}>е</motion.span>
                            <motion.span variants={letterVariant}>д</motion.span>
                            <motion.span variants={letterVariant}>в</motion.span>
                            <motion.span variants={letterVariant}>а</motion.span>
                            <motion.span variants={letterVariant}>й</motion.span>
                            <motion.span variants={letterVariant}>т</motion.span>
                            <motion.span variants={letterVariant}>е</motion.span>
                            <motion.span variants={letterVariant}> </motion.span>
                            <motion.span variants={letterVariant}>н</motion.span>
                            <motion.span variants={letterVariant}>и</motion.span>
                            <motion.span variants={letterVariant}> </motion.span>
                            <motion.span variants={letterVariant}>в</motion.span>
                            <motion.span variants={letterVariant}>ъ</motion.span>
                            <motion.span variants={letterVariant}>в</motion.span>
                            <motion.span variants={letterVariant}> </motion.span>
                            <motion.span variants={letterVariant}>ф</motion.span>
                            <motion.span variants={letterVariant}>е</motion.span>
                            <motion.span variants={letterVariant}>й</motion.span>
                            <motion.span variants={letterVariant}>с</motion.span>
                            <motion.span variants={letterVariant}>б</motion.span>
                            <motion.span variants={letterVariant}>у</motion.span>
                            <motion.span variants={letterVariant}>к</motion.span>

                        </motion.div>
                    </div>
                </Link>

            </div>
            <LineGradient></LineGradient>

            {/* WELCOME TEXT AND FALLING LIKE A BED ANIMATION */}
            <div className="lg:flex lg:justify-center lg:items-center lg:p-10 bg-orange-50">
                {/* WELCOME TEXT */}
                <div className="lg:basis-[30%]">
                    <div className={` p-10`}>
                        <motion.div
                            className="py-5 text-ixora-orange text-left text-3xl font-extrabold"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.3 ,duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }} 
                            ><img src="/assets/triangle.svg" alt="triangle" className="bg-inherit" /> </motion.div>
                        <WelcomeText></WelcomeText>
                    </div>
                </div>

                {/* WELCOME IMAGE */}
                <motion.div 
                    className=""
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay:0.4 ,duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                >

                    <Link href={'/apartments'}>
                        <img
                            className="transition-transform duration-700 ease-in-out hover:scale-110"
                            // loader={imageLoader}
                            src="/assets/folding-bed.gif"

                            alt="Image"
                        />
                    </Link>

                </motion.div>
            </div>
            <LineGradient></LineGradient>


            {/* GALLERY */}
            <Gallery></Gallery>
            <LineGradient></LineGradient>

            {/* LOCATION */}
            <>
                <Maps></Maps>
            </>
            <LineGradient></LineGradient>
        </div>
    )
}
