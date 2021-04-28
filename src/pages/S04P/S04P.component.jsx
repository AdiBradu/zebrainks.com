import React, { useEffect } from 'react'
import '../../pages/PrimaryPage/PrimaryPage.component.scss'
import './S04P.component.scss'
import PrimaryMessage from '../../components/PrimaryMessage/PrimaryMessage.component'
import {ReactComponent as Rocket} from '../../assets/rocket.svg'
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

export default function S04P() {
    const animation = useAnimation()
    const [rocketRef, inView] = useInView({
        // triggerOnce: true,
        rootMargin: '-100px'
    })
    const transition = { duration: 0.2, repeat: Infinity, ease: [.13,.93,.77,.95]}

    useEffect( () => {
        if(inView) {
            animation.start("visible")
        }
    }, [animation, inView])

    return (
        <div className="primary-page s04p">
            <div className="wrapper">
                <motion.div 
                className="rocket"
                ref={rocketRef}
                animate={animation}
                initial="hidden"
                variants={{
                    hidden: { 
                        y: 5,
                    },
                    visible: { 
                        y: 0,
                        transition: { ...transition }
                    }
                }}
                >
                    <Rocket/>
                </motion.div>
                <PrimaryMessage text='Ride with us and our partners, to success'/>
            </div>
        </div>
    )
}