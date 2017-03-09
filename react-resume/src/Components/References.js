import React from 'react';

const References = props => {
  const { references } = props;

  return (
    <div className="block">
      <span className="title">References</span>

      {references.map((reference, index) => {
        return (
        <span key={index}>
          <div className="reference-name">{reference.name}</div>
          <div className="reference-description">{reference.reference}</div>
        </span>
        )
      })}


    </div>

  );
}

export default References;
