import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {eachTimeline} = props
  const {projectTitle, description, imageUrl} = eachTimeline
  const {duration, projectUrl} = eachTimeline

  return (
    <div className="timeline-card">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="title-duration-container">
        <h1 className="title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="calendar-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="project-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
