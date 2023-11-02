'use server';

import clientPromise from '@/lib/mongodb';
import { FileProps, StatementProps, StatementWithError } from '@/lib/types';
import { DataTable } from '@/components/DataTable/DataTable';
import { columns } from '../DataTable/columns';
import { validateStatements } from '@/lib/validator';

async function getStatements() {
    const client = await clientPromise;
    const result = await client
        .db('statements')
        .collection<FileProps>('statements')
        .findOne({ ref: 'file' }, { sort: { timestamp: -1 } });

    const records = await client
        .db('statements')
        .collection<StatementProps>('statements')
        .find({ _id: { $in: result?.ids } }, { projection: { _id: false } })
        .toArray();
    console.log(records);
    return records;
}

export const Results = async () => {
    const statements = await getStatements();

    const filtered = validateStatements(statements);

    // const filtered = statements
    //     .map((item) => {
    //         const count = statements.filter(
    //             (statement) => statement.reference === item.reference
    //         ).length;
    //
    //         if (count > 1) {
    //             return {
    //                 ...item,
    //                 ...{ error: 'duplicate reference' }
    //             } as StatementWithError;
    //         }
    //     })
    //     .filter((item) => !!item);
    //
    // console.log(filtered);

    return (
        <div>
            <h1>Results</h1>
            {filtered && (
                <DataTable
                    columns={columns}
                    data={filtered as StatementWithError[]}
                />
            )}

            {/*{filtered.map((item) => (
                <div>{item?.description}</div>
            ))}*/}
        </div>
    );
};
