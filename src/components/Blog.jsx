import blogEntries from "../data/blogEntries"
import BlogItem from './BlogItem'

function Blog() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    Blog
                </h2>
                <div className="space-y-8">
                    {blogEntries.map((item, index) => (
                        <BlogItem
                            key={index}
                            date={item.date}
                            title={item.title}
                            content={item.content}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog;