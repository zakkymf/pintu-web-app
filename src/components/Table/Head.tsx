import React from "react";
import { HeadProps } from "./table.interface";

const Head: React.FC<any> = ({ content, textStyle }: HeadProps) => {
  return (
    <th
      className={`border-dark-primary first:border-l last:border-r border-y py-3 ${
        !textStyle ? "text-center" : textStyle
      }`}
    >
      {content}
    </th>
  );
};

export default Head;
