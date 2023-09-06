import { useState, useRef } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from 'next/link'

import { imageLoader } from '../utils/imgLoader'
import Image from 'next/image'
import { usePathname } from "next/navigation";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { motion } from "framer-motion"

AiOutlineMenu

// props: 
// - name of link, must be constant
// - selected or to be selected animation
// - change state in parent of Navbar component -> Home component

// TODO: 
// mobile menu comes as an animation with framer motion
// may be reverse link to anchor link if not smooth
// refactor img to Image


const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const navbarVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const LinkMobileTemplate = ({ urlLink, page, setIsMenuToggled }) => {

    const pathName = usePathname();

    return (
        <Link
            href={urlLink}
            className={`${pathName === urlLink ? "text-yellow-500" : ""
                }  hover:scale-125 transition duration-300`}
            onClick={() => {
                setIsMenuToggled(false);
            }
            }
        >
            {page}
        </Link>
    );
};

const LinkTemplate = ({ urlLink, page }) => {

    const pathName = usePathname();

    return (
        <Link
            href={urlLink}
            className={`${pathName == urlLink ? "text-blue-600" : ""
                }  hover:scale-125 transition duration-300`}
        >
            {page}
        </Link>
    );
};



const Navbar = () => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 900px)");

    const modalRef = useRef(null);

    const closeModal = (e) => {
        e.stopPropagation();
        if (e.target == modalRef.current) {
            setIsMenuToggled(!isMenuToggled)

        }

    }

    return (
        <>
            {/* HIDDEN div to fix navbar being fixed */}
            <div className={`bg-beds-deep-blue z-40 w-full top-0 py-[2%] sm:py-[1%]`} >
                <div className="flex items-center justify-between mx-auto w-5/6">

                    <div className='saturate-200 duration-200 flex justify-center items-center h-[30%] w-[30%] sm:h-[15%] sm:w-[15%]' >
                        <div
                            className="rounded-xl h-10 md:h-16"

                        />
                    </div>



                </div>

            </div>

            {/* ACTUAL NAVBAR */}
            <nav className={`bg-black z-40 w-full fixed top-0 py-[2%] sm:py-[1%]`} >
                <div className="flex items-center justify-between mx-auto w-5/6">

                    <Link className='saturate-200 duration-200 flex justify-center items-center h-[30%] w-[30%] sm:h-[15%] sm:w-[15%]' href={'/'}>
                        <Image
                            className="rounded-xl h-10 md:h-16"
                            loader={imageLoader}
                            src="/dm-logo.webp"
                            alt="Image"
                            width={1298}
                            height={828}
                        ></Image>
                    </Link>
                    {/* DESKTOP NAV */}
                    {isDesktop ? (
                        <div className={`text-xl 2xl:text-2xl flex justify-between gap-10 2xl:gap-16 text-white font-bold`}>
                            <LinkTemplate
                                urlLink='/'
                                page="Начало"
                            />
                            <LinkTemplate
                                urlLink='/order'
                                page="Как да поръчам"
                            />
                            <LinkTemplate
                                urlLink='/video'
                                page="Видео"
                            />
                            <LinkTemplate
                                urlLink='/opinions'
                                page="Мнения"
                            />
                            <LinkTemplate
                                urlLink='/contacts'
                                page="Контакти"
                            />
                        </div>
                    ) : (
                        <button
                            className="rounded-full bg-red p-2"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <AiOutlineMenu size={20} />
                        </button>
                    )}

                    {/* MOBILE MENU POPUP */}
                    {!isDesktop && isMenuToggled && (
                        <div
                            className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-80"
                            onClick={closeModal}
                            ref={modalRef}
                        >
                            <motion.div
                                className="fixed z-50 right-0 bottom-0 h-full bg-beds-deep-blue w-[300px]"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.3 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                            // ref={modalRef}

                            >
                                {/* CLOSE ICON */}
                                <div className="flex justify-end p-12">
                                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                        <AiOutlineClose size={24} className="text-white" />
                                    </button>
                                </div>

                                {/* MENU ITEMS */}
                                <motion.div
                                    className="flex flex-col gap-10 ml-[33%] text-2xl text-white"
                                    variants={container}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <motion.div
                                        variants={navbarVariant}
                                    >
                                        <LinkMobileTemplate
                                            urlLink='/'
                                            page="Начало"
                                            setIsMenuToggled={setIsMenuToggled}
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={navbarVariant}
                                    >
                                        <LinkMobileTemplate
                                            urlLink='/order'
                                            page="Как да поръчам"
                                            setIsMenuToggled={setIsMenuToggled}
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={navbarVariant}
                                    >

                                        <LinkMobileTemplate
                                            urlLink='/video'
                                            page="Видео"
                                            setIsMenuToggled={setIsMenuToggled}
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={navbarVariant}
                                    >

                                        <LinkMobileTemplate
                                            urlLink='/opinions'
                                            page="Мнения"
                                            setIsMenuToggled={setIsMenuToggled}
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={navbarVariant}
                                    >

                                        <LinkMobileTemplate
                                            urlLink='/contacts'
                                            page="Контакти"
                                            setIsMenuToggled={setIsMenuToggled}
                                        />
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </div>

            </nav>
        </>

    );
};

export default Navbar;

// see how-click-away-works.md, although I use my own solution with DOM manipulation