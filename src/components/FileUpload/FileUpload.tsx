'use client';

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { processFile } from '@/app/actions/parse-file';
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
        const result = await parseFile(file);
        // const test = new DOMParser().parseFromString(result, 'text/xml');
        console.log(file, result);
        await processFile([{ kak: 'hjpoer', lald: 'sadf' }, { nopg: 'sdf' }]);
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
                            <FormLabel>File input</FormLabel>
                            <FormControl>
                                <Input type="file" {...fileRef} />
                            </FormControl>
                            <FormDescription>
                                Please drag a file of type CSV or XML
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                ></FormField>
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};
