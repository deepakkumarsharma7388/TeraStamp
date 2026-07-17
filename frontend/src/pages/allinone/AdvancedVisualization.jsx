// src/pages/AdvancedVisualization.jsx


import React from "react";
import SEO from "../../components/SEO.jsx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Check,
  Box,
  LineChart,
  AreaChart,
  MapPin,
} from "lucide-react";

const AdvancedVisualization = () => {
  const stats = [
    {
      value: "3D",
      label: "Visualization Tools",
    },
    {
      value: "Multi",
      label: "Parameters per Graph",
    },
    {
      value: "50+",
      label: "Chart Types Supported",
    },
    {
      value: "Live",
      label: "Graph Updates",
    },
  ];

  const features = [
    "Advanced 3D visualization tools",
    "Multiple parameters per graph",
    "Shape array & settlement charts",
    "Location-referenced plots",
    "Customizable chart layouts",
    "Interactive zoom & data exploration",
  ];

  const useCases = [
    {
      icon: <Box size={28} />,
      title: "3D Ground Models",
      desc: "Visualize deformation, settlement and instrument data in interactive 3D views of your site.",
    },
    {
      icon: <LineChart size={28} />,
      title: "Multi-Parameter Analysis",
      desc: "Plot multiple instruments and parameters on a single graph to compare trends instantly.",
    },
    {
      icon: <AreaChart size={28} />,
      title: "Settlement & Shape Arrays",
      desc: "Generate settlement profiles and shape array charts to understand ground behaviour over time.",
    },
    {
      icon: <MapPin size={28} />,
      title: "Location-Referenced Plots",
      desc: "Every chart is linked to its exact site location, connecting data directly to the ground it represents.",
    },
  ];

  return (
    <>
    <SEO
        title="Advanced Visualization Software | TeraStamp"
        description="Visualize infrastructure monitoring data with TeraStamp's Advanced Visualization tools. Explore interactive 3D models, multi-parameter graphs, settlement charts, location-referenced plots, Digital Twin technology, and real-time engineering insights."
        keywords="Advanced Visualization, Infrastructure Visualization, 3D Visualization, Digital Twin Visualization, Multi Parameter Graphs, Settlement Charts, Shape Array Charts, Location Referenced Plots, Infrastructure Monitoring Software, Engineering Visualization, Construction Monitoring, GIS Visualization, Real-Time Data Visualization, TeraStamp"
      />

    <main className="overflow-hidden bg-white">

      {/* ================= HERO ================= */}

      <section className="bg-[#F5F6F7]">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-[50px] sm:px-6 md:pb-20 md:pt-[60px] lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
            >

              <div className="inline-flex items-center gap-2 rounded-lg bg-[#FFF4EC] px-4 py-2">
                <BarChart3 size={18} className="text-[#F26418]" />
                <span className="text-sm font-semibold uppercase tracking-wider text-[#F26418]">
                  Advanced Visualization
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-bold leading-[1.3] text-[#32353A] sm:text-4xl lg:text-[42px] lg:leading-[1.3]">
                See Your Monitoring Data with{" "}
                <span className="text-[#F26418]">
                  Advanced Visualization Tools
                </span>
              </h1>

              <p className="mt-6 text-[18px] leading-8 text-[#5C636E]">
                TeraStamp turns raw monitoring data into powerful visual
                insights. Explore 3D visualizations, plot multiple parameters
                on a single graph, generate shape array and settlement
                charts, and view location-referenced plots — all in one
                platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <Link
                  to="/contact"
                  className="rounded-lg bg-[#F26418] px-6 py-3 font-semibold text-white transition hover:bg-[#dd5b10]"
                >
                  Request Demo
                </Link>

                <Link
                  to="/features"
                  className="rounded-lg border border-[#E2E5E9] bg-white px-6 py-3 font-semibold text-[#32353A] transition hover:border-[#F26418] hover:text-[#F26418]"
                >
                  Explore Features
                </Link>

              </div>

            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
            >

              <div className="overflow-hidden rounded-2xl border border-[#E2E5E9] bg-white shadow-lg">

                <img
                  src="/allinone/visualization.jpeg"
                  alt="Advanced Visualization Dashboard"
                  className="h-full w-full object-cover"
                />

              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">

            {stats.map((stat, index) => (

              <motion.div
                key={index}
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay:index*.1 }}
                className="rounded-2xl border border-[#E2E5E9] bg-[#F5F6F7] p-6 text-center"
              >

                <h3 className="text-3xl font-bold text-[#F26418]">
                  {stat.value}
                </h3>

                <p className="mt-2 text-[#5C636E]">
                  {stat.label}
                </p>

              </motion.div>

            ))}

          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}

     {/* ================= FEATURES ================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* LEFT IMAGE */}

            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="overflow-hidden rounded-2xl border border-[#E2E5E9] bg-white shadow-lg">

                <img
                  src="/allinone/vizualization2.jpeg"
                  alt="3D Visualization and Charts"
                  className="h-full w-full object-cover"
                />

              </div>
            </motion.div>

            {/* RIGHT CONTENT */}

            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >

              <h2 className="text-3xl font-bold leading-[1.3] text-[#32353A] sm:text-4xl lg:text-[42px] lg:leading-[1.3]">
                Everything You Need for{" "}
                <span className="text-[#F26418]">
                  Powerful Data Visualization
                </span>
              </h2>

              <p className="mt-6 text-[18px] leading-8 text-[#5C636E]">
                From simple time-series graphs to complex 3D models,
                TeraStamp gives engineers the visualization tools they need
                to understand site behaviour at a glance and communicate
                findings clearly.
              </p>

              <div className="mt-8 space-y-3">

                {features.map((feature, index) => (

                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.12,
                    }}
                    className="flex items-start gap-4"
                  >

                    <Check
                      size={20}
                      className="mt-1 rounded-full bg-[#F26418] p-1 text-white flex-shrink-0"
                    />

                    <span className="text-[18px] leading-7 text-[#5C636E]">
                      {feature}
                    </span>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          </div>

        </div>
      </section>
      {/* ================= USE CASES ================= */}

      <section className="bg-[#F5F6F7]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <h2 className="text-3xl font-bold leading-[1.3] text-[#32353A] sm:text-4xl lg:text-[42px] lg:leading-[1.3]">
              Advanced Visualization for{" "}
              <span className="text-[#F26418]">
                Deeper Site Insights
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-[18px] leading-8 text-[#5C636E]">
              From 3D ground models to multi-parameter comparison graphs,
              TeraStamp helps engineers see patterns, spot anomalies and
              make confident decisions faster.
            </p>

          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {useCases.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-2xl border border-[#E2E5E9] bg-white p-8 shadow-sm transition-all"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFF4EC] text-[#F26418]">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#32353A]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-[#5C636E]">
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA SECTION ================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 md:py-20 lg:px-8">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold leading-[1.3] text-[#32353A] sm:text-4xl lg:text-[42px] lg:leading-[1.3]"
          >
            Ready to Visualize Your Data in{" "}
            <span className="text-[#F26418]">
              a Whole New Dimension?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto mt-6 max-w-3xl text-[18px] leading-8 text-[#5C636E]"
          >
            See how TeraStamp transforms monitoring data into interactive
            3D views, multi-parameter graphs and location-referenced plots
            that make complex site behaviour easy to understand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contact"
              className="rounded-lg bg-[#F26418] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#dd5b10]"
            >
              Request a Demo
            </Link>

            <Link
              to="/features"
              className="rounded-lg border border-[#E2E5E9] bg-white px-8 py-3 text-base font-semibold text-[#32353A] transition hover:border-[#F26418] hover:text-[#F26418]"
            >
              Explore Features
            </Link>
          </motion.div>

        </div>
      </section>

    </main>
    </>
  );
};

export default AdvancedVisualization;