import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);

  /**
   * A function for transit new mode 
   * @param  mode 
   */
  function transition(mode) {
    setMode(mode);
  }


  return { mode, transition };
};
