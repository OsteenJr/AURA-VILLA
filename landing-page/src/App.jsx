import { Helmet } from 'react-helmet';
import 'remixicon/fonts/remixicon.css';
import Header from './components/Header';
import Hero from './components/Hero';
function App() {
  
  return (
    <>
      <Helmet>
        <title>AURA Villas</title>
        <meta name="description" content="Discover the luxury of AURA Villas, your perfect getaway destination." />
        <meta name="keywords" content="vacation, travel, trip, location" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Header />
      <Hero />
    </>
  )
}

export default App
