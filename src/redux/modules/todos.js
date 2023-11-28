// import uuid from "react-uuid";
import shortid from "shortid";
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

const initialState = [
  {
    id: shortid.generate(),
    title: "Sample Title",
    body: "Sample Body",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "Sample Title2",
    body: "Sample Body2",
    isDone: true,
  },
];

// 리듀서
export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state];
// 삭제 어디가 문제일까요? ㅠ
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.payload);

    case SWITCH_TODO:
// 함수 return 이하에 작성해야 오류 안남 ㅠ
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};

export default todos;
