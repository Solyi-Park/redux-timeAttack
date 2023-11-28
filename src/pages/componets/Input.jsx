import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import styled from "styled-components";
import { addTodo } from "../../redux/modules/todos";

export default function Input() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  //진짜 바보 이걸 왜 까먹냐
  const changeInputTitle = (e) => setTitle(e.target.value);
  const changeContentTitle = (e) => setBody(e.target.value);

  const handleAddBtn = (e) => {
    e.preventDefault();
    const newTodo = {
      id: shortid.generate(),
      title,
      body,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
  };
  return (
    <StDiv>
      <form onSubmit={handleAddBtn}>
        <input value={title} onChange={changeInputTitle} />
        <input value={body} onChange={changeContentTitle} />
        <button type="submit">추가하기</button>
      </form>
    </StDiv>
  );
}

const StDiv = styled.div`
  background-color: powderblue;
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  height: 30px;
`;
