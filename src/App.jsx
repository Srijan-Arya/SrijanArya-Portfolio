import './app.scss'
import './intro.scss'
import Navbar from "./components/navbar/Navbar"
import Intro from "./Intro"
import About from './About'
// import ProfileEmbed from './ProfileEmbed';
const App = () => {
  return <div>
    <section className='landing_section'>
      <Navbar />
      <Intro />
    </section>
    <section className='about_section'><About/></section>
    <section>Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section>Contact</section>
  </div>;
};

export default App;
