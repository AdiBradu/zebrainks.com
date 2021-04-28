import React, { useEffect } from 'react'
import './Meteor.component.scss'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

export default function Meteor() {

    const animation = useAnimation()
    const [meteorRef, inView] = useInView({
        triggerOnce: true,
    })

    useEffect( () => {
        if(inView) {
            animation.start("visible")
        }
    }, [animation, inView])

    const transition = {ease: [.49,.55,.64,.5]}

    return (
        <motion.svg 
            style={{ originX: '50%', originY: '50%'}}
            ref={meteorRef}
            animate={animation}
            initial="hidden" 
            variants={{
                hidden: { 
                    opacity: 0,
                    x: '0',
                    y: '0',
                    rotate: -45,
                },
                visible: { 
                    opacity: 1,
                    x: '-100vh',
                    y: '100vh',
                    rotate: -45,
                    transition:{duration: 1, delay: 1.3, ...transition}
                }
            }}
            className="meteor" 
            width="349" height="382" viewBox="0 0 349 382" xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M348.314 187.197L77.2525 178.284C69.2108 178.035 62.9899 184.256 63.3683 192.155C63.6714 200.138 70.3833 206.755 78.3351 206.923C78.8302 206.913 79.3254 206.903 79.8205 206.893L348.314 187.197Z"/>
            <path d="M293.383 158.25L15.6715 121.305C10.1511 120.593 5.2842 124.398 4.946 129.841C4.60779 135.284 8.78625 140.387 14.3066 141.099C14.5616 141.176 14.8018 141.089 15.0567 141.166L293.383 158.25Z"/>
            <path d="M307.668 217.919L33.4152 246.215C27.923 246.738 24.3148 251.67 25.2218 257.17C26.1288 262.67 31.3593 266.599 36.8515 266.076C37.0917 265.989 37.3466 266.066 37.5868 265.979L307.668 217.919Z"/>
        </motion.svg>
    )
}
