import { useState } from "react";
import noteEntries from "../data/noteEntries";
import NoteItem from './NoteItem';

function Notes() {
    const [selectedDate, setSelectedDate] = useState(noteEntries[0].date);
    const selectedPost = noteEntries.find((entry) => entry.date === selectedDate);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    Dev Notes
                </h2>
                <label className="block mb-2 text-gray-900 dark:text-white font-medium">Choose a date:</label>
                <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[200px]"
                >
                    {noteEntries.map((entry) => (
                        <option key={entry.date} value={entry.date}>
                            {entry.date}
                        </option>
                    ))}
                </select>

                {selectedPost && (
                    <div className="mt-4">
                        <NoteItem
                            date={selectedPost.date}
                            title={selectedPost.title}
                            content={selectedPost.content}
                            
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Notes;
