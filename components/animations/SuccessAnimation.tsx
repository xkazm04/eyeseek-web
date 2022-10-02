import { motion } from "framer-motion"
import { SuccessIcon } from "../icons/MobileSet"

const SuccessAnimation = () => {
    return <>
    <motion.div
        initial={{ opacity: 0, scale: 1 , y: 200}}
        animate={{ opacity: 1, scale: 1, y: 50 }}
        transition={{ duration: 0.4 }}>
    <SuccessIcon width={50}/>                  
    <motion.div
        initial={{ opacity: 0, scale: 1, y: 50}}
        animate={{ opacity: 1,scale: 1, y: 50}}
        transition={{ duration: 2.2 }}>Quest accepted</motion.div>
    </motion.div>
  </>
}

export default SuccessAnimation