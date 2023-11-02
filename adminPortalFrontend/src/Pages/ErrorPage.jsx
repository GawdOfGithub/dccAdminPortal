import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Helpers/useAuthContext';
import { useNavigate } from 'react-router-dom';
import AlertModal from '../Components/AlertModal';
import EventModal from '../Components/EventModal';

export default function EventPage() {
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [modalText, setModalText] = useState('');
  
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
    imageFile: null,
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  
  };
  const handleImageUpload = async (e) => {
    try
    {
    const file = e.target.files[0];
    const URL = await URL.createObjectURL(file)
    setEvent({
      ...event,
      imageFile: file,
      eventImgUrl: URL.createObjectURL(file), 
    });
  }
  catch(error)
  {
   console.log(error); 
  }
  };


  const handleAddingEvent =  async(e)=>
  {
    
      e.preventDefault()
      if (event.eventHeading === '') {
        setModalText('Heading');
        setShowAlertModal(true);
        return;
    
    }
    if (event.eventDesc === '') {
      setModalText('Description');
        setShowAlertModal(true);
       return;
     
     }
    
    
    
    if (event.eventDate === '') {
      setModalText('Date');
      setShowAlertModal(true);
       return;
     
     }
     if (event.eventTime === '') {
      setModalText('Time');
      setShowAlertModal(true);
       return;
     
     }
     if (event.eventLocation === '') {
      setModalText('Location');
        setShowAlertModal(true);
       return;
     
     }
     if (event.ImageURL === '') {
      setModalText('ImgUrl');
        setShowAlertModal(true);
       return;
     
     }
     if (event.eventLink === '') {
      setModalText('EventLink');
        setShowAlertModal(true);
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
if(showAlertModal)
{
  return(
    <AlertModal
    showAlertModal={showAlertModal}
    setShowAlertModal={setShowAlertModal}
    text={modalText}
  />
  )
}
  return (
    <>
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
            placeholder="heading"
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
            type="file"
            accept="image/*"
            name="eventImgUrl"
            placeholder="Event Image URL"
            value={event.eventImgUrl}
            onChange={handleImageUpload}
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
    </>
  );
}