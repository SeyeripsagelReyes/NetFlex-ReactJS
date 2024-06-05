import React from 'react'

export default function SearchResultList({Results}) {
  if (!Results || !Array.isArray(Results)) {
    return null; // or a fallback UI
  }

  return (
    <div className = 'result-list'>
      {Results.map((item)=>(
        <div>{item.Title}</div>
      ))}
    </div>
    
  );
};

