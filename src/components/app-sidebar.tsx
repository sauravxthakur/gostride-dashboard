"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Workflow,
  BarChart2,
  Database,
  ClipboardList,
  Folder,
  HelpCircle,
  Gauge,
  Mail,
  MoreHorizontal,
  PenSquare,
  Circle,
  PlusCircle,
  Search,
  Settings,
  Users,
  PanelLeftClose,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const data = {
  user: {
    name: "Saurav Thakur",
    email: "saurav@gostride.ventures",
    avatar: "/avatars/shadcn.jpg", // Replace with correct path
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: Gauge,
      isActive: true,
    },
    {
      title: "P&L Reports",
      url: "#",
      icon: BarChart2,
    },
    {
      title: "Tax Compliance",
      url: "#",
      icon: Workflow,
    },
    {
      title: "Document Vault",
      url: "#",
      icon: Folder,
    },
    {
      title: "My Accountant",
      url: "#",
      icon: Users,
    },
  ],
  documents: [
    {
      title: "Pending Requests",
      url: "#",
      icon: Database,
    },
    {
      title: "VAT Filings",
      url: "#",
      icon: ClipboardList,
    },
    {
      title: "Corporate Tax",
      url: "#",
      icon: PenSquare,
    },
    {
      title: "Billing",
      url: "#",
      icon: MoreHorizontal,
    },
  ],
  footerMain: [
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: HelpCircle,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const activeItem = searchParams.get("tab") || "Dashboard"
  const { toggleSidebar } = useSidebar()

  const handleNav = (e: React.MouseEvent, title: string) => {
    e.preventDefault()
    router.push(`/?tab=${encodeURIComponent(title)}`)
  }

  return (
    <Sidebar {...props} collapsible="icon">
      <SidebarHeader className="p-4 group-data-[collapsible=icon]:p-2 flex flex-col gap-4 group-data-[collapsible=icon]:gap-2 overflow-hidden transition-all duration-300">
        <SidebarMenu>
          {/* Logo Section */}
          <SidebarMenuItem>
            {/* Expanded State Logo */}
            <div className="flex items-center h-8 px-1 group-data-[collapsible=icon]:hidden">
              <img src="/logo.png" alt="Go Stride Ventures" className="w-36 h-auto object-contain object-left" />
            </div>
            {/* Collapsed State Logo */}
            <SidebarMenuButton 
              size="default" 
              className="hidden group-data-[collapsible=icon]:flex p-0 hover:bg-transparent active:bg-transparent"
              onClick={toggleSidebar}
            >
              <img src="/Unknown.jpeg" alt="Icon" className="w-8 h-8 rounded-md object-cover" />
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Action Buttons Section */}
          <SidebarMenuItem className="mt-2 group-data-[collapsible=icon]:mt-0">
            {/* Expanded State Buttons */}
            <div className="flex items-center gap-2 group-data-[collapsible=icon]:hidden">
              <Button className="w-full flex-1 justify-start rounded-full bg-black text-white hover:bg-black/90 h-9 px-4 shrink-0">
                <PlusCircle className="mr-2 size-4 text-black fill-white" />
                Quick Create
              </Button>
              <Button variant="outline" size="icon" className="shrink-0 h-9 w-9 rounded-md transition-all duration-300">
                <Mail className="size-4 text-muted-foreground" />
              </Button>
            </div>
            
            {/* Collapsed State Mail Button */}
            <SidebarMenuButton 
              className="hidden group-data-[collapsible=icon]:flex" 
              tooltip="Mail"
            >
              <Mail className="size-4 text-muted-foreground" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      
      <SidebarContent className="px-2">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    render={<a href={item.url} onClick={(e) => handleNav(e, item.title)} />} 
                    isActive={activeItem === item.title} 
                    tooltip={item.title}
                  >
                    <item.icon className="size-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Documents Group */}
        <SidebarGroup className="mt-4">
          <SidebarGroupLabel className="text-xs font-normal text-muted-foreground px-2">Documents</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.documents.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    render={<a href={item.url} onClick={(e) => handleNav(e, item.title)} />} 
                    isActive={activeItem === item.title}
                    tooltip={item.title}
                  >
                    <item.icon className="size-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 pb-6 mt-auto">
        <SidebarMenu className="gap-2">
          {data.footerMain.map((item) => {
            if (item.title === "Settings") {
              const switchTheme = (themeClass: string) => {
                if (!document.startViewTransition) {
                  document.documentElement.className = themeClass
                  return
                }
                document.startViewTransition(() => {
                  document.documentElement.className = themeClass
                })
              }

              return (
                <SidebarMenuItem key={item.title}>
                  <DropdownMenu>
                    <SidebarMenuButton 
                      render={<DropdownMenuTrigger />}
                      isActive={activeItem === item.title}
                      tooltip={item.title}
                    >
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                    <DropdownMenuContent side="right" align="end" className="w-48">
                      <DropdownMenuItem onClick={() => switchTheme("")}>
                        Default Theme
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => switchTheme("theme-premium")}>
                        Premium Gold Theme
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => switchTheme("theme-apple")}>
                        Premium Blue Theme
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => switchTheme("dark")}>
                        Dark Mode
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              )
            }
            if (item.title === "Search") {
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    onClick={(e) => {
                      e.preventDefault();
                      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
                    }}
                    tooltip={`${item.title} (⌘K)`}
                  >
                    <item.icon className="size-4" />
                    <span>{item.title}</span>
                    <span className="ml-auto text-xs opacity-50">⌘K</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            }
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton 
                  render={<a href={item.url} onClick={(e) => handleNav(e, item.title)} />} 
                  isActive={activeItem === item.title}
                  tooltip={item.title}
                >
                  <item.icon className="size-4" />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
          
          <div className="mt-4 flex items-center justify-between px-2 w-full cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 rounded-md transition-colors overflow-hidden">
            <div className="flex items-center gap-3 overflow-hidden">
              <Avatar className="size-8 rounded-full bg-muted border shrink-0">
                <AvatarImage src={data.user.avatar} alt={data.user.name} />
                <AvatarFallback className="rounded-full bg-muted text-xs">ST</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-0.5 overflow-hidden text-xs transition-all duration-300 ease-in-out group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:w-0">
                <span className="font-medium truncate">{data.user.name}</span>
                <span className="text-muted-foreground truncate">{data.user.email}</span>
              </div>
            </div>
            <MoreHorizontal className="size-4 text-muted-foreground shrink-0 transition-all duration-300 ease-in-out group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:w-0" />
          </div>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
