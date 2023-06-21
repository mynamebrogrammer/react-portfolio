import React from 'react';
import 'animate.css';
import '../../Header.css';

export default function Header() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="header p-3 mt-4 text-center bg-dark text-light">
              <h1 className="font-weight-normal animate__animated animate__fadeIn">
                Habib Maksoud
              </h1>
              <h2 className="font-weight-normal animate__animated animate__fadeIn">
                Full Stack Web Developer
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
