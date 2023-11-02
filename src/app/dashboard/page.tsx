import { FileUpload } from '@/components/FileUpload/FileUpload';
import { Results } from '@/components/Results/Results';
import { Box } from '@/components/Box/Box';

export default function Page() {
    return (
        <>
            <Box>
                <FileUpload />
            </Box>
            <Box>
                <Results />
            </Box>
        </>
    );
}
