import PropTypes from "prop-types";

const Tabs = ({ days, selectedDay, setSelectedDay }) => {
  return (
    <div
      role='tablist'
      className='tabs tabs-boxed flex flex-wrap justify-center sm:tabs-xs 
      lg:tabs-lg'
    >
      {days.map((day) => {
        return (
          <span
            role='tab'
            className={day.id === selectedDay.id ? "tab tab-active" : "tab"}
            onClick={() => setSelectedDay(day)}
            key={day.id}
          >
            第{day.id}天
          </span>
        );
      })}
    </div>
  );
};
Tabs.propTypes = {
  days: PropTypes.array.isRequired,
  selectedDay: PropTypes.object.isRequired,
  setSelectedDay: PropTypes.func.isRequired,
};
export default Tabs;
