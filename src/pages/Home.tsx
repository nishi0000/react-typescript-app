import "./home.css";
import profile from "../image/profile.jpg";
import icon1 from "../image/icon1.png";
import icon2 from "../image/icon2.png";

export const Home = () => {
  return (
    <>
      <div className="profile-container-top">
        <h2 className="profile-title">自己紹介</h2>

        <p>
          自己紹介です。自己紹介です。自己紹介です。自己紹介です。自己紹介です。自己紹介です。自己紹介です。自己紹介です。自己紹介です。自己紹介です。自己紹介です。自己紹介です。自己紹介です。自己紹介です。自己紹介です。自己紹介です。
        </p>
      </div>

      <div className="profile-container">
        <img src={`${profile}`} className="profile-icon-image"></img>
        <h3>この先やってみたいこと</h3>

        <p>
          この先やってみたいことです。この先やってみたいことです。この先やってみたいことです。この先やってみたいことです。この先やってみたいことです。
        </p>
      </div>

      <div className="profile-container">
      <img src={`${icon1}`} className="profile-icon-image"></img>
        <h3>株式会社〇〇</h3>

        <p>
          今やっていることはこれです。今やっていることはこれです。今やっていることはこれです。今やっていることはこれです。今やっていることはこれです。今やっていることはこれです。今やっていることはこれです。今やっていることはこれです。今やっていることはこれです。今やっていることはこれです。今やっていることはこれです。今やっていることはこれです。
        </p>
      </div>

      <div className="profile-container">
      <img src={`${icon1}`} className="profile-icon-image"></img>
        <h3>株式会社〇〇</h3>

        <p>
          前やっていたことはこれです。前やっていたことはこれです。前やっていたことはこれです。前やっていたことはこれです。前やっていたことはこれです。前やっていたことはこれです。前やっていたことはこれです。前やっていたことはこれです。前やっていたことはこれです。前やっていたことはこれです。前やっていたことはこれです。前やっていたことはこれです。
        </p>
      </div>

      <div className="profile-container">
        <h3>〇〇大学卒業</h3>
        <img src={`${icon2}`} className="profile-icon-image"></img>
        <p>
          前やっていたことはこれです。前やっていたことはこれです。前やっていたことはこれです。前やっていたことはこれです。前やっていたことはこれです。前やっていたことはこれです。前やっていたことはこれです。前やっていたことはこれです。前やっていたことはこれです。前やっていたことはこれです。前やっていたことはこれです。前やっていたことはこれです。前やっていたことはこれです。前やっていたことはこれです。前やっていたことはこれです。
        </p>
      </div>

      <div className="profile-container">
        <h3>制作物</h3>

        <p>Github: http://localhost</p>
      </div>
    </>
  );
};
