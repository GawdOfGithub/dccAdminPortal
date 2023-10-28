

const useFetch = () => {
  const fetchData = async (url, options = {}) => {
    const { method = 'GET', body, headers: customHeaders } = options;
    const token = options.token;

    const defaultHeaders = {
      'Content-Type': 'application/json',
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
