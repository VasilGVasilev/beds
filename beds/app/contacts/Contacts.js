
'use client'

import Image from "next/image"
import { imageLoader } from "../../utils/imgLoader";
import Maps from "@/components/Location";
import Link from "next/link";
import { motion } from "framer-motion";

export const revalidate = 0; // revalidate this page every 60 seconds


export default function Contacts() {


  return (
    <>
      <div className="relative ">

        <img
          className="mx-auto w-full h-96 bg-white opacity-10 "
          // loader={imageLoader}
          src="/contact-bg.webp"
          alt="Image"
        />

        <div className="absolute top-0 left-0 p-10 w-full h-full flex flex-col justify-center items-center gap-10">

          <motion.div
            className="text-blue-600 text-left text-4xl "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >ЗА ЗАПИТВАНИЯ И ВЪПРОСИ </motion.div>

          <div className="flex flex-col justify-center items-center">

            <div className=" text-white flex flex-col gap-5">
              <div>
                <p>
                  Адрес:
                </p>
                <p>
                  бул. име на булевард, бл.100
                </p>
                <p>
                  пощенски код, ж.к. нещо си, гр. София
                </p>
              </div>
              <div>
                <p>
                  Телефон: <a href={`tel:00359888368256`} className="text-green-600 text-4xl">0888368256</a>
                </p>
              </div>

            </div>



          </div>
        </div>

      </div>
      
      <Maps></Maps>
    </>
  )
}

