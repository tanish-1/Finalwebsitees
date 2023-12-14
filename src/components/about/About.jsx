import React from 'react';
import Footer from '../footer/Footer';

function About() {
  return (
    <div className="container mx-auto">
      <header>
        <h1 className="text-3xl font-bold mt-8 mb-4">About Us</h1>
      </header>
      <section className="content">
        <p>
          Welcome to our about page! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor urna a
          ligula aliquam, vel accumsan odio luctus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor urna a ligula aliquam, vel accumsan
          odio luctus. In hac habitasse platea dictumst.
        </p>
      </section>
      <footer className="text-center mt-8">
      <Footer/>
      </footer>
    </div>
  );
}

export default About;
