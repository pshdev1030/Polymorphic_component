import React from "react";

type AsProp<C extends React.ElementType> = { as?: C };

type Props<C extends React.ElementType, P> = Omit<
  React.ComponentPropsWithoutRef<C>,
  keyof P
> &
  P &
  AsProp<C>;
//COmponentPropsWithoutRef는 Props의 타입을 보장해주지 못함, 말그대로 ref만

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type ColorType = RGB | RGBA | HEX;

type VarientType =
  | "dotted"
  | "dashed"
  | "solid"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset"
  | "none"
  | "hidden";

type BorderProps = {
  color?: ColorType;
  width?: number;
  varient?: VarientType;
};

const Border = <C extends React.ElementType = "div">({
  as,
  style,
  color = "#000",
  width = 1,
  varient = "solid",
  ...restProps
}: Props<C, BorderProps>) => {
  const Component = as || "div";
  const styles = {
    ...style,
    borderColor: color,
    borderWidth: `${width}px`,
    borderStyle: varient,
  };

  return <Component {...restProps} style={{ ...styles }}></Component>;
};
export default Border;
