import React from "react";

const Header = (props) => {
  function handleChange(event) {
    const value = event.target.value;
    props.setSearch(value);
  }

  return (
    <section>
      <h1 className="header-text">เที่ยวไหนดี</h1>
      <section className="input-section">
        <p className="inner-text">ค้นหาที่เที่ยว</p>
        <input
          value={props.search}
          className="input"
          type="text"
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
          onChange={(event)=>{
            handleChange(event)
          }}
        />
      </section>
    </section>
  );
};

export default Header;
