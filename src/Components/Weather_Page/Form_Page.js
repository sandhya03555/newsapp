import React from "react";

const Form = props => {
  return (
    <div className="container h-100">
      <form>
        <div>{props.error ? error() : ""}</div>
        <div className="row">
          <div className="inputclass">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              autoComplete="off"
            />
          </div>
          <div className="btn">
            <button className="btnstyle">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

const error = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country!
    </div>
  );
};

export default Form;
