import { Button } from 'flowbite-react'
import Link from 'next/link'
import { CiViewList } from 'react-icons/ci'
import { FaEdit } from 'react-icons/fa'

import Loading from '@/components/atoms/Loading'
import Filter from '@/components/organisms/Filter'
import PageHeader from '@/components/organisms/PageHeader'
import Pagination from '@/components/organisms/Pagination'
import Table from '@/components/organisms/Table'
import Template from '@/components/templates/Template'
import { capitalizeFirstLetter, formatDate } from '@/hooks/lib/util'

import useHooks from './hooks'

const Order = () => {
  const {
    isLoading,
    breadcrumbs,
    totalPages,
    currentPage,
    onPageChange,
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    statusFilteredOrders,
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
      key: 'brand',
      header: 'Product Name',
      render: (row) => row.brand,
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
      render: (row) => capitalizeFirstLetter(row.status),
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
        <Filter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
        {isLoading ?
          <Loading />
        : <Table rows={rows} data={statusFilteredOrders} />}
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
