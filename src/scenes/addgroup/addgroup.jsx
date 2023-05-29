import { useRef, useState } from "react";
import "./addgroup.css";

export default function AddGroup() {
  const data = [
    { id: 1, dataTitle: "№" },
    { id: 2, dataTitle: "Kurs Nomi" },
    { id: 3, dataTitle: "Guruh Nomi" },
    { id: 4, dataTitle: "Bolalar soni" },
    { id: 5, dataTitle: "O'qtuvchi" },
    { id: 6, dataTitle: "Boshlanish vaqti" },
    { id: 7, dataTitle: "Tugash vaqti" },
    { id: 8, dataTitle: "Kurs Boshlanish Sanasi" },
    { id: 9, dataTitle: "Kurs Tugash Sanasi" },
    { id: 10, dataTitle: "Xona Raqami" },
    { id: 11, dataTitle: "Narxi" },
    { id: 12, dataTitle: "Pul oladigan oyni kiritish" },
  ];

  const [id, setId] = useState(0);

  const [studentData, setStudentData] = useState([
    {
      id: 1,
      teamName: "Frontend",
      groupName: "G-7",
      numberchildren: "32",
      teacherName: "Jalol Imamadinov",
      startTimeName: "9:00",
      closeTimeName: "12:00",
      startTimeData: "05/03/23",
      closeTimeData: "03/03/24",
      zonaNumber: 9,
      price: "750,000",
      moneytime: "08/06/2023",
    },
    {
      id: 2,
      teamName: "Beckend",
      groupName: "F-156",
      numberchildren: "32",
      teacherName: "Jalol Imamadinov",
      startTimeName: "9:00",
      closeTimeName: "12:00",
      startTimeData: "05/03/23",
      closeTimeData: "03/03/24",
      zonaNumber: 4,
      price: "750,000",
      moneytime: "08/06/2023",
    },
  ]);

  const idRef = useRef();
  const teamNameRef = useRef();
  const groupNameRef = useRef();
  const numberchildrenRef = useRef();
  const teacherNameRef = useRef();
  const startTimeNameRef = useRef();
  const closeTimeNameRef = useRef();
  const startTimeDataRef = useRef();
  const closeTimeDataRef = useRef();
  const zonaNumberRef = useRef();
  const priceRef = useRef();
  const moneytimeRef = useRef();

  function addData() {
    if (
      (teamNameRef.current.value == "" ||
        teacherNameRef.current.value == "" ||
        numberchildrenRef.current.value == "" ||
        startTimeNameRef.current.value == "" ||
        closeTimeNameRef.current.value == "" ||
        startTimeDataRef.current.value == "" ||
        closeTimeDataRef.current.value == "" ||
        zonaNumberRef.current.value == "" ||
        priceRef.current.value == "" ||
        moneytimeRef.current.value == "",
      groupNameRef.current.value == "")
    ) {
      const currentHighestId = studentData.reduce(
        (acc, curr) => (curr.id > acc ? curr.id : acc),
        0
      );
      const newId = currentHighestId + 1;
      setStudentData((prevData) => [
        ...prevData,
        {
          id: newId,
          teamName: teamNameRef.current.value,
          groupName: groupNameRef.current.value,
          numberchildren: numberchildrenRef.current.value,
          teacherName: teacherNameRef.current.value,
          timeName: startTimeNameRef.current.value,
          closeTimeName: closeTimeNameRef.current.value,
          startTimeData: startTimeDataRef.current.value,
          closeTimeData: closeTimeDataRef.current.value,
          zonaNumber: zonaNumberRef.current.value,
          price: priceRef.current.value,
          moneytime: moneytimeRef.current.value,
        },
      ]);
      setId(newId);

      setAlert(<span className="alert green">Muaffaqiyatli!</span>);
      setTimeout(() => {
        // input value clear
        teamNameRef.current.value = "";
        teacherNameRef.current.value = "";
        numberchildrenRef.current.value = "";
        startTimeNameRef.current.value = "";
        closeTimeNameRef.current.value = "";
        startTimeDataRef.current.value = "";
        closeTimeDataRef.current.value = "";
        zonaNumberRef.current.value = "";
        priceRef.current.value = "";
        groupNameRef.current.value = "";
        moneytimeRef.current.value = "";
      }, 500);
      setTimeout(() => {
        setAlert();
      }, 3000);
      setIsOpen("addData none");
    } else {
      setAlert(<span className="alert">Kamida Bitta Malumot Kiriting!</span>);
      setTimeout(() => {
        setAlert();
      }, 3000);
    }
  }

  const [isOpen, setIsOpen] = useState("addData none");
  const [alert, setAlert] = useState();

  return (
    <>
      <div class="container" style={{ position: "relative" }}>
        <div className="dataGrid">
          <table className="dataTr">
            <tr className="headerTitle">
              {data.map((item) => (
                <td key={item.id}>{item.dataTitle}</td>
              ))}
            </tr>
            {studentData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.teamName}</td>
                <td>{item.groupName}</td>
                <td>{item.numberchildren}</td>
                <td>{item.teacherName}</td>
                <td>{item.startTimeName}</td>
                <td>{item.closeTimeName}</td>
                <td>{item.startTimeData}</td>
                <td>{item.closeTimeData}</td>
                <td>{item.zonaNumber}</td>
                <td>{item.price}</td>
                <td>{item.moneytime}</td>
              </tr>
            ))}
          </table>
        </div>
        <button className="plusData" onClick={() => setIsOpen("addData")}>
          +
        </button>
        <div className={isOpen}>
          <div
            className="closeAddData"
            onClick={() => setIsOpen("addData none")}
          ></div>
          <div className="adddataChiled">
            {data.map((item) => (
              <div key={item.id}>
                <label className={item.id === 1 ? "none" : null}>
                  {item.dataTitle}
                </label>
                <br />
                <input
                  className={
                    item.id === 1 ? "none" : item.id === 2 ? "text" : null
                  }
                  type={
                    item.id === 1
                      ? "number"
                      : item.id === 9
                      ? "date"
                      : item.id === 7
                      ? "time"
                      : item.id === 8
                      ? "date"
                      : item.id === 5
                      ? "text"
                      : item.id === 6
                      ? "time"
                      : item.id === 10
                      ? "number"
                      : item.id === 12
                      ? "date"
                      : item.id === 4
                      ? "number"
                      : "text"
                  }
                  ref={
                    item.id === 1
                      ? idRef
                      : item.id === 2
                      ? teamNameRef
                      : item.id === 3
                      ? groupNameRef
                      : item.id === 4
                      ? numberchildrenRef
                      : item.id === 5
                      ? teacherNameRef
                      : item.id === 6
                      ? startTimeNameRef
                      : item.id === 7
                      ? closeTimeNameRef
                      : item.id === 8
                      ? startTimeDataRef
                      : item.id === 9
                      ? closeTimeDataRef
                      : item.id === 10
                      ? zonaNumberRef
                      : item.id == 11
                      ? priceRef
                      : item.id == 12
                      ? moneytimeRef
                      : item.id == 13
                  }
                  placeholder={item.dataTitle}
                  key={item.id}
                />
              </div>
            ))}
            <button className="saveData" onClick={addData}>
              QO'SHISH
            </button>
          </div>
        </div>
        <div className="alerts">{alert}</div>
      </div>
    </>
  );
}
