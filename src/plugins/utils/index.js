import { camelize } from "@vue/shared";

export function addClass(el, cls) {
  if (!el) return;
  let curClass = el.className;
  const classes = (cls || "").split(" ");

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += " " + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

export function removeClass(el, cls) {
  if (!el || !cls) return;
  const classes = cls.split(" ");
  let curClass = " " + el.className + " ";

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(" " + clsName + " ", " ");
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}

export const getStyle = function (element, styleName) {
  if (typeof window === "undefined") return;
  if (!element || !styleName) return null;
  styleName = camelize(styleName);
  if (styleName === "float") {
    styleName = "cssFloat";
  }
  try {
    const style = element.style[styleName];
    if (style) return style;
    const computed = document.defaultView.getComputedStyle(element, "");
    return computed ? computed[styleName] : "";
  } catch (e) {
    return element.style[styleName];
  }
};
