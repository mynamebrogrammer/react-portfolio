import React from "react";
import "../../Footer.css";

export default function Footer() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="footer p-3 mt-4 text-center bg-dark text-light">
              Developed By-
              <span className="text-warning font-weight-normal">
                Habib Maksoud
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
