import React, { InsHTMLAttributes } from "react";

type TextProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;

export const Text = <C extends React.ElementType>({
  as,
  children,
  ...restProps
}: TextProps<C>) => {
  const Component = as || "span";

  return <Component {...restProps}>{children}</Component>;
};

// <Text as="">hello world</Text>
// 문제점 1 any는 HTML element가 아닌 값일 수도 있다.
// 문제점 2 attributes에 대응하지 못한다.
// 문제점 3 틀린 attribute가 들어올 수 있다.
