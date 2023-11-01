'use server';

import clientPromise from '@/lib/mongodb';
import { FileProps, StatementErrorProps, StatementProps } from '@/lib/types';

async function getStatements() {
    const client = await clientPromise;
    const result = await client
        .db('statements')
        .collection<FileProps>('statements')
        .findOne({ ref: 'file' }, { sort: { timestamp: -1 } });

    const records = await client
        .db('statements')
        .collection<StatementProps>('statements')
        .find({ _id: { $in: result?.ids } })
        .toArray();

    return records;
}

export const Results = async () => {
    const statements = await getStatements();

    const filtered = statements.map((item) => {
        const count = statements.filter(
            (statement) => statement.reference === item.reference
        ).length;
        console.log(item, count);
        if (count > 1) {
            return {
                ...item,
                ...{ error: 'duplicate reference' }
            } as StatementErrorProps;
        }
    });

    return (
        <div>
            <h1>Results</h1>
            {filtered.map((item) => (
                <div>{item?.description}</div>
            ))}
        </div>
    );
};
