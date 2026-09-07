import { AppSidebar } from "@/components/app-sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Dashboard1() {
    return (
        <SidebarProvider>
            <AppSidebar />

            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />

                    <Separator
                        orientation="vertical"
                        className="mr-2 hidden data-[orientation=vertical]:h-4 md:block"
                    />

                    <div className="flex items-center gap-2 md:hidden">
                        <div className="flex aspect-square size-8 items-center justify-center rounded-sm bg-primary">
                            <img
                                src="/imgs/logo.png"
                                alt="Doc-Que"
                                className="size-6"
                            />
                        </div>
                        <span className="font-semibold">Doc-Que</span>
                    </div>

                    <Breadcrumb className="hidden md:block">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="#">
                                    Overview
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Dashboard</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>

                <div className="flex flex-1 flex-col gap-4 p-4">
                    <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
