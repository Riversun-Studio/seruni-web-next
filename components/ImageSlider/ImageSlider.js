import React, { useState } from 'react'
import Image from 'next/image'
import { SliderImages } from '../../data/sliderImages'
import styles from './ImageSlider.module.scss'
import { MdChevronRight } from 'react-icons/md'
import { MdChevronLeft } from 'react-icons/md'

const ImageSlider = () => {
  const [current, setCurrent] = useState(0)
  const length = SliderImages.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
    console.log(current)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
    console.log(current)
  }

  // const completeClasses = `${styles.slide} ${styles.active}`

  return (
    <section className={styles.sliderContainer}>
      {
        SliderImages.map((slide, index) => {
          return (
            <div className={current === index ? `slide active` : 'slide'}
              key={index}
            >
              { index === current && (<Image src={slide.image} alt={slide.title} width={1600} height={700} intrinsic="true"/>)}
            </div>
          )
        })
      }
      <div className={styles.sliderControl}>
        <button title="Previous Slide" onClick={prevSlide}>
          <MdChevronLeft  />
        </button>
        <button title="Next Slide" onClick={nextSlide} >
          <MdChevronRight />
        </button>
      </div>
    </section>
  )
}

export default ImageSlider
