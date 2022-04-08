import React from "react";
import { useState } from "react";
import Data from "./Data";
import List from "./List";
import './index.css';

function App() {

  const[tasks, setTasks] = useState(Data);

  return (
    <div><h1 className="title">TASK MANAGER</h1>
    <section className="container">
      <main>
     <h1 className="today">{tasks.length} tasks today</h1>
     <List tasks = {tasks}/>
     <button type="button" onClick={() => setTasks([])} className='butt'>Clear All</button>
     </main>
    </section>
    </div>
  );
}

export default App;
