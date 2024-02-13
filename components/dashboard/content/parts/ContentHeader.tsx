import React from "react";

function ContentHeader({ title, buttonText, buttonSvg, buttonFunction }: any) {
  return (
    <div className="flex justify-between items-center w-full ">
      <h2 className="text-2xl font-bold pb-2 border-b-[#6200ee] border-b-2">
        {title}
      </h2>
      {buttonText && (
        <button
          onClick={buttonFunction}
          className="flex justify-center items-center border font-medium text-[#6200ee] border-[#6200ee] p-3 gap-3 rounded-lg"
        >
          <p>{buttonText}</p>
          {buttonSvg}
        </button>
      )}
    </div>
  );
}

export default ContentHeader;
