# TypingAnimation Component

A React component that creates a realistic typing effect with blinking cursor, simulating real keyboard input.

## 🎬 Features

- ✅ **Typing Effect**: Display text character by character
- ✅ **Blinking Cursor**: Realistic terminal-like cursor animation
- ✅ **Customizable Speed**: Adjust typing speed as needed
- ✅ **Delay Support**: Add delay before animation starts
- ✅ **Completion Callback**: Trigger functions when animation completes
- ✅ **Cursor Control**: Hide cursor after completion if needed
- ✅ **TypeScript Support**: Fully typed for better development experience
- ✅ **Performance Optimized**: Automatic timer cleanup to prevent memory leaks

## 📦 Props

```typescript
interface TypingAnimationProps {
  text: string;                    // Text to display (required)
  speed?: number;                  // Typing speed (ms/character) - default: 100
  delay?: number;                  // Delay before starting (ms) - default: 0
  className?: string;              // CSS class - default: ""
  onComplete?: () => void;         // Callback when completed
  hideCursorWhenComplete?: boolean; // Hide cursor after completion - default: false
}
```

## ⏱️ Calculating Reasonable Delays

### 1. Formula for Sequential Animation Delays

```typescript
// Basic formula
const calculateDelay = (previousTextLength: number, previousSpeed: number, pauseBetween: number = 200) => {
  const typingDuration = previousTextLength * previousSpeed;
  return typingDuration + pauseBetween;
};

// Real-world example
const delays = {
  first: 500,           // Initial delay
  second: calculateDelay(6, 80, 300),    // "Hi, I'm" = 6 chars * 80ms + 300ms pause
  third: calculateDelay(9, 120, 400),    // "Danh Doan" = 9 chars * 120ms + 400ms pause
};
```

### 2. Best Practice Delay Guidelines

```typescript
const delayGuidelines = {
  // Initial delay (page load)
  initial: 500,         // Give users time to recognize content

  // Delays between animations
  short: 200,           // For short text (<10 chars)
  medium: 300,          // For medium text (10-20 chars)  
  long: 500,            // For long text (>20 chars)

  // Context-based delays
  sameContext: 100,     // Same sentence/idea
  newContext: 400,      // New topic/section
  dramatic: 800,        // For dramatic effect
};
```

### 3. Real-world Implementation Example

```typescript
const OptimizedSequence = () => {
  const [step, setStep] = useState(0);
  
  const texts = [
    { text: "Hi, I'm", speed: 80 },
    { text: "John Doe", speed: 120 },
    { text: "Front-end developer", speed: 90 },
    { text: "// Welcome to my portfolio", speed: 60 },
  ];

  const calculateOptimalDelay = (index: number) => {
    if (index === 0) return 500; // Initial delay
    
    const prev = texts[index - 1];
    const typingTime = prev.text.length * prev.speed;
    
    // Adjust pause based on context
    const contextPause = index === 3 ? 600 : 300; // Longer pause before comment
    
    return typingTime + contextPause;
  };

  return (
    <div>
      {texts.map((item, index) => (
        step >= index && (
          <TypingAnimation
            key={index}
            text={item.text}
            speed={item.speed}
            delay={calculateOptimalDelay(index)}
            onComplete={() => setStep(step + 1)}
            hideCursorWhenComplete={index < texts.length - 1}
          />
        )
      ))}
    </div>
  );
};
```

### 4. Delay Calculator Helper

```typescript
// Helper function for automatic delay calculation
export const createSequentialDelays = (
  texts: string[], 
  speeds: number[], 
  options: {
    initialDelay?: number;
    betweenDelay?: number;
    contextBreaks?: number[]; // Indexes that need longer breaks
  } = {}
) => {
  const { 
    initialDelay = 500, 
    betweenDelay = 300,
    contextBreaks = []
  } = options;

  const delays = [initialDelay];
  
  for (let i = 1; i < texts.length; i++) {
    const prevText = texts[i - 1];
    const prevSpeed = speeds[i - 1];
    const typingTime = prevText.length * prevSpeed;
    
    // Longer delay for context breaks
    const isContextBreak = contextBreaks.includes(i);
    const pause = isContextBreak ? betweenDelay * 2 : betweenDelay;
    
    delays.push(typingTime + pause);
  }
  
  return delays;
};

// Usage example
const texts = ["Hi, I'm", "John Doe", "Front-end developer"];
const speeds = [80, 120, 90];
const delays = createSequentialDelays(texts, speeds, {
  initialDelay: 500,
  betweenDelay: 300,
  contextBreaks: [2] // Index 2 will have longer delay
});
```

## 🚀 Basic Usage

### Import component
```typescript
import TypingAnimation from "@components/TypingAnimation/TypingAnimation";
```

### Simple usage
```typescript
const BasicExample = () => {
  return (
    <div>
      <TypingAnimation text="Hello, World!" />
    </div>
  );
};
```

### With custom speed and delay
```typescript
const CustomExample = () => {
  return (
    <div>
      <TypingAnimation 
        text="Typing slowly..." 
        speed={150}
        delay={1000}
      />
    </div>
  );
};
```

## 🎯 Advanced Examples

### 1. Sequential Typing
```typescript
const SequentialExample = () => {
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  return (
    <div>
      <TypingAnimation 
        text="First line..." 
        speed={80}
        onComplete={() => setShowSecond(true)}
        hideCursorWhenComplete={true}
      />
      
      {showSecond && (
        <TypingAnimation 
          text="Second line..." 
          speed={100}
          delay={300}
          onComplete={() => setShowThird(true)}
          hideCursorWhenComplete={true}
        />
      )}
      
      {showThird && (
        <TypingAnimation 
          text="Final line with cursor" 
          speed={120}
          delay={300}
        />
      )}
    </div>
  );
};
```

### 2. Code Simulation
```typescript
const CodeExample = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="code-block">
      <TypingAnimation 
        text="const " 
        speed={80}
        onComplete={() => setStep(1)}
        hideCursorWhenComplete={true}
      />
      
      {step >= 1 && (
        <TypingAnimation 
          text="myVariable" 
          speed={90}
          delay={200}
          onComplete={() => setStep(2)}
          hideCursorWhenComplete={true}
        />
      )}
      
      {step >= 2 && (
        <TypingAnimation 
          text=" = " 
          speed={100}
          delay={300}
          onComplete={() => setStep(3)}
          hideCursorWhenComplete={true}
        />
      )}
      
      {step >= 3 && (
        <TypingAnimation 
          text='"Hello World"' 
          speed={60}
          delay={200}
        />
      )}
    </div>
  );
};
```

### 3. Styled Typing
```typescript
const StyledExample = () => {
  return (
    <div>
      <TypingAnimation 
        text="Welcome to my portfolio" 
        speed={100}
        delay={500}
        className="hero-title"
        onComplete={() => console.log('Animation completed!')}
      />
    </div>
  );
};
```

## 🎨 CSS Styling

The component returns a `<span>` element that you can style freely:

```scss
.hero-title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  font-family: 'Courier New', monospace;
}

.code-block {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 1rem;
  border-radius: 4px;
  font-family: 'Monaco', 'Menlo', monospace;
}
```

## ⚡ Performance Best Practices

### 1. Automatic Timer Cleanup
The component automatically cleans up timers to prevent memory leaks.

### 2. Optimal Speed Settings
```typescript
// Recommended speeds for different use cases
const speeds = {
  fast: 50,      // For short text
  normal: 100,   // For general text  
  slow: 150,     // For dramatic effect
  code: 80,      // For code simulation
};
```

### 3. Conditional Rendering
Use conditional rendering for sequential animations:
```typescript
// ✅ Good - Sequential rendering
{step1Complete && <TypingAnimation text="Step 2" />}

// ❌ Bad - All render at once with long delays
<TypingAnimation text="Step 2" delay={5000} />
```

## 🚨 Common Issues & Solutions

### Issue 1: Text not displaying
```typescript
// ❌ Wrong - Empty text
<TypingAnimation text="" />

// ✅ Correct - Provide text
<TypingAnimation text="Hello World" />
```

### Issue 2: Memory leaks on unmount
The component automatically handles cleanup, but if you need manual control:
```typescript
useEffect(() => {
  return () => {
    // Component handles cleanup automatically
  };
}, []);
```

### Issue 3: Cursor still visible after completion
```typescript
// ✅ Use hideCursorWhenComplete
<TypingAnimation 
  text="Completed text" 
  hideCursorWhenComplete={true}
/>
```

## 🔧 Advanced Configuration

### Custom Cursor Style
```typescript
// Component uses "|" as cursor by default
// To customize, you can fork the component or use CSS:

.typing-animation span:last-child {
  color: #00ff00;
  font-weight: bold;
}
```

### Integration with React Spring
```typescript
import { useSpring, animated } from 'react-spring';

const AnimatedTyping = () => {
  const [show, setShow] = useState(false);
  
  const fadeIn = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0px)' : 'translateY(20px)',
  });

  return (
    <animated.div style={fadeIn}>
      <TypingAnimation 
        text="Animated typing" 
        onComplete={() => setShow(true)}
      />
    </animated.div>
  );
};
```

## 📱 Responsive Considerations

```scss
// Responsive font sizes
.typing-text {
  font-size: clamp(1rem, 4vw, 2rem);
  
  @media (max-width: 768px) {
    font-size: clamp(0.875rem, 3.5vw, 1.5rem);
  }
}
```

## 🧪 Testing

```typescript
import { render, screen, waitFor } from '@testing-library/react';
import TypingAnimation from './TypingAnimation';

test('should render text after animation', async () => {
  render(<TypingAnimation text="Test" speed={10} />);
  
  // Wait for animation to complete
  await waitFor(() => {
    expect(screen.getByText(/Test/)).toBeInTheDocument();
  });
});
```

## 📄 License

MIT License - Feel free to use in your projects!

---

## 💡 Tips

- Use speeds between 50-150ms for the best user experience
- Combine with `hideCursorWhenComplete` for sequential animations
- Test on mobile devices to ensure good performance
- Use `onComplete` callback to chain animations
- Avoid delays longer than 3000ms to prevent user waiting
- **Calculate delays based on previous text length for smooth animations**
- **Use helper functions for automatic delay calculation in long sequences**

Happy typing! 🚀 