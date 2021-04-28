import React, { useEffect } from 'react'
import './Clouds.component.scss'
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

export default function Clouds() {
    const animation = useAnimation()
    const [cloudRef, inView] = useInView({
        // triggerOnce: true,
        rootMargin: '-100px'
    })

    useEffect( () => {
        if(inView) {
            animation.start("visible")
        }
    }, [animation, inView])

    const transition = { duration: 2, ease: [.4,-0.13,.27,.77]}

    const cloudUpVariants = {
        hidden: {
            opacity: 0,
            x: -50,
            y: 30,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                ...transition
            }
        }
    }

    const cloudMidVariants = {
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

    const cloudDownVariants = {
        hidden: {
            opacity: 0,
            x: -30,
            y: -30
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                ...transition
            }
        }
    }

    return (
        <div className="clouds" ref={cloudRef}>
            <motion.svg 
                width="345" 
                height="203" 
                viewBox="0 0 345 203" 
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
                <motion.path initial={"hidden"} variants={cloudMidVariants} animate={animation} fill-rule="evenodd" clip-rule="evenodd" d="M139.373 144.357C139.352 144.54 139.358 144.696 139.323 144.885C139.281 144.801 139.263 144.707 139.271 144.614C139.28 144.521 139.315 144.431 139.373 144.357C140.288 136.575 128.795 138.879 125.763 138.902C127.445 125.832 114.42 130.53 111.022 134.447C111.673 117.184 84.3921 119.385 83.5808 127.15C82.1853 106.974 40.182 101.845 30.4286 124.2C27.6218 121.061 18.7124 119.978 18.1525 129.14C7.91206 127.122 6.24828 131.535 5.43065 138.102C-7.9303 145.584 7.39337 149.068 8.78462 148.069C8.91983 149.863 19.3346 149.871 19.9177 151.294C20.9931 153.92 26.8411 161.005 38.3915 153.984C48.1375 160.905 56.6783 164.362 68.8698 152.301C69.4645 168.11 112.019 156.862 117.842 154.266C125.684 159.105 136.297 157.664 140.038 152.647C166.713 149.12 141.161 142.079 139.373 144.357Z"/>
                <motion.path initial={"hidden"} variants={cloudUpVariants} animate={animation} fill-rule="evenodd" clip-rule="evenodd" d="M93.2621 63.4843C93.3001 63.8129 93.2887 64.0939 93.3514 64.4339C93.4281 64.2834 93.4605 64.1142 93.4446 63.9461C93.4288 63.778 93.3655 63.6178 93.2621 63.4843C91.6163 49.4842 112.292 53.628 117.748 53.6698C114.72 30.1571 138.153 38.608 144.267 45.6556C143.096 14.5978 192.176 18.5574 193.636 32.5271C196.146 -3.7703 271.713 -12.998 289.26 27.2211C294.309 21.5731 310.338 19.6247 311.345 36.1069C329.768 32.4778 332.761 40.416 334.232 52.2303C358.27 65.6911 330.701 71.96 328.198 70.1615C327.955 73.39 309.218 73.4033 308.169 75.9633C306.235 80.6882 295.714 93.435 274.934 80.8041C257.4 93.2545 242.035 99.4741 220.101 77.775C219.032 106.218 142.473 85.981 131.998 81.3111C117.888 90.0166 98.7962 87.4243 92.0648 78.3979C44.076 72.053 90.0446 59.3861 93.2621 63.4843Z"/>
                <motion.path initial={"hidden"} variants={cloudDownVariants} animate={animation} fill-rule="evenodd" clip-rule="evenodd" d="M169.571 188.633C169.588 188.784 169.583 188.914 169.612 189.07C169.647 189.001 169.662 188.923 169.655 188.846C169.648 188.768 169.619 188.694 169.571 188.633C168.812 182.18 178.341 184.09 180.856 184.109C179.461 173.273 190.26 177.168 193.078 180.416C192.538 166.102 215.158 167.927 215.831 174.365C216.988 157.637 251.815 153.384 259.902 171.92C262.229 169.317 269.616 168.419 270.08 176.015C278.571 174.342 279.951 178.001 280.629 183.446C291.707 189.65 279.001 192.539 277.848 191.71C277.736 193.198 269.1 193.204 268.617 194.384C267.725 196.562 262.876 202.436 253.299 196.615C245.218 202.353 238.137 205.22 228.028 195.219C227.535 208.328 192.251 199.001 187.423 196.849C180.921 200.861 172.122 199.666 169.019 195.506C146.902 192.582 168.088 186.744 169.571 188.633Z"/>
            </motion.svg>
        </div>
    )
}