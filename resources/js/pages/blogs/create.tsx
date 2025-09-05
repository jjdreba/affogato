import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { type SerializedEditorState } from 'lexical';
import { Editor } from '@/components/blocks/editor-00/editor';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: dashboard().url },
    { title: 'New Blog' },
];

export default function BlogCreate() {
    const [editorState, setEditorState] = useState<SerializedEditorState | undefined>(undefined);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="New Blog" />
            <div className="p-6">
                <div className="mb-4">
                    <h1 className="text-xl font-semibold">New Blog</h1>
                </div>
                <Editor
                    editorSerializedState={editorState as SerializedEditorState}
                    onSerializedChange={(value) => setEditorState(value)}
                />
            </div>
        </AppLayout>
    );
}


