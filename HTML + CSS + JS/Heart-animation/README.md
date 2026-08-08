# Heart Animation

A simple heart particle animation built with HTML, CSS, and JavaScript.

## Features

- Heart icons appear on mouse movement
- Animated floating effect
- Randomized particle size
- Lightweight, frontend-only demo

## Tech Stack

- HTML
- CSS
- JavaScript

## How It Works

- JavaScript listens for `mousemove` events on the page.
- On every move, it creates a new `span` element at the cursor position.
- CSS applies the heart image, floating motion, and fade-out animation.
- Each heart is removed after a few seconds to keep the page clean.

## Project Structure

- `index.html` - page shell
- `style.css` - animation and layout styles
- `script.js` - mouse trail logic
- `icon.png` - heart image used for the particles

## Run the Project

1. Open the `Heart-animation` folder.
2. Open `index.html` in your browser.
3. Move your mouse across the page to generate hearts.
