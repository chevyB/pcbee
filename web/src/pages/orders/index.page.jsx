import { Button } from "flowbite-react";

import PageHeader from "@/components/organisms/PageHeader";
import Table from "@/components/organisms/Table";
import Template from "@/components/templates/Template";

import useHooks from "./hooks";

const Order = () => {
  const {
    formattedOrders,
    isLoading,
    breadcrumbs,
    headers
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