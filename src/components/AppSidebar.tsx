import { useState } from "react";
import { useLocation } from "react-router-dom";
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
  const [open, setOpen] = useState(false);
  const location = useLocation();

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

  // Don't show sidebar on landing page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <SidebarProvider defaultOpen={false}>
      <Sidebar>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="text-xl font-bold p-2">TB</div>
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
    </SidebarProvider>
  );
};

export default AppSidebar;