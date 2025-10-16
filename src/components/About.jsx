import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

const About = () => {

    useGSAP(() => {

        const titleSplit = SplitText.create('#about h2', { type: 'words' })
        const pSplit = SplitText.create('#about p', { type: 'lines' })

        const stl = gsap.timeline({

            scrollTrigger: {

                trigger: '#about',
                start: 'top center',
                end: ''

            }
        })
        .from(titleSplit.words, {
            opacity: 0, duration: 1, yPercent: 200, xPercent: -150, ease: 'expo.out', stagger: 0.02, 
        })
        .from('.top-grid, .bottom-grid', {
            opacity: 0, duration: 1, ease:  'power1.inOut', stagger: 0.04,
        }, '-=0.5')
        .from(pSplit.lines, {
            opacity: 0, duration: 1, yPercent: 100,  ease: 'expo.out', stagger: 0.02, 

        }, 0.5)


    })

  return (

    <section id='about' className="">

        <div className="mb-16 md:px-0 px-5">
            <div className="content">

                <div className="md:col-span-8">

                    <p className='badge'>best cocktails</p>

                    <h2>
         
                        Where every detail matter's <span className='text-white'>-</span>
                        from muddle to garnish.

                    </h2>

                </div>

                <div className="sub-content">

                    <p>
                        Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable. 
                    </p>

                    <div className="">

                        <p className="md:text-3xl text-xl:font-bold"><span>4.5</span>/5</p>
                        <p className="text-sm text-white-100">More then +12,000 cusomers</p>

                    </div>


                </div>

            </div>
        </div>

        <div className="top-grid">

            <div className="md:col-span-3">
                <div className="noisy"/>
                <img src="/images/abt1.png" alt="grid-img-1" />
            </div>

            <div className="md:col-span-6">
                <div className="noisy"/>
                <img src="/images/abt2.png" alt="grid-img-2" />
            </div>

            <div className="md:col-span-3">
                <div className="noisy"/>
                <img src="/images/abt5.png" alt="grid-img-5" />   
            </div>

        </div>

        <div className="bottom-grid">

            <div className="md:col-span-8">
                <div className="noisy"/>
                <img src="/images/abt3.png" alt="grid-img-3" />
            </div>
            <div className="md:col-span-4">
                <div className="noisy"/>
                <img src="/images/abt4.png" alt="grid-img-4" />
            </div>

        </div>


    </section>

     
  )
}

export default About