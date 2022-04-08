import React from 'react';

function List({tasks}) {

  return (
    <>
      {tasks.map(events => {
        const {id, task, time, image} = events;
        return(
          <article className='events' key={id}>
            <img src={image} alt={task}></img>
           <div className='datas'>
            <h3>{task}</h3>
            <h6>{time}</h6>
            </div>
          </article>
        );
      })}


    </>
  );
}

export default List;