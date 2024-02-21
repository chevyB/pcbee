import dayjs from "dayjs";
import { Button } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaCalendarAlt, FaMapMarkerAlt, FaTasks } from "react-icons/fa";

import Loading from "@/components/atoms/Loading";
import Gallery from "@/components/organisms/Gallery";
import PageHeader from "@/components/organisms/PageHeader";
import RowItem from "@/components/organisms/RowItem";
import Template from "@/components/templates/Template";
import { capitalizeFirstLetter } from "@/hooks/lib/util";

import useHooks from "./hooks";
import DeleteModal from "@/components/organisms/DeleteModal";

const Order = () => {
  const router = useRouter();
  const { orderId } = router.query;

  const { order, isloading, handleDelete } = useHooks(orderId);

  const breadcrumbs = [
    {
      href: "/orders",
      title: "Orders",
      icon: FaTasks,
    },
    {
      href: "#",
      title: "Order Detail",
    },
  ];

  return (
    <Template>
      <PageHeader
        breadcrumbs={breadcrumbs}
        right={
          <div className="flex pb-4 space-x-4">
            <DeleteModal handleDelete={handleDelete} orderId={orderId} />
            <Link href={`/orders/${orderId}/edit`}>
              <Button size="xs" color="warning" className="m-w-20">
                Edit
              </Button>
            </Link>
          </div>
        }
      />
      {isloading || !order ? (
        <Loading />
      ) : (
        <section className="p-8 flex flex-col space-x-4 space-y-6">
          <div className="flex space-x-8">
            <RowItem
              label="Date"
              value={dayjs(order.order_at).format("MMM DD, YYYY")}
              order
              icon={<FaCalendarAlt />}
            />
            <RowItem
              label="Branch"
              value={order.store.label}
              icon={<FaMapMarkerAlt />}
            />
          </div>
          <RowItem label="Job Order No." value={order.job_order} />
          <RowItem label="Status" value={capitalizeFirstLetter(order.status)} />
          <RowItem label="Category" value={order.category.label} />
          <div className="flex space-x-8">
            <RowItem label="Brand" value={order.brand} />
            <RowItem label="Unit Model" value={order.model} />
            <RowItem label="Parts Model" value={order.part_model} />
          </div>
          <RowItem label="Quantity" value={order.quantity} />
          <RowItem label="Link Ref" value={order.link} />
          <div className="flex space-x-8">
            <RowItem label="Down Payment" value={order.downpayment} />
            <RowItem label="Amount" value={order.amount} />
          </div>
          <div className="space-2 w-full flex">
            <Gallery images={order.order_images.map((image) => image.path)} />
          </div>
          <div className="w-full">
            <RowItem label="Comment" value={order.notes} />
          </div>
        </section>
      )}
    </Template>
  );
};

export default Order;
