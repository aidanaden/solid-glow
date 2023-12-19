import {
  Component,
  ComponentProps,
  createEffect,
  onCleanup,
  onMount,
  splitProps,
} from "solid-js";

type GlowCaptureProps = ComponentProps<"div"> & {
  size?: number;
};

export const GlowCapture: Component<GlowCaptureProps> = (props) => {
  const [local, rest] = splitProps(props, ["class", "children", "size"]);
  let element: HTMLDivElement;

  onMount(() => {
    const move = (e: PointerEvent) => {
      if (e.pointerType === "mouse") {
        requestAnimationFrame(() => {
          // @ts-ignore
          element.style.setProperty("--glow-x", `${e.offsetX}px`);
          // @ts-ignore
          element.style.setProperty("--glow-y", `${e.offsetY}px`);
        });
      }
    };

    const leave = () => {
      element.style.removeProperty("--glow-x");
      element.style.removeProperty("--glow-y");
    };

    element.addEventListener("pointermove", move, { passive: true });
    element.addEventListener("pointerleave", leave, { passive: true });

    onCleanup(() => {
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", leave);
    });
  });

  return (
    <div
      ref={(el) => (element = el)}
      class={`glow-capture ${local.class}`}
      style={{
        position: "relative",
        "--glow-size": `${local.size}px`,
      }}
      {...rest}
    >
      {local.children}
    </div>
  );
};

const mask = `
radial-gradient(var(--glow-size) var(--glow-size) at calc(var(--glow-x, -99999px) - var(--glow-left, 0px))
calc(var(--glow-y, -99999px) - var(--glow-top, 0px)), #000000 1%, transparent 50%)
`;

type GlowProps = ComponentProps<"div"> & {
  color: string;
  debug?: boolean;
};

export const Glow: Component<GlowProps> = (props) => {
  const [local, rest] = splitProps(props, [
    "class",
    "style",
    "children",
    "color",
    "debug",
  ]);
  let element: HTMLDivElement;

  createEffect(() => {
    element.style.setProperty("--glow-top", `${element.offsetTop}px`);
    element.style.setProperty("--glow-left", `${element.offsetLeft}px`);
  });

  onMount(() => {
    const observer = new ResizeObserver(() => {
      requestAnimationFrame(() => {
        element.style.setProperty("--glow-top", `${element.offsetTop}px`);
        element.style.setProperty("--glow-left", `${element.offsetLeft}px`);
      });
    });

    const capture = element.closest(".glow-capture");
    if (capture) {
      observer.observe(capture);
    }
    onCleanup(() => observer.disconnect());
  });

  return (
    <div ref={(el) => (element = el)} class="glow" style={{ display: "grid" }}>
      <div
        class={props.class}
        // style={props.style}
        style={{
          "grid-area": "1/1/1/1",
        }}
        {...props}
      >
        {local.children}
      </div>
      <div
        class={`glow-mask ${local.class}`}
        // @ts-ignore
        glow="true"
        style={{
          "--glow-color": local.color,
          "grid-area": "1/1/1/1",
          "pointer-events": "none",
          mask: local.debug ? undefined : mask,
          "-webkit-mask": local.debug ? undefined : mask,
        }}
        {...rest}
      >
        {local.children}
      </div>
    </div>
  );
};
