import React from 'react'
import './HomePage.component.scss'
import Navigation from '../../components/Navigation/Navigation.component'
import S01P from '../../pages/S01P/S01P.component'
import S01S from '../../pages/S01S/S01S.component'
import S02P from '../../pages/S02P/S02P.component'
import S02S from '../../pages/S02S/S02S.component'
import S03P from '../../pages/S03P/S03P.component'
import S03S from '../../pages/S03S/S03S.component'
import S04P from '../../pages/S04P/S04P.component'
import S04S from '../../pages/S04S/S04S.component'

export default function HomePage() {
    return (
        <div className="home-page">
            <Navigation/>
            <S01P/>
            <S01S/>
            <S02P/>
            <S02S/>
            <S03P/>
            <S03S/>
            <S04P/>
            <S04S/>
        </div>
    )
}
