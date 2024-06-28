"use client";
import { useEffect, useState } from "react";
import Color from "colorjs.io";
import LaunchpadDemo from "@/app/components/LaunchpadDemo";

export default function Home() {
  let baseColor = { h: 54 };
  let baseInputColor;

  const colorPalette = [
    { h: 240, c: "0.02", l: "97%" },
    { h: 240, c: "0.05", l: "89%" },
    { h: 240, c: "0.12", l: "80%" },
    { h: 240, c: "0.19", l: "71%" },
    { h: 240, c: "0.27", l: "60%" },
    { h: 240, c: "0.19", l: "49%" },
    { h: 240, c: "0.12", l: "38%" },
    { h: 240, c: "0.05", l: "25%" },
    { h: 240, c: "0.02", l: "12%" },
  ];

  const colorPaletteOKHSL = [
    { h: baseColor.h, s: "95%", l: "5%" },
    { h: baseColor.h, s: "95%", l: "11%" },
    { h: baseColor.h, s: "92%", l: "17%" },
    { h: baseColor.h, s: "90%", l: "23%" },
    { h: baseColor.h, s: "88%", l: "29%" },
    { h: baseColor.h, s: "85%", l: "35%" },
    { h: baseColor.h, s: "82%", l: "41%" },
    { h: baseColor.h, s: "80%", l: "47%" },
    { h: baseColor.h, s: "77%", l: "53%" },
    { h: baseColor.h, s: "75%", l: "59%" },
    { h: baseColor.h, s: "70%", l: "65%" },
    { h: baseColor.h, s: "64%", l: "71%" },
    { h: baseColor.h, s: "62%", l: "77%" },
    { h: baseColor.h, s: "60%", l: "83%" },
    { h: baseColor.h, s: "60%", l: "93%" },
  ];

  //any color to oklch accepted by css
  function toOKLCH(input: string) {
    let color = new Color(input).to("oklch").toString({ format: "oklch" });
    return color;
  }

  // any color to okHSL
  //not working on released version, I will need to use oklch #cry #sad
  // function toOkhsl(input) {
  //   let color = new Color(input).to("okhsl").toString({ format: "okhsl" });
  //   return color;
  // }

  // any color to HSL for compatibility reasons
  function toHSL(input: string) {
    let color = new Color(input)
      .to("hsl")
      .toGamut({ space: "hsl" })
      .toGamut("hsl")
      .toString();

    return color;
  }

  function injectCSSVariables(color: string, varName: string) {
    const cssVar = `--color-${varName}`;
    document.documentElement.style.setProperty(cssVar, color);
  }

  function extractHue(color: string) {
    let colorHue = new Color(color).to("oklch").oklch[2];
    return colorHue;
  }

  function generateCSSVars(palette: any, brandColor: string) {
    injectCSSVariables(brandColor, `main-brand`);
    const brandHue = extractHue(brandColor);
    palette.forEach((item: any, index: number) => {
      const colorValue = toHSL(`oklch(${item.l} ${item.c} ${brandHue})`);

      injectCSSVariables(colorValue, `main-${index + 1}00`);
    });
  }

  function contrastCheck(color1: any, color2: any) {
    let mainColor = new Color(color1);
    let colorTest = new Color(color2);
    return mainColor.contrastWCAG21(colorTest);
  }

  function primaryContrastColor(primaryColor: any) {
    const constrastLevel = contrastCheck(primaryColor, "black");

    if (constrastLevel <= 4.5) {
      injectCSSVariables("white", "textOverPrimary");
    } else {
      injectCSSVariables("black", "textOverPrimary");
    }
  }

  // function createCSSvariables(
  //   sourceColor: string,
  //   paletteName: string,
  //   array: any
  // ) {
  //   const color = new Color(sourceColor).to("oklch");
  //   array.forEach((item: object, index: number) => {
  //     let variableName = `--color-${index}-${paletteName + color.coords[2]}`;
  //     let colorValue = toHSL(`oklch(${item.l} ${item.c} ${color.coords[2]})`);
  //     document.documentElement.style.setProperty(variableName, colorValue);
  //     setVariablesCreated([...variablesCreated]);
  //   });
  // }

  const [sourceColor, setSourceColor] = useState("#5C5CFF");
  const [inputValue, setInputValue] = useState("#5C5CFF");
  const [variablesCreated, setVariablesCreated] = useState([]);

  useEffect(() => {
    // createCSSvariables(sourceColor, "teste1000", colorPalette);
    generateCSSVars(colorPalette, sourceColor);
    primaryContrastColor(sourceColor);
    return () => {};
  }, [sourceColor]);

  return (
    <main className="grid grid-cols-8 gap-4 p-10 w-full min-h-[60vh]">
      <aside className="col-span-2 bg-neutral-100 border-neutral-400 border rounded p-4 ">
        <h1 className=" text-2xl">Color Playground</h1>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="Paste color"
          className="w-full bg-white border-neutral-400 border rounded p-4 "
        ></input>
        <button
          onClick={() => setSourceColor(inputValue)}
          className="w-full bg-neutral-100 border-neutral-400 border rounded p-4 "
        >
          Go
        </button>
        Color: #425678 #f2dfcb #c9d2f8 #5757f2 #f25789
      </aside>
      <div className=" col-span-6 gap-4 flex flex-col">
        <div className="flex gap-2 bg-neutral-100 border-neutral-400 border rounded p-4">
          {colorPalette.map((item, index) => {
            return (
              <div
                key={item.h}
                style={{ backgroundColor: `var(--color-main-${index + 1}00)` }}
                className={`size-24 rounded bg-slate-400`}
              ></div>
            );
          })}
        </div>
        <div className="col-span-6 w-full">
          <LaunchpadDemo />
        </div>
      </div>
    </main>
  );
}
