import React, { forwardRef } from "react";

type AsProp<C extends React.ElementType> = { as?: C };

type Props<C extends React.ElementType, P> = React.PropsWithChildren<
  P & AsProp<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof P & AsProp<C>> &
  P &
  AsProp<C>;
//type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined };
//ComponentPropsWithoutRef는 Props의 타입을 보장해주지 못함, 말그대로 ref만

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

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

const Border = forwardRef(
  <C extends React.ElementType = "div">(
    {
      as,
      style,
      color = "#000",
      width = 1,
      varient = "solid",
      ...restProps
    }: Props<C, BorderProps>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "div";
    const styles = {
      ...style,
      borderColor: color,
      borderWidth: `${width}px`,
      borderStyle: varient,
    };
    return <Component {...restProps} style={styles} ref={ref}></Component>;
  }
);
export default Border;
