import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Discover Your Perfect Home & Secure Your Dream Property</h1>

          <p> RealEstate By Lan revolutionizes property hunting with its real-time updates, responsive design,
              and interactive features. Our app streamlines the search process, offers unparalleled user experience,
              and helps you make informed decisions with ease. 
              Discover your dream property faster and more efficiently than ever before.

          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>5+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>10</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg111.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
