import React, { useEffect } from 'react'
import './SecondaryMessage.component.scss'
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

export default function SecondaryMessage(props) {

    const animation = useAnimation()
    const [secondarytRef, inView] = useInView({
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
        className="secondary-message"
        ref={secondarytRef}
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
            <h4>{props.category}</h4>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </motion.div>
    )
}
