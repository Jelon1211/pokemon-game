import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./about.css";

const About = () => {
  return (
    <>
      <Header></Header>
      <div className="about-container">
        <div className="about-container-wrapper">
          <div className="about-container-inner">
            <h3 className="about-heading">Pokemon Super</h3>
            <p className="about-text">
              Hello, my name is Dominik and I created this game for education
              purpopses only. I do not own any rights to this genre. I do not
              bear any financial benefits from this app. This is open source
              app, feel free to comment, commit and use as you wish {`:)`}
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
