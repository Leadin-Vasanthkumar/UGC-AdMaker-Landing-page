/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { 
  ArrowRight, 
  Globe, 
  Play, 
  Sparkles, 
  Brain, 
  Code, 
  ChartNoAxesColumnIncreasing, 
  X, 
  Check, 
  WandSparkles, 
  Rocket, 
  VolumeX, 
  Plus, 
  Linkedin, 
  Twitter, 
  Github,
  Menu,
  Upload,
  ScanLine,
  Users
} from 'lucide-react';
import { ShineBorder } from '@/components/ui/shine-border';
import HolographicCard from '@/components/ui/holographic-card';
import { LiquidButton } from '@/components/ui/liquid-glass-button';

const LOGO_URL = "https://ugcadmaker.ai/_next/image?url=%2Flogo.png&w=3840&q=75";

const VIDEO_ADS = [
  "https://d1123smn8d6em4.cloudfront.net/landing-page-ads/elmdirt-ad.mp4",
  "https://d1123smn8d6em4.cloudfront.net/landing-page-ads/flowstate.mp4",
  "https://d1123smn8d6em4.cloudfront.net/landing-page-ads/healthify.mp4",
  "https://d1123smn8d6em4.cloudfront.net/landing-page-ads/olaplex-ad.mp4",
  "https://d1123smn8d6em4.cloudfront.net/landing-page-ads/b5%2B.mp4",
  "https://d1123smn8d6em4.cloudfront.net/landing-page-ads/sleepcycle.mp4",
  "https://d1123smn8d6em4.cloudfront.net/landing-page-ads/rocketmoney.mp4",
  "https://d1123smn8d6em4.cloudfront.net/landing-page-ads/calai-ad.mp4",
  "https://d1123smn8d6em4.cloudfront.net/landing-page-ads/gymshark-ad.mp4",
  "https://d1123smn8d6em4.cloudfront.net/landing-page-ads/theragun.mp4",
];

const FAQ_ITEMS = [
  {
    question: "What is UGC AdMaker?",
    answer: "UGC AdMaker is an AI-powered platform that helps you create authentic, high-converting UGC-style video ads in seconds. We use advanced AI avatars and structural mimicry to replicate winning ad frameworks."
  },
  {
    question: "Is it free to start?",
    answer: "Yes! You can start for free and explore our features. We offer various plans to scale your creative testing as your needs grow."
  },
  {
    question: "Can I use these ads for Facebook & TikTok?",
    answer: "Absolutely. Our ads are specifically engineered for social media platforms like Facebook, Instagram, and TikTok, optimized for high ROAS and engagement."
  },
  {
    question: "Do the avatars look real?",
    answer: "Yes, our AI avatars are hyper-realistic with natural emotions, lip-sync, and diversity, making them indistinguishable from real human creators in many contexts."
  },
  {
    question: "How long does it take to render?",
    answer: "Most videos render in under 60 seconds, allowing you to iterate and test hundreds of angles daily."
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-purple-500/30 selection:text-white overflow-x-hidden relative font-sans">
      {/* Noise Overlay */}
      {!shouldReduceMotion && (
        <div 
          className="fixed inset-0 z-[1] opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
      )}

      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-purple-900/10 via-transparent to-transparent opacity-60" />
      </div>

      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] md:w-auto min-w-[320px] md:min-w-[600px] rounded-full border ${isScrolled ? 'bg-black/40 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-2' : 'bg-transparent border-transparent py-4'}`}
      >
        <div className="flex items-center justify-between px-4 md:px-8 gap-8">
          <a href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 overflow-hidden group-hover:bg-white/10 transition-colors">
              <img src={LOGO_URL} alt="UGC AdMaker" className="object-cover w-full h-full" referrerPolicy="no-referrer" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white/90 group-hover:text-white transition-colors hidden sm:block">UGC AdMaker</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-white/50 hover:text-white transition-colors">About</a>
            <a href="#why-us" className="text-sm font-medium text-white/50 hover:text-white transition-colors">Why Us</a>
            <a href="#stats" className="text-sm font-medium text-white/50 hover:text-white transition-colors">Stats</a>
            <a href="#faq" className="text-sm font-medium text-white/50 hover:text-white transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <a href="https://ugcadmaker.ai/auth/login" className="text-sm font-medium text-white/60 hover:text-white transition-colors px-2">Log in</a>
            <a href="https://ugcadmaker.ai/auth/register" className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">Sign up</a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white/80 hover:text-white p-1"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 mt-4 mx-auto w-full bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col gap-6">
                <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white/70 hover:text-white transition-colors">About</a>
                <a href="#why-us" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white/70 hover:text-white transition-colors">Why Us</a>
                <a href="#stats" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white/70 hover:text-white transition-colors">Stats</a>
                <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white/70 hover:text-white transition-colors">FAQ</a>
                <div className="h-px bg-white/10 w-full" />
                <a href="https://ugcadmaker.ai/auth/login" className="text-lg font-medium text-white/70 hover:text-white transition-colors">Log in</a>
                <a href="https://ugcadmaker.ai/auth/register" className="w-full py-4 rounded-2xl bg-white text-black text-center font-bold">Sign up</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main className="relative z-10 flex flex-col gap-0">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-50"
              title="Hero Background Video"
            >
              <source src="/Untitled%20video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/50 via-transparent to-[#030014]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-purple-500/20 blur-[120px] opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full mix-blend-screen opacity-30" />
          </div>

          <div className="relative z-10 text-center max-w-6xl mx-auto flex flex-col items-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl tracking-tight font-bold text-white mb-8 leading-[0.96] md:leading-[0.9]"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-400">Create AI&nbsp;UGC Ads<br />that </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">sell.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted mb-12 max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
            >
              Create stunning product videos, avatars, and ads that actually feel <span className="text-white font-medium">real</span>. Built for high <span className="text-white font-medium">ROAS</span>.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col md:flex-row items-center gap-4"
            >
              <a href="https://ugcadmaker.ai/auth/register" className="h-12 px-8 bg-white text-black font-semibold rounded-full flex items-center gap-2 hover:bg-gray-200 transition-all active:scale-95">
                Start for free <ArrowRight className="w-4.5 h-4.5" />
              </a>
              <a href="#how-it-works" className="h-12 px-8 bg-white/5 text-white font-medium rounded-full flex items-center border border-white/10 hover:bg-white/10 transition-all">
                How it works
              </a>
            </motion.div>
          </div>
        </section>

        {/* Stats Strip */}
        <motion.section 
          id="stats" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 border-y border-white/5 bg-white/[0.01] backdrop-blur-sm"
        >
          <div className="w-[95%] md:w-[80%] max-w-[1400px] mx-auto py-8 flex flex-wrap justify-center md:justify-between gap-8 md:gap-4">
            {[
              { label: "Videos Generated", value: "1.2M+" },
              { label: "Active Users", value: "85k+" },
              { label: "Avg. ROAS Increase", value: "3.4x" },
              { label: "Languages Supported", value: "40+" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center md:items-start"
              >
                <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">{stat.value}</div>
                <div className="text-xs md:text-sm font-medium text-muted-darker uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Infinite Scroll Video Carousel */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-[1400px] mx-auto py-10 overflow-hidden"
        >
          <div className="relative w-full mask-image-gradient">
            <div className="flex animate-infinite-scroll w-max gap-6 wrapper hover:[animation-play-state:paused]">
              {[...VIDEO_ADS, ...VIDEO_ADS, ...VIDEO_ADS].map((video, i) => (
                <div key={i} className="relative w-[200px] aspect-[9/16] rounded-xl flex-shrink-0 overflow-hidden bg-[#0A0A0A] border border-white/10 shadow-xl">
                  <video 
                    src={video} 
                    className="w-full h-full object-cover opacity-80" 
                    loop 
                    autoPlay 
                    muted 
                    playsInline 
                    aria-label={`UGC Ad example ${i + 1}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Features Grid */}
        <section id="features" className="py-20 md:py-32 relative z-10 w-[95%] md:w-[90%] xl:w-[80%] max-w-[1400px] mx-auto">
          <div className="w-full">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Everything you need to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">dominate the feed.</span>
              </h2>
              <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">We've packed the power of a Hollywood studio into a web app.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
              {/* Product-in-Hand */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="md:col-span-7"
              >
                <HolographicCard className="w-full h-full">
                  <ShineBorder 
                    className="w-full h-full rounded-[2.5rem] bg-white/[0.02] border border-white/5 p-8 md:p-12 relative overflow-hidden group hover:border-brand-purple/20 transition-all cursor-pointer"
                    borderRadius={40}
                    borderWidth={2}
                    color={["#A855F7", "#3B82F6"]}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative z-10 max-w-lg text-left">
                      <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold text-purple-400 uppercase tracking-widest mb-6">Flagship Feature</span>
                      <h3 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">Product-in-Hand</h3>
                      <p className="text-muted text-lg font-light leading-relaxed">Generate hyper-realistic POV shots. Your product, in an AI influencer's hand, perfectly lit and stabilized.</p>
                    </div>
                    <div className="mt-12 flex-1 w-full rounded-3xl overflow-hidden border border-white/5 bg-black/20 backdrop-blur-sm relative group-hover:scale-[1.02] transition-transform duration-500 ring-1 ring-white/10 shadow-2xl">
                      <video 
                        src="https://d1123smn8d6em4.cloudfront.net/features-assets/product%20in%20hand.mp4" 
                        className="w-full h-full object-cover" 
                        autoPlay 
                        muted 
                        loop 
                        playsInline 
                        title="Hyper-realistic POV shots demonstration"
                      />
                    </div>
                  </ShineBorder>
                </HolographicCard>
              </motion.div>

              {/* Link to Ads */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:col-span-5"
              >
                <HolographicCard className="w-full h-full">
                  <ShineBorder 
                    className="w-full h-full rounded-[2.5rem] bg-white/[0.02] border border-white/5 p-8 md:p-12 relative overflow-hidden group hover:border-blue-500/20 transition-all cursor-pointer"
                    borderRadius={40}
                    borderWidth={2}
                    color={["#3B82F6", "#14B8A6"]}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative z-10 mb-8 text-left">
                      <h3 className="text-3xl font-medium text-white mb-4">Link to Ads</h3>
                      <p className="text-muted text-sm font-light">Paste a URL. Get high-converting video ads in seconds.</p>
                    </div>
                    <div className="flex-1 w-full relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-blue-500/5 to-transparent mask-linear-fade">
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 gap-8">
                        <div className="relative w-full max-w-sm h-12 rounded-xl bg-black/40 border border-white/10 flex items-center px-4 overflow-hidden shadow-lg z-20">
                          <Globe className="w-4 h-4 text-muted-darker mr-3" />
                          <div className="h-2 w-24 bg-white/20 rounded-full" />
                          <div className="h-2 w-12 bg-white/20 rounded-full ml-2" />
                          <motion.div 
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-y-0 w-12 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent skew-x-12" 
                          />
                          <motion.div 
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="absolute right-3 w-2 h-2 rounded-full bg-green-500" 
                          />
                        </div>
                        <div className="relative w-full h-32 flex justify-center perspective-[1000px]">
                          <motion.div 
                            animate={{ x: [0, -100, 0] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="flex gap-4 absolute"
                          >
                            {[1, 2, 3, 4, 5].map(i => (
                              <motion.div 
                                key={i} 
                                whileHover={{ scale: 1.1, zIndex: 30 }}
                                className="w-20 h-32 rounded-lg bg-white/5 border border-white/10 relative overflow-hidden flex-shrink-0 group cursor-pointer"
                              >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                                <div className="absolute bottom-2 left-2 w-8 h-1 bg-white/30 rounded-full" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                                  <Play className="w-2.5 h-2.5 text-white fill-white" />
                                </div>
                              </motion.div>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </ShineBorder>
                </HolographicCard>
              </motion.div>

              {/* Creative Inspiration */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="md:col-span-12"
              >
                <HolographicCard className="w-full h-full">
                  <ShineBorder 
                    className="w-full h-full rounded-3xl bg-white/[0.02] border border-white/5 p-8 md:p-12 relative overflow-hidden group min-h-[500px] flex flex-col justify-between hover:border-brand-purple/20 transition-all cursor-pointer"
                    borderRadius={24}
                    borderWidth={2}
                    color={["#A855F7", "#F97316"]}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.1),transparent_50%)]" />
                    <div className="relative z-10 max-w-xl text-left">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-bold text-brand-purple uppercase tracking-widest mb-6">
                        <Sparkles className="w-3 h-3" /> Magic
                      </span>
                      <h3 className="text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight">Creative Inspiration</h3>
                      <p className="text-muted text-lg font-light leading-relaxed">Found a winning ad structure? Apply your brand assets to proven marketing frameworks in seconds.</p>
                    </div>
                    <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                      {[
                        { icon: Upload, label: "Upload", step: "01" },
                        { icon: ScanLine, label: "Analyze", step: "02" },
                        { icon: Users, label: "Branding", step: "03" },
                        { icon: Sparkles, label: "Generate", step: "04", active: true }
                      ].map((item, i) => (
                        <motion.div 
                          key={i} 
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                          className={`p-4 rounded-2xl border ${item.active ? 'bg-brand-purple/10 border-brand-purple/20' : 'bg-white/5 border-white/5'} flex flex-col gap-3 transition-colors`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.active ? 'bg-brand-purple/20 text-brand-purple' : 'bg-white/5 text-muted'}`}>
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[10px] font-mono opacity-50 mb-1">{item.step}</div>
                            <div className={`text-sm font-medium ${item.active ? 'text-white' : 'text-muted'}`}>{item.label}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ShineBorder>
                </HolographicCard>
              </motion.div>

              {/* 250+ Avatars */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -5 }}
                className="md:col-span-4 rounded-[2.5rem] bg-white/[0.02] border border-white/5 p-6 relative overflow-hidden group hover:border-pink-500/20 transition-all duration-500 h-[450px] flex flex-col justify-between cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 flex-1 w-full overflow-hidden mask-linear-fade h-[350px]">
                  <div className="grid grid-cols-3 gap-2 w-full px-2 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                    {[1, 2, 3].map(col => (
                      <motion.div 
                        key={col}
                        animate={{ y: [0, -200, 0] }}
                        transition={{ duration: 15 + col * 2, repeat: Infinity, ease: "linear" }}
                        className="flex flex-col gap-2"
                      >
                        {[1, 2, 3, 4, 5, 6].map(row => (
                          <div key={row} className="w-full aspect-[9/16] rounded-md bg-white/5 border border-white/5 overflow-hidden flex items-end justify-center pb-1 relative">
                            <div className={`w-full h-full bg-gradient-to-b ${row % 3 === 0 ? 'from-pink-500/20' : row % 3 === 1 ? 'from-purple-500/20' : 'from-orange-500/20'} to-transparent`} />
                            <div className="absolute w-3 h-3 bg-white/20 rounded-full mb-2" />
                            <div className="absolute w-5 h-2 bg-white/10 rounded-full -bottom-1" />
                          </div>
                        ))}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="relative z-20 pointer-events-none mt-2">
                  <h3 className="text-2xl font-medium text-white mb-0.5">250+ Avatars</h3>
                  <p className="text-muted text-xs">Real emotions. Real diversity.</p>
                </div>
              </motion.div>

              {/* Scriptwriter */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="md:col-span-4 rounded-[2.5rem] bg-white/[0.02] border border-white/5 p-6 relative overflow-hidden group hover:border-orange-500/20 transition-all duration-500 h-[450px] flex flex-col cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="flex items-center gap-3 mb-2">
                  <Brain className="text-orange-500 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-medium text-white">Scriptwriter</h3>
                </div>
                <p className="text-muted text-xs mb-4 leading-relaxed">Input a hook, get a viral script in seconds.</p>
                <div className="flex-1 w-full relative overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent p-6 flex flex-col items-center justify-center">
                  <div className="w-full max-w-[280px] space-y-3 relative z-10">
                    {[
                      { label: "Viral Hook", color: "bg-orange-500", text: "POV: You realized you've been overpaying for ads 💸" },
                      { label: "Core Message", color: "bg-blue-500", text: "Stop burning cash. Use AI to auto-generate high-converting creatives in seconds." },
                      { label: "Call to Action", color: "bg-green-500", text: "Try it free today 🚀" }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="relative overflow-hidden rounded-lg bg-black/40 border border-white/5 p-3 backdrop-blur-md"
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className={`w-1.5 h-1.5 rounded-full ${item.color} shadow-[0_0_8px_currentColor]`} />
                          <span className="text-[10px] uppercase tracking-wider font-bold text-muted">{item.label}</span>
                        </div>
                        <p className="text-xs text-gray-200 font-medium leading-relaxed">{item.text}</p>
                        <motion.div 
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" 
                        />
                      </motion.div>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>

              {/* Editor */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="md:col-span-4 rounded-[2.5rem] bg-white/[0.02] border border-white/5 p-6 relative overflow-hidden group hover:border-teal-500/20 transition-all duration-500 h-[450px] flex flex-col cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-medium text-white">Editor</h3>
                  <span className="px-2 py-0.5 rounded bg-teal-500/20 text-teal-400 text-[10px] font-bold uppercase">New</span>
                </div>
                <p className="text-muted text-xs mb-4">Customize every detail. Truly yours.</p>
                <div className="flex-1 w-full relative overflow-hidden rounded-xl border border-white/5 bg-black/40 flex flex-col items-center justify-center p-6 group-hover:border-teal-500/30 transition-colors duration-500">
                  <div className="w-full max-w-[260px] bg-white/5 rounded-xl border border-white/10 p-4 space-y-4 relative z-10 backdrop-blur-sm">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <div className="w-16 h-2 bg-white/10 rounded-full" />
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/50" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                        <div className="w-2 h-2 rounded-full bg-green-500/50" />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-20 h-[140px] rounded-lg bg-black/50 border border-white/10 overflow-hidden relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 bg-white/10 rounded-full" />
                        </div>
                      </div>
                      <div className="flex-1 space-y-3 pt-1">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="space-y-1.5">
                            <div className="flex justify-between">
                              <div className="w-8 h-1.5 bg-white/20 rounded-full" />
                              <div className="w-4 h-1.5 bg-white/10 rounded-full" />
                            </div>
                            <div className="h-1.5 w-full bg-white/10 rounded-full relative">
                              <motion.div 
                                animate={{ width: [`${20 + i * 10}%`, `${60 + i * 5}%`, `${20 + i * 10}%`] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                                className="absolute top-0 left-0 h-full bg-teal-500 rounded-full" 
                              />
                              <motion.div 
                                animate={{ left: [`${20 + i * 10}%`, `${60 + i * 5}%`, `${20 + i * 10}%`] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg" 
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Secondary Features */}
        <section id="performance" className="py-20 relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[95%] md:w-[80%] mx-auto">
            {[
              { icon: Brain, title: "Ad Intelligence", desc: "We reverse-engineer thousands of viral hits to build your creative strategy automatically.", color: "purple", stat: "10k+ Ads Analyzed" },
              { icon: Code, title: "Structural Mimicry", desc: "Don't just copy style. Copy the underlying structure of proven winners frame-by-frame.", color: "blue", stat: "99% Accuracy" },
              { icon: ChartNoAxesColumnIncreasing, title: "ROAS Engineered", desc: "Every pixel is optimized for performance metrics, not just aesthetics. A/B test ready.", color: "orange", stat: "3.4x Avg. ROAS" }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-10 rounded-[2.5rem] bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-${feature.color}-500/10 flex items-center justify-center border border-${feature.color}-500/20 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-7 h-7 text-${feature.color}-400`} />
                  </div>
                  <div className={`px-3 py-1 rounded-full bg-${feature.color}-500/10 border border-${feature.color}-500/20 text-[10px] font-bold text-${feature.color}-400 uppercase tracking-widest`}>
                    {feature.stat}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-muted leading-relaxed font-light text-lg">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Comparison Section */}
        <section id="why-us" className="py-32 relative z-10 w-full overflow-hidden">
          <div className="w-[95%] max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Stop burning your ad budget.</h2>
              <p className="text-muted text-lg md:text-xl font-light max-w-2xl mx-auto">The traditional agency model is dead. Scale your creative testing without the overhead.</p>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-8 lg:gap-24 relative items-stretch justify-center">
              {/* The Old Way */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full bg-[#050505] border border-white/5 rounded-3xl px-8 py-10 relative overflow-hidden group hover:border-white/10 transition-colors"
              >
                <div className="relative z-10 mb-8 flex flex-col items-center mx-auto text-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-muted uppercase tracking-widest mb-4">The Old Way</span>
                  <h3 className="text-2xl font-medium text-muted mb-1">Human Creators</h3>
                </div>
                <ul className="space-y-5 relative z-10 text-muted-darker text-base max-w-sm mx-auto">
                  {[
                    { text: "Find & negotiate with creators", price: "$200+" },
                    { text: "Ship physical products & wait", price: "$50+" },
                    { text: "Wait weeks for footage delivery", price: "Time" },
                    { text: "No control over output quality", price: "Risk" },
                    { text: "Expensive & slow to iterate", price: "Limited" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <X className="w-5 h-5 opacity-40 shrink-0" />
                        <span className="font-light">{item.text}</span>
                      </div>
                      <span className="font-mono text-sm opacity-60 ml-4">{item.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/5 flex flex-col justify-center items-center relative z-10 max-w-sm mx-auto">
                  <div className="text-2xl font-bold text-muted">$100-250+ <span className="text-sm font-normal text-muted-darker">per ad</span></div>
                </div>
              </motion.div>

              {/* Arrow */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                className="md:absolute left-1/2 top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center my-4 md:my-0"
              >
                <div className="w-12 h-12 rounded-full bg-[#050505] border border-white/10 shadow-2xl flex items-center justify-center text-muted-darker">
                  <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0 text-purple-400/80" />
                </div>
              </motion.div>

              {/* The New Way */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full bg-[#0A0A0A] border border-purple-500/30 rounded-3xl px-8 py-10 relative overflow-hidden group shadow-[0_0_40px_-15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_60px_-15px_rgba(168,85,247,0.3)] hover:border-purple-500/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />
                <div className="relative z-10 mb-8 flex flex-col items-center mx-auto text-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold text-purple-400 uppercase tracking-widest mb-4">
                    <Sparkles className="w-3 h-3 text-purple-400" /> The New Way
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">UGC AdMaker</h3>
                </div>
                <ul className="space-y-5 relative z-10 text-muted text-base max-w-sm mx-auto">
                  {[
                    "Select a hyper-realistic AI Avatar",
                    "AI writes high-converting scripts",
                    "Generate professional voiceovers",
                    "Render instantly in 60 seconds",
                    "Test 100s of angles to find winners"
                  ].map((item, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-3 border-b border-white/5 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-purple-400" />
                      </div>
                      <span className="font-light">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col justify-center items-center relative z-10 max-w-sm mx-auto text-center">
                  <div className="text-2xl font-black text-white px-4">Fraction of the cost</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-20 relative z-10 w-full">
          <div className="w-[95%] md:w-[80%] mx-auto relative">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Built for the next generation of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">performance marketing.</span>
              </h2>
              <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto font-light">Whether you're a solo founder or a global agency, we've got you covered.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: WandSparkles, title: "Creative Teams", desc: "Skip the studio. Ship 10x more creatives.", color: "purple" },
                { icon: ChartNoAxesColumnIncreasing, title: "Performance Marketers", desc: "Test new angles daily. Scale what works.", color: "orange" },
                { icon: Rocket, title: "Founders", desc: "Look like a Fortune 500 brand on day one.", color: "blue" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-10 rounded-[2.5rem] bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all duration-300 group relative overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex flex-col gap-6 relative z-10">
                    <div className={`w-14 h-14 rounded-2xl bg-${item.color}-500/10 border border-${item.color}-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`w-7 h-7 text-${item.color}-500`} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                      <p className="text-muted leading-relaxed font-light text-lg">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 relative z-10 w-[95%] md:w-[90%] xl:w-[80%] mx-auto"
        >
          <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
              <div className="order-2 lg:order-1">
                <motion.h2 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
                >
                  Go Global in clicks.
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-muted text-lg font-light leading-relaxed mb-10 max-w-lg"
                >
                  Don't limit your growth to one language. Our AI translates your winning ads with perfect lip-sync, preserving the original speaker's voice and emotion.
                </motion.p>
                
                <div className="flex flex-col gap-4">
                  {[
                    { lang: "English", status: "Original" },
                    { lang: "Spanish", status: "Native" },
                    { lang: "French", status: "Lip-Sync" },
                    { lang: "German", status: "Cloned" }
                  ].map((item, i) => (
                    <motion.button 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                      whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.08)" }}
                      className="group flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-500/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500 text-muted group-hover:text-white transition-all">
                          <Globe className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                          <h4 className="text-white font-medium text-sm">{item.lang}</h4>
                          <p className="text-[10px] text-muted-darker font-mono uppercase tracking-wider group-hover:text-purple-300">{item.status}</p>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="order-1 lg:order-2 flex justify-center"
              >
                <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-3xl overflow-hidden bg-black border border-white/10 shadow-2xl skew-y-[1deg] hover:skew-y-0 transition-transform duration-700 group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-transparent opacity-50 pointer-events-none z-10" />
                  <video 
                    src="https://d1123smn8d6em4.cloudfront.net/language/final%20language.mp4" 
                    className="w-full h-full object-cover" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    title="Global Language Translation Demo"
                  />
                  <div className="absolute bottom-6 right-6 z-20">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-colors"
                    >
                      <VolumeX className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section 
          id="faq" 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-20 pb-40 relative z-10 w-[95%] md:w-[90%] xl:w-[60%] mx-auto cursor-default"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-muted">Everything you need to know about scaling your ads with AI.</p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border border-white/5 bg-white/[0.02] rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.01] transition-colors"
                >
                  <span className={`text-lg font-medium transition-colors ${openFaq === i ? 'text-white' : 'text-muted'}`}>{item.question}</span>
                  <Plus className={`w-5 h-5 text-muted-darker transition-transform duration-300 ${openFaq === i ? 'rotate-45 text-white' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-muted leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative pt-20 pb-12 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent pointer-events-none" />
        
        {/* Footer Glow */}
        <div className="absolute bottom-0 left-0 w-full h-[600px] overflow-hidden pointer-events-none">
          <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-[10%] -right-[10%] w-[40vw] h-[40vw] bg-orange-900/10 rounded-full blur-[100px]" />
        </div>

        <div className="w-full md:max-w-[85vw] mx-auto relative z-10">
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/[0.02] backdrop-blur-2xl px-8 md:px-12 py-16 rounded-[3rem] border border-white/5 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6 max-w-sm lg:col-span-3"
              >
                <a href="/" className="flex items-center gap-3 group">
                  <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/10 bg-white/5 group-hover:scale-105 transition-transform duration-300">
                    <img src={LOGO_URL} alt="Logo" className="object-cover w-full h-full" referrerPolicy="no-referrer" />
                  </div>
                  <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 tracking-tight">UGC AdMaker</span>
                </a>
                <p className="text-muted text-sm leading-relaxed font-medium">
                  Create authentic AI-style ads that sell. The #1 platform for performance-focused UGC video generation.
                </p>
                <div className="flex flex-col gap-2">
                  <a href="https://ugcadmaker.ai/contact" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">Contact Us →</a>
                  <a href="https://ugcadmaker.ai/affiliates" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">Affiliates →</a>
                </div>
              </motion.div>

              <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { title: "Features", items: ["AI UGC Generator", "AI Avatars", "Text to speech", "AI Facebook Ad Generator", "AI Tik-Tok Ad Generator", "AI Product Video Generator", "Talking AI Avatar", "Ad Structure Analysis", "AI Instagram Ads", "AI Product In Hand Ads", "AI Ecom UGC Ads"] },
                  { title: "Industries", items: ["E-Commerce", "SaaS", "Mobile Apps", "Lead Generation", "Marketing Agencies", "Insurance", "Real Estate Agencies"] },
                  { title: "Resources", items: ["AI YouTube Video Generator", "AI Tik-Tok Video Generator", "AI Facebook Video Ad Generator", "Facebook Ad Creative Testing", "Usecases"] },
                  { title: "Legal", items: ["Terms of Service", "Privacy Policy", "Refund Policy", "Custom Avatar Policy", "Fair Use Policy"] }
                ].map((column, i) => (
                  <motion.div 
                    key={column.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  >
                    <h4 className="text-white font-bold text-xl mb-6">{column.title}</h4>
                    <ul className="space-y-3">
                      {column.items.map(item => (
                        <li key={item}><a href="#" className="text-muted-darker hover:text-white transition-colors text-sm">{item}</a></li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <p className="text-muted-darker text-sm font-medium">© 2026 Brandscalez Digital Enterprise. All rights reserved.</p>
              <div className="flex items-center gap-4">
                {[Linkedin, Twitter, Github].map((Icon, i) => (
                  <motion.a 
                    key={i} 
                    href="#" 
                    whileHover={{ y: -4, color: "#fff" }}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted hover:bg-white/10 transition-all duration-300 border border-white/5"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 0.2, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full text-center mt-20 select-none pointer-events-none overflow-hidden"
          >
            <h1 className="text-[15vw] leading-[0.8] font-black text-white bg-clip-text bg-gradient-to-b from-white/5 to-transparent tracking-tighter whitespace-nowrap">UGC AdMaker</h1>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
