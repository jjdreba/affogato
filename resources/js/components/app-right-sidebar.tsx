import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, useSidebar } from '@/components/ui/sidebar';
import { Sparkles } from 'lucide-react';

export function AppRightSidebar() {
    const { toggleSidebar } = useSidebar();

    return (
        <Sidebar collapsible="icon" variant="inset" side="right">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            size="lg"
                            aria-label="Toggle Chat (cmd i)"
                            tooltip="cmd + i"
                            onClick={toggleSidebar}
                        >
                            <>
                                <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                                    <Sparkles className="size-5 fill-current text-white dark:text-black" />
                                </div>
                                <div className="ml-1 grid flex-1 text-left text-xl">
                                    <span className="mb-0.5 truncate leading-tight font-semibold">ai assistant</span>
                                </div>
                            </>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent />
        </Sidebar>
    );
}


