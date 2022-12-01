import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import Header from "../../components/Header";
import Login from "../../components/Login";

export default function login() {

// useEffect(() => {
//   console.log('statderk', dark)
// }, [])

  return (
    <div className="h-screen">
      <section className="container mx-auto">
        <Header title="Sign up" href="#"/>
      </section>
      <section className="container mx-auto pt-10 px-4">
        <Login />
      </section>
    </div>
  );
}
