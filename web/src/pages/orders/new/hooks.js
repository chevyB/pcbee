// hooks.js
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { errors } from '@/constants/formErrors'
import { orderApi } from '@/hooks/api/orderApi'
import { useHandleError } from '@/hooks/useHandleError'

const schema = yup
    .object({
        // Your order validation schema...
    })
    .required()

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
        try {
            const { order } = await createOrderMutation(data).unwrap()
            console.log('Order created successfully:', order)
            // Optionally, navigate to the order details page
            router.push(`/orders`)
        } catch (error) {
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
