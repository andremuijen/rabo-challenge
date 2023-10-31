import { z } from 'zod';

const MAX_FILE_SIZE = 1000000;
const ACCEPTED_TYPES = ['text/csv', 'application/xml', 'text/xml'];

export const FormUploadSchema = z.object({
    upload: z
        .custom<FileList>((v) => v instanceof FileList)
        .refine(
            (files) => files?.length == 1,
            'Please choose a file or drag it on the file input field.'
        )
        .refine(
            (files) => files?.[0]?.size <= MAX_FILE_SIZE,
            `Maximum file size is ${(MAX_FILE_SIZE / 1048576).toFixed(1)} MB.`
        )
        .refine(
            (files) => ACCEPTED_TYPES.includes(files?.[0]?.type),
            'Please use .csv or .xml files to process your statements.'
        )
});
