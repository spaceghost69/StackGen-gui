// import React...
import React from "react"
import ReactDOM from "react-dom"

// ... and fullcalendar-reactwrapper.
import FullCalendar from "fullcalendar-reactwrapper"
import "fullcalendar/dist/fullcalendar.min.css"
import "fullcalendar-scheduler/dist/scheduler.min.css"

class Cal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [
        {
          title: "All Day Event",
          start: "2019-02-01"
        },
        {
          title: "Long Event",
          start: "2019-02-07",
          end: "2019-02-10"
        },
        {
          id: 999,
          title: "Repeating Event",
          start: "2019-02-09T16:00:00"
        },
        {
          id: 999,
          title: "Repeating Event",
          start: "2019-02-16T16:00:00"
        },
        {
          title: "Conference",
          start: "2019-02-11",
          end: "2019-02-13"
        },
        {
          title: "Meeting",
          start: "2019-02-12T10:30:00",
          end: "2019-02-12T12:30:00"
        },
        {
          title: "Birthday Party",
          start: "2019-02-13T07:00:00"
        },
        {
          title: "Click for Google",
          url: "http://google.com/",
          start: "2019-02-28"
        }
      ]
    }
  }

  render() {
    return (
      <div id="example-component">
        <FullCalendar
          themeSystem="bootstrap4"
          id="your-custom-ID"
          header={{
            left: "prev,next today myCustomButton",
            center: "title",
            right: "month,basicWeek,basicDay,timelineFourDays"
          }}
          views={{
            timelineFourDays: {
              type: "timeline",
              duration: { days: 4 }
            }
          }}
          defaultDate={new Date()}
          navLinks={true} // can click day/week names to navigate views
          editable={true}
          eventLimit={true} // allow "more" link when too many events
          events={this.state.events}
        />
      </div>
    )
  }
}

export default Cal
