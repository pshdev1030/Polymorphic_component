import React, { forwardRef } from "react";

//type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined };
//ComponentPropsWithoutRef는 Props의 타입을 보장해주지 못함, 말그대로 ref만

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type ColorType = RGB | RGBA | HEX;

type VariantType =
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
  variant?: VariantType;
};

type AsProps<T extends React.ElementType> = {
  as?: T;
};

type Props<T extends React.ElementType> = BorderProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof BorderProps> &
  AsProps<T>;

type Ref<T extends React.ElementType> = React.ComponentPropsWithRef<T>["ref"];

type BorderComponent = <T extends React.ElementType = "div">(
  props: Props<T> & {
    ref?: Ref<T>;
  }
) => React.ReactElement | null;

const Border: BorderComponent = forwardRef(
  <T extends React.ElementType = "div">(
    {
      as,
      style,
      color = "#000",
      width = 1,
      variant = "solid",
      ...restProps
    }: Props<T>,
    ref: Ref<T>
  ) => {
    const Component = as || "div";
    const styles = {
      ...style,
      borderColor: color,
      borderWidth: `${width}px`,
      borderStyle: variant,
    };
    return <Component {...restProps} style={styles} ref={ref}></Component>;
  }
);

export default Border;
