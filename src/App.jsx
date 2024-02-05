import Nav from './assets/component/nav';
import Footer from './assets/component/footer';
import Hero from './assets/component/Hero';
import About from './assets/component/About';
import WebgiViewer from './assets/component/WebgiViewer';
import Partners from './assets/component/Partners';
import React, { useState, useEffect } from 'react';
import Projects from './assets/component/Projects';
import Services from './assets/component/Services';
import Faq from './assets/component/Faq';
import Contact from './assets/component/Contact';
import Feedback from './assets/component/Feedback';

function App() {
  const [showImage, setShowImage] = useState(false);
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);



  return (
    <main className='mx-auto relative p-[2px] xs:px-2 sm:px-4 md:px-6 max-w-7xl'>
      <Nav />
      <Hero />
      {/* {showImage && <WebgiViewer />} */}
      <Partners />
      <Projects/>
      <Services/>
      <Feedback/>
      <Faq/>
      <Contact/>
      <Footer />
      <div className="cursor"style={{ left: cursorX + 'px', top: cursorY + 'px' }}>
      </div>
    </main>
  );
}

export default App;
