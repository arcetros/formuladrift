import * as allIcon from "./icons";

const Index = (props) => {
  const icons = allIcon;
  const { type } = props;
  const Icon = icons[type];

  return <Icon {...props} />;
};

export default Index;
