import React from 'react'
import './Toggler.component.scss'
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"

export default function Toggler(props) {
    const transition = { duration: 0.5, ease: [.4,-0.13,.27,.77]}

    const closeUpVariants = {
        hidden: {
            opacity: 1,
        },
        visible: {
            opacity: 1,
            rotate: 45,
            transition: {
                ...transition
            }
        }
    }

    const closeMidVariants = {
        hidden: {
            opacity: 1,
            x: 0
        },
        visible: {
            opacity: 0,
            x: '100px',
            transition: {
                ...transition
            }
        }
    }

    const closeDownVariants = {
        hidden: {
            opacity: 1,
        },
        visible: {
            opacity: 1,
            rotate: -45,
            transition: {
                ...transition
            }
        }
    }

    return (
        <div 
        className="toggler"
        style={ props.showMenu ? {fill:"rgba(253, 253, 253,1)"} : {fill:"rgb(19, 7, 49)"} }
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 50.7">
                <g id="Layer_2" data-name="Layer 2">
                    <motion.g 
                    id="Layer_1-2" 
                    data-name="Layer 1"
                    animate={"visible"}
                    initial="hidden"
                    variants={{
                        hidden: { 
                            opacity: 1
                        },
                        visible: { 
                            opacity: 1,
                            transition: {
                                delayChildren: 2,
                                staggerChildren: 2
                            }
                        }
                    }}
                    >
                        <motion.rect 
                        id="rect01"
                        width="144" 
                        height="10.14"
                        initial={"hidden"}
                        variants={closeUpVariants}
                        animate={props.showMenu ? "visible" : "hidden"}
                        />
                        <motion.rect 
                        y="20.28" width="144" 
                        height="10.14"
                        initial={"hidden"}
                        animate={ props.showMenu ? "visible" : "hidden"}
                        variants={closeMidVariants}
                        />
                        <motion.rect 
                        y="40.56" 
                        width="144" 
                        height="10.14"
                        initial={"hidden"}
                        animate={ props.showMenu ? "visible" : "hidden"}
                        variants={closeDownVariants}
                        />
                    </motion.g>
                </g>
            </svg>
        </div>
    )
}
