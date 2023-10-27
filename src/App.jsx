
import './App.css'
import Hero from '../src/pages/Hero/Hero'
import About from '../src/pages/About/About'
import Services from '../src/pages/Services/Services'
import Courses from '../src/pages/Courses/Courses'
import Testimonials from '../src/pages/Testimonials/Testimonials'
import Articles from '../src/pages/Articles/Articles'
import Subscription from "../src/pages/Subscription/Subscription"
import Contact from "../src/pages/Contact/Contact"








const App = () => {
  return (
    <>
      <Hero />
      <About />
      <Services/>
      <Courses/>
      <Testimonials/>
      <Articles/>
      <Subscription/>
      <Contact/>
    </>
  )
}

export default App

