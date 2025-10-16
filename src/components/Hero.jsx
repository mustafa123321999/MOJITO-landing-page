import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive' 

const Hero = () => {

    const videoRef = useRef();

    const isMobil = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {

        const heroSplit = new SplitText('.title', { type: 'chars, words'}) // spliting the text with chars = charcter's worlds = single worlds resives as an input from 'gsap-all'

        const pSplit = new SplitText('.subtitle', { type: 'lines'}) 

        heroSplit.chars.forEach((c) => c.classList.add('text-gradient'))

        gsap.from(heroSplit.chars, {

            yPercent: 150,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,

        })

        gsap.from(pSplit.lines, {

            opacity: 0,
            yPercent: 120,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1,

        })

        gsap.timeline({

            scrollTrigger: {

                trigger: '#hero', //happens when inside the hero section
                start: 'top top', // starts when the hero section gets in the view port
                end: 'bottom top', // ends when the hero section gets out of view port
                scrub: true, // sets so the animation waits for the scrolling lenght

            }

        })
        .to('.right-leaf', { y: 200,}, 0) // 200 makes the leave go up as scrooling and 0 keeps it in place
        .to('.left-leaf', { y: -200,}, 0) // -200 makes the leave go down as scrooling and 0 keeps it in place

        const startValue = isMobil ? 'top 50%' : 'center 60%';
        const endValue = isMobil ? '120% top' : 'bottom top';

        const tl = gsap.timeline({

            scrollTrigger: {

                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true, //keeps the video stock on screen as you scrrol like fixed style


            }

        })

        videoRef.current.onloadedmetadata = () => {

            tl.to(videoRef.current, {

                currentTime: videoRef.current.duration,

                
            })

        }
        
            

    }, [])

  return (

    <>
        {/*the classname niosy is called in css which make the bg full and guvea the img the effect is not an css style but a png file*/}
       
        <section id='hero' className="noisy"> 

            <h1 className='title'>MOJITO</h1>

            <img src="/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf'/>
            <img src="/images/hero-right-leaf.png" alt="right-leaf" className='right-leaf'/>

            <div className="body">

                <div className="content">

                    <div className="space-y-5 hidden md:block ">

                        <p>Cool. Crisp. Classic</p>

                        <p className="subtitle">Sip the Spirit <br /> of Summer</p>

                    </div>

                    <div className="view-cocktails">

                        <p className='subtitle'>Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. </p>

                        <a href="#cocktails">View Cocktails</a>



                    </div>

                </div>

            </div>

        </section>

        <div className="video absolute inset-0">

            <video 
                ref={videoRef}
                src="/videos/output.mp4"
                muted
                playsInline //hidding eveythink a video has like play, puse, sounds levels, etc...
                preload='auto' //load auto when user enters the page
            />


        </div>

    </>


  )
}

export default Hero