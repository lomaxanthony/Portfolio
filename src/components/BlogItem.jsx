// Blog Props = date, title, content

function BlogItem ({date, title, content}) {
    return (
        <div>
            <div>
                <h3>{title}</h3>
                <h4>{date}</h4>
            </div>
            <div>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default BlogItem;