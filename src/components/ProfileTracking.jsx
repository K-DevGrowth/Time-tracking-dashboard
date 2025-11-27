const ProfileTracking = ({ setPeriod }) => {
  const periods = ["Daily", "Weekly", "Monthly"];

  return (
    <div className="grid col-end-1 bg-Navy-900 rounded-xl">
      <div className="p-4 bg-Purple-600 rounded-xl">
        <img
          className="block max-w-full w-14 h-14 border-2 rounded-full"
          src="image-jeremy.png"
          alt=""
        />
        <p className="text-Navy-200">Report for</p>
        <h1 className="text-3xl max-w-[140px]">Jeremy Robson</h1>
      </div>
      <div className=" grid justify-items-start p-4 ">
        {periods.map((period) => (
          <button type="button" onClick={() => setPeriod(period.toLowerCase())}>
            {period}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileTracking;
