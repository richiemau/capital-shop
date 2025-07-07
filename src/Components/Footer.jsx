import React from "react";

export default function Footer() {
  return (
    <div>
      <footer>
        <marquee>
          <p>© 2023 Capital. All rights reserved.</p>
          <p>Terms of Use | Privacy Policy</p>
        </marquee>
        <div className="footer-links">
          <a href="#">Facebook</a> | <a href="#">Twitter</a> |{" "}
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
}
