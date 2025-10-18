import React from 'react'
import { featureLists, goodLists } from '../../constants/Index'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Art = () => {

    const isMobil = useMediaQuery({ maxWidth: 767 })

    useGSAP(() => {

        const start = isMobil ? 'top 20%' : 'top top';
        const end = 'bottom center';

        const mtl = gsap.timeline({

            scrollTrigger: {

                trigger: '#art',
                start: start,
                end: end,
                scrub: 1.5,
                pin: true,

            }

        })


        mtl.to('.will-fade', {

            opacity: 0,
            stagger: 0.2,
            ease: 'power1.inOut'

        })

        mtl.to('.masked-img', {

            scale: 1.3,
            maskPosition: 'center',
            maskSize: '400%',
            duration: 1,
            ease: 'power1.inOut'

        })

        mtl.to('#masked-content', {

            opacity: 1,
            duration: 1.5,
            ease: 'power1.inOut'
            

        })


    })

  return (

    <div id='art'>

        <div className="container mx-auto h-full pt-20">

            <h2 className='will-fade'>The ART</h2> 

            <div className="content">

                <ul className='space-y-4 will-fade'>

                    {goodLists.map((f, index) => (
                        <li key={index} className='flex items-center gap-2'>
                            <img src="/images/check.png" alt="check" />
                            <p>{f}</p>
                        </li>
                    ))}

                </ul>      

                <div className="cocktail-img">
                    <img src="/images/under-img.jpg" alt="cocktail" className='abs-center masked-img size-full object-contain'/>  {/* //masked-img  class in css*/}
                </div>   


                <ul className='space-y-4 will-fade'>

                    {featureLists.map((f, index) => (
                        <li key={index} className='flex items-center justify-start gap-2'>
                            <img src="/images/check.png" alt="check" />
                            <p className='md:w-fit w-16'>{f}</p>
                        </li>
                    ))}

                </ul>   


            </div>

            <div className="masked-container">

                <h2 className='will-fade'>Sip-Worthy Perfection</h2>

                <div id='masked-content' className="">

                    <h3 className=''>Made with Craft, Poured with Passion</h3>
                    <p className="">This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>

                </div>

            </div>


        </div>

    </div>

  )
}

export default Art