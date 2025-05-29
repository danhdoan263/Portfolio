import React, { useState, useEffect } from "react";

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
  const [showCursor, setShowCursor] = useState(true);
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

  // Cursor blinking effect
  useEffect(() => {
    if (hideCursorWhenComplete && isComplete) {
      setShowCursor(false);
      return;
    }

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, [hideCursorWhenComplete, isComplete]);

  return (
    <span className={className}>
      {displayedText}
      {(!hideCursorWhenComplete || !isComplete) && (
        <span
          style={{
            opacity: showCursor ? 1 : 0,
            transition: "opacity 0.1s ease-in-out",
          }}
        >
          |
        </span>
      )}
    </span>
  );
};

export default TypingAnimation;
