// Your imports

import useAuth from '../Helpers/useAuthContext';
import { useNavigate } from 'react-router-dom';
export default function EventPage() {
    const [event, setEvent] = useState({
      // Your event object properties
    });
  
    const [alert, setAlert] = useState(null);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setEvent({ ...event, [name]: value });
    };
  
    const handleAddingEvent = async (e) => {
      if (event.eventHeading === '') {
        setAlert({
          type: 'error',
          message: 'You cannot add an event without a heading',
        });
        return;
      }
      // Add other validations and event handling
    };
  
    const handleAlertClose = () => {
      setAlert(null);
    };
  
    const handleFieldFocus = (fieldName) => {
      if (event[fieldName] === '') {
        setAlert({
          type: 'error',
          message: `The ${fieldName} field is empty.`,
        });
      } else {
        setAlert(null);
      }
    };
  
    return (
      <div>
        {alert && <Alert type={alert.type} message={alert.message} onClose={handleAlertClose} />}
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
              onFocus={() => handleFieldFocus('eventHeading')}
            />
          </div>
          {/* Other input fields */}
          <div className="flex items-center justify-center">
            {/* Your button */}
          </div>
        </form>
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            {/* Other elements */}
          </p>
        </div>
      </div>
    );
  }
  