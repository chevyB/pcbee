import { Button } from 'flowbite-react'
import Link from 'next/link'

import Loading from '@/components/atoms/Loading'
import PageHeader from '@/components/organisms/PageHeader'
import Table from '@/components/organisms/Table'
import Template from '@/components/templates/Template'

import useHooks from './hooks'

const Order = () => {
  const { formattedOrders, isLoading, breadcrumbs, headers } = useHooks()
  return (
    <Template>
      <section>
        <PageHeader
          breadcrumbs={breadcrumbs}
          right={
            <Link href='/orders/new'>
              <Button size='xs' color='warning' href='/orders/new'>
                Create Order
              </Button>
            </Link>
          }
        />
        {isLoading ?
          <Loading />
        : <Table headers={headers} data={formattedOrders} showActions={true} />}
      </section>
    </Template>
  )
}

export default Order
