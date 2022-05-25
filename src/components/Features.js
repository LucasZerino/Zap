import React from "react";

const Features = () => {
  return (
    <section className="service-one" id="features">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            Confira o que o nosso <span>automatizador</span> <br /> pode fazer por você.
          </h2>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div className="service-one__single text-center">
              <div className="service-one__inner">
                <i className="service-one__icon dimon-icon-laptop"></i>
                <h3>
                  <a href="https://app.mezap.com.br/" target="_blank">
                    Aumentar a velocidade <br /> do atendimento
                  </a>
                </h3>
                <p>
                  Reduzimos o tempo <br /> do atendimento <br /> ao cliente
                </p>
                <a href="https://app.mezap.com.br/" target="_blank" className="service-one__link">
                  <i className="dimon-icon-right-arrow"> Teste Grátis</i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown"
            data-wow-duration="1500ms"
          >
            <div className="service-one__single text-center">
              <div className="service-one__inner">
                <i className="service-one__icon dimon-icon-presentation"></i>
                <h3>
                  <a href="https://app.mezap.com.br/" target="_blank">
                    Facilitamos a gestão <br /> de pedidos
                  </a>
                </h3>
                <p>
                  Organizamos os pedidos <br /> e taxas junto com o menu<br /> do seu negócio
                </p>
                <a href="https://app.mezap.com.br/" target="_blank" className="service-one__link">
                  <i className="dimon-icon-right-arrow"> Teste Grátis</i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div className="service-one__single text-center">
              <div className="service-one__inner">
                <i className="service-one__icon dimon-icon-target"></i>
                <h3>
                  <a href="https://app.mezap.com.br/" target="_blank">
                    Apenas com <br /> alguns clicks
                  </a>
                </h3>
                <p>
                  Envio de Listas e Botões <br /> assim com poucos cliques <br /> um pedido pode ser feito
                </p>
                <a href="https://app.mezap.com.br/" target="_blank" className="service-one__link">
                <i className="dimon-icon-right-arrow"> Teste Grátis</i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown"
            data-wow-duration="1500ms"
          >
            <div className="service-one__single text-center">
              <div className="service-one__inner">
                <i className="service-one__icon dimon-icon-visualization"></i>
                <h3>
                  <a href="https://app.mezap.com.br/" target="_blank">
                    Atendimento <br /> 24 Horas
                  </a>
                </h3>
                <p>
                Você terá um atendente <br /> trabalhando 24 horas por dia <br /> 7 dias por semana
                </p>
                <a href="https://app.mezap.com.br/" target="_blank" className="service-one__link">
                <i className="dimon-icon-right-arrow"> Teste Grátis</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
