import React from 'react';
import './feed.css';

export default function Feed() {
  return (
    
    <div className="feed">
      
      <div div className="feedWrapper">
         {/* Top 3 cards */}
         <div className="cardSetTop">
        <div className="card">
          <br/>
          <img src="/assets/companies/google.jpg" alt="" />
          <div className="card-body">
            <h3 className="card-title">Google: Software Engineer</h3>
            <p className="card-text">
              Meet up with senior software engineer team and how to gain insight the intern this Summer
            </p>
            <p>Virtual - December 25 at 2:30 ET</p>
            <a href="#" class="btn btn-primary">
              <strong>Get more information</strong>
            </a>
            <br/>
          </div>
        </div>

        <div className="card">
          <br/>
          <img src="/assets/companies/facebook.png" alt="" />
          <div className="card-body">
          <h3 className="card-title">FaceBook: Software Engineer</h3>
            <p className="card-text">
              Meet up with senior software engineer team and how to gain insight the intern this Summer
            </p>
            <p>Virtual - December 25 at 2:30 ET</p>
            <a href="#" class="btn btn-primary">
              <strong>Get more information</strong>
            </a>
          </div>
        </div>

        <div className="card">
          <br/>
          <img src="/assets/companies/ig.jpg" alt="" />
          <div className="card-body">
          <h3 className="card-title">Instagram: Software Engineer</h3>
            <p className="card-text">
              Meet up with senior software engineer team and how to gain insight the intern this Summer
            </p>
            <p>Virtual - December 25 at 2:30 ET</p>
            <a href="#" class="btn btn-primary">
              <strong>Get more information</strong>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom 3 cards */}
      < div className ="cardSetBottom">
        <div className ="card">
          <br/>
          <img src="/assets/companies/apple.jpg" alt="" />
          <div className ="card-body">
          <h3 className ="card-title">Apple: Software Engineer</h3>
            <p className ="card-text">
              Meet up with senior software engineer team and how to gain insight the intern this Summer
            </p>
            <p>Virtual - December 25 at 2:30 ET</p>
            <a href="#" class="btn btn-primary">
              <strong>Get more information</strong>
            </a>
          </div>
        </div>
        

       <div className ="card">
          <br/>
          <img src="/assets/companies/microsoft.svg" alt="" />
          <div className ="card-body">
          <h3 className ="card-title">Microsoft: Software Engineer</h3>
            <p className="card-text">
              Meet up with senior software engineer team and how to gain insight the intern this Summer
            </p>
            <p>Virtual - December 25 at 2:30 ET</p>
            <a href="#" class="btn btn-primary">
              <strong>Get more information</strong>
            </a>
          </div>
        </div>

        <div className="card">
          <br/>
          <img src="/assets/companies/amazon.png" alt="" />
          <div className="card-body">
          <h3 className="card-title">Amazon: Software Engineer</h3>
            <p className ="card-text">
              Meet up with senior software engineer team and how to gain insight the intern this Summer
            </p>
            <p>Virtual - December 25 at 2:30 ET</p>
            <a href="#" class="btn btn-primary">
              <strong>Get more information</strong>
            </a>
          </div>
        </div>
      </div>
     </div>
   </div>
  );
}
