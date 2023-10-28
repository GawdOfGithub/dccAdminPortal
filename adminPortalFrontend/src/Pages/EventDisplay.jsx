import { useState, useEffect } from "react";

export const EventDisplay = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [dataState, setDataState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setZoomLevel(0.52);
      } else {
        setZoomLevel(1);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://api-admin-dcc.onrender.com/events';

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDataState(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it runs only once on initial render

  const style = {
    transform: `scale(${zoomLevel})`,
    transformOrigin: 'top left',
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
    return (
     <>
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
          {dataState.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img src="dcc.svg" alt={item.heading} className="w-10 h-10 rounded-full" />
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
     </>
    );
  }
  
  

