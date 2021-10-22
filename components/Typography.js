import { TypographyType, TypograpySize } from "./themes";

export const Typography = ({ type, size, children }) => {
  const classNames = TypographyType[type] + " " + TypograpySize[size];
  return <p className={classNames}>{children}</p>;
};
