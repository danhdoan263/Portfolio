import React, { useState, useEffect } from "react";
import styles from "./TypingAnimation.module.scss";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  hideCursorWhenComplete?: boolean;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 100,
  delay = 0,
  className = "",
  onComplete,
  hideCursorWhenComplete = false,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentIndex < text.length) {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        } else {
          setIsComplete(true);
          if (onComplete) onComplete();
        }
      },
      currentIndex === 0 ? delay : speed
    );

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      <span
        className={`${styles.cursor} ${
          hideCursorWhenComplete && isComplete ? styles.hidden : ""
        }`}
        aria-hidden="true"
      />
    </span>
  );
};

export default TypingAnimation;
