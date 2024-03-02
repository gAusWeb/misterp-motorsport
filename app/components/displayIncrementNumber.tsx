import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
interface CounterProps {
  originalPower: number;
  gainsPower: number;
}

const Counter: React.FC<CounterProps> = ({ originalPower, gainsPower }) => {
  const [originalCount, setOriginalCount] = useState<number>(0);
  const [gainsCount, setGainsCount] = useState<number>(0);
  const originalPowerMeter = useRef(null);
  const gainsPowerMeter = useRef(null);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      const originalIntervalId = setInterval(() => {
        if (originalCount < originalPower) {
          setOriginalCount((prevCount) => prevCount + 1);
        } else {
          clearInterval(originalIntervalId);
        }
      }, 2);

      const gainsIntervalId = setInterval(() => {
        if (gainsCount < gainsPower) {
          setGainsCount((prevCount) => prevCount + 1);
        } else {
          clearInterval(gainsIntervalId);
        }
      }, 2);

      return () => (
        clearInterval(originalIntervalId), clearInterval(gainsIntervalId)
      );
    } else {
      setOriginalCount(0);
      setGainsCount(0);
    }
  }, [originalCount, originalPower, gainsCount, gainsPower, inView]);

  return (
    <div ref={ref} className="flex justify-between items-center w-full">
      <span ref={originalPowerMeter}>{originalCount}kW</span>
      <span ref={gainsPowerMeter}>{gainsCount}kW</span>
    </div>
  );
};

export default Counter;
