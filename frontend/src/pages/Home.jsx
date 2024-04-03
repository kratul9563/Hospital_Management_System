import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
import Departments from '../components/Departments'
import MessageForm from '../components/MessageForm'
import Typewriter from "typewriter-effect";


const Home = () => {
  return (
    <>
      <Hero
        title={"Welcome to HealthCare Medical Institute 👋 || Your trusted HealthCare Provider"}imageUrl={"/hero.png"}/>
    
      <Biography imageUrl={"/about.png"} />
      <Departments />
      <MessageForm />
    </>
  );
}

export default Home