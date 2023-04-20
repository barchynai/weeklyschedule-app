import React, { useState } from "react";

const ScheduleTable = () => {
  const [schedule, setSchedule] = useState({
    Anton: {
      "Mon": "",
      "Tue": "",
      "Wed": "",
      "Thu": "",
      "Fri": "",
      "Sat": "",
      "Sun": ""
    },
    Oleg: {
        "Mon": "",
        "Tue": "",
        "Wed": "",
        "Thu": "",
        "Fri": "",
        "Sat": "",
        "Sun": ""
    },
    Ivan: {
        "Mon": "",
        "Tue": "",
        "Wed": "",
        "Thu": "",
        "Fri": "",
        "Sat": "",
        "Sun": ""
    },
    Petr: {
        "Mon": "",
        "Tue": "",
        "Wed": "",
        "Thu": "",
        "Fri": "",
        "Sat": "",
        "Sun": ""
    },
  });

  const handleChange = (event, day, person) => {
    setSchedule({
      ...schedule,
      [day]: {
        ...schedule[day],
        [person]: event.target.value,
      },
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
          <th>Sun</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(schedule).map((day) => (
          <tr key={day}>
            <td>{day}</td>
            <td>
              <input
                type="text"
                value={schedule[day]["Mon"]}
                onChange={(event) => handleChange(event, day, "Mon")}
              />
            </td>
            <td>
              <input
                type="text"
                value={schedule[day]["Tue"]}
                onChange={(event) => handleChange(event, day, "Tue")}
              />
            </td>
            <td>
              <input
                type="text"
                value={schedule[day]["Wed"]}
                onChange={(event) => handleChange(event, day, "Wed")}
              />
            </td>
            <td>
              <input
                type="text"
                value={schedule[day]["Thu"]}
                onChange={(event) => handleChange(event, day, "Thu")}
              />
            </td>
            <td>
              <input
                type="text"
                value={schedule[day]["Fri"]}
                onChange={(event) => handleChange(event, day, "Fri")}
              />
            </td>
            <td>
              <input
                type="text"
                value={schedule[day]["Sat"]}
                onChange={(event) => handleChange(event, day, "Sat")}
              />
            </td>
            <td>
              <input
                type="text"
                value={schedule[day]["Sun"]}
                onChange={(event) => handleChange(event, day, "Sun")}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScheduleTable;
