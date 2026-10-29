import { motion, useReducedMotion, type Variants } from "framer-motion";

const lines = ["A place to", "call your", "own."];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const lineVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function HeroTitleMotion() {
  const reduceMotion = useReducedMotion();
  const content = lines.map((line) => <span key={line} className="block">{line}</span>);

  if (reduceMotion) {
    return <div className="font-display text-5xl leading-[0.98] tracking-editorial text-brand-ink sm:text-6xl md:text-7xl">{content}</div>;
  }

  return (
    <motion.div
      className="font-display text-5xl leading-[0.98] tracking-editorial text-brand-ink sm:text-6xl md:text-7xl"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {lines.map((line) => (
        <motion.span key={line} variants={lineVariant} className="block">{line}</motion.span>
      ))}
    </motion.div>
  );
}
