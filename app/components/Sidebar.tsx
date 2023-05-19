import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import SidebarItem from "./SidebarItem";
import Box from "./Box";
import Library from "./Library";

interface SidebarProps {
  children: React.ReactNode;
}

const navigation = [
  {
    icon: HiHome,
    label: 'Home',
    active: true,
    href: '/'
  },
  {
    icon: BiSearch,
    label: 'Search',
    href: '/search'
  },
]

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div className="flex h-[calc(100%-80px)]">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {navigation.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">
        {children}
      </main>
    </div>
  );
}
 
export default Sidebar;
