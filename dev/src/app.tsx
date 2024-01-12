import { Glow, GlowCapture } from "solid-glow";
import type { Component } from "solid-js";

import "./main.css";

const App: Component = () => {
  return (
    <div>
      GLOW CAPTURE:
      <GlowCapture>
        <span>This won't glow</span>
        <Glow color="hsl(338.69 100% 48.04%)">
          <span class="glowable-text">
            This will glow pink when the mouse is passed over
          </span>
        </Glow>
      </GlowCapture>
    </div>
  );
};

export default App;
