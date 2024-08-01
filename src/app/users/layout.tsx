import { FC, ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="bg-blue-200">{children}</div>;
};
export default Layout;
