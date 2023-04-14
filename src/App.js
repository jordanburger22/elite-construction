import './App.css';
import Header from './components/Header';
import { Container } from 'reactstrap';
import Services from './components/Services';
import { useState } from 'react';
import FormModal from './components/FormModal';
import Logo from './components/Logo';
import Carousel from './components/Carousel';
import Footer from './components/Footer';


function App() {

  const [modal, setModal] = useState(false)

  function toggle(){
    setModal(prev => !prev)
  }

  return (
    <div className="App">
      <Header toggle={toggle}/>

      <Container className='container'>

        <Logo />

        <Services />

        <FormModal toggle={toggle} modal={modal}/>

        <Carousel />

      </Container>
      
      <Footer toggle={toggle}/>
    </div>
  );
}

export default App;
