import React from 'react'
import './ScrollSign.component.scss'
import { motion } from 'framer-motion'
import { useViewportScroll, useTransform, useMotionValue } from "framer-motion"

export default function ScrollSign() {
    const x = useMotionValue(0.5)
    const { scrollYProgress } = useViewportScroll()
    const opac = useTransform(x, [0, 0.5, 1], [1, 0, 0])

    return (
        <motion.div style={{opacity:opac}} className="scroll-sign">
            <svg width="799" height="1820" viewBox="0 0 799 1820" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path initial={{opacity:0}} animate={{opacity:1, transition:{ duration: 1, repeat: Infinity}}} d="M545.628 1566.19L399.24 1712.6L252.852 1566.19C235.108 1548.44 208.492 1548.44 190.748 1566.19C173.004 1583.94 173.004 1610.56 190.748 1628.31L368.188 1805.78C377.06 1814.65 388.15 1819.09 399.24 1819.09C410.33 1819.09 421.42 1814.65 430.292 1805.78L607.732 1628.31C625.476 1610.56 625.476 1583.94 607.732 1566.19C589.988 1548.44 563.372 1548.44 545.628 1566.19Z"/>
                <motion.path initial={{opacity:0}} animate={{opacity:1, transition:{ duration: 1, delay: 0.1, repeat: Infinity}}} d="M607.732 1322.17C589.988 1304.42 563.372 1304.42 545.628 1322.17L399.24 1468.58L252.852 1322.17C235.108 1304.42 208.492 1304.42 190.748 1322.17C173.004 1339.91 173.004 1366.53 190.748 1384.28L368.188 1561.75C377.06 1570.63 388.15 1575.06 399.24 1575.06C410.33 1575.06 421.42 1570.63 430.292 1561.75L607.732 1384.28C625.476 1366.53 625.476 1339.91 607.732 1322.17Z"/>
                <path d="M798.48 798.624V399.312C798.48 179.69 618.822 0 399.24 0C179.658 0 0 179.69 0 399.312V798.624C0 1018.25 179.658 1197.94 399.24 1197.94C618.822 1197.94 798.48 1018.25 798.48 798.624ZM399.24 1109.2C228.454 1109.2 88.72 969.441 88.72 798.624V399.312C88.72 228.495 228.454 88.736 399.24 88.736C570.026 88.736 709.76 228.495 709.76 399.312V798.624C709.76 969.441 570.026 1109.2 399.24 1109.2Z"/>
                <path d="M399.24 244.024C374.842 244.024 354.88 263.99 354.88 288.392V421.496C354.88 445.898 374.842 465.864 399.24 465.864C423.638 465.864 443.6 445.898 443.6 421.496V288.392C443.6 263.99 423.638 244.024 399.24 244.024Z"/>
            </svg>
        </motion.div>
    )
}