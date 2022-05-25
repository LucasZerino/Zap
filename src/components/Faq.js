import React from "react";
import AccordionItem from "./AccordionItem";
import bgImage from "../assets/images/background/faq-one-bg.png";
const Faq = () => {
  return (
    <section className="faq-one" id="faq">
      <img src={bgImage} alt="alter text" className="faq-one__bg" />
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            Dúvidas <span>frequentes</span> <br />

          </h2>
        </div>
        <div className="accrodion-grp faq-accrodion">
          <AccordionItem
            title="Posso usar WhatsApp web e o ChatBot?"
            content="Sim, se seu Whatsapp estiver com multi device ativo.
            "
            status={true}
          />
          <AccordionItem
            title="Posso usar número fixo para WhatsApp?"
            content="Sim, nós instalamos o WhatsApp Business e o mesmo aceita colocar número fixo."
            status={false}
          />
          <AccordionItem
            title="Já utilizo um sistema em minha empresa, consigo fazer a integração?"
            content="Sim, temos essa opção no Pacote Avançado, é possível fazer a integração do seu sistema com o nosso."
            status={false}
          />
          <AccordionItem
            title="
            Funciona com celular Desligado?"
            content="Sim, seu dispositivo não precisa esta ligado ou conectado na internet para funcionamento do bot.
            "
            status={false}
          />
        </div>
      </div>
    </section>
  );
};
export default Faq;
