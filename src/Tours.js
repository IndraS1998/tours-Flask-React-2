import React from 'react';
import Tour from './Tour';

const Tours = props => {
  const onDeleteTour = id => props.setTours(props.tours.filter(tour => tour.id !== id))
  if(props.tours.length === 0){
    return(
      <main>
        <div className="title">
          <h2>No Tours left</h2>
        </div>
        <button className="btn" onClick={props.onRefresh}>
          Refresh
        </button>
      </main>
    )  
  }

  return <section>
    <div className='title'>
      <h2>our tours</h2>
      <div className='underline'></div>  
      {props.tours.map(tour =>{
        return(
          <Tour key={tour.id } {...tour} deleteTourHandler={onDeleteTour}/>)}
        )
      }
    </div> 
  </section>;
};

export default Tours;
