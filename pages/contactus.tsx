import React from "react";

import Header from "../components/Header";
import HireUs from "../components/HireUs";
import ContactUsForm from "../components/Contact";
import Footer from "../components/Footer";

export default function ContactUs() {
    return (
        <>
            <Header pagination={false} />
            <HireUs title="SEND A MESSAGE FOR US" />
            <ContactUsForm />
            <Footer />
        </>
    );
}
