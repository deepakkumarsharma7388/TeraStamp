// src/pages/AlertsRiskManagement.jsx


import React from "react";
import SEO from "../../components/SEO.jsx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Bell,
  Check,
  SlidersHorizontal,
  TriangleAlert,
  MailCheck,
  GitBranch,
} from "lucide-react";

const AlertsRiskManagement = () => {
  const stats = [
    {
      value: "3",
      label: "Action, Alert & Alarm Levels",
    },
    {
      value: "Custom",
      label: "Thresholds & Triggers",
    },
    {
      value: "Auto",
      label: "Notifications",
    },
    {
      value: "24/7",
      label: "Risk Monitoring",
    },
  ];

  const features = [
    "Custom thresholds & triggers",
    "Action, alert & alarm levels",
    "Automatic notifications",
    "Escalation workflows",
    "Email & SMS alert delivery",
    "Complete alert history & audit trail",
  ];

  const useCases = [
    {
      icon: <SlidersHorizontal size={28} />,
      title: "Custom Thresholds",
      desc: "Define your own trigger values for every instrument and parameter to match project specifications.",
    },
    {
      icon: <TriangleAlert size={28} />,
      title: "Multi-Level Warnings",
      desc: "Action, alert and alarm levels give teams a clear picture of risk severity as readings change.",
    },
    {
      icon: <MailCheck size={28} />,
      title: "Instant Notifications",
      desc: "Automatic notifications reach the right people the moment a threshold is crossed — no delays.",
    },
    {
      icon: <GitBranch size={28} />,
      title: "Escalation Workflows",
      desc: "Unacknowledged alerts escalate automatically through your team hierarchy until action is taken.",
    },
  ];

  return (
    <>
     <SEO
        title="Alerts & Risk Management Software | TeraStamp"
        description="Stay ahead of infrastructure risks with TeraStamp's Alerts & Risk Management software. Configure custom thresholds, multi-level alerts, automatic notifications, escalation workflows, and real-time monitoring to improve project safety and decision-making."
        keywords="Alerts and Risk Management, Infrastructure Monitoring Alerts, Risk Management Software, Custom Thresholds, Automatic Notifications, Escalation Workflows, Real-Time Monitoring, Early Warning System, Digital Twin Platform, Infrastructure Monitoring Software, Construction Monitoring, Tunnel Monitoring, Bridge Monitoring, Dam Monitoring, TeraStamp"
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
                <Bell size={18} className="text-[#F26418]" />
                <span className="text-sm font-semibold uppercase tracking-wider text-[#F26418]">
                  Alerts &amp; Risk Management
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-bold leading-[1.3] text-[#32353A] sm:text-4xl lg:text-[42px] lg:leading-[1.3]">
                Stay Ahead of Every Risk with{" "}
                <span className="text-[#F26418]">
                  Smart Alerts &amp; Escalations
                </span>
              </h1>

              <p className="mt-6 text-[18px] leading-8 text-[#5C636E]">
                TeraStamp watches your monitoring data around the clock.
                Set custom thresholds and triggers, define action, alert
                and alarm levels, and let automatic notifications and
                escalation workflows make sure the right people respond at
                the right time.
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
                  src="/allinone/alert.jpeg"
                  alt="Alerts and Risk Management Dashboard"
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
                  src="/allinone/alert2.jpeg"
                  alt="Alert Thresholds and Escalation Setup"
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
                  Proactive Risk Management
                </span>
              </h2>

              <p className="mt-6 text-[18px] leading-8 text-[#5C636E]">
                Don&apos;t wait for problems to become incidents. TeraStamp
                turns your monitoring data into an early-warning system
                that detects risks, notifies your team and tracks every
                response automatically.
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
              Alerts &amp; Risk Management for{" "}
              <span className="text-[#F26418]">
                Safer Project Delivery
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-[18px] leading-8 text-[#5C636E]">
              From threshold breaches to escalation chains, TeraStamp keeps
              your entire team informed and accountable so risks are
              handled before they become incidents.
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
            Ready to Catch Every Risk{" "}
            <span className="text-[#F26418]">
              Before It Becomes a Problem?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto mt-6 max-w-3xl text-[18px] leading-8 text-[#5C636E]"
          >
            See how TeraStamp&apos;s custom thresholds, multi-level alerts,
            automatic notifications and escalation workflows keep your
            projects safe and your team always one step ahead.
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

export default AlertsRiskManagement;