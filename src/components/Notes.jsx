import { useState } from "react";
import noteEntries from "../data/noteEntries";

function Notes() {
  const [selectedTitle, setSelectedTitle] = useState(noteEntries[0].title);
  const selectedPost = noteEntries.find(
    (entry) => entry.title === selectedTitle
  );
  const selectRandomPost = () => {
    const rando = Math.floor(Math.random() * noteEntries.length);
    const randomPost = noteEntries[rando].title;
    // prevent from selecting the same post
    if (randomPost === selectedTitle && noteEntries.length > 1) {
      selectRandomPost();
    } else {
      setSelectedTitle(randomPost);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Dev Notes
        </h2>

        {/* Select Post by title */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <label className="block mb-2 text-gray-900 dark:text-white font-medium">
              Choose a post:
            </label>
            <select
              value={selectedTitle}
              onChange={(e) => setSelectedTitle(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[200px]"
            >
              
              {noteEntries.map((entry) => (
                <option key={entry.title} value={entry.title}>
                  {entry.title}
                </option>
              ))}
            </select>
          </div>

          {/* Or select random Button */}
          <button
            onClick={selectRandomPost}
            className="px-3 py-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md transition-colors duration-200"
          >
            Random Note
          </button>
        </div>

        {selectedPost && (
          <div className="mt-4">
            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <header className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {selectedPost.title}
                </h3>
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {selectedPost.date}
                </time>
              </header>
              <div className="prose dark:prose-invert prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800">
                <div
                  className="text-gray-700 dark:text-gray-300 leading-relaxed [&_a]:text-blue-600 [&_a]:underline [&_a:hover]:text-blue-800 [&_code]:bg-gray-100 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono dark:[&_code]:bg-gray-700"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />
              </div>
            </article>
          </div>
        )}
      </div>
    </div>
  );
}

export default Notes;
