import React, { useState } from "react";
//import "./App.css";

const Scheduler = () => {
  const [lessonData, setLessonData] = useState([
    { teacher: "Teacher 1", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "", saturday: "", sunday: "" },
    { teacher: "Teacher 2", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "", saturday: "", sunday: "" },
    { teacher: "Teacher 3", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "", saturday: "", sunday: "" }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  const handleLessonPlan = (teacherIndex, day, event) => {
    const updatedLessonData = [...lessonData];
    updatedLessonData[teacherIndex][day] = event.target.value;
    setLessonData(updatedLessonData);
  };

  const handleAddLesson = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTeacher("");
    setSelectedDay("");
  };

  const handleSaveLesson = () => {
    const updatedLessonData = [...lessonData];
    const teacherIndex = lessonData.findIndex(
      (item) => item.teacher === selectedTeacher
    );
    updatedLessonData[teacherIndex][selectedDay] = prompt("Enter lesson name:");
    setLessonData(updatedLessonData);
    handleCloseModal();
  };

  return (
    <div className="App">
      <h1>Lesson Planner</h1>
      <table>
        <thead>
          <tr>
            <th>Teacher</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          {lessonData.map((item, index) => (
            <tr key={index}>
              <td>{item.teacher}</td>
              <td>
                <input
                  type="text"
                  value={item.monday}
                  onChange={(event) => handleLessonPlan(index, "monday", event)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.tuesday}
                  onChange={(event) => handleLessonPlan(index, "tuesday", event)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.wednesday}
                  onChange={(event) => handleLessonPlan(index, "wednesday", event)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.thursday}
                  onChange={(event) => handleLessonPlan(index, "thursday", event)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.friday}
                  onChange={(event) => handleLessonPlan(index, "friday", event)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.saturday}
                  onChange={(event) => handleLessonPlan(index, "saturday", event)}
                  disabled={true}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.sunday}
                  onChange={(event) => handleLessonPlan(index, "sunday", event)}
                  disabled={true}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Lesson</h2>
            <p>Teacher: {selectedTeacher}</p>
            <p>Day: {selectedDay}</p>
            <input
              type="text"
              placeholder="Enter lesson name"
              onChange={(event) => handleLessonPlan(0, selectedDay, event)}
            />
            <div className="modal-buttons">
              <button onClick={handleSaveLesson}>Save</button>
              <button onClick={handleCloseModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <button onClick={handleAddLesson} className="add-lesson-button">
        Add Lesson
      </button>
    </div>
  );
};

export default Scheduler;

