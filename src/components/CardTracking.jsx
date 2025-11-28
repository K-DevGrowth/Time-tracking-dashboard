const CardTracking = ({ title, timeframes, period, color }) => {
  return (
    <div className={`rounded-xl min-w-50 ${color}`}>
      <div className="overflow-auto relative">
        <img
          className="w-12 h-12 object-contain absolute -top-1 right-2"
          src={`icon-${title.toLowerCase().replace(" ", "-")}.svg`}
          alt=""
        />
        <div className="mt-8 transition-colors duration-300 cursor-pointer bg-Navy-900 p-4 relative rounded-t-xl rounded-b-md z-50">
          <div className="flex justify-between items-center">
            <span className="">{title}</span>
            <img
              className="hover:brightness-200 transition-all w-4"
              src="icon-ellipsis.svg"
              alt=""
            />
          </div>
          <h3 className="text-4xl pt-3 pb-2">
            {timeframes[period].current}hrs
          </h3>
          <p className="text-Purple-500">
            Last {period} - {timeframes[period].previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardTracking;
