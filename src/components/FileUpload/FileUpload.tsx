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
import { ValidationSchema } from '@/app/dashboard/page';

type FileUploadProps = {
    form: UseFormReturn<ValidationSchema>;
    onSubmit: SubmitHandler<ValidationSchema>;
};

export const FileUpload = ({ form, onSubmit }: FileUploadProps) => {
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
