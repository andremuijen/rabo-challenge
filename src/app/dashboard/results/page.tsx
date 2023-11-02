import { Results } from '@/components/Results/Results';
import { Box } from '@/components/Box/Box';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function Page() {
    return (
        <>
            <Box>
                <Results />
            </Box>
            <Link
                href="/dashboard"
                className={buttonVariants({ variant: 'default' })}
            >
                Back to processor
            </Link>
        </>
    );
}
