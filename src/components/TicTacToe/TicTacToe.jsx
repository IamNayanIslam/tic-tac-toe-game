import { useEffect, useRef, useState } from "react";
import {
  StyledBoard,
  StyledResetButton,
  StyledTicTacToeContainer,
} from "./TicTacToe.Styled";

const TicTacToe = () => {
  let [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  const box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  useEffect(() => {
    checkWin();
  }, [data]);

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    const newData = [...data];

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='./img/cross.png'/>`;
      newData[num] = "x";
      setCount((prevCount) => prevCount + 1);
    } else {
      e.target.innerHTML = `<img src='./img/circle.png'/>`;
      newData[num] = "o";
      setCount((prevCount) => prevCount + 1);
    }
    setData(newData);
    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
      console.log(data[0]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations: <img src='./img/cross.png'/> is the winner`;
    } else {
      titleRef.current.innerHTML = `Congratulations: <img src='./img/circle.png'/> is the winner`;
    }
    console.log(`Player ${winner} won!`);
  };

  const handleReset = () => {
    // setCount(0);
    setLock(false);
    setData(["", "", "", "", "", "", "", "", ""]);
    box_array.forEach((box) => {
      if (box.current) {
        box.current.innerHTML = "";
      }

      titleRef.current.innerHTML = `Tic Tac Toe Game In <span>React</span>`;
    });
  };
  return (
    <>
      <StyledTicTacToeContainer>
        <h1 className="title" ref={titleRef}>
          Tic Tac Toe Game In <span> React</span>
        </h1>
        <div className="boards">
          <StyledBoard ref={box1} onClick={(e) => toggle(e, 0)} />
          <StyledBoard ref={box2} onClick={(e) => toggle(e, 1)} />
          <StyledBoard ref={box3} onClick={(e) => toggle(e, 2)} />
          <StyledBoard ref={box4} onClick={(e) => toggle(e, 3)} />
          <StyledBoard ref={box5} onClick={(e) => toggle(e, 4)} />
          <StyledBoard ref={box6} onClick={(e) => toggle(e, 5)} />
          <StyledBoard ref={box7} onClick={(e) => toggle(e, 6)} />
          <StyledBoard ref={box8} onClick={(e) => toggle(e, 7)} />
          <StyledBoard ref={box9} onClick={(e) => toggle(e, 8)} />
        </div>
        <StyledResetButton onClick={() => handleReset()}>
          Reset
        </StyledResetButton>
      </StyledTicTacToeContainer>
    </>
  );
};

export default TicTacToe;
