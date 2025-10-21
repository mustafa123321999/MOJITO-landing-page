import React from 'react'
import { openingHours, socials } from '../../constants/Index'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const Footer = () => {

    useGSAP(() => {

        const tsp = SplitText.create('#contact h2', { type: 'words' }) //splitting the text into words

        const tl = gsap.timeline({

            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
                // scrub: true,
            },
            ease: 'power1.inOut',

        })

        tl.from(tsp.words, {
            yPercent: 100,
            opacity: 0,
            stagger: 0.2,
        })
        tl.from('#contact h3, #contact h4', {

            yPercent: 100,
            opacity: 0,
            stagger: 0.2,

        })
        tl.fromTo('#f-right-leaf, #f-left-leaf', 

            {
                y: '50', opacity: 0
            }, {
                y: '0', opacity: 1, duration: 1, ease: 'power1.inOut'
            }
            
        )



    })

  return (

    <footer id='contact'>

        <img src="/images/footer-right-leaf.png" alt="right-leaf" id='f-right-leaf'/>
        <img src="/images/footer-left-leaf.png" alt="left-leaf" id='f-left-leaf'/>


        <div className="content">

            <h2>Where to find Us?</h2>

            <div className="">
                <h3>Visit our Bar</h3>
                <h4>456, Raq Blvd. #404, Los Angeles, CA 90210</h4>
            </div>

            <div className="">
                <h3>Contact us</h3>
                <h4>(916) ***-***</h4>
                <h4>hello@bar.com</h4>
            </div>

            <div className="">

                <h3>Open every day</h3>

                {openingHours.map((time) => (

                    <h4 key={time.day}>{time.day}: {time.time}</h4>

                ))}

            </div>

            <div className="">

                <h3>Socials</h3>

                <div className="flex-center gap-5">

                    {socials.map((s) => (

                        <a 
                            key={s.name} 
                            href={s.url} 
                            target='_blank' // opens in a new tab
                            rel='noopener noreferre'
                            aria-label={s.name}
                        >
                            <img src={s.icon} alt="" />
                        </a>

                    ))}

                </div>

            </div>

        </div>

    </footer>

  )
}

export default Footer