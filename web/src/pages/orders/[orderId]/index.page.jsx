import { useRouter } from 'next/router'
import { FaCalendarAlt, FaMapMarkerAlt, FaTasks } from 'react-icons/fa'

import Gallery from '@/components/organisms/Gallery'
import PageHeader from '@/components/organisms/PageHeader'
import RowItem from '@/components/organisms/RowItem'
import Template from '@/components/templates/Template'
import { capitalizeFirstLetter, formatDate } from '@/hooks/lib/util'

import useHooks from './hooks'

const Order = () => {

  const router = useRouter();
  const { orderId } = router.query;

  const { orderDetails, getCategoryLabel, getStoreLabel } = useHooks(orderId);
  if (!orderDetails) {
    return <div>Loading...</div>;
  }

  const breadcrumbs = [
    {
      href: '/orders',
      title: 'Orders',
      icon: FaTasks,
    },
    {
      href: '#',
      title: 'Order Detail',
    },
  ];

  
  return (
    <Template>
      <PageHeader breadcrumbs={breadcrumbs} />
      <section className='bg-white dark:bg-gray-900'>
        <div className='container mx-auto px-8 py-8'>
        
            <div className='grid lg:grid-cols-2 gap-4'>
            <div className='grid grid-cols-1 gap-4'>
              <RowItem
                label='Date'
                value={formatDate(orderDetails.created_at)}
                icon={<FaCalendarAlt />}
              />
              <RowItem label='Job Order No.' value={orderDetails.job_order} />
              <RowItem label='Status' value={capitalizeFirstLetter(orderDetails.status)} />
              <RowItem label='Category' value={getCategoryLabel(orderDetails)}  />
              <RowItem label='Brand' value={orderDetails.brand} />
              <RowItem label='Parts Model' value={orderDetails.part_model} />
              <RowItem label='Link Ref' value={orderDetails.link} />
              <RowItem label='Down Payment' value={orderDetails.downpayment} />
            </div>
            <div className='grid grid-cols-1 gap-5'>
              <RowItem
                label='Branch'
                value={getStoreLabel(orderDetails)}
                icon={<FaMapMarkerAlt />}
              />
              <RowItem label='Unit Model' value={orderDetails.model} />
              <div className='grid grid-cols-2 gap-2'>
              <Gallery images={orderDetails.image_paths || []} />
              </div>
            </div>
            <div className='col-span-full'>
              <RowItem label='Comment' value={orderDetails.notes} />
            </div>
          </div>
          
          
        </div>
      </section>
    </Template>
  )
}

export default Order
