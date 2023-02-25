import React from "react";
import { ItemProps } from "./table.interface";

const Content: React.FC<any> = ({ item }: { item: ItemProps }) => {
  return (
    <>
      <td
        className={`border-dark-primary font-semibold first:border-l last:border-r border-y py-3 `}
      >
        {item?.name}
      </td>
      <td
        className={`border-dark-primary font-semibold first:border-l last:border-r border-y py-3 `}
      >
        {item?.name}
      </td>
      <td
        className={`border-dark-primary font-semibold first:border-l last:border-r border-y py-3 `}
      >
        {item?.name}
      </td>
      <td
        className={`border-dark-primary font-semibold first:border-l last:border-r border-y py-3 `}
      >
        {item?.name}
      </td>
      <td
        className={`border-dark-primary font-semibold first:border-l last:border-r border-y py-3 `}
      >
        {item?.name}
      </td>
      <td
        className={`border-dark-primary font-semibold first:border-l last:border-r border-y py-3 `}
      >
        {item?.name}
      </td>
      <td
        className={`border-dark-primary font-semibold first:border-l last:border-r border-y py-3 `}
      >
        {item?.name}
      </td>
    </>
  );
};

export default Content;
