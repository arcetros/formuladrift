const Align = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const Item = ({ data, title, handleEvent, position }) => {
  return (
    <div onClick={handleEvent} className={Align[position]}>
      <p className="text-lg font-bold text-red-500 lg:text-2xl">{data}</p>
      <p className="text-gray-400 -mt-1 text-sm">{title}</p>
    </div>
  );
};

const Border = () => {
  return <div className="h-auto border border-2-2 border-red-400"></div>;
};

export const Stats = (props) => {
  const { driver, event } = props;

  return (
    <div className="flex justify-between mb-8">
      <Item data={driver.age} title="age" />
      <Border />
      <Item
        data={driver.victories.length}
        title="wins"
        handleEvent={event}
        position="center"
      />
      <Border />
      <Item data={driver.points} title="points" position="right" />
    </div>
  );
};
