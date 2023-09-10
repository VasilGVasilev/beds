'use client'
import Link from "next/link"
import Image from "next/image"
import { imageLoader } from "../utils/imgLoader"
import Maps from "@/components/Location"
import { motion } from "framer-motion"
import WelcomeText from "@/components/WelcomeText"
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
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export default function Home() {
    return (
        <div className="bg-beds-deep-blue flex flex-col">
            {/* WELCOME IMAGE */}

            <div className="group relative ">
                <Image
                    className="mx-auto w-full h-36 bg-white opacity-20 group-hover:opacity-60 transition"

                    loader={imageLoader}
                    src="/fb-welcome.webp"
                    alt="Image"
                    width={2868}
                    height={1367}
                ></Image>

                <Link href={'https://www.facebook.com/profile.php?id=100042058017286&locale=bg_BG'}>

                    <div className="absolute bottom-[15%] sm:bottom-1/3 left-0 w-full h-full flex items-end justify-center ">
                        <motion.div
                            className={`font-extrabold welcomeTextOnImg text-blue-600 text-center text-2xl md:text-4xl lg:text-6xl xl:text-[80px] animate-bounce group-hover:animate-none `}
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


            {/* WELCOME TEXT AND FALLING LIKE A BED ANIMATION */}

            <div className="lg:flex lg:justify-center lg:items-center lg:p-10 bg-gray-100">
                {/* WELCOME TEXT */}
                <div className="lg:basis-1/2">
                    <div className={` p-10`}>
                        <motion.div
                            className="py-5"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <Image
                                className="bg-inherit"
                                loader={imageLoader}
                                src="/assets/triangle.svg"
                                alt="Image"
                                width={100}
                                height={100}
                            ></Image>
                        </motion.div>
                        <WelcomeText></WelcomeText>
                        <motion.div
                            className="py-5"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 2, duration: 0.7 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <span className="font-extrabold">Материал:</span> ЛПДЧ 18 мм
                        </motion.div>
                        <motion.div
                            className="py-5"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 1, duration: 0.3 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <Link href={'/order'} className="font-extrabold text-blue-600 ">За цени кликнете тук</Link>
                        </motion.div>
                    </div>
                </div>

                {/* WELCOME IMAGE */}
                <motion.div
                    className="flex flex-col justify-center items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100042058017286%2Fvideos%2F806059054460771%2F&show_text=false&width=267&t=0" width="267" height="476" scrolling="no" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>

                </motion.div>
            </div>



            {/* GALLERY */}
            <Gallery></Gallery>


            {/* LOCATION */}
            <Maps></Maps>


        </div>
    )
}
