'use client'

import Link from "next/link";
import Image from "next/image"
import { imageLoader } from "../../utils/imgLoader";
import { lato } from "@/utils/fonts";
import { motion } from "framer-motion";

import { AiFillLike } from 'react-icons/ai';
import { GoComment } from 'react-icons/go';
import { PiShareFat } from 'react-icons/pi'
import { BiWorld } from 'react-icons/bi';

// export const metadata = {
//   title: 'Инвеститор - Ixora Residence',
// };

export const revalidate = 0; // revalidate this page every 60 seconds

const reviews = [{
    id: 'asdasd',
    user: {
        avatar: '/client-one.jpg',
        name: 'Desi Focusonyou'
    },
    date: '8 май',
    text: 'Препоръчвам Даниел Младенов много коректно отношение, бързо изпълнение в уговорения срок и качествемо изпълнение. Благодаря ти.'
},
{
    id: 'asdasd',
    user: {
        avatar: '/client-two.jpg',
        name: 'Ivelina Mladenova'
    },
    date: '27 април',
    text: 'Страхотно изпълнение.Невероятен човек.'
},
{
    id: 'asdasd',
    user: {
        avatar: '/client-three.jpg',
        name: 'Лъчезар Симеонов'
    },
    date: '5 януари',
    text: 'Професионалист - препоръчвам! Взе мерки, разбра точно какво искаме, изпрати ни скица и цена (нямаше допълнително оскъпяване от типа "ама то тука и това трябва"), бързо и качествено изпълни поръчката. Нямам никакви забележки.'
}]

export const Review = ({review}) => {
    return (
        <Link href={'https://www.facebook.com/profile.php?id=100042058017286&sk=reviews'}>

            <li key={review.id} className="flex flex-col md:w-128 md:mx-auto p-4 m-10 bg-[#242526] text-[#E4E6EB] rounded-md">
                <div className="flex flex-row">
                    <img
                        src={review.user.avatar}
                        alt={review.user.name}
                        className="w-10 h-10 rounded-full mr-4"
                    />
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
            </li>
        </Link>
    )
}

export default function Opinions() {



    return (
        <>

            <div className="flex flex-col ">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    className="font-semibold flex justify-center items-center m-20"
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.1 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    <div className="text-6xl text-white">
                        Мнения на наши клиенти
                    </div>
                </motion.h2>
                <ul className="divide-y">
                    {reviews.map((review) => (
                        <Review review={review}></Review>
                    ))}
                </ul>
            </div>

        </>
    )
}
