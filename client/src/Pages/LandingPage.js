import React from "react";
import RecentBlogs from "../Components/RecentBlogs";
import Navbar from "../Components/UI/Navbar";
import "../Styles/LandingPage.css";
function LandingPage() {
  return (
    <div className="LandingPage">
      <Navbar />
      <div className="LandingPage-Body">
        <p className="bold">Recent Blogs</p>
        <RecentBlogs />
        <div className="Expertise">
          <p className="bold">Expertise</p>
          <div className="Expertise-body">
            <div>
              <p>
                <span>01</span>AR Management
              </p>
            </div>
            <div>
              <p>
                <span>02</span>Leadership
              </p>
            </div>
            <div>
              <p>
                <span>03</span>Problem Solving
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
