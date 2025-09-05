import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppRightSidebar } from '@/components/app-right-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { type PropsWithChildren, useState, useCallback, type CSSProperties } from 'react';
import { usePage } from '@inertiajs/react';

export default function AppSidebarLayout({ children, breadcrumbs = [] }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    const isLeftDefaultOpen = usePage<SharedData>().props.sidebarOpen;
    const [leftOpen, setLeftOpen] = useState<boolean>(isLeftDefaultOpen);
    const [rightOpen, setRightOpen] = useState<boolean>(false);

    const handleLeftOpenChange = useCallback((open: boolean) => {
        setLeftOpen(open);
        if (open) {
            setRightOpen(false);
        }
    }, []);

    const handleRightOpenChange = useCallback((open: boolean) => {
        setRightOpen(open);
        if (open) {
            setLeftOpen(false);
        }
    }, []);

    return (
        <AppShell variant="sidebar" sidebarOpen={leftOpen} onSidebarOpenChange={handleLeftOpenChange}>
            <AppSidebar />
            <SidebarProvider
                defaultOpen={rightOpen}
                open={rightOpen}
                onOpenChange={handleRightOpenChange}
                keyboardShortcut="i"
                cookieName="right_sidebar_state"
                style={{ '--sidebar-width': '28rem' } as CSSProperties}
            >
                <AppContent variant="sidebar" className="overflow-x-hidden">
                    <AppSidebarHeader breadcrumbs={breadcrumbs} />
                    {children}
                </AppContent>
                <AppRightSidebar />
            </SidebarProvider>
        </AppShell>
    );
}
