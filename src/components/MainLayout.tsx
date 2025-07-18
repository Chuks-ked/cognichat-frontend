import { Outlet } from "react-router-dom"
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar"
import { AppSidebar } from "./AppSidebar"


const MainLayout = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                <SidebarTrigger />
                {<Outlet />}
            </main>
        </SidebarProvider>
    )
}

export default MainLayout