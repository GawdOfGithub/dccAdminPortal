import useMainContext from "../Helpers/useMainContext";

const DeleteModal = ({ handleConfirmation }) => {
  const { setShowModal } = useMainContext();

  const handleConfirmationAction = async (confirmation) => {
    await handleConfirmation(confirmation); 
    setShowModal(false);
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Are you sure you want to delete this event?</h2>
        <div className="flex justify-center items-center">
          <button
            onClick={() => handleConfirmationAction(true)}
            className="mr-2 px-4 py-2 rounded text-white bg-red-500 hover:bg-red-600"
          >
            Yes
          </button>
          <button
            onClick={() => handleConfirmationAction(false)}
            className="px-4 py-2 rounded text-red-500 border border-red-500 hover:bg-red-100"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};    

export default DeleteModal;
