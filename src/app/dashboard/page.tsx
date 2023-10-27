'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FileUpload } from '@/components/FileUpload/FileUpload';

export default function Page() {
    const formSchema = z.object({
        upload: z.string().min(2, {
            message: 'Username must be at least 2 characters.'
        })
    });

    type ValidationSchema = z.infer<typeof formSchema>;

    const form = useForm<ValidationSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            upload: ''
        }
    });

    const onSubmit: SubmitHandler<ValidationSchema> = (data) =>
        console.log(data);

    return (
        <main>
            <h1>Processor</h1>
            <FileUpload form={form} onSubmit={onSubmit} />
        </main>
    );
}
