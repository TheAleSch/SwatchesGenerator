
# 🎨 SwatchesGenerator – Build Smarter, More Accessible Color Themes

**SwatchesGenerator** is an experimental theming tool built with **Next.js**, **Tailwind CSS**, and **Chroma.js**, designed to help teams create perceptually uniform, accessible color palettes from a single hue input.

Originally developed as part of a smarter theming system initiative in a Appcues hackathon, the tool explores how modern color spaces like **OKLCH** and **LAB** can improve contrast consistency, accessibility, and brand alignment across UI components.


## ✨ Features

-  **Contrast-aware palette generation** using `oklch()` notation and perceptual color spaces  
-  **Dynamic CSS token output** (via JS) to streamline theme creation  
-  **Chroma.js fallback** for CSS compatibility across all browsers  
-  Real-time hue input with shade generation across a luminance range  
-  Future extensibility for density, border radius, and more design tokens  

## 💡 Why This Exists

Traditional HSL-based theming systems often fail to provide consistent visual contrast across hues. This tool was born from the need to:

- Create **accessible and consistent themes** from minimal input  
- Improve **speed and flexibility** for non-technical users  
- Prototype and validate ideas for **future theming systems** at scale  

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Chroma.js](https://gka.github.io/chroma.js/) for color calculations
- 
## 🌐 Live Demo

 [https://swatches-generator.vercel.app](https://swatches-generator.vercel.app)

##  Further Reading & Tools

-  [OKLCH Color Picker](https://oklch.com/)
-  [Chroma.js](https://gka.github.io/chroma.js/)
-  [color.js](https://colorjs.io/)
-  [MDN on oklch()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch)
-  [Oklab Critique by Raph Levien](https://raphlinus.github.io/color/2021/01/18/oklab-critique.html)
-  [WCAG Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)

  ## 🚀 How to Run Locally

1. **Clone the repository**:

       git clone https://github.com/TheAleSch/SwatchesGenerator.git
       cd SwatchesGenerator
       npm install
       npm run dev



>    This project is both a working prototype and a color theming
> playground. Fork it, experiment, and help design a more accessible
> web.

