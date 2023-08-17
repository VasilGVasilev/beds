'use client'

import Image from "next/image"
import { imageLoader } from "../../utils/imgLoader";
import Maps from "@/components/Location";
import { motion } from "framer-motion";

export const revalidate = 0; // revalidate this page every 60 seconds

export default function Order() {

    return (
        <div className="bg-ixora-deep-blue flex flex-col">
            <motion.div
                initial="hidden"
                whileInView="visible"
                className="font-semibold flex justify-center items-center m-20"
                viewport={{ once: true }}

                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                }}
            >
                <div className="text-4xl text-white">
                    КАК ДА ПОРЪЧАМ?
                </div>
            </motion.div>
            {/* Container for Steps */}
            <div className="bg-white p-20 w-full h-full flex-col justify-center items-center space-y-5 text-black text-justify font-semibold">
                {/* Container for image with overflow effect, this template to be used for subsequent pictures */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    className="flex flex-col md:flex-row justify-center items-center"
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, x: -200 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <img src="/step-one.webp" alt="step-img" className="w-40 h-40 md:basis-1/6 lg:basis-1/12" />
                    <div className="md:basis-5/6 lg:basis-11/12 justify-center items-center" >
                        За да получите ценова оферта за падащи легла, можете да направите обаждане на нашия телефон <a className="text-green-600 text-5xl" href={`tel:00359888368256`}>0888368256</a>.
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    className="flex flex-col md:flex-row justify-center items-center"
                    
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, x: 200 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <img src="/step-two.webp" alt="step-img" className="w-40 h-40 md:order-2 md:basis-1/6 lg:basis-1/12" />
                    <div className="md:order-1 md:basis-5/6 lg:basis-11/12 justify-center items-center">
                        След като одобрите ценовата оферта, ние ще ви изпратим договор за изработка. След подписване на договора, ние ще започнем да работим по вашата поръчка.
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    className="flex flex-col md:flex-row justify-center items-center"
                    
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, x: -200 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <img src="/step-three.webp" alt="step-img" className="w-40 h-40 md:basis-1/6 lg:basis-1/12" />
                    <div className="md:basis-5/6 lg:basis-11/12 justify-center items-center"> 
                        За да платите за вашата поръчка, можете да направите банков превод или да платите в офиса на фирмата.
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    className="flex flex-col md:flex-row justify-center items-center"
                    
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, x: 200 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <img src="/step-four.webp" alt="step-img" className="w-40 h-40 md:order-2 md:basis-1/6 lg:basis-1/12" />
                    <div className="md:order-1 md:basis-5/6 lg:basis-11/12 justify-center items-center">
                        След като платите, ние ще се свържем с вас, за да уговорим ден и час, в който да посетим вашия дом и да снемаме точни размери на помещението, което ще обзавеждаме.
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    className="flex flex-col md:flex-row justify-center items-center"
                    
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, x: -200 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <img src="/step-five.webp" alt="step-img" className="w-40 h-40 md:basis-1/6 lg:basis-1/12" />
                    <div className="md:basis-5/6 lg:basis-11/12 justify-center items-center">
                        Ако имате някакви забележки, промени по проекта могат да се правят до окончателното му одобрение от Ваша страна.
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    className="flex flex-col md:flex-row justify-center items-center"
                    
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, x: 200 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <img src="/step-six.webp" alt="step-img" className="w-40 h-40 md:order-2 md:basis-1/6 lg:basis-1/12" />
                    <div className="md:order-1 md:basis-5/6 lg:basis-11/12 justify-center items-center ">
                        Няколко дни преди доставката ние ще се свържем с Вас, за да потвърдим монтажа.
                    </div>
                </motion.div>

            </div>

        </div>
    )
}

