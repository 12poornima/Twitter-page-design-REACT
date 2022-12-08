import React from 'react'
import FooterSection from './FooterSection'
import IconGrps from './IconGrps'
import MidSection from './MidSection'
import TopSection from './TopSection'

function MainTweet() {
    return (
        <div className='main'>
            <TopSection />
            <MidSection />
            <IconGrps />
            <FooterSection />

        </div>
    )
}

export default MainTweet