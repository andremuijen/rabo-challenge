export const dynamic = 'force-dynamic';

import { Results } from '@/components/Results/Results';
import { Box } from '@/components/Box/Box';
import clientPromise from '@/lib/mongodb';
import { FileProps } from '@/lib/types';

async function getEntries() {
    const client = await clientPromise;
    const result = await client
        .db('statements')
        .collection<FileProps>('statements')
        .find({ ref: 'file' }, { sort: { timestamp: -1 } })
        .toArray();
    return result;
}

export default async function Page() {
    const entries = await getEntries();
    return (
        <>
            {entries.map((entry) => (
                <Box key={entry._id.toString()}>
                    <Results date={entry.timestamp} ids={entry.ids} />
                </Box>
            ))}
        </>
    );
}
