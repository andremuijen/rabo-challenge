import { csv, xml } from 'd3';

export const parseFile = async (file: File) => {
    // create accessible url from local file system
    const url = URL.createObjectURL(file);

    if (file.type === 'text/csv') {
        return await csv(url);
    }
    if (file.type === 'application/xml' || file.type === 'text/xml') {
        return await xml(url);
    }
    throw new Error('Unsupported file type');
};
