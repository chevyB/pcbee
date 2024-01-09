import Userlist from '@/components/organisms/atoms/Userlist'
import Template from "@/components/templates/Template";

const Dashboard = () => {
  return (
      <Template>
         <div>
        <h1 className="text-2xl font-bold mb-4">Userlist</h1>
        <Userlist />
      </div>
      </Template>
  );
}
 
export default Dashboard;
