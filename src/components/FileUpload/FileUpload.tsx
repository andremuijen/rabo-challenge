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
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

type FileUploadProps = {
    form: UseFormReturn<{ upload: string }>;
    onSubmit: SubmitHandler<{ upload: string }>;
};

export const FileUpload = ({ form, onSubmit }: FileUploadProps) => {
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
    );
};
