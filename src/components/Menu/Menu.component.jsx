import React from 'react'
import './Menu.component.scss'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import {ReactComponent as Facebook} from '../../assets/facebook.svg'
import {ReactComponent as Instagram} from '../../assets/instagram.svg'
import {ReactComponent as WhatsApp} from '../../assets/whatsapp.svg'
import {ReactComponent as Mail} from '../../assets/gmail.svg'
import {ReactComponent as Linkedin} from '../../assets/linkedin.svg'

const wrapperVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
}

const linkVariants = {
    hidden: { opacity: 0, y: '20px'},
    show: { opacity: 1, y: 0 }
}

export default function Menu() {
    return (
        <motion.div className="menu" initial='hidden' animate='show' variants={wrapperVariants}>
            <Link to="/" exact>
                <motion.h1 variants={linkVariants} whileHover={{ x:-10 }}>Home</motion.h1>
            </Link>
            <Link to="/graphic-design" exact>
                <motion.h1 variants={linkVariants} whileHover={{ x:-10 }}>Graphic design</motion.h1>
            </Link>
            {/* <Link to="/web-development" exact>
                <motion.h1 variants={linkVariants} whileHover={{ x:-10 }}>Web development</motion.h1>
            </Link>
            <Link to="/social-media" exact>
                <motion.h1 variants={linkVariants} whileHover={{ x:-10 }}>Social media</motion.h1>
            </Link>
            <Link to="/advertising" exact>
                <motion.h1 variants={linkVariants} whileHover={{ x:-10 }}>Off-line advertising</motion.h1>
            </Link> */}
            <Link to="/portfolio" exact>
                <motion.h1 variants={linkVariants} whileHover={{ x:-10 }}>Portfolio</motion.h1>
            </Link>
            <motion.div className="social-icons" variants={wrapperVariants}>
                <motion.div variants={linkVariants} whileHover={{ y:-10 }} whileTap={{ y:-10 }}>
                    <a href="https://www.linkedin.com/company/zebrainks">
                        <Linkedin/>
                    </a>
                </motion.div>
                <motion.div variants={linkVariants} whileHover={{ y:-10 }} whileTap={{ y:-10 }}>
                    <a href="https://www.facebook.com/zebrainks">
                        <Facebook/>
                    </a>
                </motion.div>
                <motion.div variants={linkVariants} whileHover={{ y:-10 }} whileTap={{ y:-10 }}>
                    <a href="https://www.instagram.com/zebrainks/">
                        <Instagram/>
                    </a>
                </motion.div>
                <motion.div variants={linkVariants} whileHover={{ y:-10 }} whileTap={{ y:-10 }}>
                    <a href="mailto:hello@zebrainks.com">
                        <Mail/>
                    </a>
                </motion.div>
                <motion.div variants={linkVariants} whileHover={{ y:-10 }} whileTap={{ y:-10 }}>
                    <a href="tel:+40768250025">
                        <WhatsApp/>
                    </a>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
