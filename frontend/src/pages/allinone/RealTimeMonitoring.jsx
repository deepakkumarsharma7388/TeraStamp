// src/pages/RealTimeMonitoring.jsx


import React from 'react';
import SEO from "../../components/SEO.jsx";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Activity,
  Check,
  RadioTower,
  TrainFront,
  HardHat,
  Building2,
} from 'lucide-react';

const RealTimeMonitoring = () => {
  const features = [
    "Live & manual instrument readings in one unified view",
    "Continuous time-series data with second-level precision",
    "Action & alert levels overlaid directly on graphs",
    "Automatic data validation before it reaches your dashboard",
    "Historical playback to review past monitoring events",
    "Works seamlessly across tunnels, mining & construction sites",
  ];

  const stats = [
    { value: "24/7", label: "Continuous Monitoring" },
    { value: "1s", label: "Data Refresh Rate" },
    { value: "500+", label: "Instrument Types Supported" },
    { value: "99.9%", label: "Data Accuracy" },
  ];

  const useCases = [
    {
      icon: <TrainFront size={28} />,
      title: "Metro & Tunnel Projects",
      desc: "Track ground movement, convergence and settlement in real time during excavation and tunnelling works.",
    },
    {
      icon: <RadioTower size={28} />,
      title: "Mining Operations",
      desc: "Monitor slope stability, vibration and groundwater levels continuously across active mining zones.",
    },
    {
      icon: <HardHat size={28} />,
      title: "Construction Sites",
      desc: "Keep live watch on deep excavations, retaining walls and adjacent structures throughout construction.",
    },
    {
      icon: <Building2 size={28} />,
      title: "Structural Health",
      desc: "Continuously monitor bridges, dams and buildings with instant alerts when readings cross thresholds.",
    },
  ];

  return (
    <>
     <SEO
        title="Real-Time Infrastructure Monitoring Software | TeraStamp"
        description="Monitor tunnels, bridges, dams, mining sites, and construction projects in real time with TeraStamp. Collect live sensor data, validate readings automatically, visualize time-series graphs, and receive instant alerts for faster engineering decisions."
        keywords="Real-Time Monitoring, Infrastructure Monitoring Software, Live Sensor Monitoring, Time Series Monitoring, Structural Health Monitoring, Geotechnical Monitoring, Tunnel Monitoring, Bridge Monitoring, Dam Monitoring, Mining Monitoring, Construction Monitoring, Automated Data Validation, Digital Twin Platform, Engineering Monitoring, TeraStamp"
      />
    <main className="overflow-hidden bg-white">
      {/* ---------- Hero Section ---------- */}
      <section className="bg-[#F5F6F7]">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-[50px] sm:px-6 md:pb-20 md:pt-[60px] lg:px-8">

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-lg bg-[#FFF4EC] px-4 py-2">
                <Activity size={16} className="text-[#C2410C]" />
                <span className="text-sm font-semibold uppercase tracking-wider text-[#C2410C]">
                  Real-Time Monitoring
                </span>
              </div>

              {/* Heading */}
              <h1 className="mt-6 text-3xl font-bold leading-[1.3] text-[#32353A] sm:text-4xl lg:text-[42px] lg:leading-[1.3]">
                Monitor Every Instrument{" "}
                <span className="text-[#F26418]">in Real Time</span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-6 text-[18px] leading-[1.6] text-[#5C636E]"
              >
                TeraStamp continuously collects live and manual instrument
                readings from across your project site. Every data point is
                automatically validated, plotted on time-series graphs, and
                checked against action and alert thresholds — so your team
                always knows the true condition of the ground, structures,
                and assets.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link
                  to="/contact"
                  className="rounded-lg bg-[#F26418] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#d9560f]"
                >
                  Request a Demo
                </Link>
                <Link
                  to="/features"
                  className="rounded-lg border border-[#E2E5E9] bg-white px-6 py-3 text-base font-semibold text-[#32353A] transition hover:border-[#F26418] hover:text-[#F26418]"
                >
                  Explore All Features
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl border border-[#E2E5E9] bg-white shadow-lg"
              >
                <img
                  src="/allinone/realtimemonitoring1.jpeg"
                  alt="Real-time monitoring dashboard showing live instrument readings and alert levels"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------- Stats Section ---------- */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="rounded-2xl border border-[#E2E5E9] bg-[#F5F6F7] p-6 text-center"
              >
                <p className="text-3xl font-bold text-[#F26418]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-[#5C636E]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Features Section ---------- */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl border border-[#E2E5E9] bg-white shadow-lg"
              >
                <img
                  src="/allinone/realtimemonitoring2.jpeg"
                  alt="Time-series graph with action and alert levels overlaid"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              {/* Heading */}
              <h2 className="text-3xl font-bold leading-[1.3] text-[#32353A] sm:text-4xl lg:text-[42px] lg:leading-[1.3]">
                Everything You Need for{" "}
                <span className="text-[#F26418]">Live Site Visibility</span>
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-6 text-[18px] leading-[1.6] text-[#5C636E]"
              >
                From automatic sensor feeds to manual survey readings,
                TeraStamp keeps your monitoring data flowing, validated,
                and instantly visible to everyone who needs it.
              </motion.p>

              <div className="mt-8 space-y-3">
                {features.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.12, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <Check
                      size={20}
                      className="mt-0.5 flex-shrink-0 rounded-full bg-[#F26418] p-1 text-white"
                    />
                    <span className="text-[18px] leading-[1.5] text-[#5C636E]">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------- Use Cases Section ---------- */}
      <section className="bg-[#F5F6F7]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.3] text-[#32353A] sm:text-4xl lg:text-[42px] lg:leading-[1.3]">
              Real-Time Monitoring for{" "}
              <span className="text-[#F26418]">
                Every Project Environment
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-[18px] leading-8 text-[#5C636E]">
              From underground tunnels to high-rise structures, TeraStamp
              delivers live, validated monitoring data so teams can act on
              site conditions the moment they change.
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

      {/* ---------- CTA Section ---------- */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 md:py-20 lg:px-8">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold leading-[1.3] text-[#32353A] sm:text-4xl lg:text-[42px] lg:leading-[1.3]"
          >
            Ready to See Your Site{" "}
            <span className="text-[#F26418]">in Real Time?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-[18px] leading-[1.6] text-[#5C636E]"
          >
            Get a personalized walkthrough of TeraStamp's real-time
            monitoring tools and see how your team can respond faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contact"
              className="rounded-lg bg-[#F26418] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#d9560f]"
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



export default RealTimeMonitoring;