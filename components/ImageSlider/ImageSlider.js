import React, { useState, useRef, useEffect } from 'react'
import { SliderImages } from '../../data/sliderImages'
import styles from './ImageSlider.module.scss'
import { MdChevronRight } from 'react-icons/md'
import { MdChevronLeft } from 'react-icons/md'

const ImageSlider = () => {

  const [current, setCurrent] = useState(0)
  const [slider, setSlider] = useState(0)
  const imageIsLoaded = useRef(false)
  const length = SliderImages.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1) 
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const handleImageLoading = async (e) => {
    imageIsLoaded.current = false
    await e.complete
    imageIsLoaded.current = true
  }

  useEffect(() => {
    if (imageIsLoaded){
      setTimeout(() => {
        nextSlide()
        setSlider(slider + 1)
      }, 5000);
    }
    return () => {
      window.clearTimeout()
    }
  }, [slider])

  return (
    <section className={styles.sliderContainer}>
      {
        SliderImages.map((slide, index) => {
          return (
            <div className={current === index ? `slide active` : 'slide'}
              key={index}
            >
              {index === current && (<img src={slide.image} alt={slide.title} onLoad={handleImageLoading} />)}
            </div>
          )
        })
      }
      <div className={styles.sliderControl}>
        <button title="Previous Slide" onClick={prevSlide}>
          <MdChevronLeft />
        </button>
        <button title="Next Slide" onClick={nextSlide} >
          <MdChevronRight />
        </button>
      </div>
    </section>
  )
}

export default ImageSlider
