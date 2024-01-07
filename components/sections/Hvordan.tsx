import React from "react";
import Button from "../ui/LagButton";

function Hvordan() {
  return (
    <section className="mx-8 my-16 lg:m-16">
      <h2 className="md:text-2xl text-xl">
        Så lett er det å få i gang ditt mikrohus
      </h2>
      <Button text="Kontakt oss" slug="/kontakt" />
    </section>
  );
}

export default Hvordan;
