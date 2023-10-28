import { useState, useEffect } from 'react';

const useFetch = () => {
  const fetchData = async (url, options = {}) => {
    const { method = 'GET', body, token, headers: customHeaders } = options;

    const defaultHeaders = {
      'Content-Type': 'application/json',
      // Include the session token in the headers if available
      Authorization: token ? `Bearer ${token}` : '',
    };

    const headers = {
      ...defaultHeaders,
      ...customHeaders,
    };

    const requestOptions = {
      method,
      headers,
      body: body && JSON.stringify(body),
    };

    try {
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  };

  return fetchData;
};

export default useFetch;
