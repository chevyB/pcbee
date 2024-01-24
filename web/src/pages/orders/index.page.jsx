import { Button } from "flowbite-react";
import { FaTasks } from "react-icons/fa";

import PageHeader from "@/components/organisms/PageHeader";
import Table from "@/components/organisms/Table";
import Template from "@/components/templates/Template";
import { useCategories } from "@/hooks/redux/useCategories";

import useHooks from "./hooks";

const Order = () => {
  const breadcrumbs = [
    {
      href: "/orders",
      title: "Orders",
      icon: FaTasks,
    },
  ];

  const headers = ["Product name", "Date", "Category", "Status", "Action"];

  const { orders } = useHooks();

  const { categories } = useCategories();

  const getCategoryLabel = (categoryId) => {
    const category = categories.find((c) => c.id === categoryId);
    return category ? category.label : "Unknown Category";
  };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <Template>
      <section>
        <PageHeader
          breadcrumbs={breadcrumbs}
          right={
            <Button color="warning" href="/orders/new">
              Create Order
            </Button>
          }
        />

        {orders.length === 0 ? ( // Check for null (loading state)
          <p>Loading...</p>
        ) : (
          <Table
            headers={headers}
            data={orders.map((order) => [
              order.brand,
              new Date(order.created_at).toLocaleString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              }),
              getCategoryLabel(order.category_id),
              capitalizeFirstLetter(order.status),
            ])}
          />
        )}
      </section>
    </Template>
  );
};

export default Order;
