declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}
