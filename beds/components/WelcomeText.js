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
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const WelcomeText = () => {
  return (
    <motion.div
      className="text-justify font-semibold text-gray-700"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: 0.6 }}

    >
      <motion.span variants={letterVariant}> Падащите</motion.span>
      <motion.span variants={letterVariant}> легла</motion.span>
      <motion.span variants={letterVariant}> пестят</motion.span>
      <motion.span variants={letterVariant}> пространство</motion.span>
      <motion.span variants={letterVariant}> в</motion.span>
      <motion.span variants={letterVariant}> малкото</motion.span>
      <motion.span variants={letterVariant}> жилище,</motion.span>
      <motion.span variants={letterVariant}> без</motion.span>
      <motion.span variants={letterVariant}> това</motion.span>
      <motion.span variants={letterVariant}> да</motion.span>
      <motion.span variants={letterVariant}> е</motion.span>
      <motion.span variants={letterVariant}> за</motion.span>
      <motion.span variants={letterVariant}> сметка</motion.span>
      <motion.span variants={letterVariant}> на</motion.span>
      <motion.span variants={letterVariant}> комфорта</motion.span>
      <motion.span variants={letterVariant}> и</motion.span>
      <motion.span variants={letterVariant}> функционалността.</motion.span>
      <motion.span variants={letterVariant}> Те</motion.span>
      <motion.span variants={letterVariant}> са</motion.span>
      <motion.span variants={letterVariant}> вярното</motion.span>
      <motion.span variants={letterVariant}> решение,</motion.span>
      <motion.span variants={letterVariant}> когато</motion.span>
      <motion.span variants={letterVariant}> сте</motion.span>
      <motion.span variants={letterVariant}> притиснати</motion.span>
      <motion.span variants={letterVariant}> откъм</motion.span>
      <motion.span variants={letterVariant}> място</motion.span>
      <motion.span variants={letterVariant}> и</motion.span>
      <motion.span variants={letterVariant}> търсите</motion.span>
      <motion.span variants={letterVariant}> практично</motion.span>
      <motion.span variants={letterVariant}> и</motion.span>
      <motion.span variants={letterVariant}> красиво</motion.span>
      <motion.span variants={letterVariant}> решение</motion.span>
      <motion.span variants={letterVariant}> за</motion.span>
      <motion.span variants={letterVariant}> легло</motion.span>
      <motion.span variants={letterVariant}> или</motion.span>
      <motion.span variants={letterVariant}> спалня.</motion.span>
      <motion.span variants={letterVariant}> Бързо</motion.span>
      <motion.span variants={letterVariant}> и</motion.span>
      <motion.span variants={letterVariant}> лесно</motion.span>
      <motion.span variants={letterVariant}> падащото</motion.span>
      <motion.span variants={letterVariant}> легло</motion.span>
      <motion.span variants={letterVariant}> се</motion.span>
      <motion.span variants={letterVariant}> трансфoрмира</motion.span>
      <motion.span variants={letterVariant}> от</motion.span>
      <motion.span variants={letterVariant}> красива</motion.span>
      <motion.span variants={letterVariant}> мебел</motion.span>
      <motion.span variants={letterVariant}> с</motion.span>
      <motion.span variants={letterVariant}> удобна</motion.span>
      <motion.span variants={letterVariant}> площ</motion.span>
      <motion.span variants={letterVariant}> за</motion.span>
      <motion.span variants={letterVariant}> спане.</motion.span>


      <br />


      <motion.span variants={letterVariant}> Падащото</motion.span>
      <motion.span variants={letterVariant}> легло</motion.span>
      <motion.span variants={letterVariant}> се</motion.span>
      <motion.span variants={letterVariant}> изработва</motion.span>
      <motion.span variants={letterVariant}> в</motion.span>
      <motion.span variants={letterVariant}> размери</motion.span>
      <motion.span variants={letterVariant}> от</motion.span>
      <motion.span variants={letterVariant}> един</motion.span>
      <motion.span variants={letterVariant}> персон,</motion.span>
      <motion.span variants={letterVariant}> през</motion.span>
      <motion.span variants={letterVariant}> персон</motion.span>
      <motion.span variants={letterVariant}> и</motion.span>
      <motion.span variants={letterVariant}> половина</motion.span>
      <motion.span variants={letterVariant}> до</motion.span>
      <motion.span variants={letterVariant}> спалня.</motion.span>
      <motion.span variants={letterVariant}> В</motion.span>
      <motion.span variants={letterVariant}> цената</motion.span>
      <motion.span variants={letterVariant}> не</motion.span>
      <motion.span variants={letterVariant}> е</motion.span>
      <motion.span variants={letterVariant}> включен</motion.span>
      <motion.span variants={letterVariant}> матрак.</motion.span>
      <motion.span variants={letterVariant}> Повдигането</motion.span>
      <motion.span variants={letterVariant}> е</motion.span>
      <motion.span variants={letterVariant}> ръчно,</motion.span>
      <motion.span variants={letterVariant}> без</motion.span>
      <motion.span variants={letterVariant}> амортисьори.</motion.span>
      <motion.span variants={letterVariant}> Цената</motion.span>
      <motion.span variants={letterVariant}> е</motion.span>
      <motion.span variants={letterVariant}> само</motion.span>
      <motion.span variants={letterVariant}> за</motion.span>
      <motion.span variants={letterVariant}> легло,</motion.span>
      <motion.span variants={letterVariant}> всички</motion.span>
      <motion.span variants={letterVariant}> надстройки</motion.span>
      <motion.span variants={letterVariant}> и</motion.span>
      <motion.span variants={letterVariant}> допълнителни</motion.span>
      <motion.span variants={letterVariant}> шкафове</motion.span>
      <motion.span variants={letterVariant}> се</motion.span>
      <motion.span variants={letterVariant}> оценяват</motion.span>
      <motion.span variants={letterVariant}> допълнително.</motion.span>

    </motion.div>
  )
}

export default WelcomeText
