import { LightDownLong, LightUpLong } from '../../components/icons/LandingSet'
import {motion} from 'framer-motion'


const Lightning = () => {
    return <>
        <motion.div initial={{ opacity: 0, scale: 0.5, x: 10 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }}>    <LightUpLong width={30}/></motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2, delay: 0.4 }}>    <LightDownLong width={30}/></motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5, x:-10 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2, delay: 0.6 }}>    <LightUpLong width={30}/></motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5, x:-20  }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2, delay: 0.8 }}>    <LightDownLong width={30}/></motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5, x:-30 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2, delay: 1 }}>    <LightUpLong width={30}/></motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5 , x:-40  }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2, delay: 1.2 }}>    <LightDownLong width={30}/></motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5, x:-50 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2, delay: 1.4 }}>    <LightUpLong width={30}/></motion.div>
    </>
}

export default Lightning