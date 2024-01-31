import { useOrder } from "@/hooks/redux/useOrders";

const useHooks = (orderId) => {

    const { order, isloading } = useOrder(orderId);

    const getCategoryLabel = (order) => {
        return order.category ? order.category.label : null;
    };

    const getStoreLabel = (order) => {
        return order.store ? order.store.label : null;
    };

    return {
        order,
        isloading,
        getCategoryLabel,
        getStoreLabel,
    };
};

export default useHooks;
