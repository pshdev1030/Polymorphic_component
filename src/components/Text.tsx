import React, { InsHTMLAttributes } from "react";

type Colors =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet";

type TextProps<C extends React.ElementType> = {
  as?: C;
  color?: Colors | "black";
};

type Props<C extends React.ElementType> = React.PropsWithChildren<
  TextProps<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof TextProps<C>>;

// ElementType은 html element 일 때는 html element, 커스텀 컴포넌트일 경우에는 그것을 지원한다.
// type ElementType<P = any> ={
//     [K in keyof JSX.IntrinsicElements]: P extends JSX.IntrinsicElements[K] ? K : never
// }[keyof JSX.IntrinsicElements] |
// ComponentType<P>;

export const Text = <C extends React.ElementType = "span">({
  as,
  color,
  style,
  children,
  ...restProps
}: Props<C>) => {
  const Component = as || "span";

  //styled component와 같은 style을 고유한 classname으로 만들어주는 라이브러리를 사용

  //대신 인라인 스타일을 사용

  const internalStyles = color ? { style: { ...style, color } } : {};
  return (
    <Component {...restProps} {...internalStyles}>
      {children}
    </Component>
  );
};

// <Text as="">hello world</Text>
// 문제점 1 any는 HTML element가 아닌 값일 수도 있다.
// 문제점 2 attributes에 대응하지 못한다.
// 문제점 3 틀린 attribute가 들어올 수 있다.
