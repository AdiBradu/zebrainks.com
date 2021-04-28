import React from 'react'
import '../../pages/PrimaryPage/PrimaryPage.component.scss'
import './S02P.component.scss'
import PrimaryMessage from '../../components/PrimaryMessage/PrimaryMessage.component'
import Surfer from '../../components/Surfer/Surfer.component'

export default function S02P() {

    return (
        <div className="primary-page s02p">
            <div className="wrapper">
                <PrimaryMessage text='You are the wave that every surfer talks about'/>
                <Surfer/>
            </div>
        </div>
    )
}
