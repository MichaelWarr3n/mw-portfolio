import './Experience.scss'
import JustIt from '../assets/justit.jpg';
import RR from '../assets/readingroom.jpg';

function Experience() {
  return (
    <div className="Experience">
      <div className="Experience__container">
        <h2>Experience</h2>

        <div className="Experience__jobs">

          <div className="Experience__job">
            <div className="Experience__job-header">
              <div>
                <h3>Web Developer Bootcamp</h3>
                <p>Just IT - Bristol</p>
                <p>
                  <time datetime="2020">2020</time>
                  {' '}-{' '}
                  <time datetime="2021">2021</time>
                </p>
              </div>
            <img src={JustIt} alt="Just IT logo" />
            </div>
            <p>
              Completed a self-funded bootcamp alongside
              full-time employment, building a solid foundation
              in web development fundamentals.
            </p>
          </div>

          <div className="Experience__job">
            <div className="Experience__job-header">
              <div>
                <h3>Front-end Developer</h3>
                <p>Reading Room - Bristol</p>
                <p>
                  <time datetime="2021">2021</time>
                  {' '}-{' '}
                  <time datetime="2025">2025</time>
                </p>
              </div>
              <img src={RR} alt="Reading Room logo" />
            </div>
            <p>
              Worked across large-scale Drupal projects,
              reviewing code and applying BEM methodology
              to improve maintainability. Collaborated with
              design teams to build accessible, responsive
              components, in alignment with clients
              and non-technical colleagues.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
