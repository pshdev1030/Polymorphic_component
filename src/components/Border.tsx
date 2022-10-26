import React from "react";

type AsProp<C extends React.ElementType> = { as?: C };

type BorderProp<C extends React.ElementType> =
  React.ComponentPropsWithoutRef<C> & AsProp<C>;

const Border = <C extends React.ElementType = "div">({
  as,
  ...restProps
}: BorderProp<C>) => {
  const Component = as || "div";

  return <Component {...restProps}></Component>;
};
export default Border;
