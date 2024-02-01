import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaTasks } from 'react-icons/fa';

import { useOrders } from '@/hooks/redux/useOrders';

const useHooks = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { orders, isLoading } = useOrders(currentPage);

  const totalPages = 100;

  const onPageChange = (page) => setCurrentPage(page);
  const router = useRouter();

  const handlePageChange = (page) => {
    router.push(`/orders?page=${page}`);

    onPageChange(page);
  };

  const breadcrumbs = [
    {
      href: '/orders',
      title: 'Orders',
      icon: FaTasks,
    },
  ];

  return {
    orders,
    isLoading,
    breadcrumbs,
    totalPages,
    currentPage,
    onPageChange,
    handlePageChange,
  };
};

export default useHooks;
