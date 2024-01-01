import React, { useState } from 'react';
import './Design.css';
import { useNavigate } from 'react-router-dom';

const WishForm = ({ generateWish }) => {
  const [mood, setMood] = useState('');
  const [wishType, setWishType] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [eventType, setEventType] = useState('');
  const [additoinal, setAdditional] = useState('');
  const handleGenerateWish = async () => {
    const wishObject = {
      mood : mood,
      wishType : wishType,
      person : recipientName,
      event : additoinal +' '+ eventType
    };
     
    const response = await fetch('localhost:8989/prompts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(wishObject),
    });
  
    const responseData = await response.json();
    console.log('Response from server:', responseData);
  };
  const navigate = useNavigate();

  return (
    <div>
      <h1>lets have some fun</h1>
      <div>
        <label>Mood: </label>
        <input type="text" value={mood} onChange={(e) => setMood(e.target.value)} />
      </div>
      <br />
    
      <div>
        <label>Wish Type: </label>
        <input type="text" value={wishType} onChange={(e) => setWishType(e.target.value)} />
      </div>
      <br />

      <div>
        <label>Recipient's Name: </label>
        <input type="text" value={recipientName} onChange={(e) => setRecipientName(e.target.value)} />
      </div>
      <br />

      <div>
        <label>Event Type: </label>
        <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
          <option value="">Select an event</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="test">Test</option>
        </select>
      </div>
      {eventType === 'birthday' && (
        <div>
          <label>Age: </label>
          <input type="number" value={additoinal} onChange={(e) => setAdditional(e.target.value)} />
        </div>
      )}
      {eventType === 'anniversary' && (
        <div>
          <label>Years of Marriage: </label>
          <input type="number" value={additoinal} onChange={(e) => setAdditional(e.target.value)} />
        </div>
      )}
      {eventType === 'test' && (
        <div>
          <label>Test Subject: </label>
          <input type="text" value={additoinal} onChange={(e) => setAdditional(e.target.value)} />
          <br /><br />
         
        </div>
      )}
          <br />
      <button onClick={handleGenerateWish}>
        {/* // ()=>navigate('/WishDisplay') */}
      
        generate a new wish</button>

    </div>
  );
};

export default WishForm;