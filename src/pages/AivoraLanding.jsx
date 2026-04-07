import React from 'react';
import Header from '../components/AgentForge/Header';
import Hero from '../components/AgentForge/Hero';
import Categories from '../components/AgentForge/Categories';
import TrendingAgents from '../components/AgentForge/TrendingAgents';
import ForCreators from '../components/AgentForge/ForCreators';
import HowItWorks from '../components/AgentForge/HowItWorks';
import SocialProof from '../components/AgentForge/SocialProof';
import CtaSection from '../components/AgentForge/CtaSection';
import Footer from '../components/AgentForge/Footer';
import PageTransition from '../components/PageTransition';

const AivoraLanding = () => {
  return (
    <PageTransition>
      <div className="bg-surface min-h-screen">
        <Header />
        <main>
          <Hero />
          <Categories />
          <ForCreators />
          <HowItWorks />
          <SocialProof />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default AivoraLanding;
