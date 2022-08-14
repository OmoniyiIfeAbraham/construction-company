import Nav from './components/nav';
import Home from './components/home';
import Services from './components/services';
import Projects from './components/projects';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ScrollToTop from './components/scrollToTop';

import BasicSlider from './components/BasicSlider';



function App() {
  return (
    // <BrowserRouter>
      <div className="">
        <BasicSlider />
        {/* <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
        </Routes> */}
      </div>
    // </BrowserRouter>
  );
}

export default App;
