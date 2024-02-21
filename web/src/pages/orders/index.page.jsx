import { Button } from 'flowbite-react'
import Link from 'next/link'
import { CiViewList } from 'react-icons/ci'
import { FaEdit } from 'react-icons/fa'

import Loading from '@/components/atoms/Loading'
import PageHeader from '@/components/organisms/PageHeader'
import Pagination from '@/components/organisms/Pagination'
import Table from '@/components/organisms/Table'
import Template from '@/components/templates/Template'
import { formatDate } from '@/hooks/lib/util'
import StatusBadge from '@/components/atoms/StatusBadge'

import useHooks from './hooks'
import TextInput from '@/components/organisms/TextInput'
import SelectInput from '@/components/organisms/SelectInput'
import { statusOptions } from '@/hooks/const'

const Order = () => {
  const {
    orders,
    isLoading,
    breadcrumbs,
    totalPages,
    currentPage,
    onPageChange,
    formState,
  } = useHooks()

  const getAction = (row) => {
    return (
      <div className='flex'>
        <div className='mr-2 text-red-500 text-xl'>
          <Link href={`/orders/${row.id}/edit`}>
            <FaEdit />
          </Link>
        </div>
        <div className='text-blue-500 text-xl'>
          <Link href={`/orders/${row.id}`}>
            <CiViewList />
          </Link>
        </div>
      </div>
    )
  }

  const rows = [
    {
      key: 'jobOrder',
      header: 'Job Order',
      render: (row) => row.job_order,
    },
    {
      key: 'brand',
      header: 'Model',
      render: (row) => row.model,
    },
    {
      key: 'date',
      header: 'Date',
      render: (row) => formatDate(row.created_at),
    },
    {
      key: 'category',
      header: 'Category',
      render: (row) => row.category.label,
    },
    {
      key: 'status',
      header: 'Status',
      render: (row) => <StatusBadge status={row.status} />,
    },
    {
      key: 'actions',
      header: 'Actions',
      render: getAction,
    },
  ]

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
        <div className='flex pb-4 space-x-4'>
          <TextInput
            name='keyword'
            placeHolder='Search Job Order or Model'
            className='w-80'
            {...formState}
          />
          <SelectInput name='status' options={statusOptions} {...formState} />
        </div>
        {isLoading ?
          <Loading />
        : <Table rows={rows} data={orders.data} />}
      </section>

      <Pagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalPages={totalPages}
      />
    </Template>
  )
}

export default Order
