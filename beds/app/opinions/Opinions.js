'use client'

import Link from "next/link";
import Image from "next/image"
import { imageLoader } from "../../utils/imgLoader";
import { lato } from "@/utils/fonts";
import { motion } from "framer-motion";
import { Review } from "@/components/Review";



export const revalidate = 0; // revalidate this page every 60 seconds

const reviews = [{
    id: 'first',
    user: {
        avatar: '/client-one.webp',
        name: 'Desi Focusonyou'
    },
    date: '8 май',
    text: 'Препоръчвам Даниел Младенов много коректно отношение, бързо изпълнение в уговорения срок и качествемо изпълнение. Благодаря ти.'
},
{
    id: 'second',
    user: {
        avatar: '/client-two.webp',
        name: 'Ivelina Mladenova'
    },
    date: '27 април',
    text: 'Страхотно изпълнение.Невероятен човек.'
},
{
    id: 'third',
    user: {
        avatar: '/client-three.webp',
        name: 'Лъчезар Симеонов'
    },
    date: '5 януари',
    text: 'Професионалист - препоръчвам! Взе мерки, разбра точно какво искаме, изпрати ни скица и цена (нямаше допълнително оскъпяване от типа "ама то тука и това трябва"), бързо и качествено изпълни поръчката. Нямам никакви забележки.'
}]

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 1,
        },
    },
};

export default function Opinions() {



    return (
        <div className="bg-ixora-deep-blue flex flex-col">


                <div className="bg-gray-800 m-10 rounded-sm">
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
                        <div className="text-4xl text-white text-center">
                            Мнения на клиенти
                        </div>
                    </motion.h2>
                </div>
                {
                    reviews && //for future await of data to be fetched
                    <motion.ul
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {reviews.map((review) => (
                            <Review key={review.id} review={review}></Review>
                        ))}
                    </motion.ul>
                }


        </div>
    )
}
