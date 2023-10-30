import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Helpers/useAuthContext';
import { useNavigate } from 'react-router-dom';
import AlertModal from '../Components/AlertModal';
import EventModal from '../Components/EventModal';
import useMainContext from '../Helpers/useMainContext';

const EventPage = () => {
  const { setShowModal } = useMainContext();
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const navigate = useNavigate();
  const { handleEventAdding, user } = useAuth();
  const [event, setEvent] = useState({
    eventHeading: '',
    eventDesc: '',
    eventDate: '',
    eventTime: '',
    eventLocation: '',
    eventImgUrl: '',
    eventLink: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleAddingEvent = async (e) => {
    e.preventDefault();
    // Validation checks
    const requiredFields = ['eventHeading', 'eventDesc', 'eventDate', 'eventTime', 'eventLocation', 'eventImgUrl', 'eventLink'];
    const emptyFields = requiredFields.filter((field) => !event[field].trim());

    if (emptyFields.length > 0) {
      setModalText(emptyFields[0]);
      setShowAlertModal(true);
    } else {
      setShowConfirmationModal(true);
    }
  };

  const confirmEventSubmission = async (confirmation) => {
    if (confirmation) {
      try {
        await handleEventAdding({ event });
        navigate('/eventDisplay');
      } catch (error) {
        console.error('Event addition failed:', error);
      }
    }
    setShowConfirmationModal(false);
    setShowModal(false);
  };

  return (
    <div className="w-1/2 min-h-screen mx-auto mt-40 min-w-fit">
      {showAlertModal && (
        <AlertModal
          showAlertModal={showAlertModal}
          setShowAlertModal={setShowAlertModal}
          text={modalText}
        />
      )}
      {showConfirmationModal && (
        <EventModal handleConfirmation={confirmEventSubmission} />
      )}
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
   
        <button
          onClick={handleAddingEvent}
          className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {user ? 'ADD EVENT' : <Link to="/signIn">SignIn First</Link>}
        </button>
      </form>
    </div>
  );
};

export default EventPage;
