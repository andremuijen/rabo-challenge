'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FileUpload } from '@/components/FileUpload/FileUpload';
import { csv } from 'd3';

const MAX_FILE_SIZE = 500000;
const ACCEPTED_TYPES = ['text/csv', 'application/xml', 'text/xml'];

const formSchema = z.object({
    upload: z
        .any()
        .refine((files) => files?.length == 1, 'Image is required.')
        .refine(
            (files) => files?.[0]?.size <= MAX_FILE_SIZE,
            `Max file size is 5MB.`
        )
        .refine(
            (files) => ACCEPTED_TYPES.includes(files?.[0]?.type),
            '.jpg, .jpeg, .png and .webp files are accepted.'
        )
});

export type ValidationSchema = z.infer<typeof formSchema>;

export default function Page() {
    const form = useForm<ValidationSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            upload: undefined
        }
    });

    const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
        console.log(data);
        // new FileReader().readAsDataURL(data.upload);
        const url = URL.createObjectURL(data.upload[0]);
        const parse = await csv(url);
        console.log(parse);
    };

    return (
        <main>
            <h1>Processor</h1>
            <FileUpload form={form} onSubmit={onSubmit} />
        </main>
    );
}
