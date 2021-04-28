import React, { useEffect } from 'react'
import '../../pages/SecondaryPage/SecondaryPage.component.scss'
import './S04S.component.scss'
import SecondaryMessage from '../../components/SecondaryMessage/SecondaryMessage.component'
import {ReactComponent as Way} from '../../assets/way.svg'
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

export default function S04S() {
    const animation = useAnimation()
    const [wayRef, inView] = useInView({
        // triggerOnce: true,
        rootMargin: '-100px'
    })
    const transition = { duration: 1.5, delay: 1, ease: [.13,.93,.77,.95]}

    useEffect( () => {
        if(inView) {
            animation.start("visible")
        }
    }, [animation, inView])

    return (
        <div className="secondary-page s04s">
            <div className="wrapper">
                <motion.div 
                className="way"
                ref={wayRef}
                animate={animation}
                initial="hidden"
                variants={{
                    hidden: { 
                        opacity: 0,
                        y: 100
                    },
                    visible: { 
                        opacity: 1,
                        y:0,
                        transition: { ...transition }
                    }
                }}
                >
                    <Way/>
                </motion.div>
                <SecondaryMessage
                    category='off-line advertising'
                    title='Indoor, outdoor & much more'
                    description='Reach your audience through our partners networks of indoor and outdoor advertising solutions. Valid only for Bucharest area.'
                />
            </div>
        </div>
    )
}