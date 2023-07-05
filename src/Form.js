import React, { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [country, setCountry] = useState('');
  const [file, setFile] = useState(null);
  const [geolocation, setGeolocation] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic or API integration here
    // You can access form data in the respective state variables
    // and handle file and geolocation accordingly
    console.log('Form submitted:', {
      username,
      email,
      phone,
      addressLine1,
      addressLine2,
      city,
      state,
      pincode,
      country,
      file,
      geolocation,
    });
  };

  const handleGeolocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setGeolocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
    });
  };
  const countryOptions = [
    'India',
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    'France',
    'Spain',
    'Italy',
    'Japan',
  ];
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">React Form</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Username:</label>
          <input
            className="border border-gray-400 rounded p-2 w-full"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Email:</label>
          <input
            className="border border-gray-400 rounded p-2 w-full"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Phone:</label>
          <input
            className="border border-gray-400 rounded p-2 w-full"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Address Line 1:</label>
          <input
            className="border border-gray-400 rounded p-2 w-full"
            type="text"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Address Line 2:</label>
          <input
            className="border border-gray-400 rounded p-2 w-full"
            type="text"
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">City:</label>
          <input
            className="border border-gray-400 rounded p-2 w-full"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">State:</label>
          <input
            className="border border-gray-400 rounded p-2 w-full"
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Pincode:</label>
          <input
            className="border border-gray-400 rounded p-2 w-full"
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Country:</label>
          <select
            className="border border-gray-400 rounded p-2 w-full"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="">Select a country</option>
            {countryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">File Upload (PNG and PDF):</label>
          <input
            className="border border-gray-400 rounded p-2 w-full"
            type="file"
            accept=".png,.pdf"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handleGeolocation}
          >
            Get Geolocation
          </button>
          <p className="mt-2">Geolocation: {geolocation}</p>
        </div>
        <div className="mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
