import { useEffect, useRef } from 'react'
import KeenSlider from 'keen-slider'
import 'keen-slider/keen-slider.min.css'
import ProductCard from './ProductCard'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function ProductCarousel({ products }) {
  const sliderRef = useRef(null)
  const sliderInstanceRef = useRef(null)

  useEffect(() => {
    if (sliderRef.current) {
      sliderInstanceRef.current = new KeenSlider(sliderRef.current, {
        slides: { 
          perView: 4, 
          spacing: 24 
        },
        breakpoints: {
          '(max-width: 768px)': { 
            slides: { perView: 1, spacing: 8 } },
        },
      })
    }

    return () => {
      sliderInstanceRef.current?.destroy()
    }
  }, [])

  return (
    <div style={{ 
      position: 'relative', 
      padding: '2rem 0',
      maxWidth: '1280px',
      margin: '0 auto',
      width: '100%', 
      }}
    >
      <button
        onClick={() => sliderInstanceRef.current?.prev()}
  style={{
    position: 'absolute',
    left: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    fontSize: '2rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  }}
>
  <FiChevronLeft size={32} />
      </button>

      <div ref={sliderRef} className="keen-slider">
        {products.map((p, i) => (
          <div key={i} className="keen-slider__slide"
            style={{
              minWidth: '280px',
              maxWidth: '300px',
            }}
          >
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      <button
        onClick={() => sliderInstanceRef.current?.next()}
  style={{
    position: 'absolute',
    right: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    fontSize: '2rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  }}
>
  <FiChevronRight size={32} />
      </button>
    </div>
  )
}