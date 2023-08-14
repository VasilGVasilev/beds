'use client'

import Image from "next/image"
import { imageLoader } from "../../utils/imgLoader";
import Maps from "@/components/Location";
import { motion } from "framer-motion";

export const revalidate = 0; // revalidate this page every 60 seconds

const buildingProcessLayout = "pb-10 px-5 h-full w-full lg:h-96 flex justify-center"
export default function Order() {

    return (
        <>

            {/* Container for Steps */}
            <div className="bg-ixora-dark px-5 w-full h-full flex-col justify-center items-center space-y-5">
                {/* Container for image with overflow effect, this template to be used for subsequent pictures */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    className="flex justify-center items-center"
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, x: -200 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div>1</div>
                    <div>
                        asdasd
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    className="flex justify-center items-center"
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, x: 200 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div>2</div>
                    <div>
                        asdasd
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    className="flex justify-center items-center"
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, x: -200 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div>3</div>
                    <div>
                        asdasd
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    className="flex justify-center items-center"
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, x: 200 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div>4</div>
                    <div>
                        asdasd
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    className="flex justify-center items-center"
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, x: -200 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div>5</div>
                    <div>
                        asdasd
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    className="flex justify-center items-center"
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, x: 200 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div>6</div>
                    <div>
                        asdasd
                    </div>
                </motion.div>

            </div>

        </>
    )
}

