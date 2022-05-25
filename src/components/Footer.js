import React, { Component } from "react";
import darkLogo from "../assets/images/resources/logo-dark.png";
export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      scrollBtn: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollTop = this.scrollTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 70) {
      this.setState({
        scrollBtn: true
      });
    } else if (window.scrollY < 70) {
      this.setState({
        scrollBtn: false
      });
    }
  }

  scrollTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div>
        <footer className="site-footer">
          <div className="site-footer__upper">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="footer-widget footer-widget__about">
                    <img
                      src={darkLogo}
                      width="119"
                      alt=""
                      className="footer-widget__logo"
                    />
                    <p className="footer-widget__contact">
                      <a href="tel:30134747">(84) 3013 4747</a>
                    </p>

                    <p className="footer-widget__contact">
                      <a href="contato@webck.com.br">
                        contato@webck.com.br
                      </a>
                    </p>
                    <p className="footer-widget__contact">
                      Rua alberto silva, 1265 <br /> Natal, RN
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-between footer-widget__links-wrap">
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Explore</h3>
                    <ul className="footer-widget__links list-unstyled">
                      <li>
                        <a href="#sobre">Sobre</a>
                      </li>
                      <li>
                        <a href="#home">Home</a>
                      </li>
                      <li>
                        <a href="#planos">Planos</a>
                      </li>
                      <li>
                        <a href="#faq">FAQ</a>
                      </li>
                      <li>
                        <a href="#interface">Interface</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Serviços</h3>
                    <ul className="footer-widget__links list-unstyled">
                      <li>
                        <a href="https://app.mezap.com.br/" target="_blank">Automação de vendas </a>
                      </li>
                      <li>
                        <a href="https://app.mezap.com.br/" target="_blank">Velocidade no atendimento </a>
                      </li>
                      <li>
                        <a href="https://app.mezap.com.br/" target="_blank">Atendimento 24 Horas </a>
                      </li>
                      <li>
                        <a href="https://app.mezap.com.br/" target="_blank">Listas e Botões práticos</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Links</h3>
                    <ul className="footer-widget__links list-unstyled">
                      <li>
                        <a href="https://app.mezap.com.br/" target="_blank">Ajuda </a>
                      </li>
                      <li>
                        <a href="https://app.mezap.com.br/" target="_blank">Suporte </a>
                      </li>
                      <li>
                        <a href="https://app.mezap.com.br/" target="_blank">Clientes </a>
                      </li>
                      <li>
                        <a href="https://www.webck.com.br/" target="_blank">Contacto</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="footer-widget">
                    <div className="site-footer__social">
                      <a
                        href="#s-link"
                        aria-label="social icon"
                        aria-hidden="true"
                      >
                        <i className="fa fa-facebook-square"></i>
                      </a>
                      <a
                        href="#none"
                        aria-label="social icon"
                        aria-hidden="true"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a
                        href="#none"
                        aria-label="social icon"
                        aria-hidden="true"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                      <a
                        href="#none"
                        aria-label="social icon"
                        aria-hidden="true"
                      >
                        <i className="fa fa-pinterest-p"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-footer__bottom">
            <div className="container">
              <div className="inner-container text-center">
                <p className="site-footer__copy">
                  &copy; copyright {new Date().getFullYear()} por {" "}
                  <a target="_blank" href="https://www.webck.com.br/">Mezap Robô Delivery - Desenvolvido por Webck Soluções</a>
                </p>
              </div>
            </div>
          </div>
        </footer>

        <div
          onClick={this.scrollTop}
          onKeyDown={this.scrollTop}
          role="button"
          tabIndex="0"
          className="scroll-to-target scroll-to-top"
          style={{ display: this.state.scrollBtn ? "block" : "none" }}
        >
          <i className="fa fa-angle-up"></i>
        </div>
      </div>
    );
  }
}
