import { useState, useRef } from "react";
import "./index.css";
import SearchIcon from "@mui/icons-material/Search";

const CooseCourse = () => {
  const [showInput, setShowInput] = useState(false);
  const [valueInput, setValueInput] = useState(Number(750));

  const [right, setright] = useState(">");
  const summaRef = useRef();

  const handlerInput = (e) => {
    setValueInput(e.target.value);
  };
  const checkValue = () => {
    setShowInput(false);
    if (typeof valueInput !== NaN) {
      setValueInput(summaRef.current.value);
    }
  };

  const [info, setInfo] = useState([
    {
      name: "frontend",
    },
  ]);
  return (
    <>
      <form className="UsersInfo">
        <input type="text" className="search" placeholder="Search" />
        <input type="date" className="date-input" />

        <p>
          Kursi{" "}
          <select className="">
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="SMM">SMM</option>
          </select>
        </p>
        <p>
          Gruh nomi{" "}
          <select className="">
            <option value="Frontend">Frontend F68</option>
            <option value="Backend">Frontend F69</option>
            <option value="SMM">Frontend F70</option>
          </select>
        </p>
        <p>
          ismi/familya :
          <input
            style={{ border: "none", color: "#fff" }}
            className="span"
            type="text"
            value="Jumaniyozov Alibek"
          />
        </p>
        <p>
          tel :
          <input
            style={{ border: "none", color: "#fff" }}
            className="span"
            type="text"
            value={+998914373790}
          />
        </p>

        {showInput ? (
          <div className="flex">
            <input
              ref={summaRef}
              className="a bg-transparent"
              placeholder="summa ni kiriting"
              onChange={(e) => handlerInput(e)}
              type="text"
            />
            <button
              className={`a ${showInput ? "block" : "hidden"}`}
              onClick={() => checkValue()}
            >
              Complete
            </button>
          </div>
        ) : (
          <button onClick={() => setShowInput(true)} className="a">
            {valueInput} som
          </button>
        )}

        <div className="btn-wrapper">
          <button className="btnn">Delete</button>
          <button className="btn2">To`lov qilindi</button>
          <button className="btn3">Tasdiklash {right}</button>
        </div>
      </form>
    </>
  );
};

export default CooseCourse;
