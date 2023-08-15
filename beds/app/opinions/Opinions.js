'use client'

import Link from "next/link";
import Image from "next/image"
import { imageLoader } from "../../utils/imgLoader";
import { lato } from "@/utils/fonts";
import { motion } from "framer-motion";

import { AiFillLike } from 'react-icons/ai';
import { GoComment } from 'react-icons/go';
import { PiShareFat } from 'react-icons/pi'

// export const metadata = {
//   title: 'Инвеститор - Ixora Residence',
// };

export const revalidate = 0; // revalidate this page every 60 seconds

const reviews = [{
    id: 'asdasd',
    user: {
        avatar: '/dm-logo.png',
        name: 'Desi Focusonyou'
    },
    date: '8 май',
    icon: '/fb-welcome.png',
    text: 'Препоръчвам Даниел Младенов много коректно отношение, бързо изпълнение в уговорения срок и качествемо изпълнение. Благодаря ти.'
},
{
    id: 'asdasd',
    user: {
        avatar: '/dm-logo.png',
        name: 'Ivelina Mladenova'
    },
    date: '8 май',
    icon: '/fb-welcome.png',
    text: 'Страхотно изпълнение.Невероятен човек.'
},
{
    id: 'asdasd',
    user: {
        avatar: '/dm-logo.png',
        name: 'Лъчезар Симеонов'
    },
    date: '8 май',
    icon: '/fb-welcome.png',
    text: 'Професионалист - препоръчвам! Взе мерки, разбра точно какво искаме, изпрати ни скица и цена (нямаше допълнително оскъпяване от типа "ама то тука и това трябва"), бързо и качествено изпълни поръчката. Нямам никакви забележки.'
}]

export const Review = () => {
    return (
        <li key={review.id} className="py-4">
            <div className="flex flex-row">
                <img
                    src={review.user.avatar}
                    alt={review.user.name}
                    className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                    <h3 className="text-lg font-semibold">{review.user.name}  препоръчва Даниел Младенов - падащи легла.</h3>
                    <p>{review.text}</p>
                </div>
            </div>
        </li>
    )
}

export default function Opinions() {



    return (
        <>

            <div className="flex flex-col ">
                <h2 className="text-2xl font-semibold ">Мнения на наши клиенти</h2>
                <ul className="divide-y">
                    {reviews.map((review) => (
                        <li key={review.id} className="p-4 flex flex-col m-10 bg-[#242526] text-[#E4E6EB] rounded-md">
                            <div className="flex flex-row">
                                <img
                                    src={review.user.avatar}
                                    alt={review.user.name}
                                    className="w-10 h-10 rounded-full mr-4"
                                />
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-semibold">{review.user.name}   <span className="text-[#B8BBBF]">препоръчва </span> Даниел Младенов - падащи легла.</h3>
                                    <div className="flex flex-row">
                                        <p className="text-[#B8BBBF]">{review.date}</p>
                                        <img
                                            src={review.icon}
                                            alt={review.icon}
                                            className="w-10 h-10 rounded-full mr-4"
                                        />

                                    </div>
                                </div>
                            </div>
                            <div>
                                {review.text}
                            </div>
                            <hr className="bg-[#3E4042]" />
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
                    ))}
                </ul>
            </div>

        </>
    )
}
