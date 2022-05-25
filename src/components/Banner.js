import React from "react";
import BannerMoc from "../assets/images/mocs/banner-moc-1-1.png";
import Gif from '../assets/images/gif/mezap.gif'
const Banner = () => {
  return (
    <section className="banner-one" id="banner">
      <span className="banner-one__shape-1"></span>
      <span className="banner-one__shape-2"></span>
      <span className="banner-one__shape-3"></span>
      <span className="banner-one__shape-4"></span>
      <div className="container">
        <div className="banner-one__moc">
          <img className="celular" src={Gif} alt="alter text" />
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            <div className="banner-one__content">
              <h3 className="banner-one__title">
                Mezap <br />
                <span>Robô Delivery</span> para  Whatsapp.
              </h3>
              <p className="banner-one__text">
              Robô de Cardápio para WhatsApp completo com envio de Listas e Botões para facilitar a resposta do cliente faça um teste grátis.

              </p>
              <a href="https://app.mezap.com.br/" target="_blank" className="banner-one__btn thm-btn ">
                <span>Teste Grátis</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
