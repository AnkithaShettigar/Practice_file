import axios from "axios";
import React, { useEffect, useState } from "react";

// interface userData {
//   id: Number;
//   name: String;
//   age: Number;
//   degree: String;
//   result: String;
// }

export const Data: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // async function fetchData() {
    //   const response = await axios.get("http://localhost:4000/users");
    //   setData(response.data);
    // }
    // fetchData();
  });

  const handleClick = () => {
    async function fetchData() {
      const response = await axios.get("http://localhost:4000/users");
      setData(response.data);
    }
    fetchData();
    console.log("object", data);
  };
  return (
    <div>
      <h1>Data</h1>

      <table>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>AGE</th>
          <th>DEGREE</th>
          <th>RESULT</th>
        </tr>
        {data.map((user: any) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.degree}</td>
            <td>{user.result}</td>
          </tr>
        ))}
      </table>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};
