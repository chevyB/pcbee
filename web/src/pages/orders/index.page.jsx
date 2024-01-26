import { Button } from "flowbite-react";
import { FaTasks } from "react-icons/fa";

import PageHeader from "@/components/organisms/PageHeader";
import Table from "@/components/organisms/Table";
import Template from "@/components/templates/Template";

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

  const {
    formattedOrders,
    isLoading,
  } = useHooks();

  if (isLoading) {
    return <p>Loading...</p>;
  }

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
        <Table
          headers={headers}
          data={formattedOrders}
          showActions={true}
        />
      </section>
    </Template>
  );
};

export default Order;