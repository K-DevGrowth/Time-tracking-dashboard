import { useState } from "react";
import data from "../data.json";
import CardTracking from "./CardTracking";
import ProfileTracking from "./ProfileTracking";

const DashboardGrid = () => {
  const [period, setPeriod] = useState("weekly");

  const colors = [
    "bg-Orange-300",
    "bg-Blue-300",
    "bg-Pink-400",
    "bg-Green-400",
    "bg-Purple-700",
    "bg-Yellow-300",
  ];

  return (
    <div className="sm:flex block mx-auto w-full p-6 justify-center items-center min-h-screen">
      <div className="flex sm:flex-row flex-col gap-x-4">
        <ProfileTracking period={period} setPeriod={setPeriod} />
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {data.map((item, index) => (
            <CardTracking
              color={colors[index]}
              key={item.title}
              period={period}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardGrid;
