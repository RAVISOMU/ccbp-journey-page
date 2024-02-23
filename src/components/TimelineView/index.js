import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = timelineCard => {
    if (timelineCard.categoryId === 'COURSE') {
      return (
        <CourseTimelineCard eachTimeline={timelineCard} key={timelineCard.id} />
      )
    }
    return (
      <ProjectTimelineCard eachTimeline={timelineCard} key={timelineCard.id} />
    )
  }

  return (
    <div className="timeline-view-container">
      <div className="timeline-responsive-container">
        <h1 className="my-journey-heading">
          MY JOURNEY OF <br /> <span>CCBP 4.0</span>
        </h1>
        <div className="chrono-container">
          <Chrono
            mode="VERTICAL_ALTERNATING"
            items={timelineItemsList}
            theme={{
              primary: '#0967d2',
              secondary: 'white',
              cardBgColor: 'white',
              titleColor: '#0967d2',
              titleColorActive: 'red',
            }}
          >
            {timelineItemsList.map(eachTimeline =>
              renderTimelineCard(eachTimeline),
            )}
          </Chrono>
        </div>
      </div>
    </div>
  )
}

export default TimelineView
