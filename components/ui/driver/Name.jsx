import { Typography } from "../../Typography";

export const Name = (props) => {
  const { driver, children } = props;
  return (
    <div className="mb-8">
      <Typography type="sub" size="sm">
        {driver.team_name}
      </Typography>
      <div className="flex items-center">
        <Typography type="primary" size="xl">
          {driver.name}
        </Typography>
        <div className="flex bg-red-500 rounded-md p-2 mb-1 ml-auto lg:px-5">
          <Typography type="primarywhite" size="lg">
            {driver.driver_number}
          </Typography>
        </div>
      </div>
    </div>
  );
};
