'use server';

import clientPromise from '@/lib/mongodb';
import { FileProps, StatementProps, StatementWithError } from '@/lib/types';
import { DataTable } from '@/components/DataTable/DataTable';
import { columns } from '../DataTable/columns';
import { validateStatements } from '@/lib/validator';
import { ObjectId } from 'mongodb';

async function getStatements(ids?: ObjectId[]) {
    const client = await clientPromise;
    const result = await client
        .db('statements')
        .collection<FileProps>('statements')
        .findOne({ ref: 'file' }, { sort: { timestamp: -1 } });

    const records = await client
        .db('statements')
        .collection<StatementProps>('statements')
        .find(
            { _id: { $in: ids || result?.ids } },
            { projection: { _id: false } }
        )
        .toArray();
    return records;
}

type ResultsProps = {
    date?: Date;
    ids?: ObjectId[];
};

export const Results = async ({ date, ids }: ResultsProps) => {
    const statements = await getStatements(ids);
    const filtered = validateStatements(statements);

    return (
        <div>
            <h1>{date?.toUTCString() || 'Results'}</h1>
            {filtered && (
                <DataTable
                    columns={columns}
                    data={filtered as StatementWithError[]}
                />
            )}
        </div>
    );
};
