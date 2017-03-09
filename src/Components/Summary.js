import React from 'react';

const Summary = props => {

  const { summary } = props.jsonObj

  return(
    <div className="summary">
      <div className="title">Summary</div>
      <div className="content-text">
        {summary}
      </div>
    </div>
  )
}

export default Summary;
