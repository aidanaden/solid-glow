<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=solid-glow&background=tiles&project=%20" alt="solid-glow">
</p>

# solid-glow

>

[![size](https://img.shields.io/bundlephobia/minzip/solid-glow?style=for-the-badge)](https://bundlephobia.com/package/solid-glow)
[![size](https://img.shields.io/npm/v/solid-glow?style=for-the-badge)](https://www.npmjs.com/package/solid-glow)
![npm](https://img.shields.io/npm/dw/solid-glow?style=for-the-badge)
[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

[download-image]: https://img.shields.io/npm/dm/solid-glow.svg
[download-url]: https://npmjs.org/package/solid-glow

[![solid-glow](https://nodei.co/npm/solid-glow.png)](https://npmjs.org/package/solid-glow)

Add a mouse-tracing glow effect to React components.

![gif of glow effect](./media/glow.gif)

The glow effect will only work using the mouse as the pointer. Touch events will not trigger it.

## Quick start

Install it:

```bash
npm i solid-glow
# or
yarn add solid-glow
# or
pnpm add solid-glow
```

Use it:

Wrap any number of `<Glow>` components in a `<GlowCapture>` which will be used to track the mouse location.

```jsx
<GlowCapture>
  <span>This won't glow</span>
  <Glow color="purple">
    <span className="text-black glow:text-glow/50 glow:bg-red-100">
      This will glow purple when the mouse is passed over
    </span>
  </Glow>
</GlowCapture>
```

Children of `<Glow>` can style themselves how to look when glowing. You might choose to leave some children unchanged, or highlight them with the `glow:` variant style.

The value of `color` will be available as a CSS variable `--glow-color`, as well as the Tailwind `glow` color.
You can pass any valid CSS color, including `hsl()` values etc.
Of course, you might choose to use any other color; you can leave out the `color` prop entirely.

## Tailwind

Add the tailwind plugin to unlock the `glow:` variant and `glow` color

`tailwind.config.js`

```js
module.exports = {
  ...
  plugins: [
    require('@codaworks/react-glow/tailwind')
  ]
}
```

As with all colors in Tailwind, you may add opacity by appending a percentage after the color, such as `bg-glow/20` for 20% opacity.

## Vanilla CSS

You can style the glow effect with vanilla CSS:

```jsx
<GlowCapture>
  <span>This won't glow</span>
  <Glow color="hsl(338.69 100% 48.04%)">
    <span className="glowable-text">
      This will glow pink when the mouse is passed over
    </span>
  </Glow>
</GlowCapture>
```

```css
.glowable-text {
  color: black;
}

[glow] .glowable-text {
  color: var(--glow-color);
}
```

## Attribution

SolidJS port of [react-glow](https://twitter.com/codepen/status/1696297659663888490).
