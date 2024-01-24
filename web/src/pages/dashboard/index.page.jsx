import React from 'react';
import { FaRegChartBar } from 'react-icons/fa';

import PageHeader from '@/components/organisms/PageHeader';
import Template from "@/components/templates/Template";
import CardItem from '@/components/organisms/Card';
import DateRange from '@/components/organisms/DateRange';

const Dashboard = () => {
  const breadcrumbs = [
    {
      href: '#',
      title: 'Dashboard',
      icon: FaRegChartBar,
    },
  ];

  const cardData = [
    { title: "1000", description: "Delivered" },
    { title: "12500", description: "Open" },
    { title: "1000", description: "In Transit" },
    { title: "200", description: "Cancelled" },
    { title: "3000", description: "On Hold" },
    { title: " ₱ 1,000,000.00", description: "Total Amount Order" },
  ];

  return (

    <Template>

      <PageHeader breadcrumbs={breadcrumbs} />
      
      <div>
       <div className="flex flex-row items-center justify-center">
          <DateRange/>
        </div>

          <div className="grid grid-cols-3 gap-4">
           {cardData.map((card, index) => (
             <CardItem key={index} title={card.title} description={card.description} />
           ))}

        </div>
      </div>
    </Template>
  );
};

export default Dashboard;
