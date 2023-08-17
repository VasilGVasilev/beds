'use client'

import Link from "next/link";
import Image from "next/image"
import { imageLoader } from "../../utils/imgLoader";
import { lato } from "@/utils/fonts";
import { motion } from "framer-motion";
import { FBVideo } from "@/components/FBVideo";
// export const metadata = {
//   title: 'Инвеститор - Ixora Residence',
// };

export const revalidate = 0; // revalidate this page every 60 seconds

const videoArr = [
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100042058017286%2Fvideos%2F806059054460771%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100042058017286%2Fvideos%2F3623445054545601%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100042058017286%2Fvideos%2F104565546011389%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100042058017286%2Fvideos%2F647967103526823%2F&show_text=false&width=267&t=0"
]


export default function Video() {



    return (
        <div className="bg-ixora-deep-blue flex flex-col">

                <div className="bg-gray-800 m-10 rounded-sm flex justify-center items-center">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        className="font-semibold flex justify-center items-center m-20"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, scale: 0.1 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                    >
                        <div className="text-4xl text-white">
                            Видеоклипове
                        </div>
                    </motion.h2>
                </div>

                <div
                    className="flex flex-row flex-wrap m-10 gap-10 justify-center items-center"
                >
                    {videoArr.map((videoURL) => (
                        <FBVideo key={videoURL} url={videoURL}></FBVideo>
                    ))}
                </div>
        </div>
    )
}
