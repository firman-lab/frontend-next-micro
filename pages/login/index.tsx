import React from "react";
import Header from "../../components/Header";
import Login from "../../components/Login";

export default function index() {
  return (
    <>
      <section className="container mx-auto">
        <Header title="Sign up" href="#"/>
      </section>
      <section className="container mx-auto pt-10 px-4">
        <Login />
      </section>
    </>
  );
}
