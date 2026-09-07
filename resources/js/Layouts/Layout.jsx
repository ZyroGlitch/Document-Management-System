import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, router, usePage } from "@inertiajs/react";
import { useRoute } from "ziggy-js";
import {
    Briefcase,
    ChevronDown,
    ChevronsUpDown,
    FilePlus,
    FileText,
    Folder,
    LayoutDashboard,
    LayoutTemplate,
    LogOut,
    Settings,
    User,
    Users,
    ChevronRight,
} from "lucide-react";
import React, { useState } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const sidebarNavByRole = {
    Client: [
        {
            title: "Overview",
            items: [
                {
                    label: "Dashboard",
                    icon: LayoutDashboard,
                    href: "/client/dashboard",
                },
                {
                    label: "Documents",
                    icon: FileText,
                    children: [
                        {
                            label: "Request Documents",
                            href: "/client/documents",
                        },
                        // { label: "Approved Documents", href: "#" },
                    ],
                },
            ],
        },
    ],

    Admin: [
        {
            title: "Overview",
            items: [
                {
                    label: "Dashboard",
                    icon: LayoutDashboard,
                    href: "/admin/dashboard",
                },
                {
                    label: "Request Document Approval",
                    icon: FileText,
                    href: "#",
                },
            ],
        },
    ],

    "Lease Admin": [
        {
            title: "Overview",
            items: [
                {
                    label: "Dashboard",
                    icon: LayoutDashboard,
                    href: "/lease-admin/dashboard",
                },
            ],
        },
    ],

    Operation: [
        {
            title: "Overview",
            items: [
                {
                    label: "Dashboard",
                    icon: LayoutDashboard,
                    href: "/operation/dashboard",
                },
            ],
        },
    ],
};

export default function Layout({ children }) {
    const route = useRoute();
    const { url, props } = usePage();

    // The logged-in user is shared by HandleInertiaRequests.php.
    const user = props.auth?.user;
    const sidebarNav = sidebarNavByRole[user?.role] ?? [];

    const initials =
        user?.name
            .split(" ")
            .map((word) => word[0])
            .join("") ?? "";

    const logout = () => {
        router.post(route("auth.logout"));
    };

    // Labels of the menus that are currently open
    const [openMenus, setOpenMenus] = useState(["Active Projects"]);

    const toggleMenu = (label) => {
        setOpenMenus((current) =>
            current.includes(label)
                ? current.filter((name) => name !== label)
                : [...current, label],
        );
    };

    return (
        <>
            <main className="h-screen flex ">
                <section className="flex flex-col flex-1 max-w-[255px] h-screen bg-white-50 shadow border">
                    {/* Sidebar - Header */}
                    <div className="flex items-center hover:bg-gray-50 hover:rounded gap-3 m-2 py-2 mb-8">
                        <img
                            src="/imgs/logo.png"
                            alt="Doc-Que logo"
                            className="h-8 w-8"
                        />

                        <div className="flex-col gap-y-4">
                            <h6 className="text-sm font-bold">Doc-Que</h6>
                            <p className="text-xs">
                                Document Management System
                            </p>
                        </div>
                    </div>

                    {/* Sidebar - Content */}
                    <div className="flex flex-1 flex-col gap-y-4 m-2 overflow-y-auto">
                        {/* Single (No-Collapsible) */}
                        {sidebarNav.map((group) => (
                            <div
                                key={group.title}
                                className="flex flex-col gap-y-2"
                            >
                                <p className="text-xs text-gray-500 font-semibold mb-2">
                                    {group.title}
                                </p>

                                <ul className="flex flex-col gap-y-1">
                                    {group.items.map((item) => (
                                        <li key={item.label}>
                                            {item.children ? (
                                                <>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            toggleMenu(
                                                                item.label,
                                                            )
                                                        }
                                                        className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-gray-100"
                                                    >
                                                        <item.icon className="size-4 shrink-0" />
                                                        {item.label}
                                                        <ChevronDown
                                                            className={`ml-auto size-4 shrink-0 transition-transform ${
                                                                openMenus.includes(
                                                                    item.label,
                                                                )
                                                                    ? "rotate-180"
                                                                    : ""
                                                            }`}
                                                        />
                                                    </button>

                                                    {openMenus.includes(
                                                        item.label,
                                                    ) && (
                                                        <ul className="ml-4 mt-1 flex flex-col gap-y-1 border-l pl-3">
                                                            {item.children.map(
                                                                (child) => (
                                                                    <li
                                                                        key={
                                                                            child.label
                                                                        }
                                                                    >
                                                                        <Link
                                                                            href={
                                                                                child.href
                                                                            }
                                                                            className={`flex w-full items-center rounded-md px-2 py-1.5 text-sm ${
                                                                                url ===
                                                                                child.href
                                                                                    ? "bg-gray-100 font-medium"
                                                                                    : "hover:bg-gray-100"
                                                                            }`}
                                                                        >
                                                                            {
                                                                                child.label
                                                                            }
                                                                        </Link>
                                                                    </li>
                                                                ),
                                                            )}
                                                        </ul>
                                                    )}
                                                </>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm ${
                                                        url === item.href
                                                            ? "bg-gray-100 font-medium"
                                                            : "hover:bg-gray-100"
                                                    }`}
                                                >
                                                    <item.icon className="size-4 shrink-0" />
                                                    {item.label}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Sidebar - Footer */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button
                                type="button"
                                className="flex items-center gap-3 m-2 rounded-md border px-2 py-2 text-left hover:bg-gray-50"
                            >
                                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold">
                                    {initials}
                                </div>

                                <div className="flex-1 overflow-hidden">
                                    <p className="truncate text-sm font-semibold">
                                        {user.name}
                                    </p>
                                    <p className="truncate text-xs text-gray-500">
                                        {user.email}
                                    </p>
                                </div>

                                <ChevronsUpDown className="size-4 shrink-0 text-gray-500" />
                            </button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent side="top" align="start">
                            <DropdownMenuItem>
                                <User className="size-4" />
                                Profile
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem onClick={logout}>
                                <LogOut className="size-4" />
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </section>

                {/* <section className="flex-1 h-screen bg-gray-50"></section> */}

                <section className="h-screen flex-1">
                    <nav className="bg-slate-50 shadow h-[64px] w-full flex justify-between items-center px-[25px]">
                        <div className="flex items-center gap-x-4">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem className="hover:text-slate-700">
                                        <Link href="/dashboard">Dashboard</Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>
                                            Breadcrumb
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </nav>

                    <section className="p-6">{children}</section>
                </section>
            </main>
        </>
    );
}
