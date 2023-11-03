'use server';

import clientPromise from '@/lib/mongodb';
import { StatementSchema } from '@/lib/schemas';
import { FileProps, StatementProps } from '@/lib/types';
import { revalidatePath } from 'next/cache';

export async function processStatements(data: StatementProps[]) {
    try {
        StatementSchema.parse(data);
    } catch (e) {
        throw new Error(
            'Provided data does not match the required format (MT940)'
        );
    }

    try {
        const client = await clientPromise;
        const result = await client
            .db('statements')
            .collection<StatementProps>('statements')
            .insertMany(data);

        const ids = Object.values(result.insertedIds).map((id) => id);

        const ref = await client
            .db('statements')
            .collection<FileProps>('statements')
            .insertOne({ ref: 'file', timestamp: new Date(), ids });
    } catch (e: any) {
        throw new Error(e);
    }

    revalidatePath('/', 'layout');
}
