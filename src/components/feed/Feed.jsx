
import React from 'react';
import "./feed.css" ;
import Share from './Share'; // Adjust the path accordingly

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
      </div>
    </div>
  );
}
