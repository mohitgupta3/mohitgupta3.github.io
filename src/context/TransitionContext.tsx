import React, { useState, createContext, ReactNode } from "react";
import gsap from "gsap";

interface ContextValue {
  timeline: any;
  setTimeline: any;
  background: string;
  setBackground: any;
}

const TransitionContext = createContext<ContextValue>({
  timeline: undefined,
  setTimeline: undefined,
  background: "",
  setBackground: undefined,
});

interface Props {
  children: ReactNode;
}

const TransitionProvider: React.FC<Props> = ({ children }) => {
  const [timeline, setTimeline] = useState(() =>
    gsap.timeline({ paused: true })
  );

  const [background, setBackground] = useState("white");

  return (
    <TransitionContext.Provider
      value={{
        timeline,
        setTimeline,
        background,
        setBackground,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export { TransitionContext, TransitionProvider };
