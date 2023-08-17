'use client'

import Link from "next/link";
import Image from "next/image"
import { imageLoader } from "../../utils/imgLoader";
import { lato } from "@/utils/fonts";
import { motion } from "framer-motion";
import { Review } from "@/components/Review";


// export const metadata = {
//   title: 'Инвеститор - Ixora Residence',
// };

export const revalidate = 0; // revalidate this page every 60 seconds

const reviews = [{
    id: 'asdasd',
    user: {
        avatar: '/client-one.webp',
        name: 'Desi Focusonyou'
    },
    date: '8 май',
    text: 'Препоръчвам Даниел Младенов много коректно отношение, бързо изпълнение в уговорения срок и качествемо изпълнение. Благодаря ти.'
},
{
    id: 'asdasd',
    user: {
        avatar: '/client-two.webp',
        name: 'Ivelina Mladenova'
    },
    date: '27 април',
    text: 'Страхотно изпълнение.Невероятен човек.'
},
{
    id: 'asdasd',
    user: {
        avatar: '/client-three.webp',
        name: 'Лъчезар Симеонов'
    },
    date: '5 януари',
    text: 'Професионалист - препоръчвам! Взе мерки, разбра точно какво искаме, изпрати ни скица и цена (нямаше допълнително оскъпяване от типа "ама то тука и това трябва"), бързо и качествено изпълни поръчката. Нямам никакви забележки.'
}]



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
                <ul>
                    {reviews.map((review) => (
                        <Review review={review}></Review>
                    ))}
                </ul>
            </div>

        </>
    )
}
