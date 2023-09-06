'use client'

import Image from "next/image"
import { imageLoader } from "../../utils/imgLoader";
import Maps from "@/components/Location";
import { motion } from "framer-motion";

export const revalidate = 0; // revalidate this page every 60 seconds

export default function Order() {

    return (
        <div className="bg-beds-deep-blue flex flex-col">
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
                    <Image
                        className="w-40 h-40 md:basis-1/6 lg:basis-1/12"
                        loader={imageLoader}
                        src="/step-one.webp"
                        alt="Image"
                        width={512}
                        height={512}
                    ></Image>

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
                    <Image
                        className="w-40 h-40 md:order-2 md:basis-1/6 lg:basis-1/12"
                        loader={imageLoader}
                        src="/step-two.webp"
                        alt="Image"
                        width={512}
                        height={512}
                    ></Image>
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
                    <Image
                        className="w-40 h-40 md:basis-1/6 lg:basis-1/12"
                        loader={imageLoader}
                        src="/step-three.webp"
                        alt="Image"
                        width={512}
                        height={512}
                    ></Image>
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
                    <Image
                        className="w-40 h-40 md:order-2 md:basis-1/6 lg:basis-1/12"
                        loader={imageLoader}
                        src="/step-four.webp"
                        alt="Image"
                        width={512}
                        height={512}
                    ></Image>
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
                    <Image
                        className="w-40 h-40 md:basis-1/6 lg:basis-1/12"
                        loader={imageLoader}
                        src="/step-five.webp"
                        alt="Image"
                        width={512}
                        height={512}
                    ></Image>
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
                    <Image
                        className="w-40 h-40 md:order-2 md:basis-1/6 lg:basis-1/12"
                        loader={imageLoader}
                        src="/step-six.webp"
                        alt="Image"
                        width={512}
                        height={512}
                    ></Image>
                    <div className="md:order-1 md:basis-5/6 lg:basis-11/12 justify-center items-center ">
                        Няколко дни преди доставката ние ще се свържем с Вас, за да потвърдим монтажа.
                    </div>
                </motion.div>

            </div>

            <div
                className="font-semibold flex justify-center items-center m-20"
            >
                <div className="text-4xl text-white">
                    Цени
                </div>
            </div>

            <div
                className=" flex justify-center items-center m-10"
            >
                <div className="sm:text-2xl text-white font-extrabold text-justify">
                    ВАЖНО: Цените са с включена доставка /вкл. качване до етаж/ и монтаж за гр. София  /за други населени места тези услуги са по запитване/. Вземането на размери на място преди поръчка е силно препоръчително, тази услуга не се заплаща.
                </div>
            </div>

            {/* Container for Prices */}
            <div className="bg-white p-20 w-full h-full flex-col justify-center items-center space-y-10 text-black text-justify text-lg font-semibold">
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
                    <div className=" justify-center items-center" >
                        Легло за матрак 90 х 190 см с размери 101.1 х 198.8 х 38 см: цена 1015 лв
                    </div>
                </motion.div>
                <hr />
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
                    <div className=" justify-center items-center">
                        Легло за матрак 72 х 190 см с размери 83.1 х 198.8 х 38 см: цена 1015 лв
                    </div>
                </motion.div>
                <hr />
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
                    <div className=" justify-center items-center">
                        Легло за матрак 82 х 190 см с размери 93.1 х 198.8 х 38 см: цена 1015 лв
                    </div>
                </motion.div>
                <hr />

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
                    <div className=" justify-center items-center">
                        Легло за матрак  140 х 190 см с размери 151.1 х 198.8 х 38 см: цена 1190 лв
                    </div>
                </motion.div>
                <hr />

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
                    <div className=" justify-center items-center">
                        Легло за матрак  144 х 190 см с размери 155.1 х 198.8 х 38 см: цена 1190 лв
                    </div>
                </motion.div>
                <hr />

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
                    <div className=" justify-center items-center ">
                        Легло за матрак  150 х 190 см с размери 161.1 х 198.8 х 38 см: цена 1190 лв
                    </div>
                </motion.div>
                <hr />

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
                    <div className=" justify-center items-center">
                        Легло за матрак  160 х 190 см с размери 171.1 х 198.8 х 38 см: цена 1190 лв
                    </div>
                </motion.div>
                <hr />

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
                    <div className=" justify-center items-center ">
                        Легло за матрак  164 х 190 см с размери 175.1 х 198.8 х 38 см: цена 1190 лв
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

