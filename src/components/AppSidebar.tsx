import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sidebar, SidebarBody } from "@/components/ui/sidebar";
import { useState } from "react";
import { 
  User2, 
  GraduationCap, 
  Briefcase, 
  FolderKanban,
  Mail
} from "lucide-react";

const AppSidebar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "About",
      href: "/about",
      icon: <User2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5" />,
    },
    {
      label: "Education",
      href: "/education",
      icon: <GraduationCap className="text-neutral-700 dark:text-neutral-200 h-5 w-5" />,
    },
    {
      label: "Skills",
      href: "/skills",
      icon: <Briefcase className="text-neutral-700 dark:text-neutral-200 h-5 w-5" />,
    },
    {
      label: "Projects",
      href: "/projects",
      icon: <FolderKanban className="text-neutral-700 dark:text-neutral-200 h-5 w-5" />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <Mail className="text-neutral-700 dark:text-neutral-200 h-5 w-5" />,
    },
  ];

  return (
    <Sidebar>
      <SidebarBody className="flex flex-col gap-4">
        <Link to="/" className="flex items-center justify-center p-2">
          <motion.img
            src="/lovable-uploads/480b2902-c376-44ec-8f23-b3430b4d69be.png"
            alt="Logo"
            className="w-12 h-12 rounded-full"
            whileHover={{ scale: 1.1 }}
          />
        </Link>
        <div className="flex flex-col gap-2">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.href}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              {link.icon}
              <span className="text-sm">{link.label}</span>
            </Link>
          ))}
        </div>
      </SidebarBody>
    </Sidebar>
  );
};

export default AppSidebar;