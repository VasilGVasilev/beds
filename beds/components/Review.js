import Link from "next/link";

import { AiFillLike } from 'react-icons/ai';
import { GoComment } from 'react-icons/go';
import { PiShareFat } from 'react-icons/pi'
import { BiWorld } from 'react-icons/bi';

import { motion } from "framer-motion";
import { imageLoader } from "@/utils/imgLoader";
import Image from "next/image";


export const Review = ({ review }) => {
    return (
        <Link href={'https://www.facebook.com/profile.php?id=100042058017286&sk=reviews'}>

            <motion.li
                key={review.id}
                className="flex flex-col md:w-128 md:mx-auto p-4 m-10 bg-[#242526] text-[#E4E6EB] rounded-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, scale: 0.1 },
                    visible: { opacity: 1, scale: 1 },
                }}
            >
                <div className="flex flex-row">
                    <Image
                        className="w-10 h-10 rounded-full mr-4"
                        loader={imageLoader}
                        src={review.user.avatar}
                        alt="Image"
                        width={1298}
                        height={828}
                    ></Image>

                    <div className="flex flex-col">
                        <div className="flex flex-row gap-2 justify-center items-center">
                            <h3 className="text-lg font-semibold">{review.user.name}   <span className="text-[#B8BBBF]">препоръчва </span> Даниел Младенов - падащи легла.</h3>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-2">
                            <p className="text-[#B8BBBF]">{review.date}</p>
                            <BiWorld
                                size={24}
                            />

                        </div>
                    </div>
                </div>
                <div>
                    {review.text}
                </div>
                <hr className="bg-[#3E4042] mt-3" />
                <div className="flex flex-row mt-3 justify-around items-center">
                    <div className="flex flex-row gap-2 text-[#B8BBBF] justify-center items-center ">
                        <AiFillLike size={24} />
                        <div>Like</div>
                    </div>
                    <div className="flex flex-row gap-2 text-[#B8BBBF] justify-center items-center ">
                        <GoComment size={24} />

                        <div>Comment</div>
                    </div>
                    <div className="flex flex-row gap-2 text-[#B8BBBF] justify-center items-center">
                        <PiShareFat size={24} />

                        <div>Share</div>
                    </div>

                </div>
            </motion.li>
        </Link>
    )
}