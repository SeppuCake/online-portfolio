import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { StarsCanvas } from "../components/canvas";

// ── Animation variants ────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, delay } },
});

// ── Status badge colour map ───────────────────────────────────────────────────
const statusColor = (status) => {
  if (!status) return "bg-gray-500/20 text-gray-300 border-gray-500/30";
  const s = status.toLowerCase();
  if (s.includes("deployed"))
    return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
  if (s.includes("completed"))
    return "bg-blue-500/20 text-blue-300 border-blue-500/30";
  if (s.includes("progress"))
    return "bg-amber-500/20 text-amber-300 border-amber-500/30";
  return "bg-gray-500/20 text-gray-300 border-gray-500/30";
};

// ── Tag colour map (reuse portfolio colours) ──────────────────────────────────
const tagBg = {
  "pink-text-gradient": "bg-pink-500/10 text-pink-300 border-pink-500/20",
  "blue-text-gradient": "bg-blue-500/10 text-blue-300 border-blue-500/20",
  "green-text-gradient":
    "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  "orange-text-gradient":
    "bg-orange-500/10 text-orange-300 border-orange-500/20",
};

// ── Gallery with lightbox ─────────────────────────────────────────────────────
const Gallery = ({ images, mainImage, name }) => {
  const allImages = [mainImage, ...images].filter(Boolean);

  if (allImages.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <motion.div
        variants={fadeUp(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full rounded-2xl overflow-hidden border border-white/10"
      >
        <img
          src={allImages[0]}
          alt={`${name} main screenshot`}
          className="w-full h-[420px] object-cover object-top hover:scale-[1.02] transition-transform duration-500"
        />
      </motion.div>

      {/* Thumbnail strip */}
      {allImages.length > 1 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {allImages.slice(1).map((img, i) => (
            <motion.div
              key={i}
              variants={fadeUp(0.15 + i * 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden border border-white/10 group"
            >
              <img
                src={img}
                alt={`${name} screenshot ${i + 2}`}
                className="w-full h-[160px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

// ── Feature card ──────────────────────────────────────────────────────────────
const FeatureCard = ({ title, desc, index }) => (
  <motion.div
    variants={fadeUp(index * 0.07)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5
               hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 group"
  >
    <div
      className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#ff9100]/60
                    group-hover:bg-[#ff9100] transition-colors duration-300"
    />
    <h4 className="text-white font-semibold text-[15px] mb-2">{title}</h4>
    <p className="text-[#aaa6c3] text-[13px] leading-relaxed">{desc}</p>
  </motion.div>
);

// ── Role pill ─────────────────────────────────────────────────────────────────
const RolePill = ({ label, desc, index }) => (
  <motion.div
    variants={fadeUp(index * 0.08)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="flex items-start gap-3 bg-white/[0.03] border border-white/[0.08]
               rounded-xl p-4 hover:border-[#ff9100]/30 transition-all duration-300"
  >
    <div
      className="w-8 h-8 rounded-full bg-[#ff9100]/20 flex items-center justify-center
                    text-[#ff9100] font-bold text-[12px] flex-shrink-0 mt-0.5"
    >
      {label
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 2)}
    </div>
    <div>
      <p className="text-white font-semibold text-[14px]">{label}</p>
      <p className="text-[#aaa6c3] text-[12px] mt-0.5">{desc}</p>
    </div>
  </motion.div>
);

// ── Main component ────────────────────────────────────────────────────────────
const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const topRef = useRef(null);

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "instant" });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-primary flex flex-col items-center justify-center gap-6">
        <StarsCanvas />
        <p className="text-white text-2xl font-bold">Project not found.</p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 rounded-xl bg-[#ff9100] text-black font-semibold
                     hover:bg-[#ff9100]/80 transition-colors"
        >
          ← Back to Portfolio
        </button>
      </div>
    );
  }

  const {
    name,
    longDescription,
    status,
    duration,
    team,
    tags,
    techStack,
    features,
    roles,
    image,
    gallery,
    source_code_link,
  } = project;

  return (
    <div
      ref={topRef}
      className="relative min-h-screen bg-primary overflow-x-hidden"
    >
      <StarsCanvas />

      {/* ── Back button ── */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 rounded-full
                     bg-black/60 backdrop-blur-md border border-white/10
                     text-white text-[13px] font-medium
                     hover:border-[#ff9100]/50 hover:text-[#ff9100]
                     transition-all duration-300 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">
            ←
          </span>
          Back
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-12 pt-28 pb-24">
        {/* ── Hero header ── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate="show"
          className="mb-14"
        >
          {/* Status + meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={`text-[12px] font-semibold px-3 py-1 rounded-full border ${statusColor(status)}`}
            >
              {status}
            </span>
            {duration && duration !== "N/A" && (
              <span className="text-[12px] text-[#aaa6c3] bg-white/[0.05] px-3 py-1 rounded-full border border-white/10">
                ⏱ {duration}
              </span>
            )}
            {team && (
              <span className="text-[12px] text-[#aaa6c3] bg-white/[0.05] px-3 py-1 rounded-full border border-white/10">
                👤 {team}
              </span>
            )}
          </div>

          {/* Project name */}
          <h1 className="text-white font-black text-[42px] sm:text-[56px] leading-tight tracking-tight mb-6">
            {name}
          </h1>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-[12px] font-medium px-3 py-1 rounded-full border
                            ${tagBg[tag.color] ?? "bg-white/10 text-white/70 border-white/10"}`}
              >
                {tag.name}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-[#ff9100]/40 via-white/10 to-transparent" />
        </motion.div>

        {/* ── Two-column layout: gallery + description ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Gallery */}
          <motion.div variants={fadeUp(0.1)} initial="hidden" animate="show">
            <Gallery images={gallery ?? []} mainImage={image} name={name} />
          </motion.div>

          {/* Description + tech stack */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-8"
          >
            {/* Description */}
            <div>
              <p className="text-[11px] font-semibold tracking-widest text-[#ff9100] uppercase mb-3">
                About this project
              </p>
              <p className="text-[#aaa6c3] text-[15px] leading-[1.9]">
                {longDescription}
              </p>
            </div>

            {/* Tech stack table */}
            {techStack && techStack.length > 0 && (
              <div>
                <p className="text-[11px] font-semibold tracking-widest text-[#ff9100] uppercase mb-3">
                  Tech stack
                </p>
                <div className="flex flex-col divide-y divide-white/[0.06]">
                  {techStack.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-3"
                    >
                      <span className="text-[#aaa6c3] text-[13px]">
                        {item.label}
                      </span>
                      <span className="text-white text-[13px] font-medium text-right max-w-[55%]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* GitHub link */}
            {source_code_link && (
              <a
                href={source_code_link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 w-fit px-5 py-3 rounded-xl
                           bg-[#ff9100]/10 border border-[#ff9100]/30 text-[#ff9100]
                           text-[13px] font-semibold hover:bg-[#ff9100]/20
                           transition-all duration-300 group"
              >
                View on GitHub
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            )}
          </motion.div>
        </div>

        {/* ── Features ── */}
        {features && features.length > 0 && (
          <div className="mb-20">
            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="text-[11px] font-semibold tracking-widest text-[#ff9100] uppercase mb-2">
                Features
              </p>
              <h2 className="text-white font-bold text-[28px] mb-8">
                What it does
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <FeatureCard key={i} title={f.title} desc={f.desc} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* ── User roles ── */}
        {roles && roles.length > 0 && (
          <div className="mb-20">
            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="text-[11px] font-semibold tracking-widest text-[#ff9100] uppercase mb-2">
                Access control
              </p>
              <h2 className="text-white font-bold text-[28px] mb-8">
                User roles
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {roles.map((r, i) => (
                <RolePill key={i} label={r.label} desc={r.desc} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* ── References ── */}
        {project.references && project.references.length > 0 && (
          <div className="mb-20">
            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="text-[11px] font-semibold tracking-widest text-[#ff9100] uppercase mb-2">
                Academic References
              </p>
              <h2 className="text-white font-bold text-[28px] mb-8">
                Research basis
              </h2>
            </motion.div>
            <div className="flex flex-col gap-3">
              {project.references.map((ref, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp(i * 0.08)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex gap-4 bg-white/[0.03] border border-white/[0.08]
                     rounded-xl p-4"
                >
                  <span className="text-[#ff9100] font-bold text-[13px] flex-shrink-0">
                    [{i + 1}]
                  </span>
                  <p className="text-[#aaa6c3] text-[13px] leading-relaxed">
                    {ref}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* ── Coming soon placeholder for projects without detail ── */}
        {(!features || features.length === 0) &&
          (!roles || roles.length === 0) && (
            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center gap-4 py-24
                       border border-dashed border-white/10 rounded-2xl text-center"
            >
              <div className="text-5xl">🚧</div>
              <p className="text-white font-bold text-xl">
                Detailed write-up coming soon
              </p>
              <p className="text-[#aaa6c3] text-[14px] max-w-md">
                This project page is being documented. Check back soon for the
                full breakdown!
              </p>
            </motion.div>
          )}

        {/* ── Footer nav ── */}
        <motion.div
          variants={fadeIn(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row
                     justify-between items-center gap-4"
        >
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-[#aaa6c3] text-[14px]
                       hover:text-[#ff9100] transition-colors duration-300 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-300">
              ←
            </span>
            Back to all projects
          </button>
          <p className="text-[#aaa6c3] text-[12px]">
            Hakeem Rahman · Portfolio
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
