import { motion } from "framer-motion"
const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
  };
  
  const letterVariant = {
    hidden: { opacity: 0},
    visible: { opacity: 1},
  };
const WelcomeText = () => {
  return (
    <motion.div 
        className="text-justify font-semibold text-gray-700"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.6}}

    >
        <motion.span variants={letterVariant}> Нашите</motion.span>
        <motion.span variants={letterVariant}> падащи</motion.span>
        <motion.span variants={letterVariant}> легла</motion.span>
        <motion.span variants={letterVariant}> предлагат</motion.span>
        <motion.span variants={letterVariant}> от</motion.span>
        <motion.span variants={letterVariant}> възможности,</motion.span>
        <motion.span variants={letterVariant}> които</motion.span>
        <motion.span variants={letterVariant}> се</motion.span>
        <motion.span variants={letterVariant}> адаптират</motion.span>
        <motion.span variants={letterVariant}> според</motion.span>
        <motion.span variants={letterVariant}> вашите</motion.span>
        <motion.span variants={letterVariant}> предпочитания</motion.span>
        <motion.span variants={letterVariant}> и</motion.span>
        <motion.span variants={letterVariant}> наличното</motion.span>
        <motion.span variants={letterVariant}> пространство</motion.span>
        <motion.span variants={letterVariant}> у</motion.span>
        <motion.span variants={letterVariant}> вас.</motion.span>
        <motion.span variants={letterVariant}> За</motion.span>
        <motion.span variants={letterVariant}> тяхната</motion.span>
        <motion.span variants={letterVariant}> изработка</motion.span>
        <motion.span variants={letterVariant}> използваме</motion.span>
        <motion.span variants={letterVariant}> надежден</motion.span>
        <motion.span variants={letterVariant}> механизъм,</motion.span>
        <motion.span variants={letterVariant}> който</motion.span>
        <motion.span variants={letterVariant}> се</motion.span>
        <motion.span variants={letterVariant}> гарантира</motion.span>
        <motion.span variants={letterVariant}> с</motion.span>
        <motion.span variants={letterVariant}> качество</motion.span>
        <motion.span variants={letterVariant}> през</motion.span>
        <motion.span variants={letterVariant}> следващите</motion.span>
        <motion.span variants={letterVariant}> 5</motion.span>
        <motion.span variants={letterVariant}> години.</motion.span>
        <motion.span variants={letterVariant}> Те</motion.span>
        <motion.span variants={letterVariant}> са</motion.span>
        <motion.span variants={letterVariant}> снабдени</motion.span>
        <motion.span variants={letterVariant}> с</motion.span>
        <motion.span variants={letterVariant}> вградена</motion.span>
        <motion.span variants={letterVariant}> метална</motion.span>
        <motion.span variants={letterVariant}> подматрачна</motion.span>
        <motion.span variants={letterVariant}> рамка,</motion.span>
        <motion.span variants={letterVariant}> осигурявайки</motion.span>
        <motion.span variants={letterVariant}> дълъг</motion.span>
        <motion.span variants={letterVariant}> жизнен</motion.span>
        <motion.span variants={letterVariant}> период</motion.span>
        <motion.span variants={letterVariant}> при</motion.span>
        <motion.span variants={letterVariant}> ежедневна</motion.span>
        <motion.span variants={letterVariant}> употреба.</motion.span>
        <motion.span variants={letterVariant}> Процесът</motion.span>
        <motion.span variants={letterVariant}> на</motion.span>
        <motion.span variants={letterVariant}> спускане</motion.span>
        <motion.span variants={letterVariant}> и</motion.span>
        <motion.span variants={letterVariant}> повдигане</motion.span>
        <motion.span variants={letterVariant}> на</motion.span>
        <motion.span variants={letterVariant}> леглото</motion.span>
        <motion.span variants={letterVariant}> е</motion.span>
        <motion.span variants={letterVariant}> изключително</motion.span>
        <motion.span variants={letterVariant}> лесен</motion.span>
        <motion.span variants={letterVariant}> -</motion.span>
        <motion.span variants={letterVariant}> можете</motion.span>
        <motion.span variants={letterVariant}> да</motion.span>
        <motion.span variants={letterVariant}> го</motion.span>
        <motion.span variants={letterVariant}> направите</motion.span>
        <motion.span variants={letterVariant}> само</motion.span>
        <motion.span variants={letterVariant}> с</motion.span>
        <motion.span variants={letterVariant}> едно</motion.span>
        <motion.span variants={letterVariant}> движение</motion.span>
        <motion.span variants={letterVariant}> на</motion.span>
        <motion.span variants={letterVariant}> ръка,</motion.span>
        <motion.span variants={letterVariant}> без</motion.span>
        <motion.span variants={letterVariant}> никакви</motion.span>
        <motion.span variants={letterVariant}> допълнителни</motion.span>
        <motion.span variants={letterVariant}> усилия.</motion.span>

    </motion.div>
  )
}

export default WelcomeText
