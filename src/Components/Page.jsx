import React from "react";

export default function Page() {
  return (
    <div>
      <div
        className="page-header"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#e1758833",
        }}
      >
        <h4
          className="page-title"
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            textAlign: "center",
            padding: "35px 0px 35px 0px",
          }}
        >
          Customer Testimonial
        </h4>
        <p
          className="page-description"
          style={{
            width: "50%",
            textAlign: "center",
            fontSize: "20px",
            fontStyle: "italic",
          }}
        >
          Everybody is different, which is why we offer styles fo every body.
          laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos
          facilis neque nulla earum.
        </p>
        <div
          className="cru"
          style={{
            display: "flex",
            alignItems: "center",
            margin: "30px 0px 30px 0px",
            gap: "20px",
          }}
        >
          <img src="../public/assets/images/wearingglass.png" alt="" />
          <div className="as">
            <p className="gl">Petey cruiser</p>
            <h5>Designed at colorlib</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
