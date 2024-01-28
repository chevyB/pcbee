import { useGetOrderByIdQuery } from "@/hooks/api/orderApi";
import { useCategories } from "@/hooks/redux/useCategories";
import { useOrders } from "@/hooks/redux/useOrders";
import { useStores } from "@/hooks/redux/useStores";

const useHooks = (orderId) => {
    const { orders, isLoading: ordersLoading } = useOrders();
    const { categories, isLoading: categoriesLoading } = useCategories();
    const { stores } = useStores();
    const isLoading = ordersLoading || categoriesLoading;
    const { data: orderDetails, error } = useGetOrderByIdQuery(orderId);

    if (error || !orderId) {
        console.error("Error fetching order details:", error);
        return {
            orders,
            orderDetails: null,
            orderId: null,
        };
    }
    const getCategoryLabel = (order) => {
        const category = categories.find((cat) => cat.id === order.category_id);
        return category ? category.label : "Unknown Category";
    };

    const getStoreLabel = (order) => {
        const store = stores.find((branch) => branch.id === order.store_id);
        return store ? store.label : "Unknown Branch";
    };

    return {
        orders,
        orderDetails: orderDetails?.order || {},
        orderId,
        isLoading,
        categories,
        getCategoryLabel,
        getStoreLabel,
    };
};

export default useHooks;
