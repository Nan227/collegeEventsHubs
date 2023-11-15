import React from 'react';
import './feed.css';

export default function Feed() {
  return (
    <div className="feed">
      <div div className="feedWrapper">
         {/* Top 3 cards */}
         <div className="cardSetTop">
        <div class="card">
          <br/>
          <img src="/assets/companies/google.jpg" alt="" />
          <div class="card-body">
            <h3 class="card-title">Google: Software Engineer</h3>
            <p class="card-text">
              Meet up with senior software engineer team and how to gain insight the intern this Summer
            </p>
            <p>Virtual - December 25 at 2:30 ET</p>
            <a href="#" class="btn btn-primary">
              <strong>Get more information</strong>
            </a>
            <br/>
          </div>
        </div>

        <div class="card">
          <br/>
          <img src="/assets/companies/facebook.png" alt="" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        <div class="card">
          <br/>
          <img src="/assets/companies/ig.jpg" alt="" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>

      {/* Bottom 3 cards */}
      < div class="cardSetBottom">
        <div class="card">
          <br/>
          <img src="/assets/companies/apple.jpg" alt="" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        

       <div class="card">
          <br/>
          <img src="/assets/companies/microsoft.svg" alt="" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        <div class="card">
          <br/>
          <img src="/assets/companies/amazon.png" alt="" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
     </div>
   </div>
  );
}
