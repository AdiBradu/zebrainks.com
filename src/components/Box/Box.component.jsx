import React from 'react'
import './Box.component.scss'
import { motion } from "framer-motion"

export default function Box() {
    const transition = { duration: 0.3, delay: 0.3, ease: [0,.79,.94,1]}
    return (
        <motion.div className="box">
            <motion.h1 initial={{opacity:0, scale: 6}} animate={{opacity:1, scale: 1, transition: {...transition}}}>coming soon</motion.h1>
            {/* <motion.h1 initial={{opacity:0, scale: 6}} animate={{opacity:1, scale: 1, transition: {...transition}}}>soon</motion.h1> */}
        </motion.div>
    )
}
