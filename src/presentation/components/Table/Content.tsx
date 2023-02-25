import React from "react";

const Content: React.FC<any> = ({ item }) => {
  return (
    <>
      {item.map((items: any, index: number) => {
        return (
          <tr key={index}>
            <td
              className={`border-dark-primary font-semibold first:border-l last:border-r border-y py-3 `}
            >
              <div className="flex flex-row gap-3">
                <img color={items?.color} src={items.logo} alt="" />
                <span>{items?.name}</span>
              </div>
            </td>
            <td
              className={`border-dark-primary font-semibold first:border-l last:border-r border-y py-3 `}
            >
              {items?.currencyGroup}
            </td>
            <td
              className={`border-dark-primary font-semibold first:border-l last:border-r border-y py-3 `}
            >
              {items?.name}
            </td>
            <td
              className={`border-dark-primary font-semibold first:border-l last:border-r border-y py-3 `}
            >
              {items?.name}
            </td>
            <td
              className={`border-dark-primary font-semibold first:border-l last:border-r border-y py-3 `}
            >
              {items?.name}
            </td>
            <td
              className={`border-dark-primary font-semibold first:border-l last:border-r border-y py-3 `}
            >
              {items?.name}
            </td>
            <td
              className={`border-dark-primary font-semibold first:border-l last:border-r border-y py-3 `}
            >
              {items?.name}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default Content;
