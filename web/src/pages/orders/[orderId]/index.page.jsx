import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

import Gallery from '@/components/organisms/Gallery'
import RowItem from '@/components/organisms/RowItem';
import Template from '@/components/templates/Template'

const Order = () => {
    const orderDetails = {
        date: 'January 6, 2024',
        jobOrder: '819089',
        status: 'In-Transit',
        category: 'Battery',
        brand: 'ASUS',
        partModel: 'B31N1726',
        linkRef: 'https://www.amazon.com/B31N1726...',
        downPayment: '500',
        branch: 'Davao',
        unitModel: 'Rog Strix',
        comment: 'Need by the customer before 4th week of Jan. 2024',
    }
    const imageUrls = [
        'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71k8dZdfStS._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61CWkh-2YWS._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61uR43INXvS._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81AESsFpWFS._AC_SL1500_.jpg',
    ]

    return (
        <Template>
            <section className='bg-white dark:bg-gray-900'>
                <div className='container mx-auto px-8 py-8'>
                    <div className='grid lg:grid-cols-2 gap-4'>
                        <div className='grid grid-cols-1 gap-4'>
                            <RowItem label='Date' value={orderDetails.date} icon={<FaCalendarAlt />} />
                            <RowItem label='Job Order No.' value={orderDetails.jobOrder} />
                            <RowItem label='Status' value={orderDetails.status} />
                            <RowItem label='Category' value={orderDetails.category} />
                            <RowItem label='Brand' value={orderDetails.brand} />
                            <RowItem label='Parts Model' value={orderDetails.partModel} />
                            <RowItem label='Link Ref' value={orderDetails.linkRef} />
                            <RowItem label='Down Payment' value={orderDetails.downPayment} />
                        </div>
                        <div className='grid grid-cols-1 gap-5'>
                            <RowItem label='Branch' value={orderDetails.branch} icon={<FaMapMarkerAlt />} />
                            <RowItem label='Unit Model' value={orderDetails.unitModel} />
                            <div className="grid grid-cols-2 gap-2">
                                <Gallery images={imageUrls} />
                            </div>
                        </div>
                        <div className='col-span-full'>
                            <RowItem label='Comment' value={orderDetails.comment} />
                        </div>
                    </div>
                </div>
            </section>
        </Template>
    )
}

export default Order
