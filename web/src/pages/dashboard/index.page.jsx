import { yupResolver } from '@hookform/resolvers/yup'
import dayjs from 'dayjs'
import { useForm } from 'react-hook-form'
import { FaArrowRight, FaRegChartBar } from 'react-icons/fa'
import * as yup from 'yup'

import CardItem from '@/components/organisms/Card'
import DatePicker from '@/components/organisms/DatePicker'
import PageHeader from '@/components/organisms/PageHeader'
import AdminGuard from '@/components/templates/AdminGuard'
import Template from '@/components/templates/Template'
import { errors } from '@/constants/formErrors'
import { dashboardApi } from '@/hooks/api/dashboardApi'

const schema = yup
  .object({
    start_date: yup.string().required(errors.required),
    end_date: yup.string().required(errors.required),
  })
  .required()

const Dashboard = () => {
  const { control, watch } = useForm({
    defaultValues: {
      start_date: dayjs().startOf('year').format('YYYY-MM-DD'),
      end_date: dayjs().format('YYYY-MM-DD'),
    },
    resolver: yupResolver(schema),
  })

  const { data } = dashboardApi.useGetDashboardQuery(watch())

  const breadcrumbs = [
    {
      href: '#',
      title: 'Dashboard',
      icon: FaRegChartBar,
    },
  ]

  const cardData = [
    { title: data?.status_counts?.delivered ?? 0, description: 'Delivered' },
    { title: data?.status_counts?.open ?? 0, description: 'Open' },
    {
      title: data?.status_counts?.['in-transit'] ?? 0,
      description: 'In Transit',
    },
    { title: data?.status_counts?.cancelled ?? 0, description: 'Cancelled' },
    { title: data?.status_counts?.onhold ?? 0, description: 'On Hold' },
    { title: data?.total_amount ?? 0, description: 'Total Amount Order' },
  ]

  return (
    <Template>
      <AdminGuard>
        <PageHeader breadcrumbs={breadcrumbs} />

        <div className='flex flex-row items-center justify-center mb-4'>
          <DatePicker control={control} name='start_date' />

          <FaArrowRight
            className='mx-3 text-gray-500'
            style={{ marginTop: '1px' }}
          />

          <DatePicker control={control} name='end_date' />
        </div>

        <div className='mx-auto max-w-screen-lg mt-12'>
          <div className='grid grid-cols-3 gap-2'>
            {cardData.map((card, index) => (
              <CardItem
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </AdminGuard>
    </Template>
  )
}

export default Dashboard
