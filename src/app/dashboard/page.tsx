import { FileUpload } from '@/components/FileUpload/FileUpload';
import { Results } from '@/components/Results/Results';

export default function Page() {
    return (
        <main>
            <h1>Processor</h1>
            <FileUpload />
            <Results />
        </main>
    );
}
