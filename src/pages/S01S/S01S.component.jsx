import React from 'react'
import '../../pages/SecondaryPage/SecondaryPage.component.scss'
import './S01S.component.scss'
import SecondaryMessage from '../../components/SecondaryMessage/SecondaryMessage.component'
import {ReactComponent as LogoFlip} from '../../assets/logoFlip.svg'

export default function S01S() {
    return (
        <div className="secondary-page s01s">
            <div className="wrapper">
                <LogoFlip className="logo-flip"/>
                <SecondaryMessage
                    category='graphic design'
                    title='visual identity'
                    description='Building a visual identity is a complex process and it involves several basic ingredients like name, shape, color and typography.'
                />
            </div>
        </div>
    )
}