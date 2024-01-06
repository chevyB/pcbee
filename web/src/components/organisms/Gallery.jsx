import Image from 'next/image';
import React from 'react';

const Gallery = ({ images }) => {
    return (
        <div className="grid grid-cols-2 gap-2">
            {images.map((imageUrl, index) => (
                <div key={index} className="rounded-lg border border-black">
                    <Image
                        src={imageUrl}
                        alt={`Image ${index + 1}`}
                        width={300} // Specify the width you desire
                        height={200} // Specify the height you desire
                        className="rounded-lg"
                    />
                </div>
            ))}
        </div>
    );
};

export default Gallery;
