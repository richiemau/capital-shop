import React from "react";
export default function Capital() {
  return (
    <div>
      <div className="re">
        Sale Up To 50% Discounts. Hurry! Limited Period Offer👍
        <a href="/">Shop Now</a>
      </div>
      <div
        className="banner"
        style={{
          backgroundImage: `url(/assets/images/ladyblue.png)`,
          backgroundSize: "cover",
          width: "100%",
          height: "366px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="po">
          <h1>Fashion Sale</h1>
          <h2>Minimal Menz Style</h2>
          <p className="pl">
            Lorem ipsum dolor sit amet, consectetur adipis . Sint dolorem
            aspernatur distinctio. nulla corporis .
          </p>
          <li>
            <a
              href="/"
              style={{
                color: "white",
                background: "black",
                borderRadius: "5px 0 5px 0",
                padding: "10px",
                position: "absolute",
                left: "34%",
              }}
            >
              Shop Now
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}
