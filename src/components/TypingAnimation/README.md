# TypingAnimation Component

Một React component tạo hiệu ứng typing (đánh máy) với cursor nhấp nháy, mô phỏng việc gõ phím thực tế.

## 🎬 Features

- ✅ **Typing Effect**: Hiển thị text từng ký tự một
- ✅ **Blinking Cursor**: Cursor nhấp nháy như terminal thật
- ✅ **Customizable Speed**: Tùy chỉnh tốc độ typing
- ✅ **Delay Support**: Thêm delay trước khi bắt đầu
- ✅ **Completion Callback**: Callback khi hoàn thành
- ✅ **Cursor Control**: Có thể ẩn cursor sau khi hoàn thành
- ✅ **TypeScript Support**: Fully typed
- ✅ **Performance Optimized**: Cleanup timers để tránh memory leaks

## 📦 Props

```typescript
interface TypingAnimationProps {
  text: string;                    // Text cần hiển thị (bắt buộc)
  speed?: number;                  // Tốc độ typing (ms/ký tự) - default: 100
  delay?: number;                  // Delay trước khi bắt đầu (ms) - default: 0
  className?: string;              // CSS class - default: ""
  onComplete?: () => void;         // Callback khi hoàn thành
  hideCursorWhenComplete?: boolean; // Ẩn cursor sau khi hoàn thành - default: false
}
```

## ⏱️ Cách tính Delay hợp lý

### 1. Công thức tính delay cho Sequential Animations

```typescript
// Công thức cơ bản
const calculateDelay = (previousTextLength: number, previousSpeed: number, pauseBetween: number = 200) => {
  const typingDuration = previousTextLength * previousSpeed;
  return typingDuration + pauseBetween;
};

// Ví dụ thực tế
const delays = {
  first: 500,           // Initial delay
  second: calculateDelay(6, 80, 300),    // "Hi, I'm" = 6 chars * 80ms + 300ms pause
  third: calculateDelay(9, 120, 400),    // "Danh Doan" = 9 chars * 120ms + 400ms pause
};
```

### 2. Best Practice Delays

```typescript
const delayGuidelines = {
  // Initial delay (trang mới load)
  initial: 500,         // User cần thời gian nhận biết

  // Delay giữa các animations
  short: 200,           // Cho text ngắn (<10 chars)
  medium: 300,          // Cho text trung bình (10-20 chars)  
  long: 500,            // Cho text dài (>20 chars)

  // Delay theo context
  sameContext: 100,     // Cùng 1 câu/ý tưởng
  newContext: 400,      // Chuyển topic mới
  dramatic: 800,        // Tạo hiệu ứng dramatic
};
```

### 3. Ví dụ áp dụng thực tế

```typescript
const OptimizedSequence = () => {
  const [step, setStep] = useState(0);
  
  const texts = [
    { text: "Hi, I'm", speed: 80 },
    { text: "Danh Doan", speed: 120 },
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
// Helper function để tính delay tự động
export const createSequentialDelays = (
  texts: string[], 
  speeds: number[], 
  options: {
    initialDelay?: number;
    betweenDelay?: number;
    contextBreaks?: number[]; // Indexes cần break dài hơn
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

// Usage
const texts = ["Hi, I'm", "Danh Doan", "Front-end developer"];
const speeds = [80, 120, 90];
const delays = createSequentialDelays(texts, speeds, {
  initialDelay: 500,
  betweenDelay: 300,
  contextBreaks: [2] // Index 2 sẽ có delay dài hơn
});
```

## 🚀 Cách sử dụng cơ bản

### Import component
```typescript
import TypingAnimation from "@components/TypingAnimation/TypingAnimation";
```

### Sử dụng đơn giản
```typescript
const BasicExample = () => {
  return (
    <div>
      <TypingAnimation text="Hello, World!" />
    </div>
  );
};
```

### Với tùy chỉnh speed và delay
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

## 🎯 Ví dụ nâng cao

### 1. Sequential Typing (Typing tuần tự)
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

### 2. Code Simulation (Mô phỏng code)
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

Component trả về `<span>` element, bạn có thể style tự do:

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

### 1. Cleanup Timers
Component tự động cleanup timers, không cần lo memory leaks.

### 2. Optimal Speed Settings
```typescript
// Recommended speeds for different use cases
const speeds = {
  fast: 50,      // Cho short text
  normal: 100,   // Cho general text  
  slow: 150,     // Cho dramatic effect
  code: 80,      // Cho code simulation
};
```

### 3. Conditional Rendering
Sử dụng conditional rendering cho sequential animations:
```typescript
// ✅ Good - Sequential rendering
{step1Complete && <TypingAnimation text="Step 2" />}

// ❌ Bad - All render at once với long delays
<TypingAnimation text="Step 2" delay={5000} />
```

## 🚨 Common Issues & Solutions

### Issue 1: Text không hiển thị
```typescript
// ❌ Wrong - Empty text
<TypingAnimation text="" />

// ✅ Correct - Provide text
<TypingAnimation text="Hello World" />
```

### Issue 2: Memory leaks khi unmount
Component tự động cleanup, nhưng nếu muốn manual:
```typescript
useEffect(() => {
  return () => {
    // Component tự cleanup, không cần làm gì
  };
}, []);
```

### Issue 3: Cursor vẫn hiện sau khi hoàn thành
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
// Component sử dụng "|" làm cursor
// Để custom, có thể fork component hoặc dùng CSS:

.typing-animation span:last-child {
  color: #00ff00;
  font-weight: bold;
}
```

### Integration với React Spring
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
import { render, screen } from '@testing-library/react';
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

- Sử dụng speed từ 50-150ms cho trải nghiệm tốt nhất
- Kết hợp với `hideCursorWhenComplete` cho sequential animations
- Test trên mobile để đảm bảo performance tốt
- Sử dụng `onComplete` callback để chain animations
- Không đặt delay quá lớn (>3000ms) để tránh user chờ đợi
- **Tính delay dựa trên độ dài text trước đó để animation mượt mà**
- **Sử dụng helper functions để tự động tính delay cho sequences dài**

Happy typing! 🚀 