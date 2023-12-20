import  Navbar  from "@/components/organisms/atoms/Navbar";
import  Sidebar  from "@/components/organisms/atoms/SideBar";

const Template = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      {children}
    </>
  );
}

export default Template;
