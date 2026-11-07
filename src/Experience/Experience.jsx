import './Experience.scss';
import JustIt from '../assets/justit.jpg';
import RR from '../assets/readingroom.jpg';

const jobs = [
  {
    title: 'Web Developer Bootcamp',
    company: 'Just IT',
    location: 'Bristol',
    startDate: '2020',
    endDate: '2021',
    logo: JustIt,
    description:
      'Completed a self-funded bootcamp alongside full-time employment, building a solid foundation in web development fundamentals.',
  },
  {
    title: 'Front-end Developer',
    company: 'Reading Room',
    location: 'Bristol',
    startDate: '2021',
    endDate: '2025',
    logo: RR,
    description:
      'Worked across large-scale Drupal projects, reviewing code and applying BEM methodology to improve maintainability. Collaborated with design teams to build accessible, responsive components, in alignment with clients and non-technical colleagues.',
  },
];

function Experience() {
  return (
    <div className="Experience">
      <div className="Experience__container">
        <h2>Experience</h2>

        <div className="Experience__jobs">
          {jobs.map((job) => (
            <article className="Experience__job" key={job.title}>
              <div className="Experience__job-header">
                <div>
                  <h3>{job.title}</h3>
                  <p>{job.company} - {job.location}</p>
                  <p>
                    <time dateTime={job.startDate}>{job.startDate}</time>
                    {' - '}
                    <time dateTime={job.endDate}>{job.endDate}</time>
                  </p>
                </div>

                <img src={job.logo} alt="" />
              </div>

              <p>{job.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
