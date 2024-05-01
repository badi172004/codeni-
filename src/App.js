import './App.css';
import Footer from './src/components/Footer.jsx';
import Hero from './src/components/Header.jsx';
import Join from './src/components/Join.jsx';
import Plans from './src/components/Plans.jsx';
import Programs from './src/components/Programs.jsx';
import Reasons from './src/components/Reasons.js';
import Testimonials from '../src/components/Testimonials.jsx';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
