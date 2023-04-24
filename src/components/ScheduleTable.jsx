import React, { useState } from 'react';
import "../App.css"


const ScheduleTable = () => {
  const [lessons, setLessons] = useState([
    { teacher: 'Anton', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '' },
    { teacher: 'Oleg', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '' },
    { teacher: 'Ivan', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '' },
    { teacher: 'Petr', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '' },
  ]);

  const handleChange = (event, teacher, day) => {
    const { value } = event.target;
    setLessons(prevLessons => {
      const updatedLessons = [...prevLessons];
      const teacherIndex = updatedLessons.findIndex(lesson => lesson.teacher === teacher);
      updatedLessons[teacherIndex][day] = value;
      return updatedLessons;
    });
  };

  return (
    <div>
      <h1>Scheduler</h1>
      <table>
        <thead>
          <tr>
            <th>Person</th>
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
          {lessons.map(lesson => (
            <tr key={lesson.teacher}>
              <td>{lesson.teacher}</td>
              <td>
                <input
                  type="text"
                  class="lesson-input"
                  value={lesson.monday}
                  onChange={e => handleChange(e, lesson.teacher, 'monday')}
                  style={{ backgroundColor: lesson.monday ? '#87CEEB' : '' }}
                />
              </td>
              <td>
                <input
                  type="text"
                  class="lesson-input"
                  value={lesson.tuesday}
                  onChange={e => handleChange(e, lesson.teacher, 'tuesday')}
                  style={{ backgroundColor: lesson.tuesday ? '#87CEEB' : '' }}
                />
              </td>
              <td>
                <input
                  type="text"
                  class="lesson-input"
                  value={lesson.wednesday}
                  onChange={e => handleChange(e, lesson.teacher, 'wednesday')}
                  style={{ backgroundColor: lesson.wednesday ? '#87CEEB' : '' }}
                />
              </td>
              <td>
                <input
                  type="text"
                  class="lesson-input"
                  value={lesson.thursday}
                  onChange={e => handleChange(e, lesson.teacher, 'thursday')}
                  style={{ backgroundColor: lesson.thursday ? '#87CEEB' : '' }}
                />
              </td>
              <td>
                <input
                  type="text"
                  class="lesson-input"
                  value={lesson.friday}
                  onChange={e => handleChange(e, lesson.teacher, 'friday')}
                  style={{ backgroundColor: lesson.friday ? '#87CEEB' : '' }}
                />
              </td>
              <td>
                <input
                  type="text"
                  class="lesson-input"
                  value={lesson.saturday}
                  onChange={e => handleChange(e, lesson.teacher, 'saturday')}
                  disabled
                />
              </td>
              <td>
                <input
                  type="text"
                  class="lesson-input"
                  value={lesson.sunday}
                  onChange={e => handleChange(e, lesson.teacher, 'sunday')}
                  disabled
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;

