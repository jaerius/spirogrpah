import * as React from "react";
import Nav from "../../components/NavBar/Navbar";
import Bar from "../../components/UnderBar/Bar";
import Vid from "../../assets/Contact/ContactVideo.mp4";
export default function ContactPage() {
  return (
    <>
      <Nav />
      <video src={Vid} loop autoPlay muted playsInline></video>
      <Bar />
    </>
  );
}
