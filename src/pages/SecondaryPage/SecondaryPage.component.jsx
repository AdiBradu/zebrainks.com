import React from 'react'
import './SecondaryPage.component.scss'
import SecondaryMessage from '../../components/SecondaryMessage/SecondaryMessage.component'

export default function SecondaryPage() {
    return (
        <div className="secondary-page">
            <div className="wrapper">
                <SecondaryMessage
                    title='graphic design'
                    description='Building a visual identity is a complex process and it involves several basic ingredients like name, shape, color and typography.'
                />
            </div>
        </div>
    )
}
