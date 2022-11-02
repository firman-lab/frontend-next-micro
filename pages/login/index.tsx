import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import Header from "../../components/Header";
import Login from "../../components/Login";
import { darkState } from "../../store";

export default function index() {
  const dark = useRecoilValue(darkState);

useEffect(() => {
  console.log('statderk', dark)
}, [])

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
