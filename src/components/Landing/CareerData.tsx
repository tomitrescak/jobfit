import React, { useState } from "react";
import { Data } from "components/Data";
import AccordUI from "components/AccordUI";
import LineChartUI from "components/LineChartUI";

export default function CareerData() {
  const [Index, setIndex] = useState(1);
  return (
    <section className=" bg-backgrounds-dark-blue">
      <div className="container flex flex-col py-12 lg:py-24  gap-14 text-white">
        <div className="flex flex-1 flex-col item-center lg:items-center">
          <h2 className="text-2xl lg:text-3xl font-[800]">
            Setup yourself up to thrive in an area of growth
          </h2>
        </div>
        {/* <div className="flex flex-1 flex-col lg:flex-row gap-6"> */}
        <div className="flex flex-1 flex-col lg:flex-row gap-6">
          <div className="w-1/3 flex flex-col gap-4">
            {Data.map((Data) => {
              return (
                <AccordUI
                  title={Data.career}
                  Id={Data.id}
                  children={Data.description}
                  Index={Index}
                  setIndex={setIndex}
                ></AccordUI>
              );
            })}
          </div>
          <div className="flex flex-col w-2/3 items-center justify-center border border-med-blue rounded-2xl bg-pine-green-61 p-4 relative">
            {Data.map((Data) => {
              return (
                <LineChartUI
                  data={Data}
                  Id={Data.id}
                  Index={Index}
                  setIndex={setIndex}
                ></LineChartUI>
              );
            })}
            <div className="flex items-start justify-end absolute bottom-0 left-0 m-2">
              <span className="text-xs text-med-blue">Market data provided by Burning Glass</span>
            </div>
          </div>
        </div>
        <h2 className="text-xl lg:text-2xl font-[600]">
          Not sure which career suits your interests and skills?
        </h2>
        <div className="flex flex-1 flex-col md:flex-row gap-8">
          <p className="w-1/2 text-base leading-wsu">
            Take a quick questionnaire, explore the market more deeply and get
            Western Sydney University course recommendations based on your
            interests and skills.
          </p>
          <button
            type="button"
            className="w-1/2 md:w-[36rem] h-[4rem] lg:h-[4rem] btn-red"
          >
            <div className="text-xs lg:text-2xl font-bold">
              Take the JobFit questionnaire
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
