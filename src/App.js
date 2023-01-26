import "./App.css";
import Box from "./component/Box";

function App() {
  return (
    <div className="body_wrap">
      <h1 className="title"> 가위바위보 게임</h1>
      <div className="main">
        <Box title="You" /> <Box title="Computer" />
      </div>
      <div className="btn_wrap">
        <button>가위</button>
        <button>바위</button>
        <button>보</button>
      </div>
    </div>
  );
}

export default App;
