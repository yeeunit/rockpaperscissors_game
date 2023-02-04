import React from "react";

const Box = (props) => {
  // console.log("props", props);
  // userselect 값은 유저가 선택했을때 들어오므로 처음에는 값이 없음! 따라서 옵셔널 체이닝해줘야

  return (
    <div className="box">
      <h1>{props.title}</h1>

      {props.item?.img ? (
        <>
          <img src={props.item?.img} alt="scissors" />
        </>
      ) : (
        <>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/5/5a/Black_question_mark.png"
            alt="question mark"
          />
        </>
      )}
      <span>{props.item?.name}</span>
      <h2>WIN</h2>
    </div>
  );
};

export default Box;
