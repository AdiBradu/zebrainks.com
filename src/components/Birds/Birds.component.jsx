import React, { useEffect } from 'react'
import './Birds.component.scss'
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

export default function Birds() {
    const animation = useAnimation()
    const [birdRef, inView] = useInView({
        // triggerOnce: true,
        rootMargin: '-100px'
    })

    useEffect( () => {
        if(inView) {
            animation.start("visible")
        }
    }, [animation, inView])

    const transition = { duration: 2, ease: [.4,-0.13,.27,.77]}

    const birdUpVariants = {
        hidden: {
            opacity: 0,
            x: 50,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                ...transition
            }
        }
    }

    const birdMidVariants = {
        hidden: {
            opacity: 0,
            x: -50,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                ...transition
            }
        }
    }

    const birdDownVariants = {
        hidden: {
            opacity: 0,
            x: 30,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                ...transition
            }
        }
    }

    return (
        <div className="birds" ref={birdRef}>
            <motion.svg 
            width="343" 
            height="226" 
            viewBox="0 0 343 226" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            animate={"visible"}
            initial={"hidden"}
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
                <motion.path initial={"hidden"} variants={birdDownVariants} animate={animation} fill-rule="evenodd" clip-rule="evenodd" d="M168.971 182.233C196.458 119.727 288.084 126.859 331.202 172.814C187.295 109.452 203.733 221.045 176.515 225.045C145.255 229.325 143.098 139.419 0 223.618C44.4662 173.099 108.331 144.272 168.971 182.233Z"/>
                <motion.path initial={"hidden"} variants={birdMidVariants} animate={animation} fill-rule="evenodd" clip-rule="evenodd" d="M247.287 69.0208C263.504 32.1434 317.561 36.3514 343 63.4633C258.098 26.0815 267.796 91.919 251.738 94.2788C233.295 96.8039 232.022 43.7614 147.598 93.4367C173.832 63.6315 211.511 46.6242 247.287 69.0208Z"/>
                <motion.path initial={"hidden"} variants={birdUpVariants} animate={animation} fill-rule="evenodd" clip-rule="evenodd" d="M134.156 18.3878C144.804 -5.82603 180.298 -3.06305 197.002 14.7388C141.254 -9.80631 147.622 33.4229 137.078 34.9723C124.969 36.6303 124.133 1.80237 68.6998 34.4194C85.9252 14.8492 110.665 3.68211 134.156 18.3878Z"/>
            </motion.svg>
        </div>
    )
}
