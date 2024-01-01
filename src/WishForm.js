import React, { useState } from 'react';
import './Design.css';
import { useNavigate } from 'react-router-dom';

const WishForm = ({ generateWish }) => {
  const [mood, setMood] = useState('');
  const [wishType, setWishType] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [eventType, setEventType] = useState('');
  const [age, setAge] = useState('');
  const [spouseName, setSpouseName] = useState('');
  const [yearsOfMarriage, setYearsOfMarriage] = useState('');
  const [testSubject, setTestSubject] = useState('');
  const [teacherName, setTeacherName] = useState('');

  const handleGenerateWish = () => {
    const wishObject = {
      mood,
      wishType,
      recipientName,
      eventType,
      age,
      spouseName,
      yearsOfMarriage,
      testSubject,
      teacherName,
    };
    // generateWish(wishObject);
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
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
      )}
      {eventType === 'anniversary' && (
        <div>
          <label>Spouse's Name: </label>
          <input type="text" value={spouseName} onChange={(e) => setSpouseName(e.target.value)} />
          <br /> <br />
          <label>Years of Marriage: </label>
          <input type="number" value={yearsOfMarriage} onChange={(e) => setYearsOfMarriage(e.target.value)} />
        </div>
      )}
      {eventType === 'test' && (
        <div>
          <label>Test Subject: </label>
          <input type="text" value={testSubject} onChange={(e) => setTestSubject(e.target.value)} />
          <br /><br />
          <label>Teacher's Name: </label>
          <input type="text" value={teacherName} onChange={(e) => setTeacherName(e.target.value)} />
        </div>
      )}
          <br />
      <button onClick={()=>navigate('/WishDisplay')}>
        generate a new wish</button>

    </div>
  );
};

export default WishForm;