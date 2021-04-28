import React, { useEffect } from 'react'
import './PrimaryMessage.component.scss'
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

export default function PrimaryMessage(props) {
    const animation = useAnimation()
    const [primarytRef, inView] = useInView({
        // triggerOnce: true,
        rootMargin: '-100px'
    })
    const transition = { duration: 2, ease: [.4,-0.13,.27,.77]}

    useEffect( () => {
        if(inView) {
            animation.start("visible")
        }
    }, [animation, inView])

    return (
        <motion.div 
        className="primary-message" 
        ref={primarytRef}
        animate={animation}
        initial="hidden"
        variants={{
            hidden: { 
                opacity: 0,
                y: 50
            },
            visible: { 
                opacity: 1,
                y: 0,
                transition: { ...transition }
            }
        }}
        >
            <h1>{props.text}</h1>
        </motion.div>
    )
}
