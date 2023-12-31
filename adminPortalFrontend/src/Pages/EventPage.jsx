import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Helpers/useAuthContext';
import useMainContext from '../Helpers/useMainContext';
import { useNavigate } from 'react-router-dom';
import AlertModal from '../Components/AlertModal';
import axios from 'axios';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const EventPage = () => {

const CLOUD_NAME = import.meta.env.VITE_APP_CLOUD_NAME
const CLOUD_PRESET= import.meta.env.VITE_APP_CLOUD_PRESET
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const navigate = useNavigate();
  const { handleEventAdding, user,navigateToDisplay,setnavigateToDisplay} = useAuth();
  const {isDisabled,setIsDisabled} = useMainContext()

  const [event, setEvent] = useState({
    eventHeading: '',
    eventDesc: '',
    eventDate: '',
    eventTime: '',
    eventLocation: '',
    eventImgUrl: '', 
    eventLink: '',
  });
  
  useAuth(()=>
  {
    if(navigateToDisplay)
    {
      navigate("/eventDisplay")
      setnavigateToDisplay(false)
    }

  },[navigateToDisplay,navigate])
  
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleImageUpload = async (image) => {
    try {
      if (!image) {
        console.error('No file selected');
        return null;
      }
    
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset',CLOUD_PRESET);
      formData.append('cloud_name',CLOUD_NAME);

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData
      );

      if (response.status === 200) {
        console.log(response.data.secure_url);
        console.log(typeof(response.data.secure_url));
        return response.data.secure_url; 
      
      } else {
        console.error('Error uploading image to Cloudinary. Status:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
      return null;
    }
  };
 
  const handleAddingEvent = async (e) => {
    e.preventDefault();

    for (const key in event) {
      if (key !== 'eventImgUrl' && event[key] === '') {
        setModalText(key);
        setShowAlertModal(true);
        return;
      }
    }

    try {
      const uploadedImageUrl = await handleImageUpload(event.eventImgUrl);
     console.log(uploadedImageUrl);
      if (uploadedImageUrl) {
        setIsDisabled(true)
        console.log(uploadedImageUrl);
        setEvent(prevEvent => {
          const updatedEvent = { ...prevEvent, eventImgUrl: uploadedImageUrl };
          console.log(updatedEvent); 
          return updatedEvent; 
        });
         
        
          
        
     
     
      } else {
        console.error('Image upload failed');
        setModalText("Please click on the add event button once again ");
        setShowAlertModal(true);
      }
    } catch (error) {
      setModalText("Please click on the add event button once again ");
        setShowAlertModal(true);
      console.error('Registration failed:', error);
    }
  };
  useEffect(() => {
    const addEvent = async () => {
      try {
        await handleEventAdding({ event });
        setIsDisabled(false);
        navigate("/eventDisplay")
      } catch (error) {
        console.error('Registration failed:', error);
        setModalText('Please click on the add event button once again ');
        setShowAlertModal(true);
      }
    };

    if (isDisabled) {
      addEvent();
    }
  }, [isDisabled, event, handleEventAdding,setIsDisabled]);
  
  return (
    <>
      {showAlertModal && (
        <AlertModal
          showAlertModal={showAlertModal}
          setShowAlertModal={setShowAlertModal}
          text={modalText}
        />
      )}
      <div className="w-1/2 min-h-screen mx-auto mt-40 min-w-fit">
        <form className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
              name="eventImgUrl"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                setEvent({ ...event, eventImgUrl: file });}}
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
            {user ? (
              <>
              <button
                onClick={handleAddingEvent}
                className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isDisabled}
              
              >
              { isDisabled?"Adding....":"ADD EVENT"}
                </button>
               
                {isDisabled &&<div className="absolute inset-0 flex items-center justify-center">
  <div className="animate-spin rounded-full border-t-4 border-r-4 border-b-4 border-blue-800 h-20 w-20"></div>
</div>
}
          
             </>
              
            ) : (
              <Link
                to="/signIn"
                className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                SignIn First
              </Link>
            )}
          </div>
        </form>
        <div className="text-center">
          <p className="text-gray-600 text-sm"></p>
        </div>
      </div>
    </>
  );
};

export default EventPage;
