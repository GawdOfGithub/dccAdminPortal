import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Helpers/useAuthContext';
import { useNavigate } from 'react-router-dom';

export default function EventPage() {

  
  const navigate = useNavigate()
  const {handleEventAdding,user} = useAuth()
  const [event, setEvent] = useState({
    eventHeading: '',
    eventDesc: '',
    eventDate: '',
    eventTime: '',
    eventLocation: '',
    eventImgUrl: '',
    eventLink: '',
  });

  // eventHeading,eventDesc,eventDate,eventTime,eventLocation,eventImgUrl,eventLink
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  
  };

  const handleAddingEvent =  async(e)=>
  {
    if (event.eventHeading === '') {
     alert("You cannot add an event without a heading")
      return;
    }
   try{
   e.preventDefault()
   await handleEventAdding({event})
   navigate('/eventDisplay')
   
   }   
   catch(error)
   {
    console.log(error)
    console.log("Registration failed");
   }
  }

  return (
    <div className="w-1/2 min-h-screen mx-auto mt-40 min-w-fit">
      <form className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 min-h-">
        <div className="mb-4">
          <label className="flex justify-center mb-4 text-black text-2xl font-extrabold">
            Create Event 🎉
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
            id="eventHeading"
            type="text"
            name="eventHeading"
            placeholder="Event Heading"
            value={event.eventHeading}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
            id="eventDesc"
            name="eventDesc"
            placeholder="Event Description"
            value={event.eventDesc}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
              id="eventDate"
              type="date"
              name="eventDate"
              placeholder="Event Date"
              value={event.eventDate}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
              id="eventTime"
              type="time"
              name="eventTime"
              placeholder="Event Time"
              value={event.eventTime}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
            id="eventLocation"
            type="text"
            name="eventLocation"
            placeholder="Event Location"
            value={event.eventLocation}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
            id="eventImageURL"
            type="text"
            name="eventImgUrl"
            placeholder="Event Image URL"
            value={event.eventImgUrl}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200"
            id="eventLink"
            type="text"
            name="eventLink"
            placeholder="Event Link"
            value={event.eventLink}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-center">
        <> { user ?
          (<button onClick={handleAddingEvent}
            className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            ADD EVENT
          </button>):

          (<Link to="/signIn"
            className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            SignIn First
          </Link>)
         } </>
        </div>
      </form>
      <div className="text-center">
        <p className="text-gray-600 text-sm">
          
          {/* <Link to="/" className="text-blue-500 hover:text-red-500 z-40">
            Home
          </Link> */}
        </p>
      </div>
    </div>
  );
}
