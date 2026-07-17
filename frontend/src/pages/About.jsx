import React from 'react'
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
/* ---------- Helper Decorations (unchanged) ---------- */
const Starburst = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className}>
    {Array.from({ length: 24 }).map((_, i) => {
      const a = (i * 15 * Math.PI) / 180;
      const r1 = 22;
      const r2 = i % 2 ? 40 : 46;
      return <line key={i} x1={50 + r1 * Math.cos(a)} y1={50 + r1 * Math.sin(a)} x2={50 + r2 * Math.cos(a)} y2={50 + r2 * Math.sin(a)} />;
    })}
  </svg>
);

const Asterisk = ({ className = "" }) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className={className}>
    {Array.from({ length: 6 }).map((_, i) => {
      const a = (i * 30 * Math.PI) / 180;
      return <line key={i} x1={24 - 18 * Math.cos(a)} y1={24 - 18 * Math.sin(a)} x2={24 + 18 * Math.cos(a)} y2={24 + 18 * Math.sin(a)} />;
    })}
  </svg>
);


const AboutHero = () => {
  return (
    <section className="bg-white">
      <div
        className="
          relative
          overflow-hidden
          rounded-b-[40px]
          bg-[#F26418]
          px-4
          py-20
          md:px-8
          md:py-28
          lg:px-[170px]
        "
      >
        {/* Decorations (unchanged) */}
        <div className="pointer-events-none absolute inset-0 text-white/30">
          <Starburst className="absolute right-[16%] top-8 h-16 w-16 md:h-20 md:w-20" />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="absolute right-[4%] top-[38%] hidden h-4 w-4 md:block"
          >
            <circle cx="12" cy="12" r="9" />
          </svg>
          <svg
            viewBox="0 0 120 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            className="absolute bottom-16 right-[14%] hidden h-6 w-32 md:block"
          >
            <path d="M2 12 Q12 2 22 12 T42 12 T62 12 T82 12 T102 12 T118 12" />
          </svg>
          <Asterisk className="absolute right-2 top-[58%] h-10 w-10 md:h-12 md:w-12" />
        </div>

        {/* Content – paraphrased */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl lg:ml-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-extrabold tracking-tight text-white"
            style={{
              fontFamily: 'Inter, "Inter Placeholder", sans-serif',
              fontSize: "clamp(38px, 6vw, 64px)",
              lineHeight: 1.02,
              letterSpacing: "-2px",
            }}
          >
            Advancing the Future of Civil Engineering
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl"
          >
            With deep roots in civil engineering and infrastructure monitoring,
            TeraStamp is transforming how data intelligence enhances safety,
            efficiency, and sustainability across modern infrastructure projects.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

const OurStorySection = () => {
  return (
    <section className="overflow-hidden bg-white py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex rounded-xl bg-[#F26418] px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-white sm:text-sm">
                Our Journey
              </span>
            </div>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#32353A] sm:text-4xl md:text-5xl">
              Building Tomorrow's
              <br />
              <span className="text-[#F26418]">Infrastructure</span>
            </h2>
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-[#5C636E] sm:text-base md:text-lg">
              <p>
                Born from a vision to revolutionize infrastructure intelligence,
                TeraStamp combines engineering expertise, geospatial analytics,
                and real‑time monitoring to empower organizations with smarter
                decision‑making.
              </p>
              <p>
                Our platform delivers actionable insights, advanced visualization,
                and seamless data integration, helping infrastructure projects
                become safer, more sustainable, and more efficient.
              </p>
              <p>
                We are more than a technology provider – we are a trusted ally
                for engineers, governments, and enterprises striving to unlock
                the full value of their infrastructure data.
              </p>
            </div>
          </motion.div>

          {/* Right Visual — Image with continuous shine */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-8 lg:mt-0"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="shine-card relative overflow-hidden rounded-2xl border border-[#E2E5E9] bg-[#26282C] shadow-lg"
            >
              <img
                src="/Vertical_Logo_Black_Backgrounds_TeraStamp.png"
                alt="TeraStamp team building infrastructure intelligence"
                className="mt-[-15px] mb-[-35px] h-full w-full object-cover"
              />

              {/* Shine overlay — top-left → bottom-right, continuous */}
              <span aria-hidden className="shine-overlay" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .shine-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            135deg,
            transparent 30%,
            rgba(255, 255, 255, 0.06) 42%,
            rgba(255, 255, 255, 0.28) 50%,
            rgba(255, 255, 255, 0.06) 58%,
            transparent 70%
          );
          background-size: 250% 250%;
          background-repeat: no-repeat;
          animation: shineSweep 3.2s linear infinite;
        }

        @keyframes shineSweep {
          0% {
            background-position: 130% 130%;
          }
          100% {
            background-position: -130% -130%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .shine-overlay {
            animation: none;
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

const DifferenceSection = () => {
  const [active, setActive] = useState(0);

  const features = [
    {
      title: "Simplicity",
      description:
        "Intuitive design, total control – our user-friendly interface and experience bring efficiency together with simplicity.",
      image: "/simplicity.jpeg",
    },
    {
      title: "Flexibility",
      description:
        "Tailored reporting, limitless visualization, customized dashboards, and multiple data integrations through our adaptable platform.",
      image: "/flexibility.jpeg",
    },
    {
      title: "Versatility",
      description:
        "From start to finish – smoothly connects applications, modules, and technologies for complete coverage across the project lifecycle.",
      image: "/versatility.jpeg",
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#26282C]/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-4xl font-semibold text-white md:text-6xl">
            What Sets Us <span className="text-[#F26418]">Apart?</span>
          </h2>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 flex flex-col gap-8 lg:order-1">
            {features.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                className="cursor-pointer"
              >
                <motion.h3
                  animate={{
                    x: active === index ? 10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`text-4xl md:text-6xl font-bold transition-all duration-300 ${
                    active === index
                      ? "text-[#F26418]"
                      : "text-[#F26418]/50 hover:text-[#F26418]"
                  }`}
                >
                  {item.title}
                </motion.h3>

                <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  x: -30,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
              >
                <img
                  src={features[active].image}
                  alt={features[active].title}
                  className="h-[220px] w-full object-cover sm:h-[300px] md:h-[380px]"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute -z-10 rounded-3xl bg-[#F26418]/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCTASection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            whileInView={{ opacity: 0.15, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute right-0 top-10 hidden md:block"
          >
            <span className="text-[180px] font-bold text-[#F26418]">
              ”
            </span>
          </motion.div>

          <h2 className="text-2xl font-semibold leading-tight text-[#32353A] md:text-4xl lg:text-5xl">
            We rely on <span className="text-[#F26418]">TeraStamp</span> to manage geological mapping
            parameters, convergence data, and displacement patterns across our
            tunnels. It gives us total visibility and control over the entire
            construction process.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <div>
        <SEO
        title="About TeraStamp | Infrastructure Monitoring Platform"
        description="Learn about TeraStamp, an AI-powered Digital Twin and Infrastructure Monitoring Platform."
        keywords="About TeraStamp, Infrastructure Monitoring, Digital Twin"
      />
      <AboutHero />
      <OurStorySection />
      <DifferenceSection />
      <TestimonialCTASection />
    </div>
  );
};

export default About;