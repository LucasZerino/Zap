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
              <a href="#none">Mensalmente</a>
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
              <a href="#none">Anualmente</a>
            </li>
          </ul>
          <div className="tabed-content">
            {this.state.month === true ? (
              <div id="month">
                <div className="row pricing-one__price-row">
                  <div
                    className="col-lg-4 animated fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="pricing-one__single text-center">
                      <h3>R$20.00</h3>
                      <p>pacote básico</p>
                      <ul className="list-unstyled">
                        <li>Funções Extras</li>
                        <li>Suporte Incluso</li>
                        <li>Opções de Upgrade</li>
                        <li>Acesso Completo</li>
                      </ul>
                      <a href="#none" className="thm-btn pricing-one__btn">
                        <span>Escolha Seu Plano</span>
                      </a>
                      <span className="tag-line">Sem Taxas Extras!</span>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 animated fadeInDown"
                    data-wow-duration="1500ms"
                  >
                    <div className="pricing-one__single text-center">
                      <h3>R$30.00</h3>
                      <p>pacote médio</p>
                      <ul className="list-unstyled">
                        <li>Funções Extras</li>
                        <li>Suporte Incluso</li>
                        <li>Opções de Upgrade</li>
                        <li>Acesso Completo</li>
                      </ul>
                      <a href="#none" className="thm-btn pricing-one__btn">
                        <span>Escolha seu Plano</span>
                      </a>
                      <span className="tag-line">SEM TAXAS EXTRAS!</span>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 animated fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="pricing-one__single text-center">
                      <h3>R$59.00</h3>
                      <p>pacote prêmio</p>
                      <ul className="list-unstyled">
                        <li>Funções Extras</li>
                        <li>Suporte Incluso</li>
                        <li>Opções de Upgrade</li>
                        <li>Acesso Completo</li>
                      </ul>
                      <a href="#none" className="thm-btn pricing-one__btn">
                        <span>Escolha seu Plano</span>
                      </a>
                      <span className="tag-line">Sem Taxas Extras!</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {this.state.year === true ? (
              <div id="year">
                <div className="row pricing-one__price-row">
                  <div
                    className="col-lg-4 animated fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="pricing-one__single text-center">
                      <h3>R$120.00</h3>
                      <p>pacote básico</p>
                      <ul className="list-unstyled">
                        <li>Funções Extras</li>
                        <li>Suporte Incluso</li>
                        <li>Opções de Upgrade</li>
                        <li>Acesso Completo</li>
                      </ul>
                      <a href="#none" className="thm-btn pricing-one__btn">
                        <span>Escolha seu Plano</span>
                      </a>
                      <span className="tag-line">Sem Taxas Extras!</span>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 animated fadeInDown"
                    data-wow-duration="1500ms"
                  >
                    <div className="pricing-one__single text-center">
                      <h3>R$230.00</h3>
                      <p>pacote médio</p>
                      <ul className="list-unstyled">
                        <li>Funções Extras</li>
                        <li>Suporte Incluso</li>
                        <li>Opções de Upgrade</li>
                        <li>Acesso Completo</li>
                      </ul>
                      <a href="#none" className="thm-btn pricing-one__btn">
                        <span>Escolha seu Plano</span>
                      </a>
                      <span className="tag-line">Sem Taxas Extras!</span>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 animated fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="pricing-one__single text-center">
                      <h3>R$340.00</h3>
                      <p>pacote prêmio</p>
                      <ul className="list-unstyled">
                        <li>Funções Extras</li>
                        <li>Suporte Incluso</li>
                        <li>Opções de Upgrade</li>
                        <li>Acesso Completo</li>
                      </ul>
                      <a href="#none" className="thm-btn pricing-one__btn">
                        <span>Escolha Seu Plano</span>
                      </a>
                      <span className="tag-line">Sem Taxas Extras!</span>
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
