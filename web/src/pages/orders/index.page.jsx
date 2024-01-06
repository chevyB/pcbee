import Detail from '@/components/organisms/Detail'
import Gallery from '@/components/organisms/Gallery'
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
                            <Detail label='Date' value={orderDetails.date} />
                            <Detail label='Job Order No.' value={orderDetails.jobOrder} />
                            <Detail label='Status' value={orderDetails.status} />
                            <Detail label='Category' value={orderDetails.category} />
                            <Detail label='Brand' value={orderDetails.brand} />
                            <Detail label='Parts Model' value={orderDetails.partModel} />
                            <Detail label='Link Ref' value={orderDetails.linkRef} />
                            <Detail label='Down Payment' value={orderDetails.downPayment} />
                        </div>
                        <div className='grid grid-cols-1 gap-5'>
                            <Detail label='Branch' value={orderDetails.branch} />
                            <Detail label='Unit Model' value={orderDetails.unitModel} />
                            <Gallery images={imageUrls} />
                        </div>
                        <div className='col-span-full'>
                            <Detail label='Comment' value={orderDetails.comment} />
                        </div>
                    </div>
                </div>
            </section>
        </Template>
    )
}

export default Order
