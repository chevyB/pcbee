import { FaTasks } from 'react-icons/fa'

import PageHeader from '@/components/organisms/PageHeader'
import OrderForm from '@/components/templates/OrderForm'
import Template from '@/components/templates/Template'

import { useHooks } from './hooks'

const Order = () => {
  const { formState, handleSubmit } = useHooks()

  const breadcrumbs = [
    {
      href: '/orders',
      title: 'Orders',
      icon: FaTasks,
    },
    {
      href: '#',
      title: 'Order Create',
    },
  ]
  return (
    <Template>
      <PageHeader breadcrumbs={breadcrumbs} />

      <section className='bg-white dark:bg-gray-900'>
        <div className='container mx-auto px-8 py-8'>
          <OrderForm handleSubmit={handleSubmit} formState={formState} />
        </div>
      </section>
    </Template>
  )
}

export default Order
