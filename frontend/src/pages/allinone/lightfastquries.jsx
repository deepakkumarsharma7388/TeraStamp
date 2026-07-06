import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Zap,
  Check,
  Database,
  History,
  Gauge,
  LayoutDashboard,
} from "lucide-react";

const LightningFastQueries = () => {
  const stats = [
    {
      value: "3×",
      label: "Faster than Competition",
    },
    {
      value: "Millions",
      label: "Data Points in Seconds",
    },
    {
      value: "Instant",
      label: "Historical Lookups",
    },
    {
      value: "24/7",
      label: "Real-Time Performance",
    },
  ];

  const features = [
    "Millions of data points in seconds",
    "3× faster than competition",
    "Instant historical lookups",
    "Smooth, responsive dashboards",
    "Optimized time-series engine",
    "Zero-lag data exploration",
  ];

  const useCases = [
    {
      icon: <Database size={28} />,
      title: "Large Sensor Networks",
      desc: "Query millions of readings from thousands of instruments without any slowdown.",
    },
    {
      icon: <History size={28} />,
      title: "Historical Analysis",
      desc: "Instantly pull months or years of monitoring data for trend and comparison studies.",
    },
    {
      icon: <Gauge size={28} />,
      title: "Real-Time Alerts",
      desc: "Lightning-fast processing ensures threshold breaches are detected and reported instantly.",
    },
    {
      icon: <LayoutDashboard size={28} />,
      title: "Live Dashboards",
      desc: "Smooth, responsive dashboards that update in real time even with heavy data loads.",
    },
  ];

  return (
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
                <Zap size={18} className="text-[#F26418]" />
                <span className="text-sm font-semibold uppercase tracking-wider text-[#F26418]">
                  Lightning-Fast Queries
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-bold leading-[1.3] text-[#32353A] sm:text-4xl lg:text-[42px] lg:leading-[1.3]">
                Query Millions of Data Points with{" "}
                <span className="text-[#F26418]">
                  Lightning-Fast Speed
                </span>
              </h1>

              <p className="mt-6 text-[18px] leading-8 text-[#5C636E]">
                TeraStamp&apos;s high-performance query engine processes
                millions of monitoring data points in seconds. Run instant
                historical lookups, explore live sensor data, and power
                smooth, responsive dashboards — 3× faster than the
                competition.
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
                  src="/allinone/query1.jpeg"
                  alt="Lightning Fast Queries Dashboard"
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
                  src="/allinone/query2.jpeg"
                  alt="Fast Query Performance"
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
                  High-Speed Data Access
                </span>
              </h2>

              <p className="mt-6 text-[18px] leading-8 text-[#5C636E]">
                Access live and historical monitoring data without waiting.
                TeraStamp&apos;s optimized query engine keeps every chart,
                report and dashboard fast and responsive, no matter how
                large your project data grows.
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
              Lightning-Fast Performance for{" "}
              <span className="text-[#F26418]">
                Every Monitoring Workflow
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-[18px] leading-8 text-[#5C636E]">
              From massive sensor networks to deep historical analysis,
              TeraStamp delivers the query speed engineers need to make
              faster, data-driven decisions on site.
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
            Ready to Experience{" "}
            <span className="text-[#F26418]">
              Lightning-Fast Data Queries?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto mt-6 max-w-3xl text-[18px] leading-8 text-[#5C636E]"
          >
            See how TeraStamp processes millions of data points in seconds
            and keeps your dashboards smooth and responsive. Make faster
            decisions with instant access to all your monitoring data.
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
  );
};

export default LightningFastQueries;