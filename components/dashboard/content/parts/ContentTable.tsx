import React from "react";

function ContentTable({ cols, data }: any) {
  const colLength = cols.length;

  return (
    <div>
      <div className="flex flex-col font-medium ">
        <div
          style={{
            gridTemplateColumns: `repeat(${colLength}, minmax(0, 1fr))`,
          }}
          className="border-b-2 pb-2 grid grid-cols [&>span]:font-bold [&>span]:text-[#676767]"
        >
          {cols.map((col: any, index: any) => (
            <span key={index}>{col}</span>
          ))}
        </div>
        {data.map((datas: any, index: any) => {
          // Create an array of size colLength, filled with the values from datas
          const dataValues = Array(colLength)
            .fill(null)
            .map((_, i) => Object.values(datas)[i] || "");

          return (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${colLength}, minmax(0, 1fr))`,
              }}
              className="grid py-6 border-b-2"
              key={index}
            >
              {dataValues.map((value, i) => (
                <p key={i}>{String(value)}</p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContentTable;
