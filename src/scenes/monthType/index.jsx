import { useState } from "react";
import "./index.css";

export default function MonthlyType() {
  const [data, setData] = useState([
    {
      id: 1,
      rolar: "Bugalteriya",
      price: "100.000.000 so`m",
      kurs: "Frontend",
      foiz: "50%",
    },
  ]);
  const [data2, setData2] = useState([
    {
      id: 1,
      rolar: "Bugalteriya",
      price: "100.000.000 so`m",
      kurs: "Frontend",
      foiz: "50%",
    },
  ]);

  const [editableRows, setEditableRows] = useState({});
  const [editableRows2, setEditableRows2] = useState({});

  const handleEditClick = (id) => {
    setEditableRows((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  const handleEditClick2 = (id) => {
    setEditableRows2((prevState2) => ({
      ...prevState2,
      [id]: !prevState2[id],
    }));
  };

  const handleAddRowClick = () => {
    const newRow = {
      id: data.length + 1,
      rolar: "",
      price: "",
      kurs: "",
      foiz: "",
    };
    setData([...data, newRow]);
    setEditableRows((prevState) => ({
      ...prevState,
      [newRow.id]: true,
    }));
  };

  return (
    <div className="container workInfo">
      <table>
        <thead>
          <tr>
            <th>Kurs</th>
            <th>Kurs o`qtuvchisini oladigan foizini kiritish</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data2.map((item) => (
            <tr key={item.id}>
              <td contentEditable={editableRows[item.id]}>{item.kurs}</td>
              <td contentEditable={editableRows[item.id]}>{item.foiz}</td>
              <td>
                <button onClick={() => handleEditClick(item.id)}>
                  {editableRows[item.id] ? "Saqlash" : "O'zgartirish"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Ish joingiz Rolarini kriting</th>
            <th> Rolar sumasi kriting</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td contentEditable={editableRows2[item.id]}>{item.rolar}</td>
              <td contentEditable={editableRows2[item.id]}>{item.price}</td>
              <td>
                <button onClick={() => handleEditClick2(item.id)}>
                  {editableRows2[item.id] ? "Saqlash" : "O'zgartirish"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        contentEditable={editableRows}
        className="plusTr"
        onClick={handleAddRowClick}
      >
        +
      </button>
    </div>
  );
}
