import React from "react";
import mocImage from "../assets/images/mocs/cta-moc-2-1.png";
const CallToActionTwo = () => {
  return (
    <section className="cta-two">
      <div className="container">
        <img src={mocImage} className="cta-two__moc" alt="alter text" />
        <div className="row">
          <div className="col-lg-6">
            <div className="cta-two__content">
              <i className="cta-two__icon dimon-icon-data"></i>
              <div className="block-title text-left">
                <h2 className="block-title__title">
                  Interaja com os <span>Clientes</span> <br /> em uma plataforma única.
                </h2>
              </div>
              <div className="cta-two__text">
                <p>
                Esqueça ficar mandando seu cliente clicar em Link, agora ele pode pedir tudo dentro do whatsapp

                </p>
                <p>
                  Benefícios imediatos para o seu negócio.
                </p>
              </div>
              <a  href="https://app.mezap.com.br/" target="_blank" className="thm-btn">
                <span>Teste Grátis</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToActionTwo;
