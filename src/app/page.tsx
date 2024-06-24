"use client";
import { useEffect, useState } from "react";
import Color from "colorjs.io";

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

  function createCSSvariables(
    sourceColor: string,
    paletteName: string,
    array: []
  ) {
    const color = new Color(sourceColor).to("oklch");
    array.forEach((item: object, index: number) => {
      let variableName = `--color-${index}-${paletteName + color.coords[2]}`;
      let colorValue = toHSL(`oklch(${item.l} ${item.c} ${color.coords[2]})`);
      document.documentElement.style.setProperty(variableName, colorValue);
    });
  }

  const [sourceColor, setSourceColor] = useState("#5C5CFF");
  const [inputValue, setInputValue] = useState("#5C5CFF");
  const [variablesCreated, setVariablesCreated] = useState([]);

  useEffect(() => {
    createCSSvariables(sourceColor, "teste1000", colorPalette);
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
      </aside>
      <div className=" col-span-6 gap-4 flex flex-col">
        <div className="flex gap-2 bg-neutral-100 border-neutral-400 border rounded p-4">
          {colorPalette.map((item) => {
            return (
              <div key={item.h} className="size-24 rounded bg-slate-400"></div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
