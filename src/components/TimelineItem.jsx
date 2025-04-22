//   Timeline Props =  year, title, duration, details

function TimelineItem ({year, title, duration, details}) {
    return (
        <div>
            <div>
                <h4>{year}</h4>
                <h3>{title}</h3>
                <p>{duration}</p>
            </div>
            <div>
                <p>{details}</p>
            </div>
        </div>
    )
}

export default TimelineItem;