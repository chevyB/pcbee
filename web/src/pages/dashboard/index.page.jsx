import { FaRegChartBar } from 'react-icons/fa'

import PageHeader from '@/components/organisms/PageHeader'
import Template from "@/components/templates/Template";

const Dashboard = () => {
  const breadcrumbs = [
    {
      href: '#',
      title: 'Dashboard',
      icon: FaRegChartBar,
    },
  ]

  return (
    <Template>
      <PageHeader breadcrumbs={breadcrumbs} />
      Dashboard
    </Template>
  )
}

export default Dashboard;
