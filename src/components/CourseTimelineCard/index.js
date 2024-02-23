import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {eachTimeline} = props
  const {courseTitle, description, duration, tagsList} = eachTimeline

  const renderTagsList = eachTag => {
    const {name, id} = eachTag
    return (
      <li className="tag-item" key={id}>
        <p className="tag-name">{name}</p>
      </li>
    )
  }

  return (
    <div className="timeline-card">
      <div className="title-duration-container">
        <h1 className="title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tags-list">
        {tagsList.map(eachTag => renderTagsList(eachTag))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
