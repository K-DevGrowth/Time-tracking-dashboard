import { useState } from "react";
import data from "../data.json";
import CardTracking from "./CardTracking";
import ProfileTracking from "./ProfileTracking";

const DashboardGrid = () => {
  const [period, setPeriod] = useState("weekly");

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex gap-x-4">
        <ProfileTracking setPeriod={setPeriod} />
        <div className="grid grid-cols-3 gap-4">
          {data.map((item) => (
            <CardTracking key={item.title} period={period} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardGrid;
