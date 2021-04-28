import React from 'react'
import './PrimaryPage.component.scss'
import PrimaryMessage from '../../components/PrimaryMessage/PrimaryMessage.component'

export default function PrimaryPage() {

    return (
        <div className="primary-page">
            <div className="wrapper">
                <PrimaryMessage text='The future starts on our drawing board'/>
            </div>
        </div>
    )
}
