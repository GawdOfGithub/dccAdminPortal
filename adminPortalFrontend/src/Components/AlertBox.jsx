import React from 'react';

const Alert = ({ type, message, onClose }) => {
  let alertBgColor = 'bg-blue-100';
  let alertBorderColor = 'border-blue-400';
  let alertTextColor = 'text-blue-700';

  if (type === 'error') {
    alertBgColor = 'bg-red-100';
    alertBorderColor = 'border-red-400';
    alertTextColor = 'text-red-700';
  } else if (type === 'success') {
    alertBgColor = 'bg-green-100';
    alertBorderColor = 'border-green-400';
    alertTextColor = 'text-green-700';
  }

  return (
    <div className={`border ${alertBorderColor} rounded px-4 py-3 mb-4 ${alertBgColor} text-sm ${alertTextColor}`} role="alert">
      <strong className="font-bold">Alert:</strong>
      <span className="block sm:inline"> {message}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={onClose}>
        <svg className="fill-current h-6 w-6" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <title>Close</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.348 14.849a1 1 0 01-1.414 0L10 11.414l-2.93 2.435a1 1 0 01-1.414-1.435L8.586 10 6.07 7.515a1 1 0 111.415-1.414L10 8.586l2.515-2.485a1 1 0 011.414 1.414L11.414 10l2.485 2.515a1 1 0 010 1.414z"
          />
        </svg>
      </span>
    </div>
  );
};

export default Alert;
