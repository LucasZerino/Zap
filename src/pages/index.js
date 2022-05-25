import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Features from "../components/Features";
import CallToAction from "../components/CallToAction";
import CallToActionTwo from "../components/CallToActionTwo";
import Pricing from "../components/Pricing";
import Counter from "../components/Counter";
import Screenshots from "../components/Screenshots";
import Faq from "../components/Faq";


const HomePage = () => (
  <Layout pageTitle="MeZap | Robô Delivery">
    <NavOne />
    <Banner />
    <Features />
    <CallToAction />
    <CallToActionTwo />
    <Pricing />
    <Screenshots />
    <Faq />
    <Footer />
  </Layout>
);

export default HomePage;
