import React, { useEffect } from 'react'
import '../../pages/PrimaryPage/PrimaryPage.component.scss'
import './S03P.component.scss'
import PrimaryMessage from '../../components/PrimaryMessage/PrimaryMessage.component'
// import {ReactComponent as Birds} from '../../assets/birds.svg'
import Birds from '../../components/Birds/Birds.component'
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

export default function S03P() {
    const animation = useAnimation()
    const [birdsRef, inView] = useInView({
        // triggerOnce: true,
        // rootMargin: '-50px'
    })
    const transition = { duration: 1.5, delay: 0.5, ease: [.13,.93,.77,.95]}

    useEffect( () => {
        if(inView) {
            animation.start("visible")
        }
    }, [animation, inView])

    return (
        <div className="primary-page s03p">
            <div className="wrapper">
                <PrimaryMessage text='The power of group. Create your own troop!'/>
                <motion.div 
                className="birds-container"
                ref={birdsRef}
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
                    <Birds/>
                </motion.div>
            </div>
        </div>
    )
}