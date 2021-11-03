import { Typography } from "../../Typography";

export const Name = (props) => {
  const { driver, children } = props;
  return (
    <div className="mb-8">
      <Typography type="sub" size="sm">
        {driver.team_name}
      </Typography>
      <div className="flex flex-shrink-0 items-center">
        <Typography type="primary" size="xl">
          {driver.name}
        </Typography>
        <div className="flex items-center bg-red-500 text-gray-100 rounded-md px-3 mb-1 ml-auto lg:p-3 lg:px-5">
          <Typography type="primarywhite" size="xl">
            {driver.driver_number}
          </Typography>
        </div>
      </div>
    </div>
  );
};
