import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { orderApi } from '@/hooks/api/orderApi'
import { useHandleError } from '@/hooks/useHandleError'

const schema = yup.object({
    user_id: yup.number().required(),
    store_id: yup.number().oneOf([1, 2, 3]).required(),
    category_id: yup.number().required(),
    job_order: yup.number(),
    order_number: yup.number().required(),
    brand: yup.string().required(),
    part_models: yup.string(),
    model: yup.string(),
    downpayment: yup.number().default(0),
    quantity: yup.number().required(),
    status: yup
        .string()
        .oneOf(['open', 'in-transit', 'delivered', 'cancelled', 'onhold'])
        .default('open'),
    link: yup.string(),
    notes: yup.string(),
    image_paths: yup.array().of(yup.string()),
    order_at: yup.date().default(() => new Date()),
})

export function useHooks() {
    const router = useRouter()
    const { handleError } = useHandleError()
    const [createOrderMutation] = orderApi.useCreateOrderMutation()
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ resolver: yupResolver(schema) })

    const onSubmit = async (data) => {
        console.log('Form data:', data)
        try {
            const { order } = await createOrderMutation(data).unwrap()
            console.log('Order created successfully:', order)
            router.push(`/orders`)
        } catch (error) {
            console.error('API Error:', error)
            handleError(error)
        }
    }

    return {
        handleSubmit: handleSubmit(onSubmit),
        formState: {
            errors,
            register,
        },
    }
}
