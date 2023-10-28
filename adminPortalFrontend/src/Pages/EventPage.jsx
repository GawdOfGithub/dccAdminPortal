import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function EventPage() {
  const [event, setEvent] = useState({
    heading: '',
    description: '',
    date: '',
    time: '',
    location: '',
    imageURL: '',
    link: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  return (
    <div className="w-1/2 min-h-screen mx-auto mt-40 min-w-fit">
      <form className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 min-h-">
        <div className="mb-4">
          <label className="flex justify-center mb-4 text-black text-2xl font-extrabold">
            Create Event 🎉
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
            id="heading"
            type="text"
            name="heading"
            placeholder="Event Heading"
            value={event.heading}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
            id="description"
            name="description"
            placeholder="Event Description"
            value={event.description}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
              id="date"
              type="date"
              name="date"
              placeholder="Event Date"
              value={event.date}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
              id="time"
              type="time"
              name="time"
              placeholder="Event Time"
              value={event.time}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
            id="location"
            type="text"
            name="location"
            placeholder="Event Location"
            value={event.location}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
            id="imageURL"
            type="text"
            name="imageURL"
            placeholder="Event Image URL"
            value={event.imageURL}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
            id="link"
            type="text"
            name="link"
            placeholder="Event Link"
            value={event.link}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Event
          </button>
        </div>
      </form>
      <div className="text-center">
        <p className="text-gray-600 text-sm">
          Back to{' '}
          <Link to="/" className="text-blue-500 hover:text-red-500 z-40">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}
