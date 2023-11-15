import React from 'react';
import './feed.css';

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <div class="card">
          <img src="/assets/companies/google.jpg" alt="" />
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
    </div>
  );
}
