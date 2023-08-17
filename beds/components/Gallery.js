import { FBPicture } from "./FBPicture"
import { motion } from "framer-motion";
const picturesArr = [
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02UsjNuMgPymBRkayej8d6vZsbRrQAdEEZ9mwjHovtuuDGbhDKLoU3BxU3J99f2F51l%26id%3D100042058017286&show_text=true&width=500",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CRzvsTaaXPWYgJs9BfmS5hwfqkg8Jmtt71FZSpsvEQrmiWRQi8TsLkRTFTtyoE14l%26id%3D100042058017286&show_text=true&width=500",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D1005300210881903%26set%3Da.732137868198140%26type%3D3&show_text=true&width=500",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D957912302287361%26set%3Da.732137868198140%26type%3D3&show_text=true&width=500",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D952058002872791%26set%3Da.732137868198140%26type%3D3&show_text=true&width=500",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D937450801000178%26set%3Da.732137868198140%26type%3D3&show_text=true&width=500",
]



const Gallery = () => {
  return (
    <div className="mb-5">
      <div className="bg-gray-800 m-10 p-10 rounded-sm flex justify-center items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          className=" text-center font-semibold"
          viewport={{ once: true }}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
        >
          <div className="text-4xl text-white">
            НАШИТЕ ПРОЕКТИ
          </div>
        </motion.div>
      </div>
      <div className="m-1 sm:m-5 flex flex-row gap-5 justify-center items-center flex-wrap">
        {picturesArr.map((pictureURL) => (
          <FBPicture key={pictureURL} url={pictureURL}></FBPicture>
        ))}
      </div>
    </div>
  )
}

export default Gallery
