import { Typography } from "../../Typography";

export const Name = (props) => {
  const { driver, children } = props;
  return (
    <div className="flex flex-col mx-7 mb-2 mr-auto">
      <Typography type="sub" size="sm">
        {driver.team_name}
      </Typography>
      <div className="flex items-center">
        <Typography type="primary" size="xl">
          {driver.name}
        </Typography>
      </div>
    </div>
  );
};
