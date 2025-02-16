import React from "react";
import Counter from "./tasks/Counter";
import UserCard from "./tasks/UserCard";

function App(){
  return(
    <div>
      <Counter></Counter>
      <UserCard name="yonas" email="yonaisol21@gmail.com" age={21}></UserCard>
    </div>
  ); 
}
export default App
