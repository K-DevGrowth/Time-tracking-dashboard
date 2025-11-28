const ProfileTracking = ({ period, setPeriod }) => {
  const periods = ["Daily", "Weekly", "Monthly"];

  return (
    <div className="grid bg-Navy-900 rounded-xl mb-4 sm:mb-0">
      <div className="sm:p-4 p-6 flex sm:flex-col gap-x-4 sm:items-start items-center bg-Purple-600 rounded-xl">
        <img
          className="block max-w-full w-14 h-14 border-2 rounded-full"
          src="image-jeremy.png"
          alt=""
        />
        <div className="sm:mt-6">
          <p className="text-Navy-200">Report for</p>
          <h1 className="sm:text-3xl text-xl sm:max-w-[140px]">
            Jeremy Robson
          </h1>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 grid-cols-3 sm:justify-items-start p-4 ">
        {periods.map((p) => (
          <button
            key={p}
            className={`cursor-pointer ${
              period === p.toLowerCase()
                ? "text-white"
                : "text-Purple-500 hover:text-Navy-200"
            }`}
            type="button"
            onClick={() => setPeriod(p.toLowerCase())}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileTracking;
