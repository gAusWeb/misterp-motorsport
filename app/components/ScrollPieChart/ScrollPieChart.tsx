import { motion, MotionValue, useTransform } from "framer-motion";

interface ScrollPieChartProps {
  scrollYProgress: MotionValue<number>; // Accept a Framer Motion prop
}

const ScrollPieChart: React.FC<ScrollPieChartProps> = ({ scrollYProgress }) => {
  return (
    <div style={{ position: "fixed", top: "20%", right: "20px" }}>
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#e6e6e6"
          strokeWidth="5"
          fill="none"
        />
        {/* Progress circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="#4caf50"
          strokeWidth="5"
          fill="none"
          strokeDasharray="283" // Circumference of the circle (2 * π * radius)
          strokeDashoffset={useTransform(
            scrollYProgress,
            (progress) => 283 - 283 * progress
          )} // Calculate offset based on progress
          style={{
            transform: "rotate(-90deg)", // Rotate to start the circle from the top
            transformOrigin: "center",
          }}
        />
      </svg>
    </div>
  );
};

export default ScrollPieChart;
