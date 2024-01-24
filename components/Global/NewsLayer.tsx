import React from "react";

export default function NewsLayer() {
  return (
    <div className=" ">
      <div className="w-full z-50 py-3 bg-[#b8b6e7]">
        <ul className="flex p-0 items-center overflow-x-auto whitespace-nowrap">
          {Array.from({ length: 10 }, (_, index) => (
            <li key={index} className="flex items-center">
              {index !== 0 && <span className="mx-1">•</span>}
              <div className=" px-2">
                <h2 className="font-bold text-[12px]">
                  DE HUURWONING HACK
                </h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}