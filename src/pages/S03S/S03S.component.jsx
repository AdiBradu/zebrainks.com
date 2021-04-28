import React, { useEffect } from 'react'
import '../../pages/SecondaryPage/SecondaryPage.component.scss'
import './S03S.component.scss'
import SecondaryMessage from '../../components/SecondaryMessage/SecondaryMessage.component'
import Clouds from '../../components/Clouds/Clouds.component'
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

export default function S03S() {
    const animation = useAnimation()
    const [cloudsRef, inView] = useInView({
        // triggerOnce: true,
        // rootMargin: '-100px'
    })
    const transition = { duration: 1.5, dealy: 0.5, ease: [.13,.93,.77,.95]}

    useEffect( () => {
        if(inView) {
            animation.start("visible")
        }
    }, [animation, inView])

    return (
        <div className="secondary-page s03s">
            <div className="wrapper">
                <SecondaryMessage
                    category='social media'
                    title='We are all connected'
                    description='Create and reach your audience through social media channels. Effectively promote your business, your products and services.'
                />
                <motion.div 
                className="clouds-container"
                ref={cloudsRef}
                animate={animation}
                initial="hidden"
                variants={{
                    hidden: { 
                        opacity: 0,
                        y: 300,
                    },
                    visible: { 
                        opacity: 1,
                        y: 0,
                        transition: { ...transition }
                    }
                }}
                >
                    <Clouds/>
                </motion.div>
            </div>
        </div>
    )
}
