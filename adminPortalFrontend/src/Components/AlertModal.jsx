const AlertModal = ({ showAlertModal, setShowAlertModal, text }) => {
    if (!showAlertModal) {
      return null;
    }
  
    return (
      <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">You cannot leave {text} empty</h2>
          <div className="flex justify-center items-center">
            <button
              onClick={() => {
                setShowAlertModal(false);
              }}
              className="mr-2 px-4 py-2 rounded text-white bg-red-500 hover:bg-red-600"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default AlertModal;
  