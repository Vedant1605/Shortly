import { useRef, useEffect } from 'react'
import { Boost, Header } from './components'
import { Footer, Hero, Shortener, Statistics } from './containers'
import GlobalStyle from './styles/globalStyle'
import useWindowSize from './hooks/useWindowSize'
import { Background } from './containers/Footer/FooterStyles'

const App = () => {
  //Hook to grab window size
  const size = useWindowSize()

  // Ref for parent div and scrolling div
  const app = useRef()
  const scrollContainer = useRef()

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  }

  // Run scroll render once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling())
  }, [])

  //set the height of the body.
  useEffect(() => {
    setBodyHeight()
  }, [size.height])

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`
  }

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100

    // Difference between
    const difference = data.current - data.rounded
    const acceleration = difference / size.width
    const velocity = +acceleration

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translateY(-${data.rounded}px) `

    //loop vai raf
    requestAnimationFrame(() => skewScrolling())
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <div ref={app} className='App'>
        <div ref={scrollContainer} className='scroll'>
          <main>
            <Hero />
            <Shortener />
            <Statistics />
            <Boost />
          </main>
          <Footer />
        </div>
      </div>
      <Background />
    </>
  )
}

export default App
