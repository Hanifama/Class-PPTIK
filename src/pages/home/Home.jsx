import Faqs from '../../components/Faqs/Faqs'
import Header from '../../components/header/Header'
import Category from '../../components/kategoris/Category'
import Classpopu from '../../components/popular/Classpopu'
import Testimonial from '../../components/testimonials/Testimonial'
import Footer from '../../components/footer/Footer'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Header/>
      <Category/>
      <Classpopu/>
      <Faqs/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home