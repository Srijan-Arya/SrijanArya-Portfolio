import './app.scss'
import './intro.scss'
import Navbar from "./components/navbar/Navbar"
import Intro from "./Intro"
import About from './About'
import Project from './Project'
import Contact from './Contact'
// import ProfileEmbed from './ProfileEmbed';
const App = () => {
  return <div>
    <section className='landing_section'>
      <Navbar />
      <Intro />
    </section>
    <section id="about" className='about_section'><About/></section>
    <section id="project"><Project /></section>
    <section id="connect"><Contact /></section>
  </div>;
};

export default App;
