import React from "react";

export default function Header() {
  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar bg-info shadow-sm p-3 mb-5">
          <div className="container-fluid">
            <a className="navbar-brand mx-auto text-white fs-2" href="#/">
              Noteself
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
