import Header from "./Header";

export const Layout = ({ children, route, styles }) => {
  return (
    <div
      className="pt-4 px-8 font-prompt min-h-screen 
  flex flex-col justify-between overflow-hidden md:px-28"
    >
      <Header />
      {children}
    </div>
  );
};

export const SubLayout = ({ children }) => {
  return (
    <div className="p-8 grid justify-items-stretch md:px-24">{children}</div>
  );
};
