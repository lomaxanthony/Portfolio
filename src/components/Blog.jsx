import blogEntries from "../data/blogEntries"
import BlogItem from './BlogItem'

// Blog Props = date, title, content

function Blog () {
    return (
        <div className="blogContainer">
            <div className="blogEntry">
                {blogEntries.map(item => (
                    <BlogItem
                        date={item.date}
                        title={item.title}
                        content={item.content}
                    />
                ))}
            </div>
        </div>
    )
}

export default Blog;