// import React from 'react';


// import { Briefcase, Mail, Globe } from 'lucide-react';

// interface AlumniCardProps {
//     name: string;
//     graduationYear: string;
//     company: string;
//     role: string;
//     email: string;
//     linkedIn?: string;
//     imageUrl?: string;
// }

// const AlumniCard: React.FC<AlumniCardProps> = ({
//     name,
//     graduationYear,
//     company,
//     role,
//     email,
//     linkedIn,
//     imageUrl,
// }) => {
//     return (
//         <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
//             <div className="p-6">
//                 <div className="flex items-center space-x-4">
//                     <div className="flex-shrink-0">
//                         <img
//                             src={imageUrl || 'https://via.placeholder.com/100'}
//                             alt={name}
//                             className="h-16 w-16 rounded-full object-cover"
//                         />
//                     </div>
//                     <div>
//                         <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
//                         <p className="text-gray-500">Class of {graduationYear}</p>
//                     </div>
//                 </div>

//                 <div className="mt-4 space-y-2">
//                     <div className="flex items-center text-gray-600">
//                         <Briefcase className="h-4 w-4 mr-2" />
//                         <span>{role} at {company}</span>
//                     </div>
//                     <div className="flex items-center text-gray-600">
//                         <Mail className="h-4 w-4 mr-2" />
//                         <a
//                             href={`mailto:${email}`}
//                             className="text-green-600 hover:text-green-700"
//                         >
//                             {email}
//                         </a>
//                     </div>
//                     {linkedIn && (
//                         <div className="flex items-center text-gray-600">
//                             <Globe className="h-4 w-4 mr-2" />
//                             <a
//                                 href={linkedIn}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-green-600 hover:text-green-700"
//                             >
//                                 LinkedIn Profile
//                             </a>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AlumniCard;




import React from 'react';
import PropTypes from 'prop-types';
import { Briefcase, Mail, Globe } from 'lucide-react';

const AlumniCard = ({
    name,
    graduationYear,
    company,
    role,
    email,
    linkedIn,
    imageUrl,
}) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
            <div className="p-6">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img
                            src={imageUrl || 'https://via.placeholder.com/100'}
                            alt={name}
                            className="h-16 w-16 rounded-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
                        <p className="text-gray-500">Class of {graduationYear}</p>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <div className="flex items-center text-gray-600">
                        <Briefcase className="h-4 w-4 mr-2" />
                        <span>{role} at {company}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <Mail className="h-4 w-4 mr-2" />
                        <a
                            href={`mailto:${email}`}
                            className="text-green-600 hover:text-green-700"
                        >
                            {email}
                        </a>
                    </div>
                    {linkedIn && (
                        <div className="flex items-center text-gray-600">
                            <Globe className="h-4 w-4 mr-2" />
                            <a
                                href={linkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-700"
                            >
                                LinkedIn Profile
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

AlumniCard.propTypes = {
    name: PropTypes.string.isRequired,
    graduationYear: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    linkedIn: PropTypes.string,
    imageUrl: PropTypes.string,
};

export default AlumniCard;