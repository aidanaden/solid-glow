import type { Component } from "solid-js";
import { Glow, GlowCapture } from "./../src/index";
import styles from "./App.module.css";
import logo from "./logo.svg";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
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
    </div>
  );
};

export default App;
