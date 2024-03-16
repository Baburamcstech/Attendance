import React, {useState , useEffect} from 'react';
import Calendar from 'react-calendar';
import axios from 'axios'
import './style.css';

const AttandanceSubmit = () => {
  const background = {
    backgroundImage: `url(./assets/background.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100wh',
    height: '100vh',
  };

  const [attendanceDate, setAttendance] = useState("");
  const [selectedDate, setSelectedDate] = useState(null); // State to store selected date
  const [collapse, setCollapse] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3005/attendance", {attendanceDate})
    .then(res => {
     return res.json({status:200})
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Error occurred while sending data to server!!");
    })
    setAttendance("");
  }

  const handleDateChange = (date) => {
    setSelectedDate(date); 
    setCollapse(false); 
  }
  var formattedDate;
if(selectedDate) {
   formattedDate = `${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`;
  }


  return (
    <>
      <div style={background} className='div1'>
        <h1 style={{ textAlign: "center", display: "flex" }}>You can submit your attendance here!!</h1>
        <label className='lab'>Enter the Date :</label>
        <input 
          value={selectedDate ? formattedDate : ''} 
          readOnly 
          className='text'
        />
        <button className='text2' onClick={e => setCollapse(!collapse)}>^</button>
        <button type='submit' className="but" onClick={handleSubmit}>Submit</button>
        {collapse && <Calendar className="cal" onChange={handleDateChange} value={selectedDate} />}
      </div>
    </>
  )
}

export default AttandanceSubmit;
