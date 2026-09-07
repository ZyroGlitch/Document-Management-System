import {
    BadgeCheck,
    BarChart3,
    Briefcase,
    ChevronRight,
    ChevronsUpDown,
    ClipboardList,
    Clock3,
    Folder,
    Globe2,
    LayoutDashboard,
    LogOut,
    Sparkles,
    Star,
    User,
    Users,
} from "lucide-react";
import { Link, router, usePage } from "@inertiajs/react";
import { useRoute } from "ziggy-js";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar() {
    const route = useRoute();
    const { auth } = usePage().props;

    const initials = auth.user.name
        .split(" ")
        .map((word) => word[0])
        .join("");

    const logout = () => {
        router.post(route("auth.logout"));
    };

    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg">
                            <div className="flex aspect-square size-8 items-center justify-center rounded-sm bg-primary">
                                <img
                                    src="/imgs/logo.png"
                                    alt="Doc-Que"
                                    className="size-6"
                                />
                            </div>
                            <div className="flex flex-col gap-0.5 leading-none">
                                <span className="font-medium">Doc-Que</span>
                                <span className="text-xs text-muted-foreground">
                                    Document Management
                                </span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent className="overflow-hidden">
                <ScrollArea className="min-h-0 flex-1">
                    <SidebarGroup>
                        <SidebarGroupLabel>Overview</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild isActive>
                                        <Link href={route("web.dashboard")}>
                                            <LayoutDashboard className="size-4" />
                                            <span>Dashboard</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>

                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <a href="#">
                                            <ClipboardList className="size-4" />
                                            <span>Tasks</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>

                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <a href="#">
                                            <BarChart3 className="size-4" />
                                            <span>Roadmap</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>

                    <SidebarGroup>
                        <SidebarGroupLabel>Projects</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <Collapsible
                                    asChild
                                    defaultOpen
                                    className="group/collapsible"
                                >
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton>
                                                <Briefcase className="size-4" />
                                                <span>Active Projects</span>
                                                <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                <SidebarMenuSubItem>
                                                    <SidebarMenuSubButton
                                                        asChild
                                                    >
                                                        <a href="#">
                                                            Project Alpha
                                                        </a>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                                <SidebarMenuSubItem>
                                                    <SidebarMenuSubButton
                                                        asChild
                                                    >
                                                        <a href="#">
                                                            Project Beta
                                                        </a>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                                <SidebarMenuSubItem>
                                                    <SidebarMenuSubButton
                                                        asChild
                                                    >
                                                        <a href="#">
                                                            Project Gamma
                                                        </a>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>

                                <Collapsible
                                    asChild
                                    defaultOpen
                                    className="group/collapsible"
                                >
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton>
                                                <Folder className="size-4" />
                                                <span>Archived</span>
                                                <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                <SidebarMenuSubItem>
                                                    <SidebarMenuSubButton
                                                        asChild
                                                    >
                                                        <a href="#">
                                                            2024 Archive
                                                        </a>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                                <SidebarMenuSubItem>
                                                    <SidebarMenuSubButton
                                                        asChild
                                                    >
                                                        <a href="#">
                                                            2023 Archive
                                                        </a>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>

                    <SidebarGroup>
                        <SidebarGroupLabel>Team</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <a href="#">
                                            <Users className="size-4" />
                                            <span>Members</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>

                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <a href="#">
                                            <Clock3 className="size-4" />
                                            <span>Sprints</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>

                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <a href="#">
                                            <BadgeCheck className="size-4" />
                                            <span>Approvals</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>

                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <a href="#">
                                            <Star className="size-4" />
                                            <span>Reviews</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>

                    <SidebarGroup>
                        <SidebarGroupLabel>Workspace</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <a href="#">
                                            <Globe2 className="size-4" />
                                            <span>Integrations</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>

                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <a href="#">
                                            <Sparkles className="size-4" />
                                            <span>Automations</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </ScrollArea>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                >
                                    <Avatar className="size-8 rounded-lg">
                                        <AvatarFallback className="rounded-lg">
                                            {initials}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-medium">
                                            {auth.user.name}
                                        </span>
                                        <span className="truncate text-xs text-muted-foreground">
                                            {auth.user.email}
                                        </span>
                                    </div>
                                    <ChevronsUpDown className="ml-auto size-4" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                                side="bottom"
                                align="end"
                                sideOffset={4}
                            >
                                <DropdownMenuLabel className="p-0 font-normal">
                                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                        <Avatar className="size-8 rounded-lg">
                                            <AvatarFallback className="rounded-lg">
                                                {initials}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-medium">
                                                {auth.user.name}
                                            </span>
                                            <span className="truncate text-xs text-muted-foreground">
                                                {auth.user.email}
                                            </span>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <User className="mr-2 size-4" />
                                    Account
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={logout}>
                                    <LogOut className="mr-2 size-4" />
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>

            <SidebarRail />
        </Sidebar>
    );
}
