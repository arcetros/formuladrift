import Header from "./Header";

export const Layout = ({ children, route, styles }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export const SubLayout = ({ children }) => {
  return (
    <div className="p-8 grid justify-items-stretch lg:justify-center md:px-24">
      {children}
    </div>
  );
};
