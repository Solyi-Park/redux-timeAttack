import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { switchTodo } from "../../redux/modules/todos";

export default function TodoList({ isWorking }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  // 여기서 저장된 전체 데이터 확인할 수 있다!!
  console.log(todos);

  const deleteTodo = (id) => dispatch(deleteTodo(id));
  const completeTodo = (id) => dispatch(switchTodo(id));

  return (
    <Section>
      <Title>{isWorking ? "할 일 목록🔥" : "완료 목록🎉"}</Title>
      {todos
        .filter((item) => item.isDone !== isWorking)
        .map((todo) => {
          return (
            <TodoBox key={todo.id}>
              <h1>{todo.title}</h1>
              <p>{todo.body}</p>
              <button onClick={() => completeTodo(todo.id)}>
                {todo.isDone ? "완료취소" : "완료"}
              </button>
              <button onClick={() => deleteTodo(todo.id)}>삭제</button>
            </TodoBox>
          );
        })}
    </Section>
  );
}

const Section = styled.div`
  /* background-color: goldenrod; */
`;

const Title = styled.h1`
  font-size: 25px;
`;

const TodoBox = styled.div`
  background-color: goldenrod;
  padding: 10px;
  margin: 5px;
`;
