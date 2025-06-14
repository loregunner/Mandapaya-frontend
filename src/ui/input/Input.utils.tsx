import {
  FiEdit,
  FiEdit2,
  FiFileText,
  FiGlobe,
  FiLock,
  FiMail,
  FiMapPin,
  FiNavigation,
  FiPhone,
  FiTag,
  FiUser,
} from "react-icons/fi";

export const inconsSelect = (type: string) => {
  const icons = {
    email: <FiMail size={20} />,
    password: <FiLock size={20} />,
    name: <FiUser size={20} />,
    phone: <FiPhone size={20} />,
    address: <FiMapPin size={20} />,
    numberDocument: <FiFileText size={20} />,
    title: <FiTag size={20} />,
    deparment: <FiGlobe size={20} />,
    city: <FiNavigation size={20} />,
    zipcode: <FiEdit size={20} />,
  };

  return icons[type] || <FiEdit2 size={20} />;
};
