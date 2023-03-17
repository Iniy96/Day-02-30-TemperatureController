import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [currentTemperature, setcurrentTemperature] = useState(15);
  const [tempDisplayColor, settempDisplayColor] = useState("greenColor");
  const [incBtnDisabled, setincBtnDisabled] = useState("");
  const [decBtnDisabled, setdecBtnDisabled] = useState("");

  const increasetemp = () => {
    setcurrentTemperature(currentTemperature + 1);
  };
  const decreasetemp = () => {
    setcurrentTemperature(currentTemperature - 1);
  };

  useEffect(() => {
    if (currentTemperature < 12) {
      settempDisplayColor("blueColor");
    } else if (currentTemperature <= 18) {
      settempDisplayColor("greenColor");
    } else if (currentTemperature <= 22) {
      settempDisplayColor("orangeColor");
    } else {
      settempDisplayColor("redColor");
    }

    if (currentTemperature >= 30) {
      setincBtnDisabled("disabled");
    } else {
      setincBtnDisabled("");
    }

    if (currentTemperature <= 5) {
      setdecBtnDisabled("disabled");

    } else {
      setdecBtnDisabled("");
    }
  }, [currentTemperature]);

  return (
    <div className="App ">
      <div className="container mt-5 text-center">
        <div className="row justify-content-center">
          <div className="col-lg-4 border  col5">
            <h3 className="mt-5 text-white">Temperature Controller</h3>
            <div
              className={`mx-auto my-5 d-flex justify-content-center align-items-center fs-4  temperatureDisplay ${tempDisplayColor}`}
            >
              <b className="fs-1">{currentTemperature} </b> &#8451;
            </div>
            <div className="row my-5 ">
              <div className="col-6  justify-content-center d-flex ">
                <div
                  className={`IndDbtn d-flex align-items-center justify-content-center fs-2 btn ${incBtnDisabled}`}
                  onClick={increasetemp}
                >
                  +
                </div>
              </div>
              <div className="col-6 justify-content-center d-flex">
                <div
                  className={`IndDbtn d-flex align-items-center justify-content-center  fs-2 btn ${decBtnDisabled}`}
                  onClick={decreasetemp}
                >
                  -
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
