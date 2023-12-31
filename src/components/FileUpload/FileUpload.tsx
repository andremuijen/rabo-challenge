'use client';

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { processStatements } from '@/app/actions/process-statements';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { parseFile } from '@/lib/parser';
import { FormUploadSchema } from '@/lib/schemas';
import { Dialog } from '@/components/Dialog/Dialog';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ErrorType } from '@/lib/types';
import { Spinner } from '@/components/Spinner/Spinner';
import { useFormStatus } from 'react-dom';

type ValidationSchema = z.infer<typeof FormUploadSchema>;

export const FileUpload = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [dialog, setDialog] = useState({
        open: false,
        description: ''
    });

    const form = useForm<ValidationSchema>({
        resolver: zodResolver(FormUploadSchema),
        defaultValues: {
            upload: undefined
        }
    });

    const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
        const file = data.upload[0] as File;
        const statements = await parseFile(file);
        setLoading(true);

        try {
            await processStatements(statements);
            setLoading(false);
            router.push('/dashboard/results');
        } catch {
            setDialog({
                open: true,
                description: ErrorType.File
            });
            form.reset();
        }
    };

    const fileRef = form.register('upload', { required: true });

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="upload"
                        render={({ field }) => (
                            <FormItem>
                                <h1>File input</h1>
                                <p>
                                    To process your statements please provide a
                                    file in the MT940 format.
                                </p>
                                <FormControl>
                                    <Input
                                        className="h-40"
                                        type="file"
                                        {...fileRef}
                                    />
                                </FormControl>
                                <FormDescription className="py-2">
                                    Instructions: select or drag a file of type
                                    CSV or XML
                                </FormDescription>
                                <FormMessage className="py-2" />
                            </FormItem>
                        )}
                    ></FormField>
                    <div className="flex items-center">
                        <Button type="submit" disabled={loading}>
                            Process Statements
                        </Button>
                        {loading && <Spinner />}
                    </div>
                </form>
            </Form>
            {dialog.open && (
                <Dialog
                    onClose={() => setDialog({ open: false, description: '' })}
                    message={dialog.description}
                />
            )}
        </>
    );
};
