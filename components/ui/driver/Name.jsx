import { Typography } from "../../Typography";

export const Name = (props) => {
  const { driver, children } = props;
  return (
    <div className="flex flex-col mx-7 md:mx-0 mt-0 lg:mt-12 my-auto">
      <Typography type="subWhite" size="sm">
        {driver.team_name}
      </Typography>
      <div className="flex items-center">
        <Typography type="primarywhite" size="xl">
          {driver.name}
        </Typography>
      </div>
    </div>
  );
};
