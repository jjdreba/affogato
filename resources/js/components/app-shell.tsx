import { SidebarProvider } from '@/components/ui/sidebar';
import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

interface AppShellProps {
    children: React.ReactNode;
    variant?: 'header' | 'sidebar';
    sidebarOpen?: boolean;
    onSidebarOpenChange?: (open: boolean) => void;
}

export function AppShell({ children, variant = 'header', sidebarOpen, onSidebarOpenChange }: AppShellProps) {
    const isOpen = usePage<SharedData>().props.sidebarOpen;

    if (variant === 'header') {
        return <div className="flex min-h-screen w-full flex-col">{children}</div>;
    }

    return (
        <SidebarProvider
            defaultOpen={sidebarOpen ?? isOpen}
            open={sidebarOpen}
            onOpenChange={onSidebarOpenChange}
        >
            {children}
        </SidebarProvider>
    );
}
