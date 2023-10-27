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
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';

export default function Page() {
    const formSchema = z.object({
        upload: z.string().min(2, {
            message: 'Username must be at least 2 characters.'
        })
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            upload: ''
        }
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => console.log(data);

    return (
        <main>
            <h1>Processor</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="upload"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>File input</FormLabel>
                                <FormControl>
                                    <Input type="file" {...field} />
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
        </main>
    );
}
