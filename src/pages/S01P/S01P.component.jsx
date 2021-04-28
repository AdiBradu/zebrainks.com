import React from 'react'
import '../../pages/PrimaryPage/PrimaryPage.component.scss'
import './S01P.component.scss'
import PrimaryMessage from '../../components/PrimaryMessage/PrimaryMessage.component'
import {ReactComponent as LogoFlip} from '../../assets/logoFlip.svg'
import { motion } from "framer-motion"

export default function S01P() {
    const transition = { duration: 1.5, ease: [.4,-0.13,.27,.77]}

    return (
        <div className="primary-page s01p">
            <div className="wrapper">
                <PrimaryMessage className="hero-text" text='The future starts on our drawing board'/>
                <motion.div initial={{opacity:0}} animate={{ opacity:1, transition: {...transition}}}>
                <LogoFlip className="logo-flip"/>
                </motion.div>
            </div>
        </div>
    )
}