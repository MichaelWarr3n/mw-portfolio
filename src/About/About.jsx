import './About.scss';
import html from '../assets/html5.png';
import css from '../assets/css-3.png';
import js from '../assets/js.png';
import reactIcon from '../assets/react.svg';
import vueIcon from '../assets/vue.png';
import drupalIcon from '../assets/drupal.png';

const skills = [
  { name: 'HTML5', icon: html },
  { name: 'CSS3', icon: css },
  { name: 'JavaScript', icon: js },
  { name: 'React.js', icon: reactIcon },
  { name: 'Vue.js', icon: vueIcon },
  { name: 'Drupal', icon: drupalIcon },
];

function About() {
  return (
    <div className="About">
      <div className="About__description-container">
        <h2>About Me</h2>
        <p>
          Hi! I'm a front-end developer with experience creating engaging and
          user-friendly web experiences. With a strong foundation in HTML,
          CSS, and JavaScript, I specialize in building responsive and
          interactive websites that captivate users and meet WCAG
          accessibility standards.
        </p>
        <p>
          Skilled in HTML, CSS, JavaScript, Twig, and SCSS, with additional
          experience in React.js and Vue.js. Collaborative and adaptable,
          with strong communication skills and a track record of working
          effectively with cross-functional teams.
        </p>
      </div>

      <div className="About__skills-container">
        <h2>Skills</h2>
        <ul className="About__skills-grid">
          {skills.map(({ name, icon }) => (
            <li className="About__skill-item" key={name}>
              <img src={icon} alt="" />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
