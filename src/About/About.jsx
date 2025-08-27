import './About.scss'
import html from '../assets/html5.png';
import css from '../assets/css-3.png';
import js from '../assets/js.png';
import reactIcon from '../assets/react.svg';
import vueIcon from '../assets/vue.png';
import drupalIcon from '../assets/drupal.png';

function About() {
  return (
    <div class="About">
      <div class="About__left-container">
        <h2>About Me</h2>
        <p>
          I'm Michael Warren, a passionate front-end developer with a knack for creating engaging and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive and interactive websites that captivate users.
        </p>
        <p>
          My expertise extends to popular frameworks like React.js and Vue.js, allowing me to craft dynamic single-page applications that are both performant and maintainable. I also have experience with CMS platforms like Drupal, enabling me to deliver robust content management solutions.
        </p>
      </div>
      <div class="About__right-container">
        <h2>Skills</h2>
        <div class="About__skills-grid">
          <div class="About__skill-item">
            <img src={html} alt="HTML5" />
            <span>HTML5</span>
          </div>
          <div class="About__skill-item">
            <img src={css} alt="CSS3" />
            <span>CSS3</span>
          </div>
          <div class="About__skill-item">
            <img src={js} alt="JavaScript" />
            <span>JavaScript</span>
          </div>
          <div class="About__skill-item">
            <img src={reactIcon} alt="React.js" />
            <span>React.js</span>
          </div>
          <div class="About__skill-item">
            <img src={vueIcon} alt="Vue.js" />
            <span>Vue.js</span>
          </div>
          <div class="About__skill-item">
            <img src={drupalIcon} alt="Drupal" />
            <span>Drupal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
