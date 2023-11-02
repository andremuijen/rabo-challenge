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

type ValidationSchema = z.infer<typeof FormUploadSchema>;

export const FileUpload = () => {
    const form = useForm<ValidationSchema>({
        resolver: zodResolver(FormUploadSchema),
        defaultValues: {
            upload: undefined
        }
    });

    const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
        const file = data.upload[0] as File;
        const statements = await parseFile(file);
        // const test = new DOMParser().parseFromString(result, 'text/xml');
        console.log(file, statements);
        await processStatements(statements);
    };

    const fileRef = form.register('upload', { required: true });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="upload"
                    render={({ field }) => (
                        <FormItem>
                            <h1>File input</h1>
                            <p>
                                To process your statements please provide a file
                                in the MT940 format.
                            </p>
                            <FormControl>
                                <Input
                                    className="h-40"
                                    type="file"
                                    {...fileRef}
                                />
                            </FormControl>
                            <FormDescription className="py-2">
                                Please select or drag a file of type CSV or XML
                            </FormDescription>
                            <FormMessage className="pb-2" />
                        </FormItem>
                    )}
                ></FormField>
                <Button type="submit">Process Statements</Button>
            </form>
        </Form>
    );
};
