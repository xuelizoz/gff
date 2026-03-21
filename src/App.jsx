import React from 'react';

const App = () => {
  const certificates = [
    { id: 1, name: "React Developer", date: "2022-01-10" },
    { id: 2, name: "JavaScript Mastery", date: "2022-02-20" },
    // Add more certificates as needed
  ];

  return (
    <div>
      <h1>My Certificates</h1>
      <ul>
        {certificates.map(cert => (
          <li key={cert.id}>
            {cert.name} - {cert.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;