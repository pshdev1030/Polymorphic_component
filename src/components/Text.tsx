import React from "react";

export const Text = ({
  as,
  children,
}: {
  as?: any;
  children: React.ReactNode;
}) => {
  const Component = as || "span";
  return <Component>{children}</Component>;
};

// <Text as="">hello world</Text>
// 문제점 1 any는 HTML element가 아닌 값일 수도 있다.
// 문제점 2 attributes에 대응하지 못한다.
// 문제점 3 틀린 attribute가 들어올 수 있다.
