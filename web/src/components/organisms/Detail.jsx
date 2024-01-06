import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Detail = ({ label, value }) => {
    return (
        <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <span className="font-semibold">{label}:</span>
            <span className="flex items-center">
                {label === 'Date' && <FaCalendarAlt className="mr-2" />}
                {label === 'Branch' && <FaMapMarkerAlt className="mr-2" />}
                {value}
            </span>
        </div>
    );
};

export default Detail;