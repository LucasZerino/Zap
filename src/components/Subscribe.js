import React from "react";

const Subscribe = () => {
  return (
    <section className="mailchimp-one" id='contato'>
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            Entre em contato <span>conosco</span> <br /> para consultar planos.
          </h2>
        </div>
        <form
          action="#"
          className="mailchimp-one__mc-form mc-form"
          data-url="#"
        >
          <label htmlFor="mc-email" className="sr-only">
            Add email
          </label>
          <input
            type="email"
            id="mc-email"
            className="formInput"
            placeholder="Email"
          />
          <button type="submit">
            <i className="dimon-icon-right-arrow"></i>
          </button>
        </form>
        <div className="mc-form__response"></div>
      </div>
    </section>
  );
};
export default Subscribe;
