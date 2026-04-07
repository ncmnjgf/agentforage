import React from 'react';
import Header from '../components/AgentForge/Header';
import Hero from '../components/AgentForge/Hero';
import Features from '../components/AgentForge/Features';
import Footer from '../components/AgentForge/Footer';
import PageTransition from '../components/PageTransition';

const AgentForgeLanding = () => {
  return (
    <PageTransition>
      <div className="bg-surface min-h-screen">
        <Header />
        <main>
          <Hero />
          <Features />
          {/* We can add more sections here like Testimonials, Pricing, or CTA Banner */}
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default AgentForgeLanding;
