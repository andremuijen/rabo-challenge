import { FileUpload } from '@/components/FileUpload/FileUpload';
import { Results } from '@/components/Results/Results';
import { Box } from '@/components/Box/Box';
import Image from 'next/image';

export default function Page() {
    return (
        <main>
            <div className="flex-auto md:flex justify-between">
                <Image
                    src="/rabobank.svg"
                    alt="Rabobank Logo"
                    className="dark:brightness-0 dark:invert"
                    width={150}
                    height={50}
                    priority
                />
                <h1 className="font-semibold italic text-[36px] my-2">
                    Statement Processor
                </h1>
            </div>
            <Box>
                <FileUpload />
            </Box>
            <Box>
                <Results />
            </Box>
        </main>
    );
}
