import { Divider } from "@mui/material";
import React from "react";
import RecentBlogs from "../Components/RecentBlogs";
import Navbar from "../Components/UI/Navbar";
import "../Styles/LandingPage.css";
function LandingPage() {
  return (
    <div className="LandingPage">
      <Navbar />
      <Divider />
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
        <Divider />
        <p className="bold">My Story</p>

        <div id="About" className="About">
          <p>
            Jacob started the journey in 2001 with General Electric in a call
            center. The journey did begin in a call center but AR Management
            (Accounts Receivables Management) always had Jacob’s interest. Thus,
            he moved into an Accounts Receivables process for a US-based
            Logistics company. Spending 6 years with clients in the US, he
            understood everything around this niche.
          </p>
          <p>
            Jacob, the experienced player in the industry, has spent 2 decades
            evolving as a Digital Finance Transformation expert. His role in
            improving the road map of companies using the concept of finance has
            helped many companies to overcome the complex step of managing their
            customer relations and growth in general.
          </p>
          <p>
            Jacob has been working with some large fortune 500 companies. He led
            200+ FTEs Global Retail Client’s South Africa Operations based 90%
            in Johannesburg, 5% in Durban, and 5% in India, supporting 6 Retail
            Banners, for the company.
          </p>
          <p>
            He also collaborated with Business Leaders & Internal Stakeholders
            to set up Digital Strategy & Roadmap. Further, he Led 20+ diverse
            assignments managing Global Retail Client’s South Africa Operations.
          </p>
          <p>
            There is more to it but, what he wants to focus through “Jack of
            thoughts” is providing value to the audience. He wants you to learn
            everything he has learned over the period of 20 years of working
            with hundreds of people in this industry. Looking forward to make
            you the smarter through this!
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
