// src/components/ProfileSection.js
import React, { useEffect, useState } from 'react';

const ProfileSection = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/profile')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setHtmlContent(data.html);
      })
      .catch(error => {
        console.error('Error fetching profile:', error);
        setError(error.toString());
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!htmlContent) {
    return <div>Loading...</div>;
  }

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default ProfileSection;
