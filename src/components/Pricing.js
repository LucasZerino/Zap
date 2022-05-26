import React, { Component } from "react";

export default class Pricing extends Component {
  constructor() {
    super();
    this.state = {
      month: true,
      year: false
    };
  }

  handleToggle = () => {
    const month = this.state.month;
    const year = this.state.year;

    if (month) {
      this.setState({ year: true, month: false });
    }
    if (year) {
      this.setState({ year: false, month: true });
    }
  };

  render() {
    return (
      <section className="pricing-one" id="planos">
        <div className="container">
          <div className="block-title text-center">
            <h2 className="block-title__title">
              Escolha o <span>Plano</span> Que <br /> Atende Sua Necessidade.
            </h2>
          </div>
          <ul
            className="list-inline text-center switch-toggler-list"
            id="switch-toggle-tab"
          >
            <li className={this.state.month ? "month active" : "month"}>
              <a href="https://app.mezap.com.br/" target="_blank">Mensalmente</a>
            </li>
            <li>
              <div
                className={this.state.year ? "switch off" : "switch on"}
                role="button"
                tabIndex="-1"
                onClick={this.handleToggle}
                onKeyDown={this.handleToggle}
              >
                <span className="slider round"></span>
              </div>
            </li>
            <li className={this.state.year ? "year active" : "year"}>
              <a href="https://app.mezap.com.br/" target="_blank">Anualmente</a>
            </li>
          </ul>
          <div className="tabed-content">
            {this.state.month === true ? (
              <div id="month">
                <div className="row pricing-one__price-row">
                  <div
                    className="col-lg-3 animated fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="pricing-one__single text-center">
                      <h3>R$0.00</h3>
                      <p>Plano Gratuito</p>
                      <ul className="list-unstyled">
                        <li>02 menus</li>
                        <li>02 produtos</li>
                        <li>Mensagens limitadas</li>
                        <li>50 atendimentos/mês</li>
                      </ul>
                      <a href="https://app.mezap.com.br/" target="_blank" className="thm-btn pricing-one__btn">
                        <span>COMEÇAR</span>
                      </a>
                      <span className="tag-line">Sem Taxas Extras!</span>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 animated fadeInDown"
                    data-wow-duration="1500ms"
                  >
                    <div className="pricing-one__single text-center">
                      <h3>R$47.00</h3>
                      <p>Plano Start</p>
                      <ul className="list-unstyled">
                        <li>até 05 menus</li>
                        <li>até 10 produtos</li>
                        <li>Mensagens ilimitadas</li>
                        <li>300 atendimentos/mês</li>
                      </ul>
                      <a href="https://app.mezap.com.br/" target="_blank" className="thm-btn pricing-one__btn">
                      <span>CONTRATAR</span>
                      </a>
                      <span className="tag-line">SEM TAXAS EXTRAS!</span>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 animated fadeInUp ancora"
                    data-wow-duration="1500ms"
                  >
                    <div className="pricing-one__single text-center spanBotao">
                      <h3>R$97.00</h3>
                      <p>Plano Premium</p>
                      <p>Mais escolhido</p>
                      <ul className="list-unstyled">
                        <li>Menus ilimitados</li>
                        <li>Produtos ilimitados</li>
                        <li>Mensagens ilimitadas</li>
                        <li>1000 atendimentos/mês</li>
                      </ul>
                      <a href="https://app.mezap.com.br/" target="_blank" className="thm-btn pricing-one__btn">
                        <span>CONTRATAR</span>
                      </a>
                      <span className="tag-line">Sem Taxas Extras!</span>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 animated fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="pricing-one__single text-center">
                      <h3><br/></h3>
                      <p>Plano Interprise</p>
                      <ul className="list-unstyled">
                      <li>Menus ilimitados</li>
                        <li>Produtos ilimitados</li>
                        <li>Mensagens ilimitadas</li>
                        <li>Atendimentos ilimitados</li>
                      </ul>
                      <a href="#contato" className="thm-btn pricing-one__btn">
                        <span>CONSULTAR</span>
                      </a>
                      <span className="tag-line">Integração com seu sistema de gestão</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {this.state.year === true ? (
              <div id="year">
                <div className="row pricing-one__price-row">
                  <div
                    className="col-lg-3 animated fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="pricing-one__single text-center centos">
                    <h3>R$0.00</h3>
                      <p>Plano Gratuito</p>
                      <ul className="list-unstyled">
                        <li>02 menus</li>
                        <li>02 produtos</li>
                        <li>Mensagens limitadas</li>
                        <li>50 atendimentos/mês</li>
                      </ul>
                      <a href="https://app.mezap.com.br/" target="_blank" className="thm-btn pricing-one__btn">
                        <span>COMEÇAR</span>
                      </a>
                      <span className="tag-line">Sem Taxas Extras!</span>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 animated fadeInDown"
                    data-wow-duration="1500ms"
                  >
                    <div className="pricing-one__single text-center centos">
                      <h3>R$470.00</h3>
                      <p>Plano Start</p>
                      <ul className="list-unstyled">
                        <li>até 05 menus</li>
                        <li>até 10 produtos</li>
                        <li>Mensagens ilimitadas</li>
                        <li>300 atendimentos/mês</li>
                      </ul>
                      <a href="https://app.mezap.com.br/" target="_blank" className="thm-btn pricing-one__btn">
                      <span>CONTRATAR</span>
                      </a>
                      <span className="tag-line">SEM TAXAS EXTRAS!</span>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 animated fadeInUp ancora"
                    data-wow-duration="1500ms"
                  >
                    <div className="pricing-one__single text-center spanBotao centos">
                    <h3>R$970.00</h3>
                      <p>Plano Premium</p>
                      <p>Mais escolhido</p>
                      <ul className="list-unstyled">
                        <li>Menus ilimitados</li>
                        <li>Produtos ilimitados</li>
                        <li>Mensagens ilimitadas</li>
                        <li>1000 atendimentos/mês</li>
                      </ul>
                      <a href="https://app.mezap.com.br/" target="_blank" className="thm-btn pricing-one__btn">
                        <span>CONTRATAR</span>
                      </a>
                      <span className="tag-line">Sem Taxas Extras!</span>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 animated fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="pricing-one__single text-center">
                    <h3><br/></h3>
                      <p>Plano Interprise</p>
                      <ul className="list-unstyled">
                      <li>Menus ilimitados</li>
                        <li>Produtos ilimitados</li>
                        <li>Mensagens ilimitadas</li>
                        <li>Atendimentos ilimitados</li>
                      </ul>
                      <a href="#contato" className="thm-btn pricing-one__btn">
                        <span>CONSULTAR</span>
                      </a>
                      <span className="tag-line">Integração com seu sistema de gestão</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    );
  }
}
