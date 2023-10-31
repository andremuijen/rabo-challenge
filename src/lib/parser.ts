import { csvParse, xml } from 'd3';
import { CSVProps, StatementProps } from '@/lib/types';

export const parseFile = async (file: File) => {
    // create accessible url from local file system
    const url = URL.createObjectURL(file);

    /**
     * Normally await csv(url) would be enough to parse the csv file.
     * However, the csv file is encoded in iso-8859-1, which is not supported by d3.
     * Therefore, we need to fetch the file as an array buffer and decode it to text.
     * Then we can parse the csv data and convert it to a workable format.
     */
    if (file.type === 'text/csv') {
        try {
            const response = await fetch(url)
                .then(function (response) {
                    return response.arrayBuffer();
                })
                .then(function (buffer) {
                    const decoder = new TextDecoder('iso-8859-1');
                    return decoder.decode(buffer);
                });
            return convertFromCsv(csvParse(response));
        } catch (e) {
            throw new Error("Can't parse csv file");
        }
    }
    if (file.type === 'application/xml' || file.type === 'text/xml') {
        return convertFromXml(await xml(url));
    }
    throw new Error('Unsupported file type');
};

export const convertFromCsv = (data: CSVProps[]): StatementProps[] => {
    return data.map((row) => ({
        reference: row.Reference,
        iban: row['Account Number'],
        description: row.Description,
        start: Number(row['Start Balance']),
        end: Number(row['End Balance']),
        mutation: Number(row.Mutation)
    }));
};

export const convertFromXml = (data: XMLDocument): StatementProps[] => {
    const output: StatementProps[] = [];
    const records = data.getElementsByTagName('record');
    for (const record of records) {
        output.push({
            reference: record.getAttribute('reference') || '',
            iban:
                record.getElementsByTagName('accountNumber')[0].childNodes[0]
                    .nodeValue || '',
            description:
                record.getElementsByTagName('description')[0].childNodes[0]
                    .nodeValue || '',
            start: Number(
                record.getElementsByTagName('startBalance')[0].childNodes[0]
                    .nodeValue
            ),
            end: Number(
                record.getElementsByTagName('endBalance')[0].childNodes[0]
                    .nodeValue
            ),
            mutation: Number(
                record.getElementsByTagName('mutation')[0].childNodes[0]
                    .nodeValue
            )
        });
    }
    return output;
};
