import React, { useEffect } from 'react'
import './LandingPage.component.scss'
import { useHistory } from 'react-router-dom'
import { motion, AnimatePresence, useViewportScroll, useTransform, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import {ReactComponent as Facebook} from '../../assets/facebook.svg'
import {ReactComponent as Instagram} from '../../assets/instagram.svg'
import {ReactComponent as WhatsApp} from '../../assets/whatsapp.svg'
import {ReactComponent as Mail} from '../../assets/gmail.svg'
import {ReactComponent as Linkedin} from '../../assets/linkedin.svg'
import {ReactComponent as Youtube } from '../../assets/youtube.svg'
import Meteor from '../../components/Meteor/Meteor,component'

export default function LandingPage() {

    const animation = useAnimation()

    const [contactRef, inView] = useInView({
        triggerOnce: true,
    })

    useEffect( () => {
        if(inView) {
            animation.start("visible")
        }
    }, [animation, inView])

    const containerStars = {
        show: {
            transition: {
                delayChildren: 1,
                staggerChildren: 1,
            }
        }
    }
      
    const itemStar = {
        hidden: { opacity: 1 },
        show: { opacity: 0.8, transition: { duration: 0.7, repeat: Infinity }}
    }

    const { scrollYProgress } = useViewportScroll()
    const range = 1/8
    const collection = [0, range, 2*range, 3*range, 4*range, 5*range, 6*range, 7*range, 1]
    const screen01TextOpac = useTransform(scrollYProgress, collection, [1, 0, 0, 0, 0, 0, 0, 0, 0])
    const screen02TextOpac = useTransform(scrollYProgress, collection, [0, 1, 0, 0, 0, 0, 0, 0, 0])
    const screen03TextOpac = useTransform(scrollYProgress, collection, [0, 0, 1, 0, 0, 0, 0, 0, 0])
    const screen04TextOpac = useTransform(scrollYProgress, collection, [0, 0, 0, 1, 0, 0, 0, 0, 0])
    const screen05TextOpac = useTransform(scrollYProgress, collection, [0, 0, 0, 0, 1, 0, 0, 0, 0])
    const screen06TextOpac = useTransform(scrollYProgress, collection, [0, 0, 0, 0, 0, 1, 0, 0, 0])
    const screen07TextOpac = useTransform(scrollYProgress, collection, [0, 0, 0, 0, 0, 0, 1, 0, 0])
    const screen08TextOpac = useTransform(scrollYProgress, collection, [0, 0, 0, 0, 0, 0, 0, 1, 0])

    const mountainScale = useTransform(scrollYProgress, collection, [1, 1, 1, 1, 1, 1, 1, 1 ,1])
    const mountainX = useTransform(scrollYProgress, collection, ['0vw', '10vw', '10vw', '0vw', '-5vw', '-5vw', '10vw', '10vw', '10vw'])
    const mountainY = useTransform(scrollYProgress, collection, ['10vh', '20vh', '100vh', '100vh', '7vh', '100vh', '100vh', '100vh', '100vh'])

    const birdsY = useTransform(scrollYProgress, collection, ['0vh', '55vh', '100vh', '125vh', '100vh', '100vh', '100vh', '100vh', '100vh'])
    const birdsX = useTransform(scrollYProgress, [0, 0.5, 1], ['0vw', '5vw', '10vw'])
    const birdsScale = useTransform(scrollYProgress, collection, [1, 0.6, 0.2, 0, 0, 0, 0, 0, 0])

    const upCloudY = useTransform(scrollYProgress, collection, ['0vh', '5vh', '55vh', '100vh', '100vh', '100vh', '100vh', '100vh', '100vh'])
    const upCloudX = useTransform(scrollYProgress, [0, 0.5, 1], ['0vw', '-3.5vw', '-6vw'])

    const midCloudY = useTransform(scrollYProgress, collection, ['0vh', '-5vh', '55vh', '100vh', '100vh', '100vh', '100vh', '100vh', '100vh'])
    const midCloudX = useTransform(scrollYProgress, [0, 0.5, 1], ['0vw', '7.5vw', '15vw'])

    const downCloudX = useTransform(scrollYProgress, [0, 0.5, 1], ['0vw', '2.5vw', '5vw'])
    const downCloudY = useTransform(scrollYProgress, collection, ['0vh', '-8vh', '35vh', '100vh', '100vh', '100vh', '100vh', '100vh', '100vh'])

    const rocketX = useTransform(scrollYProgress, collection, ['0vw', '0vw', '0vw', '-10vw', '0vw', '0vw', '0vw', '0vw', '10vw'])
    const rocketY = useTransform(scrollYProgress, collection, ['0vh', '-8vh', '35vh', '45vh', '15vh', '0vh', '10vh', '15vh', '-40vh'])
    const scaleRocket = useTransform(scrollYProgress, collection, [1, 1, 1, 1, 0.7, 0.6, 0.5, 0.5, 0])

    const opacStars = useTransform(scrollYProgress, collection, [0, 0, 1, 1, 1, 1, 1, 1, 1])
    const starsX = useTransform(scrollYProgress, collection, ['0vw', '0vw', '0vw', '60vw', '60vw', '60vw', '0vw', '0vw', '-20vw'])
    const starsY = useTransform(scrollYProgress, collection, ['0vh', '0vh', '0vh', '15vh', '-5vh', '0vh', '0vh', '0vh', '0vh'])
    const scaleStars = useTransform(scrollYProgress, collection, [0, 0, 0.8, 1.1, 0.8, 0.6, 0.5, 0.4, 0])

    const earthX = useTransform(scrollYProgress, collection, ['100vw', '100vw', '100vw', '100vw', '100vw', '0vw', '-100vw', '-100vw', '-100vh'])
    const earthY = useTransform(scrollYProgress, collection, ['0vh', '0vh', '0vh', '0vh', '0vh', '-50vh', '-60vh', '-70vh', '-80vh'])

    const marsX = useTransform(scrollYProgress, collection, ['0vw','0vw', '0vw', '0vw','0vw', '0vw', '10vw','20vw', '30vw'])
    const marsY = useTransform(scrollYProgress, collection, ['0vh','0vh', '0vh', '0vh','0vh', '0vh', '-50vh','-40vh', '-20vh'])
    const scaleMars = useTransform(scrollYProgress, collection, [1, 1, 1, 1, 1, 1, 1.2, 1.4, 0])

    const history = useHistory()
    const navigateTo = () => history.push('/')
    const transition = { duration: 1, ease: [.32,.59,.67,.23]}

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div 
            initial={{opacity:0}} 
            animate={{opacity:1, transition: {...transition}}}
            className="landing-page"
            onClick={() => {
                navigateTo()
                window.location.reload(false)
            }}
            >
                <div className="screen screen01">
                    <motion.div className="text-container" style={{zIndex: 2010, opacity: screen01TextOpac, transition: {...transition}}}>
                        <h1>The future starts on the drawing board</h1>
                    </motion.div>
                </div>
                <div className="screen screen02">
                    <motion.div className="text-container" style={{zIndex: 2003, opacity: screen02TextOpac, transition: {...transition}}}>
                        <h4>graphic design</h4>
                        <h1>visual identity</h1>
                        <p>Building a visual identity is a complex process and it involves several basic ingredients like name, shape, color and typography.</p>
                    </motion.div>
                </div>
                <div className="screen screen01">
                    <motion.div className="text-container" style={{zIndex: 2010, opacity: screen03TextOpac, transition: {...transition}}}>
                        <h1>Endlessly reborn from stardust</h1>
                    </motion.div>
                </div>
                <div className="screen screen02">
                    <motion.div className="text-container" style={{zIndex: 2003, opacity: screen04TextOpac, transition: {...transition}}}>
                        <h4>web development</h4>
                        <h1>full stack web apps</h1>
                        <p>We use HTML, CSS and JavaScript to build full-stack web applications, from presentations to e-commerce solutions.</p>
                    </motion.div>
                    <div className="code">
                        <div className="window">
                            <div className="column c01" id="column">
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                            </div>
                            <div className="column c02" id="column">
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                            </div>
                            <div className="column c03" id="column">
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                            </div>
                            <div className="column c04" id="column">
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                            </div>
                            <div className="column c05" id="column">
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                            </div>
                            <div className="column c06" id="column">
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                            </div>
                            <div className="column c07" id="column">
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                            </div>
                            <div className="column c08" id="column">
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                            </div>
                            <div className="column c09" id="column">
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                                <div className="one">1</div>
                                <div className="zero">0</div>
                            </div>
                            <div className="column c10" id="column">
                            <div className="one">1</div>
                            <div className="zero">0</div>
                            <div className="one">1</div>
                            <div className="zero">0</div>
                            <div className="one">1</div>
                            <div className="zero">0</div>
                            <div className="one">1</div>
                            <div className="zero">0</div>
                            <div className="one">1</div>
                            <div className="zero">0</div>
                            <div className="one">1</div>
                            <div className="zero">0</div>
                            <div className="one">1</div>
                            <div className="zero">0</div>
                            <div className="one">1</div>
                            <div className="zero">0</div>
                            <div className="one">1</div>
                            <div className="zero">0</div>
                            <div className="one">1</div>
                            <div className="zero">0</div>
                            <div className="one">1</div>
                            <div className="zero">0</div>
                            <div className="one">1</div>
                            <div className="zero">0</div>
                            <div className="one">1</div>
                            <div className="zero">0</div>
                            <div className="one">1</div>
                            <div className="zero">0</div>
                            <div className="one">1</div>
                            <div className="zero">0</div>
                            <div className="one">1</div>
                            <div className="zero">0</div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="screen screen01">
                    <motion.div className="text-container" style={{zIndex: 2010, opacity: screen05TextOpac, transition: {...transition}}}>
                        <h1>The power of group. Create your own troop!</h1>
                    </motion.div>
                </div>
                <div className="screen screen02">
                    <motion.div className="text-container" style={{zIndex: 2003, opacity: screen06TextOpac, transition: {...transition}}}>
                        <h4>social media</h4>
                        <h1>we are all connected</h1>
                        <p>Create and reach your audience through social media channels. Effectively promote your business, your products and services.</p>
                    </motion.div>
                </div>
                <div className="screen screen01">
                    <motion.div className="text-container" style={{zIndex: 2010, opacity: screen07TextOpac, transition: {...transition}}}>
                        <h1>When loosing gravity, there is hope</h1>
                    </motion.div>
                </div>
                <div className="screen screen02">
                    <motion.div className="text-container" style={{zIndex: 2003, opacity: screen08TextOpac, transition: {...transition}}}>
                        <h4>off-line advertising</h4>
                        <h1>indoor, outdoor & much more</h1>
                        <p>Reach your audience through our partners networks of indoor and outdoor advertising solutions. Valid only for Bucharest area.</p>
                    </motion.div>
                </div>
                <div className="screen screen01">
                    <motion.div 
                    ref={contactRef} 
                    className="text-container zebra" 
                    animate={animation}
                    initial="hidden" 
                    variants={{
                        hidden: { 
                            opacity: 0
                        },
                        visible: { 
                            opacity: 1,
                            transition:{duration: 1, delay: 0.3, transition: {...transition}}
                        }
                    }}
                    >
                        <div className="logo-header">
                            <Logo style={{fill: '#fdfdfd'}}/>
                            <div className="name">
                                <h2><span>zebra</span> INKS</h2>
                                <h5>digital agency</h5>
                            </div>
                        </div>
                        <div className="address">
                            <h6>Pajistei 30, Bucharest, ROMANIA</h6>
                            <h6>hello@zebrainks.com</h6>
                            <h6>+40 768 250 025</h6>
                        </div>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/zebrainks/">
                                <Instagram/>
                            </a>
                            <a href="https://www.facebook.com/zebrainks">
                                <Facebook/>
                            </a>
                            <a href="#">
                                <Youtube/>
                            </a>
                            <a href="https://www.linkedin.com/company/zebrainks">
                                <Linkedin/>
                            </a>
                            <a href="mailto:hello@zebrainks.com">
                                <Mail/>
                            </a>
                            <a href="tel:+40768250025">
                                <WhatsApp/>
                            </a>
                        </div>
                    </motion.div>
                    <Logo className="large-logo"/>
                </div>
                <Meteor/>
                <motion.svg 
                style={{ scale: birdsScale, x: birdsX, y: birdsY, originX: '50%', originY: '50%', zIndex:2006}} 
                className="birds" 
                width="1333" height="873" viewBox="0 0 1333 873" xmlns="http://www.w3.org/2000/svg"
                >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M656.77 705.147C763.556 462.154 1119.67 489.883 1287.27 668.662C727.799 422.264 791.773 855.953 685.96 871.52C564.579 888.06 556.065 538.774 0 865.926C172.706 669.635 421.063 557.503 656.77 705.147Z" fill="url(#paint0_linear)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M961.074 265.134C1024.07 121.868 1234.24 138.165 1333 243.486C1003.16 98.2739 1040.62 354.158 978.344 363.158C906.586 372.887 901.721 166.866 573.579 359.996C675.5 244.215 821.936 178.055 961.074 265.134Z" fill="url(#paint1_linear)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M521.281 68.3559C562.633 -25.7763 700.555 -15.074 765.502 54.2482C549.011 -41.3434 573.822 126.732 532.713 132.813C485.767 139.137 482.361 3.89844 267.086 130.624C333.98 54.4915 430.063 11.1955 521.281 68.3559Z" fill="url(#paint2_linear)"/>
                    <defs>
                    <linearGradient id="paint0_linear" x1="504.052" y1="525.511" x2="761.703" y2="971.798" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#B573F6"/>
                    <stop offset="0.5924" stop-color="#B150E2"/>
                    <stop offset="1" stop-color="#AF3DD7"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="870.989" y1="159.172" x2="1023" y2="422.472" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#B573F6"/>
                    <stop offset="0.0572277" stop-color="#B46AF1"/>
                    <stop offset="0.2164" stop-color="#B256E5"/>
                    <stop offset="0.3983" stop-color="#B048DD"/>
                    <stop offset="0.6208" stop-color="#AF3FD8"/>
                    <stop offset="1" stop-color="#AF3DD7"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear" x1="462.248" y1="-1.21852" x2="562.057" y2="171.665" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#B573F6"/>
                    <stop offset="0.2844" stop-color="#B56FF4"/>
                    <stop offset="0.5468" stop-color="#B364ED"/>
                    <stop offset="0.7996" stop-color="#B152E3"/>
                    <stop offset="1" stop-color="#AF3DD7"/>
                    </linearGradient>
                    </defs>
                </motion.svg>
                <motion.svg 
                style={{scale: mountainScale, x: upCloudX, y: upCloudY, originX: '50%', originY: '50%', transition: {...transition}}} 
                className="upCloud" 
                width="510" height="171" viewBox="0 0 510 171" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M43.5142 116.392C43.6142 116.992 43.5142 117.492 43.7142 118.192C43.8142 117.892 43.9142 117.592 43.9142 117.292C43.8142 116.892 43.7142 116.592 43.5142 116.392C40.4142 90.3919 78.9143 98.0919 89.1143 98.0919C83.5143 54.3919 127.114 70.0919 138.414 83.1919C136.214 25.3919 227.514 32.7919 230.214 58.7919C234.914 -8.70807 375.514 -25.9081 408.114 48.8919C417.514 38.3919 447.314 34.7919 449.214 65.3919C483.514 58.5919 489.014 73.3919 491.814 95.3919C536.514 120.392 485.214 132.092 480.614 128.792C480.114 134.792 445.314 134.792 443.314 139.592C439.714 148.392 420.114 172.092 381.514 148.592C348.914 171.792 320.314 183.292 279.514 142.992C277.514 195.892 135.114 158.292 115.614 149.592C89.4142 165.792 53.8142 160.992 41.3142 144.192C-47.9858 132.292 37.5142 108.792 43.5142 116.392Z" fill="url(#upCloud)"/>
                    <defs>
                    <linearGradient id="upCloud" x1="193.966" y1="14.8427" x2="318.453" y2="230.461" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#11F0FE"/>
                    <stop offset="0.2502" stop-color="#14EDFE"/>
                    <stop offset="0.4643" stop-color="#1FE5FD"/>
                    <stop offset="0.6652" stop-color="#31D7FC"/>
                    <stop offset="0.8568" stop-color="#49C4FB"/>
                    <stop offset="1" stop-color="#61B1FA"/>
                    </linearGradient>
                    </defs>
                </motion.svg>
                <motion.svg 
                style={{scale: mountainScale, x: midCloudX, y: midCloudY, originX: '50%', originY: '50%', transition: {...transition}}} 
                className="midCloud" 
                width="284" height="96" viewBox="0 0 284 96" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M259.314 64.8919C259.314 65.1919 259.314 65.4919 259.214 65.8919C259.114 65.6919 259.114 65.5919 259.114 65.3919C259.114 65.1919 259.214 64.9919 259.314 64.8919C261.014 50.3919 239.614 54.6919 234.014 54.7919C237.114 30.4919 212.914 39.1919 206.614 46.4919C207.814 14.3919 157.114 18.4919 155.514 32.8919C152.914 -4.60807 74.8142 -14.2081 56.6142 27.3919C51.4142 21.5919 34.8142 19.4919 33.8142 36.5919C14.7142 32.7919 11.7142 41.0919 10.1142 53.2919C-14.7858 67.1919 13.8142 73.6919 16.3142 71.7919C16.6142 75.0919 35.9142 75.1919 37.0142 77.7919C39.0142 82.6919 49.9142 95.8919 71.4142 82.7919C89.5142 95.6919 105.414 102.092 128.114 79.6919C129.214 109.092 208.414 88.1919 219.214 83.3919C233.814 92.3919 253.514 89.6919 260.514 80.3919C310.214 73.6919 262.614 60.5919 259.314 64.8919Z" fill="url(#midCloud)"/>
                    <defs>
                    <linearGradient id="midCloud" x1="97.1245" y1="-8.62598" x2="179.334" y2="133.766" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#11F0FE"/>
                    <stop offset="0.357" stop-color="#33D5FC"/>
                    <stop offset="0.773" stop-color="#54BBFB"/>
                    <stop offset="1" stop-color="#61B1FA"/>
                    </linearGradient>
                    </defs>
                </motion.svg>
                <motion.svg 
                style={{zIndex:1000, scale: scaleRocket, x: rocketX, y: rocketY, originX: '50%', originY: '50%', transition: {...transition}}} 
                className="rocket" 
                width="202" height="363" viewBox="0 0 202 363" fill="none" xmlns="http://www.w3.org/2000/svg"
                animate="visible"
                initial="hidden"
                variants={{
                    hidden: { 
                        translateY: '2px',
                    },
                    visible: { 
                        translateY: '0px',
                        transition: { duration: 0.2, repeat: Infinity, delayChildren: 1, staggerChildren: 2 }
                    }
                }}
                >
                    <path d="M159.114 0.991943C154.914 3.09194 150.914 5.19194 147.114 7.39194C63.6142 55.5919 52.8142 146.592 65.1142 207.792L137.514 227.192C179.314 177.892 214.914 96.3919 167.214 13.7919C164.714 9.49195 162.014 5.29194 159.114 0.991943ZM129.114 201.692L84.9142 189.892C80.7142 155.292 80.3142 76.7919 151.114 31.0919C181.114 88.5919 167.614 150.192 129.114 201.692ZM190.814 185.992C187.614 192.692 184.214 198.992 180.714 204.892C183.914 214.592 184.614 226.492 182.414 238.192C179.214 232.592 174.314 227.892 168.414 223.792C164.914 228.792 161.414 233.292 158.014 237.392C174.014 250.292 174.514 266.292 172.414 282.792C184.414 274.592 194.114 260.792 198.514 244.392C203.214 226.792 201.714 206.092 190.814 185.992ZM39.8142 189.492C32.6142 189.992 26.1142 191.692 20.5142 194.892C24.5142 183.792 31.0142 173.892 38.5142 167.092C38.5142 159.992 38.8142 152.692 39.4142 145.392C19.9142 157.392 8.31423 174.592 3.51423 192.292C-0.885771 208.692 0.614223 225.492 6.91422 238.592C13.3142 223.192 21.8142 209.592 42.1142 206.492C41.2142 200.892 40.4142 195.292 39.8142 189.492ZM118.614 152.492C116.514 151.892 114.514 150.692 113.114 149.092C111.614 147.392 110.714 145.392 110.414 143.192C110.114 140.992 110.514 138.792 111.514 136.792C112.514 134.792 114.014 133.192 116.014 132.092C117.914 130.992 120.114 130.492 122.314 130.592C124.514 130.792 126.614 131.492 128.414 132.892C130.214 134.292 131.514 136.092 132.214 138.192C132.914 140.292 133.014 142.592 132.414 144.692C132.014 146.092 131.414 147.492 130.514 148.592C129.614 149.792 128.514 150.692 127.214 151.492C125.914 152.192 124.514 152.692 123.114 152.892C121.614 152.992 120.114 152.892 118.614 152.492ZM138.914 76.7919C134.614 75.6919 130.114 75.7919 125.914 77.1919C121.714 78.5919 118.014 81.2919 115.314 84.7919C112.614 88.2919 111.014 92.5919 110.714 96.9919C110.414 101.392 111.414 105.792 113.714 109.692C115.914 113.492 119.214 116.592 123.214 118.592C127.214 120.592 131.614 121.292 136.014 120.692C140.414 120.092 144.514 118.192 147.914 115.292C151.214 112.392 153.614 108.492 154.814 104.192C156.314 98.4919 155.514 92.2919 152.514 87.1919C149.614 82.0919 144.714 78.2919 138.914 76.7919ZM131.114 105.992C129.614 105.592 128.314 104.792 127.214 103.592C126.214 102.392 125.514 100.992 125.314 99.3919C125.114 97.8919 125.414 96.2919 126.014 94.8919C126.714 93.4919 127.814 92.2919 129.114 91.5919C130.414 90.7919 132.014 90.4919 133.514 90.5919C135.014 90.6919 136.514 91.2919 137.814 92.1919C139.014 93.0919 140.014 94.3919 140.514 95.8919C141.014 97.3919 141.114 98.9919 140.614 100.392C140.114 102.392 138.714 104.092 136.914 105.192C135.314 106.292 133.114 106.592 131.114 105.992ZM55.2142 313.692L41.3142 309.992L62.8142 230.492L76.7142 234.192L55.2142 313.692ZM114.014 303.792L100.114 300.092L114.914 244.192L128.814 247.892L114.014 303.792ZM69.7142 362.492L55.8142 358.792L82.3142 260.192L96.2142 263.892L69.7142 362.492Z" fill="url(#rocket)"/>
                    <defs>
                    <linearGradient id="rocket" x1="42.9331" y1="67.5248" x2="177.364" y2="300.366" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#E6E6E6"/>
                    <stop offset="0.1416" stop-color="#E5E2E6"/>
                    <stop offset="0.2964" stop-color="#E0D4E4"/>
                    <stop offset="0.4576" stop-color="#D9BFE2"/>
                    <stop offset="0.6231" stop-color="#CFA0E0"/>
                    <stop offset="0.792" stop-color="#C278DC"/>
                    <stop offset="0.9614" stop-color="#B349D8"/>
                    <stop offset="1" stop-color="#AF3DD7"/>
                    </linearGradient>
                    </defs>
                </motion.svg>
                <motion.svg 
                style={{scale: mountainScale, x: downCloudX, y: downCloudY, originX: '50%', originY: '50%', transition: {...transition}}} 
                className="downCloud" 
                width="236" height="80" viewBox="0 0 236 80" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5142 54.1919C20.5142 54.4919 20.5142 54.6919 20.6142 54.9919C20.7142 54.8919 20.7142 54.6919 20.7142 54.5919C20.6142 54.4919 20.6142 54.2919 20.5142 54.1919C19.1142 42.1919 36.8142 45.6919 41.5142 45.7919C38.9142 25.5919 59.0142 32.8919 64.2142 38.8919C63.2142 12.2919 105.314 15.6919 106.514 27.5919C108.714 -3.50807 173.414 -11.4081 188.514 23.0919C192.814 18.2919 206.614 16.5919 207.414 30.6919C223.214 27.5919 225.814 34.3919 227.014 44.4919C247.614 55.9919 224.014 61.3919 221.814 59.8919C221.614 62.6919 205.514 62.6919 204.614 64.8919C202.914 68.9919 193.914 79.8919 176.114 69.0919C161.114 79.7919 147.914 85.0919 129.114 66.4919C128.214 90.8919 62.5142 73.4919 53.6142 69.4919C41.5142 76.9919 25.1142 74.6919 19.4142 66.9919C-21.6858 61.5919 17.7142 50.6919 20.5142 54.1919Z" fill="url(#downCloud)"/>
                    <defs>
                    <linearGradient id="downCloud" x1="89.8287" y1="7.41693" x2="147.202" y2="106.79" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#11F0FE"/>
                    <stop offset="0.2211" stop-color="#2ADCFD"/>
                    <stop offset="0.5365" stop-color="#48C5FB"/>
                    <stop offset="0.8073" stop-color="#5AB6FA"/>
                    <stop offset="1" stop-color="#61B1FA"/>
                    </linearGradient>
                    </defs>
                </motion.svg>
                <motion.svg 
                style={{zIndex:2005, scale: mountainScale, x: mountainX, y: mountainY, originX: '50%', originY: '50%', transition: {...transition}}} 
                className="mountain" 
                width="2219" height="1068" viewBox="0 0 2219 1068" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2219 1067.56L2004.5 771.662L1864 675.562L1812.2 705.162L1708.6 557.262L1442.3 105.962L1309.2 54.1621L1250 120.762L1168.6 128.162L1065 209.562L880.2 461.062L895 490.662L924.6 483.262L1109.5 690.362H1131.7L1161.3 653.362L1264.9 645.962L1324.1 719.962L1390.7 742.162L1575.6 1067.66H2219V1067.56ZM0 1067.56L192.3 808.662L303.2 756.862L355 608.962L451.2 549.762L636.1 246.462L710.1 216.862L835.8 446.162L865.4 534.962L909.8 527.562L1094.7 719.862H1153.9L1183.5 690.262L1250.1 682.862L1301.9 749.462L1368.5 771.662L1531.2 1067.56H0Z" fill="url(#mountain)"/>
                    <path d="M767.9 0C765 0.1 762.8 2.6 762.9 5.5C763 8.4 765.5 10.6 768.4 10.5C800.3 10.5 826.1 36.2 826.1 68.2C826.1 71.1 828.4 73.5 831.3 73.5C834.2 73.5 836.6 71.2 836.6 68.3V68.2C836.6 30.6 806 0.0999756 768.5 0.0999756C768.2 -2.44156e-05 768 0 767.9 0ZM767.9 20.9C765 21 762.8 23.5 762.9 26.4C763 29.3 765.5 31.5 768.4 31.4C789.2 31.4 805.1 47.2 805.1 68.1C805.1 71 807.4 73.4 810.3 73.4C813.2 73.4 815.6 71.1 815.6 68.2V68.1C815.6 41.8 794.7 20.9 768.4 20.9C768.2 20.9 768 20.9 767.9 20.9ZM674 44.5C657.6 60.9 650.4 83.0999 650.4 104.8C650.4 125.7 658.7 145.9 674.6 161.8C690.6 177.8 710.6 186 731.6 186C753.1 186 775.5 178.8 791.9 162.4L735.3 105.8L758.9 82.2L763.1 86.4L786.7 62.8L771 47.1L747.4 70.7L751.5 74.7999L727.9 98.4L674 44.5ZM666.7 168.5L637.2 243.3L708.1 215.2L734.2 196.4C733.3 196.4 732.4 196.5 731.6 196.5C707.9 196.5 685 187 667.2 169.1C667.1 168.9 666.9 168.7 666.7 168.5Z" fill="url(#radio)"/>
                    <defs>
                    <linearGradient id="mountain" x1="635.637" y1="246.792" x2="1386.87" y2="1547.97" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#6500B4"/>
                    <stop offset="0.1326" stop-color="#56019C"/>
                    <stop offset="0.4103" stop-color="#39046E"/>
                    <stop offset="0.6576" stop-color="#24064D"/>
                    <stop offset="0.8625" stop-color="#180738"/>
                    <stop offset="1" stop-color="#130731"/>
                    </linearGradient>
                    <linearGradient id="radio" x1="676.936" y1="42.8308" x2="759.375" y2="185.618" gradientUnits="userSpaceOnUse">
                    <stop offset="5.11468e-07" stop-color="#ED1E79"/>
                    <stop offset="0.4633" stop-color="#A70F97"/>
                    <stop offset="0.8219" stop-color="#7704AC"/>
                    <stop offset="1" stop-color="#6500B4"/>
                    </linearGradient>
                    </defs>
                </motion.svg>
                <motion.svg 
                style={{opacity: opacStars, scale: scaleStars, x: starsX, y: starsY, originX: '50%', originY: '50%'}} 
                className="stars" 
                width="580" height="540" viewBox="0 0 580 540" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.g 
                    clip-path="url(#clip0)"
                    variants={containerStars}
                    initial="hidden"
                    animate="show"
                    >
                    <motion.path variants={itemStar} d="M525.6 178.2C529.4 179.4 534 177.4 535.9 173.9L551.3 145C553.2 141.5 553.8 141.7 552.6 145.5L543.1 176.9C541.9 180.7 543.9 185.3 547.4 187.2L576.3 202.6C579.8 204.5 579.6 205.1 575.8 203.9L544.4 194.4C540.6 193.2 536 195.2 534.1 198.7L518.7 227.6C516.8 231.1 516.2 230.9 517.4 227.1L526.9 195.7C528.1 191.9 526.1 187.3 522.6 185.4L493.7 170C490.2 168.1 490.4 167.5 494.2 168.7L525.6 178.2Z" fill="url(#paint0_radial)"/>
                    <motion.path variants={itemStar} d="M206.4 215.7C208.7 216.9 211.8 216.2 213.4 214.2L226.5 197.8C228.1 195.8 228.4 196 227.3 198.3L217.6 216.9C216.4 219.2 217.1 222.3 219.1 223.9L235.5 237C237.5 238.6 237.3 238.9 235 237.8L216.4 228.1C214.1 226.9 211 227.6 209.4 229.6L196.2 246C194.6 248 194.3 247.8 195.4 245.5L205.1 226.9C206.3 224.6 205.6 221.5 203.6 219.9L187.2 206.8C185.2 205.2 185.4 204.9 187.7 206L206.4 215.7Z" fill="url(#paint1_radial)"/>
                    <motion.path variants={itemStar} d="M396.9 282.6C399.8 289.4 408 293.8 415.2 292.3L474.8 280.2C482 278.7 482.4 279.9 475.6 282.7L419.6 306.2C412.8 309.1 408.4 317.3 409.9 324.5L422 384.1C423.5 391.3 422.3 391.7 419.5 384.9L396 328.9C393.1 322.1 384.9 317.7 377.7 319.2L318 331.3C310.8 332.8 310.4 331.6 317.2 328.8L373.2 305.3C380 302.4 384.4 294.2 382.9 287L370.8 227.4C369.3 220.2 370.5 219.8 373.3 226.6L396.9 282.6Z" fill="url(#paint2_radial)"/>
                    <motion.path variants={itemStar} d="M159.9 347.7L182.9 264C183.1 263.1 184.3 263.3 184.2 264.2L178.4 350.7C178.2 352 179.7 352.8 180.8 352.1L329 257.8C329.4 257.5 329.6 257.9 329.3 258.2L191.2 367.4C190.1 368.2 190.5 369.9 191.7 370.1L275.4 393.1C276.3 393.3 276.1 394.5 275.2 394.4L189 388.7C187.7 388.5 186.9 390 187.6 391.1L281.9 539.6C282.2 540 281.8 540.2 281.5 539.9L172.2 401.7C171.4 400.6 169.7 401 169.5 402.2L146.5 485.9C146.3 486.8 145.1 486.6 145.2 485.7L151 399.2C151.2 397.9 149.7 397.1 148.6 397.8L0.400011 492.1C1.0848e-05 492.4 -0.199989 492 0.100011 491.7L138.2 382.4C139.3 381.6 138.9 379.9 137.7 379.7L54 356.7C53.1 356.5 53.3 355.3 54.2 355.4L140.4 361.1C141.7 361.3 142.5 359.8 141.8 358.7L47.5 210.7C47.2 210.3 47.7 209.8 47.9 210.1L157.2 348.2C158.1 349 159.4 348.9 159.9 347.7Z" fill="url(#paint3_radial)"/>
                    <motion.path variants={itemStar} d="M378.8 69.3999L373.1 29.5999C373 29.1999 373.6 28.9999 373.7 29.4999L387.2 67.2999C387.3 67.8999 388.1 67.9999 388.5 67.3999L434 -0.00011386C434.1 -0.200114 434.3 -0.100114 434.2 0.0998861L395.8 71.9999C395.5 72.4999 395.9 73.1999 396.5 72.9999L436.3 67.2999C436.7 67.1999 436.9 67.7999 436.4 67.8999L398.8 81.3999C398.2 81.4999 398.1 82.2999 398.7 82.6999L466.1 128.3C466.3 128.4 466.2 128.6 466 128.5L394.1 90.0999C393.6 89.7999 392.9 90.1999 393.1 90.7999L398.8 130.6C398.9 131 398.3 131.2 398.2 130.7L384.7 92.8999C384.6 92.2999 383.8 92.1999 383.4 92.7999L337.9 160.2C337.8 160.4 337.6 160.3 337.7 160.1L376 88.1999C376.3 87.6999 375.9 86.9999 375.3 87.1999L335.5 92.8999C335.1 92.9999 334.9 92.3999 335.4 92.2999L373 78.7999C373.6 78.6999 373.7 77.8999 373.1 77.4999L305.7 31.9999C305.5 31.8999 305.6 31.5999 305.8 31.6999L377.7 70.0999C378.2 70.2999 378.8 70.0999 378.8 69.3999Z" fill="url(#paint4_radial)"/>
                    <motion.path variants={itemStar} d="M528.9 378L528.6 352C528.6 351.7 528.9 351.7 529 352L534.5 377.4C534.5 377.8 535 377.9 535.3 377.6L570.2 338.2C570.3 338.1 570.4 338.2 570.3 338.3L539.5 381.2C539.2 381.5 539.5 382 539.9 381.9L565.9 381.6C566.2 381.6 566.2 381.9 565.9 382L540.6 387.5C540.2 387.5 540.1 388 540.4 388.3L579.8 423.3C579.9 423.4 579.8 423.5 579.7 423.4L536.8 392.6C536.5 392.3 536 392.6 536.1 393L536.4 419C536.4 419.3 536.1 419.3 536 419L530.5 393.6C530.5 393.2 530 393.1 529.7 393.4L494.8 432.8C494.7 432.9 494.6 432.8 494.7 432.7L525.5 389.8C525.8 389.5 525.5 389 525.1 389.1L499.1 389.4C498.8 389.4 498.8 389.1 499.1 389L524.4 383.5C524.8 383.5 524.9 383 524.6 382.7L485.2 347.8C485.1 347.7 485.2 347.5 485.3 347.6L528.2 378.4C528.4 378.5 528.8 378.4 528.9 378Z" fill="url(#paint5_radial)"/>
                    </motion.g>
                    <defs>
                    <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(535.02 186.314) rotate(7.79304) scale(45.8621)">
                    <stop offset="5.80729e-07" stop-color="#F2F2F2"/>
                    <stop offset="0.0997522" stop-color="#DAE7F3"/>
                    <stop offset="0.3028" stop-color="#AFD4F6"/>
                    <stop offset="0.4996" stop-color="#8DC5F8"/>
                    <stop offset="0.6859" stop-color="#75BAF9"/>
                    <stop offset="0.8573" stop-color="#66B3FA"/>
                    <stop offset="1" stop-color="#61B1FA"/>
                    </radialGradient>
                    <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(211.338 221.961) rotate(18.4694) scale(29.3487)">
                    <stop offset="5.80729e-07" stop-color="#F2F2F2"/>
                    <stop offset="0.1381" stop-color="#BFF2F5"/>
                    <stop offset="0.3001" stop-color="#8BF1F8"/>
                    <stop offset="0.4593" stop-color="#5FF1FA"/>
                    <stop offset="0.612" stop-color="#3DF0FC"/>
                    <stop offset="0.7565" stop-color="#25F0FD"/>
                    <stop offset="0.8894" stop-color="#16F0FE"/>
                    <stop offset="1" stop-color="#11F0FE"/>
                    </radialGradient>
                    <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(396.377 305.739) scale(84.0266)">
                    <stop offset="1.27867e-06" stop-color="#11F0FE"/>
                    <stop offset="0.1092" stop-color="#45DCCD"/>
                    <stop offset="0.2289" stop-color="#76C99F"/>
                    <stop offset="0.352" stop-color="#A0B878"/>
                    <stop offset="0.4761" stop-color="#C2AB57"/>
                    <stop offset="0.6018" stop-color="#DDA03E"/>
                    <stop offset="0.7294" stop-color="#F0992C"/>
                    <stop offset="0.8604" stop-color="#FB9422"/>
                    <stop offset="1" stop-color="#FF931E"/>
                    </radialGradient>
                    <radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(164.723 374.993) scale(164.865)">
                    <stop stop-color="#FFFF00"/>
                    <stop offset="0.0511768" stop-color="#FDE90C"/>
                    <stop offset="0.1886" stop-color="#F9B428"/>
                    <stop offset="0.3278" stop-color="#F58641"/>
                    <stop offset="0.466" stop-color="#F26055"/>
                    <stop offset="0.6029" stop-color="#F04365"/>
                    <stop offset="0.7383" stop-color="#EE2F70"/>
                    <stop offset="0.8715" stop-color="#ED2277"/>
                    <stop offset="1" stop-color="#ED1E79"/>
                    </radialGradient>
                    <radialGradient id="paint4_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(385.846 80.1335) rotate(8.6965) scale(86.5293)">
                    <stop offset="5.80729e-07" stop-color="#B573F6"/>
                    <stop offset="0.0278119" stop-color="#B879F6"/>
                    <stop offset="0.2471" stop-color="#CDA4F4"/>
                    <stop offset="0.4596" stop-color="#DDC6F3"/>
                    <stop offset="0.6608" stop-color="#E9DEF3"/>
                    <stop offset="0.8459" stop-color="#F0EDF2"/>
                    <stop offset="1" stop-color="#F2F2F2"/>
                    </radialGradient>
                    <radialGradient id="paint5_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(532.527 385.445) rotate(16.224) scale(56.0197)">
                    <stop offset="8.52446e-07" stop-color="#ED1E79"/>
                    <stop offset="0.2121" stop-color="#F0455A"/>
                    <stop offset="0.4332" stop-color="#F36740"/>
                    <stop offset="0.6442" stop-color="#F57F2D"/>
                    <stop offset="0.8384" stop-color="#F78E22"/>
                    <stop offset="1" stop-color="#F7931E"/>
                    </radialGradient>
                    <clipPath id="clip0">
                    <rect width="579.8" height="540" fill="white"/>
                    </clipPath>
                    </defs>
                </motion.svg>
                <motion.svg 
                style={{x: earthX, y: earthY, originX: '50%', originY: '50%'}} 
                className="earth" 
                width="721" height="721" viewBox="0 0 721 721" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M360.5 0C559.6 0 721 161.4 721 360.5C721 559.6 559.6 721 360.5 721C161.4 721 0 559.6 0 360.5C0 161.4 161.4 0 360.5 0ZM543.1 106.1L498.1 122.3C494.7 123.5 491 122.7 488.5 120L469.8 100.4C466.8 97.3 462.3 96.7 458.6 98.9L413.7 126.3C409.5 128.9 408.1 134.4 410.6 138.6L413.9 144.2C416.2 148 415.4 152.8 412 155.6L375.8 186.6C373.1 188.9 372.1 192.2 372.9 195.6C373.7 199 376.3 201.4 379.7 202.2L412.2 209.5C413.5 209.8 414.7 209.8 416 209.5L466.7 199.1C469.8 198.5 472.8 199.4 475 201.7L506.9 235C509.5 237.7 510.1 241.6 508.6 245L498.9 266C497.3 269.4 494 271.5 490.2 271.2L352.6 262.7C348.7 262.5 345.3 264.6 343.8 268.1L326.5 308C325.3 310.8 325.5 313.7 327.1 316.3L353 358.7C354.6 361.4 357.3 363 360.5 363L411.9 364C415.9 364.1 419.3 366.6 420.4 370.5L429.5 402C429.6 402.3 429.6 402.6 429.7 402.9L449.2 507.2C450 511.6 453.9 514.7 458.4 514.5L475.8 513.8C479.4 513.7 482.4 511.6 483.8 508.3L531.8 393.4C532.1 392.8 532.4 392.3 532.7 391.7L558.2 355.6C559.8 353.3 560.3 350.7 559.5 348C558.7 345.3 557 343.3 554.4 342.2L540.1 336C538.7 335.4 537.4 335.2 535.8 335.3L525.9 336.1C521.6 336.4 517.7 333.8 516.5 329.6L511.8 313.2C511.2 311.2 512 309.2 513.7 308.1C515.4 307 517.6 307.2 519.1 308.6C521.8 311 525.4 311.6 528.7 310.1L551.1 300.3C553.5 299.3 555.2 297.4 556 295C556.8 292.5 556.6 290.1 555.4 287.8L554.2 285.6C553.5 284.2 552.2 283.4 550.6 283.2C547.9 283 545.5 281.6 543.9 279.2C541.9 276.2 541.9 272.6 543.7 269.5L548.4 261.8C550.6 258.2 554.9 256.6 559 258L612.2 275.9C613.8 276.5 615.1 277.3 616.2 278.6L629 293.9C630.1 295.2 631.3 296.1 632.9 296.6L638.5 298.5C641.4 299.5 643.4 301.7 644.2 304.6L656.6 349.9C657.5 353.3 660.2 355.8 663.8 356.4L666.9 356.9C669.7 357.4 672.3 356.7 674.4 354.8C676.5 353 677.6 350.5 677.5 347.7C673.7 250 625.2 163 551.6 107.4C549.1 105.5 546.1 105.1 543.1 106.1ZM186.5 96.1L248.4 83.8C251.6 83.2 254.8 84.2 256.9 86.7L267.3 98.6C269.5 101.1 270.1 104.3 269.1 107.4C268 110.5 265.6 112.7 262.3 113.3L249 116C246.5 116.5 244.1 116 242 114.5L234.7 109.3C232.3 107.6 229.5 107.1 226.7 108.1L193.4 119C189.8 120.2 187.4 123.3 187.2 127.1L186.4 142.7C186.3 145.2 187.1 147.4 188.8 149.2C190.5 151 192.6 152 195.1 152.1L232 153.4C235.2 153.5 237.8 155.1 239.4 157.8L250.6 176.8C253 180.9 251.8 186.1 247.9 188.8L152.3 253.7C150.6 254.8 148.9 255.3 146.8 255.2L111.6 253.7C108.3 253.6 105.5 255 103.7 257.7L89.1 280C86.7 283.7 87.2 288.5 90.5 291.6L99.4 299.9C101.9 302.3 105.3 303 108.6 301.8L137.2 291.5C140.7 290.2 144.5 291.2 147 294L151.6 299.3C152.4 300.2 152.8 301.4 152.7 302.6C152.6 303.9 152.1 304.9 151.1 305.7L148 308.4C144.5 311.4 143.8 316.4 146.3 320.2L157.3 337C159.1 339.8 162.1 341.2 165.4 341L208.4 338.4C210.7 338.3 212.8 338.8 214.5 340.3L264.1 383.3C265.1 384.2 266.3 384.7 267.6 385L289.3 390C294 391.1 297.1 395.8 296.1 400.5L287.6 443.5C287.4 444.6 286.9 445.5 286.4 446.5L238.4 542C238 542.7 237.7 543.3 237.5 544.1L230.6 566.3C230 568.1 230 569.7 230.6 571.5L234.4 584.3C234.7 585.2 234.8 585.9 234.8 586.9V593.2C234.8 595.1 235.3 596.8 236.4 598.4L236.5 598.5C238.5 601.3 238.7 604.8 237.1 607.8C235.5 610.9 232.5 612.7 229.1 612.7H223.8C219.9 612.7 216.6 610.3 215.3 606.7L190.2 534.6C189.8 533.5 189.7 532.6 189.7 531.4L191.4 459C191.5 455.8 190.2 452.7 187.3 451.2L124.2 418.1C121.6 416.7 120.3 414 120.1 411L119.2 391.2C119.1 390.1 118.8 388.9 119.6 388.2L138.2 371.7C140.2 370 138.7 366.7 137.3 364.5L113.5 324.7C112 322.3 109.7 320.8 106.9 320.4L77.6 316.6C75.9 316.4 74.4 315.8 73.1 314.7L54.3 299.5C51.6 297.3 50.4 293.9 51.2 290.5C69.2 210.5 117.5 142 183.3 97.5C184.3 96.8 185.3 96.4 186.5 96.1Z" fill="url(#earth)"/>
                    <defs>
                    <linearGradient id="earth" x1="180.22" y1="48.2462" x2="540.78" y2="672.754" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#11F0FE"/>
                    <stop offset="1" stop-color="#130731"/>
                    </linearGradient>
                    </defs>
                </motion.svg>
                <motion.svg 
                style={{scale: scaleMars, x: marsX, y: marsY, originX: '50%', originY: '50%'}} 
                className="mars" 
                width="1202" height="1202" viewBox="0 0 1202 1202" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1164.01 391.3C954.915 516.2 735.815 613.6 512.415 680.9C511.415 681.2 510.415 681.3 509.515 681.3C505.115 681.3 501.115 678.5 499.715 674C498.115 668.6 501.115 662.9 506.515 661.3C729.315 594.2 947.915 496.8 1156.41 371.9C1142.61 338.4 1125.81 306.5 1106.51 276.5C1006.31 335.7 903.115 389 799.815 434.9C798.515 435.5 797.115 435.8 795.715 435.8C791.815 435.8 788.115 433.5 786.415 429.7C784.115 424.6 786.415 418.5 791.615 416.3C893.915 371 996.015 318.3 1095.21 259.7C1074.41 229.6 1050.91 201.6 1025.11 175.9C826.915 289.3 619.315 378.3 407.915 440.5C406.915 440.8 406.015 440.9 405.015 440.9C400.615 440.9 396.515 438 395.215 433.6C393.615 428.2 396.715 422.5 402.115 421C610.115 359.8 814.515 272.4 1009.81 161.2C901.715 60.6 757.215 0 601.615 0C562.215 0 522.415 3.9 483.415 11.7C279.815 52.4 120.715 192 46.2146 370.5C303.315 326.3 553.815 245.7 791.015 130.7C796.115 128.2 802.215 130.4 804.615 135.4C807.115 140.5 804.915 146.6 799.915 149C557.215 266.7 300.815 348.6 37.5146 392.7C0.0145874 493.5 -10.8854 605.6 11.7146 718.6C14.6146 733 18.0146 747.3 21.9146 761.3C49.9146 758.1 78.1146 754.4 105.715 750.4C111.315 749.6 116.415 753.5 117.215 759C118.015 764.6 114.115 769.7 108.615 770.5C82.0146 774.3 54.8146 777.9 27.8146 781C53.9146 864 97.3146 938.8 153.515 1001.4C307.215 981.1 459.115 948.2 605.315 903.4C610.715 901.7 616.415 904.8 618.015 910.2C619.615 915.6 616.615 921.3 611.215 922.9C468.515 966.6 320.315 999.1 170.515 1019.6C204.615 1054.6 242.915 1085.5 284.415 1111.3C515.215 1073.5 741.315 1006.4 956.615 911.6C961.715 909.3 967.815 911.7 970.015 916.8C972.315 922 969.915 928 964.815 930.2C755.415 1022.4 535.815 1088.6 311.715 1127.3C398.015 1174.9 496.715 1201.8 600.315 1201.8C639.715 1201.8 679.515 1197.9 718.515 1190.1C1043.41 1125.2 1255.01 808.1 1190.21 483.2C1183.91 451.7 1175.11 420.9 1164.01 391.3ZM345.815 571.2C435.415 548.4 524.915 520.8 611.915 489.1C617.215 487.2 623.015 489.9 625.015 495.2C627.015 500.5 624.215 506.3 618.915 508.3C531.215 540.2 441.015 568 350.815 591C350.015 591.2 349.115 591.3 348.315 591.3C343.815 591.3 339.615 588.2 338.415 583.6C337.015 578.1 340.315 572.6 345.815 571.2ZM182.415 738.1C228.615 730 275.615 720.6 322.015 710.1C327.515 708.9 332.915 712.3 334.215 717.8C335.515 723.3 332.015 728.7 326.515 730C279.715 740.6 232.415 750.1 185.915 758.2C185.315 758.3 184.715 758.4 184.115 758.4C179.215 758.4 174.915 754.9 174.115 750C173.215 744.4 176.915 739.1 182.415 738.1ZM817.315 710.6C610.115 796.3 392.315 856.9 170.015 890.8C169.515 890.9 169.015 890.9 168.515 890.9C163.615 890.9 159.215 887.3 158.415 882.2C157.615 876.6 161.415 871.4 166.915 870.6C387.615 837 603.815 776.8 809.515 691.7C814.715 689.6 820.715 692 822.815 697.2C825.015 702.5 822.515 708.4 817.315 710.6ZM1078.81 732.5C1017.21 764.2 953.615 794.1 889.715 821.3C888.415 821.9 887.015 822.1 885.715 822.1C881.715 822.1 878.015 819.8 876.315 815.9C874.115 810.7 876.515 804.7 881.715 802.5C945.115 775.5 1008.31 745.9 1069.41 714.4C1074.41 711.8 1080.51 713.8 1083.11 718.8C1085.71 723.8 1083.81 729.9 1078.81 732.5Z" fill="url(#mars)"/>
                    <defs>
                    <linearGradient id="mars" x1="300.498" y1="80.6107" x2="901.446" y2="1121.48" gradientUnits="userSpaceOnUse">
                    <stop offset="2.66389e-07" stop-color="#FF931E"/>
                    <stop offset="0.4966" stop-color="#C1272D"/>
                    <stop offset="1" stop-color="#42210B"/>
                    </linearGradient>
                    </defs>
                </motion.svg>
            </motion.div>
        </AnimatePresence>
    )
}
