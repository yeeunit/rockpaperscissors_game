import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

const choice = {
  rock: {
    name: "ROCK",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg",
  },
  scissors: {
    name: "SCISSORS",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/97/Standard_household_scissors.jpg",
  },
  paper: {
    name: "PAPER",
    img: "https://img.lakeshorelearning.com/is/image/OCProduction/ta50ac_g?wid=800&fmt=jpeg&qlt=85,1&pscan=auto&op_sharpen=0&resMode=sharp2&op_usm=1,0.65,6,0",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);

  const play = (userChoice) => {
    // console.log("유저의선택", userChoice);
    setUserSelect(choice[userChoice]);
    console.log("userSelect", userSelect);
    randomChoice();
    // let computerChoice = randomChoice();
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    // console.log("itemArray", itemArray);
    let randomItem = itemArray[Math.floor(Math.random() * itemArray.length)];
    // console.log("randomItem", randomItem);
    // console.log(choice[randomItem]);
    setComputerSelect(choice[randomItem]);
    console.log("computerSelect", computerSelect);
  };

  return (
    <div className="body_wrap">
      <h1 className="title"> 가위바위보 게임</h1>
      <div className="main">
        <Box title="You" item={userSelect} />
        <Box title="Computer" item={computerSelect} />
      </div>
      <div className="btn_wrap">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
