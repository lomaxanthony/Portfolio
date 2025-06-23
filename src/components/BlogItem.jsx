function BlogItem ({date, title, content}) {
    return (
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <header className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {title}
                </h3>
                <time className="text-sm text-gray-500 dark:text-gray-400">
                    {date}
                </time>
            </header>
            <div className="prose dark:prose-invert">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {content}
                </p>
            </div>
        </article>
    )
}

export default BlogItem;