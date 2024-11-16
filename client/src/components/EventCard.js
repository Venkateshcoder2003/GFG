// import React from 'react';
// import { Calendar, Clock, MapPin } from 'lucide-react';

// interface EventCardProps {
//     title: string;
//     date: string;
//     time: string;
//     location: string;
//     description: string;
//     imageUrl?: string;
//     onEdit?: () => void;
//     onDelete?: () => void;
//     isManageable?: boolean;
// }

// const EventCard: React.FC<EventCardProps> = ({
//     title,
//     date,
//     time,
//     location,
//     description,
//     imageUrl,
//     onEdit,
//     onDelete,
//     isManageable = false,
// }) => {
//     return (
//         <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
//             {imageUrl && (
//                 <img
//                     src={imageUrl}
//                     alt={title}
//                     className="w-full h-48 object-cover"
//                 />
//             )}
//             <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
//                 <div className="space-y-2 mb-4">
//                     <div className="flex items-center text-gray-600">
//                         <Calendar className="h-4 w-4 mr-2" />
//                         <span>{date}</span>
//                     </div>
//                     <div className="flex items-center text-gray-600">
//                         <Clock className="h-4 w-4 mr-2" />
//                         <span>{time}</span>
//                     </div>
//                     <div className="flex items-center text-gray-600">
//                         <MapPin className="h-4 w-4 mr-2" />
//                         <span>{location}</span>
//                     </div>
//                 </div>
//                 <p className="text-gray-600 mb-4">{description}</p>

//                 {isManageable && (
//                     <div className="flex justify-end space-x-2 mt-4">
//                         <button
//                             onClick={onEdit}
//                             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
//                         >
//                             Edit
//                         </button>
//                         <button
//                             onClick={onDelete}
//                             className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200"
//                         >
//                             Delete
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default EventCard;

import React from 'react';
import PropTypes from 'prop-types';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventCard = ({
    title,
    date,
    time,
    location,
    description,
    imageUrl,
    onEdit,
    onDelete,
    isManageable = false,
}) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
            )}
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{location}</span>
                    </div>
                </div>
                <p className="text-gray-600 mb-4">{description}</p>

                {isManageable && (
                    <div className="flex justify-end space-x-2 mt-4">
                        <button
                            onClick={onEdit}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
                        >
                            Edit
                        </button>
                        <button
                            onClick={onDelete}
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200"
                        >
                            Delete
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

EventCard.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    isManageable: PropTypes.bool,
};

EventCard.defaultProps = {
    isManageable: false,
};

export default EventCard;