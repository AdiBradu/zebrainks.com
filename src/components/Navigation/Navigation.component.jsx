import React, { useState } from 'react'
import './Navigation.component.scss'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"
import Menu from '../../components/Menu/Menu.component'
import Toggler from '../../components/Toggler/Toggler.component'

export default function Navigation() {

    const history = useHistory()
    const navigateTo = () => history.push('/')

    const [showMenu, setShowMenu] = useState(false)

    const transition = { duration: 0.5, ease: [.4,-0.13,.27,.77]}

    const menuVariants = {
        hidden: {
            top: '-100vh',
            opacity: 0,
            scale: 0,
            skewX: 50,


        },
        visible: {
            top: 0,
            opacity: 1,
            scale: 1,
            skewX: 0,

            transition: {
                ...transition
            }
        }
    }

    let menu

    if(showMenu){
        menu =  
        <motion.div 
            className="collapse-area" 
            onClick={() => setShowMenu(false)}
            initial={"hidden"}
            animate={ showMenu ? "visible" : "hidden"}
            variants={menuVariants}
            key={1001}
            exit={"hidden"}
        >
            <Menu/>
        </motion.div>
    }

    return (
        <motion.nav initial={{opacity:0}} animate={{opacity: 1, transition: { duration: 0.8, delay:0.4, ease: [.4,-0.13,.27,.77]}}}>
            <div className="navigation">
                <Link 
                    to="/" 
                    onClick={() => {
                        navigateTo()
                        window.location.reload(false)
                    }}
                >
                    <Logo 
                    className="logo"
                    style={ showMenu ? {fill:"rgba(253, 253, 253,1)"} : {fill:"rgb(19, 7, 49)"} }
                    />
                </Link>
                <button onClick={() => setShowMenu(!showMenu)}>
                    <Toggler showMenu={showMenu} className="toggler"/>
                </button>
            </div>
            <AnimatePresence exitBeforeEnter>
                {menu}
            </AnimatePresence>
        </motion.nav>
    )
}
