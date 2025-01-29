import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  Sidebar, 
  SidebarBody,
  SidebarLink,
  SidebarProvider
} from "@/components/ui/sidebar";
import { 
  UserCircle2, 
  GraduationCap, 
  Code2, 
  FolderKanban,
  Mail
} from "lucide-react";

const AppSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "About",
      href: "/about",
      icon: <UserCircle2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Education",
      href: "/education",
      icon: <GraduationCap className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Skills",
      href: "/skills",
      icon: <Code2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Projects",
      href: "/projects",
      icon: <FolderKanban className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <Mail className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
  ];

  if (location.pathname === '/') {
    return null;
  }

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <div 
            className="text-xl font-bold p-2 cursor-pointer hover:text-primary transition-colors"
            onClick={() => navigate('/')}
          >
            TB
          </div>
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
      </SidebarBody>
    </Sidebar>
  );
};

export default AppSidebar;