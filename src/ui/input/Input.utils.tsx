import { FiEdit2, FiLock, FiMail, FiPhone, FiUser } from "react-icons/fi";

export const inconsSelect = (type: string) => {
  const icons = {
    email: <FiMail size={20} />,
    password: <FiLock size={20} />,
    name: <FiUser size={20} />,
    phone: <FiPhone size={20} />,
  };

  return icons[type] || <FiEdit2 size={20} />;
}