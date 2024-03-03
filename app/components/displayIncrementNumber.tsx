import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
interface CounterProps {
  originalPower: number;
  gainsPower: number;
}

const Counter: React.FC<CounterProps> = ({ originalPower, gainsPower }) => {
  const [originalCount, setOriginalCount] = useState<number>(0);
  const originalPowerMeter = useRef<HTMLDivElement | null>(null);

  const [gainsCount, setGainsCount] = useState<number>(0);
  const gainsPowerMeter = useRef<HTMLDivElement | null>(null);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    const intervalTime = 1000 / originalPower;

    if (inView) {
      const intervalId = setInterval(() => {
        setOriginalCount((prevCount) => {
          if (prevCount < originalPower) {
            return prevCount + 1;
          } else {
            clearInterval(intervalId);
            return prevCount;
          }
        });
      }, intervalTime);

      const intervalGainsTime = 1000 / gainsPower;

      const intervalGainsId = setInterval(() => {
        setGainsCount((prevCount) => {
          if (prevCount < gainsPower) {
            return prevCount + 1;
          } else {
            clearInterval(intervalGainsId);
            return prevCount;
          }
        });
      }, intervalGainsTime);

      return () => (clearInterval(intervalId), clearInterval(intervalGainsId));
    } else {
      setOriginalCount(0);
      setGainsCount(0);
    }
  }, [inView, originalPower, gainsPower]);

  return (
    <div ref={ref} className="flex justify-between items-center w-full">
      <span ref={originalPowerMeter}>{originalCount}kW</span>
      <span ref={gainsPowerMeter}>{gainsCount}kW</span>
    </div>
  );
};

export default Counter;
