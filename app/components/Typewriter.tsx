import { useState, useEffect } from "react";

const Typewriter = ({
  text,
  delay,
  infinite,
  Class = null,
}: {
  text: string;
  delay: number;
  infinite: boolean;
  Class?: string | null;
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: number | NodeJS.Timeout | undefined;

    if (currentIndex + 1 <= text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      // ADD THIS CHECK
      setCurrentIndex(0);
      setCurrentText("");
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return <span {...(Class && { className: Class })}>{currentText}</span>;
};

export default Typewriter;
