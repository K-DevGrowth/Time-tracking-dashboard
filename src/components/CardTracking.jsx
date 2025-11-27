const CardTracking = ({ title, timeframes, period }) => {
  return (
    <div className={`rounded-xl relative overflow-hidden w-50`}>
      <img
        className="w-12 h-12 object-contain absolute -top-1 right-2"
        src={`icon-${title.toLowerCase().replace(" ", "-")}.svg`}
        alt=""
      />
      <div className="mt-8 bg-Navy-900 p-4 rounded-xl relative z-50">
        <p className="text-lg">{title}</p>
        <h3 className="text-4xl">{timeframes[period].current}hrs</h3>
        <p className="text-Navy-200">
          Last {period} - {timeframes[period].previous}hrs
        </p>
      </div>
    </div>
  );
};

export default CardTracking;
