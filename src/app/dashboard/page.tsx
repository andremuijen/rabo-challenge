import { FileUpload } from '@/components/FileUpload/FileUpload';
import { Results } from '@/components/Results/Results';
import { Box } from '@/components/Box/Box';

export default function Page() {
    return (
        <main>
            <div className="flex-auto md:flex justify-between">
                <h1 className="font-bold italic text-4xl">Rabobank</h1>
                <h1 className="font-normal italic text-4xl">
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
