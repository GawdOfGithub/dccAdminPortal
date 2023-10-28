import { useState,useEffect } from "react";
export const EventDisplay = () => {
  const [zoomLevel, setZoomLevel] = useState(1); // Initial zoom level

  useEffect(() => {
    const handleResize = () => {
      // Adjust the zoom level based on screen width
      if (window.innerWidth <= 640) {
        setZoomLevel(0.5); // Set the zoom level for smaller screens
      } else {
        setZoomLevel(1); // Set default zoom for larger screens
      }
    };
    window.addEventListener('resize', handleResize);

    // Initial call to set the zoom level
    handleResize();

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const style = {
    transform: `scale(${zoomLevel})`, // Apply scale based on the zoom level
    transformOrigin: 'top left', // Set the origin of the transformation
  };

  const data = [
    {
      heading: "Madhyam 3.0",
      description: "Ignite Your Tech Journey at the orientation event for first-year students, brought to you by the powerhouse clubs DCC and GDSC at NITA! Join us for an exciting ride through boundless opportunities and tech innovation. Get ready to embark on this exhilarating journey and witness the unveiling of DCC & GDSC Orientation 2023, exclusively for 1st years.",
      date: "September 3rd, Sunday",
      time: "2:30 - 5:30 PM",
      location: "Visvesvarya Auditorium",
      imageUrl: "https://res.cloudinary.com/dhzod7y8u/image/upload/v1693606077/final_maadhyam_p2ktr5.jpg"
    },
    {
      heading: "Madhyam 3.0",
      description: "Ignite Your Tech Journey at the orientation event for first-year students, brought to you by the powerhouse clubs DCC and GDSC at NITA! Join us for an exciting ride through boundless opportunities and tech innovation. Get ready to embark on this exhilarating journey and witness the unveiling of DCC & GDSC Orientation 2023, exclusively for 1st years.",
      date: "September 3rd, Sunday",
      time: "2:30 - 5:30 PM",
      location: "Visvesvarya Auditorium",
      imageUrl: "https://res.cloudinary.com/dhzod7y8u/image/upload/v1693606077/final_maadhyam_p2ktr5.jpg"
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 "style={style}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-slate-300 divide-y divide-gray-200 ">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img src={item.imageUrl} alt={item.heading} className="w-10 h-10 rounded-full" />
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{item.heading}</div>
                    {/* <div className="text-sm text-gray-500">{item.description}</div> */}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.date}<br />{item.time}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.location}</td>
              <td className="px-6 py-4 whitespace-nowrap">
    
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};