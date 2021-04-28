import React from 'react'
import './Portfolio.component.scss'
import { useHistory } from 'react-router-dom'
import Box from '../../components/Box/Box.component'
import { motion, AnimatePresence } from "framer-motion"

export default function Portfolio() {

    const history = useHistory()
    const navigateTo = () => history.push('/')
    const transition = { duration: 1, ease: [0,.79,.94,1]}

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div 
            initial={{opacity:0}} 
            animate={{opacity:1, transition: {...transition}}}
            className="portfolio"
            onClick={() => {
                navigateTo()
                window.location.reload(false)
            }}
            >
                <Box/>
            </motion.div>
        </AnimatePresence>
    )
}
