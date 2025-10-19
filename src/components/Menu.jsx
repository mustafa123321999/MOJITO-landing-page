'use client';
import React, { useState, useRef, useEffect } from 'react'
import { sliderLists } from '../../constants/Index'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Menu = () => {



    const [ cIndex, setCIndex ] = useState(0)

    const contentRef = useRef();


    useEffect(() => {

        const slideDur = (d) => {

        gsap.set('.cocktail img', { clearProps: "all" });

            const startX = d === "right" ? -110 : 110;
            const btntl = gsap.timeline({});

            btntl.fromTo('.cocktail img', 
                {
                    opacity: 0,
                    xPercent:  startX,
                    scale: 0.1,
                },
                {   
                    opacity: 1,
                    xPercent: 0,
                    scale: 1,

                    duration: 1,
                    ease: 'power1.inOut'

                }
            )
        }

        document.querySelector(".left-btn").addEventListener("click", () => slideDur("left"));
        document.querySelector(".right-btn").addEventListener("click", () => slideDur("right"));
        document.querySelectorAll(".n-btn").forEach(btn => {
            btn.addEventListener("click", () => slideDur("right"));
        })


    }, [])


    useGSAP(() => {


        gsap.fromTo('#title', 

            {
                opacity: 0,
                y: 100,
                x: -50,
                scale: 0.8,
            },
            {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,

                duration: 1,
                ease: 'power1.inOut'

            }

        )

        gsap.fromTo('.details h2 ', 

            {

                yPercent: 100,
                opacity: 0,
                scale: 0.8,

            }, {

                yPercent: 0,
                opacity: 1,
                scale: 1,

                duration: 1,
                ease: 'power1.inOut',
                delay: 0.3,

            } 

        )
  
        gsap.fromTo('p ', 

            {

                yPercent: 100,
                opacity: 0,
                scale: 0.8,

            }, {

                yPercent: 0,
                opacity: 1,
                scale: 1,

                duration: 1,
                ease: 'power1.inOut',
                delay: 0.3,

            } 

        )

        gsap.fromTo('#m-left-leaf ', 

            {

                opacity: 0,
                xPercent: -50,
                YPercent: 50,
                
            }, 
            {

                opacity: 1,
                xPercent: 0,
                YPercent: 0,

                ease: 'power1.inOut',
                duration: 1,

            }

        )

        gsap.fromTo('#m-right-leaf ', 

            {

                opacity: 0,
                xPercent: 50,
                YPercent: -50,
                
            }, 
            {

                opacity: 1,
                xPercent: 0,
                YPercent: 0,

                ease: 'power1.inOut',
                duration: 1,

            }

        )
  




    }, [cIndex])

    const totalCocktails = sliderLists.length;;

    const goToSlide = (index) => {

        const newIndex = ( index + totalCocktails) % totalCocktails;

        setCIndex(newIndex)

    }

    const getCocktailAt = (indexOffset) => {

        return sliderLists[(cIndex + indexOffset + totalCocktails) % totalCocktails]; 

    }

    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);



  return (

    <section id='menu' className='' aria-labelledby='menu-heading'>

        <img src="/images/slider-left-leaf.png" alt="left-leaf" id='m-left-leaf'/>
        <img src="/images/slider-right-leaf.png" alt="right-leaf" id='m-right-leaf'/>

        <h2 id='menu-heading' className='sr-only'>Cocktail Menu</h2>

        <nav className='cocktail-tabs' aria-label='Cocktail Navigation'>

            {sliderLists.map((c, index) => {

                const isActive = index === cIndex;

                return (

                    <button key={c.id} className={`n-btn ${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}`} onClick={() => goToSlide(index)}>
                        {c.name}
                    </button>

                )

            })}

        </nav>

        <div className="content">

            <div className="arrows">

                <button className='text-left left-btn' onClick={() => goToSlide( cIndex - 1)}>
                    <span>{prevCocktail.name}</span>
                    <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true"/>
                </button>

                <button className='text-left right-btn' onClick={() => goToSlide( cIndex + 1)}>
                    <span>{nextCocktail.name}</span>
                    <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true"/>
                </button>

            </div>

            <div className="cocktail">
                <img src={currentCocktail.image} className='object-contain' />
            </div>

            <div className="recipe">

                <div className="info" ref={contentRef}>
                    <p>Recipe for:</p>
                    <p id="title">{currentCocktail.name}</p>
                </div>

                <div className="details">
                    <h2>{currentCocktail.title}</h2>
                    <p>{currentCocktail.description}</p>
                </div>

            </div>



        </div>


    </section>



  )
}

export default Menu



