import { Outlet } from "react-router-dom"
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar"
import { AppSidebar } from "./AppSidebar"


const MainLayout = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full h-screen flex flex-col">
                <SidebarTrigger />
                {<Outlet />}
            </main>
        </SidebarProvider>
    )
}

export default MainLayout