import { useEffect, useState, useRef } from "react";

interface AnimatedStatProps {
  value: string;
  className?: string;
}

export function AnimatedStat({ value, className = "" }: AnimatedStatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Parse strings like "15M+", "₹2000Cr+", "10,000+", "150+", "24/7"
  // For things like "24/7", we just render it without animating
  const match = value.match(/^([^0-9.-]*)([\d,.]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const numStr = match ? match[2].replace(/,/g, "") : "0";
  const suffix = match ? match[3] : "";
  const targetValue = parseFloat(numStr) || 0;
  const isFloat = numStr.includes(".");
  
  // Don't animate purely non-numeric or small/special strings like "24/7", "Q3", "100%"
  const shouldAnimate = match && targetValue > 0 && !value.includes("/");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (hasAnimated && shouldAnimate) {
      let startTimestamp: number | null = null;
      const duration = 2000; // 2 seconds

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // easeOutExpo
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(easeOut * targetValue);
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(targetValue);
        }
      };
      
      window.requestAnimationFrame(step);
    } else if (hasAnimated && !shouldAnimate) {
      setCount(targetValue);
    }
  }, [hasAnimated, targetValue, shouldAnimate]);

  if (!shouldAnimate) {
    return <span className={className}>{value}</span>;
  }

  // Format the display number
  const displayNum = hasAnimated 
    ? (isFloat ? count.toFixed(1) : Math.floor(count).toLocaleString('en-US'))
    : "0";

  return (
    <span ref={ref} className={className}>
      {prefix}{displayNum}{suffix}
    </span>
  );
}
