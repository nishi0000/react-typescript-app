import "./header.css";
import background from "./background.jpg";
import profile from "./profile.jpg";

export const Header = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "300px",
          backgroundPosition: `center`,
     }}
      ><div className="header-container">
        <img className="header-profile-image" src={`${profile}`}></img>
        <h2 className="header-username">Nishimura</h2>
        </div>
      </div>
    </>
  );
};
