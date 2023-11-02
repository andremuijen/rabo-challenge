import type { Metadata } from 'next';
import { myriad } from '@/app/fonts/config';
import '@/styles/globals.css';
import { ThemeProvider } from '@/components/ThemeProvider/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation/Navigation';

export const metadata: Metadata = {
    title: 'Rabobank Statement Processor',
    description:
        'Rabobank processes monthly deliveries of customer statement records'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={myriad.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <main>
                        <div className="container mx-auto text-right py-4">
                            <ThemeToggle />
                        </div>
                        <div className="container mx-auto">
                            <div className="flex-auto md:flex justify-between mb-2">
                                <Image
                                    src="/rabobank.svg"
                                    alt="Rabobank Logo"
                                    className="dark:brightness-0 dark:invert"
                                    width={150}
                                    height={50}
                                    priority
                                />
                                <h1 className="font-semibold italic text-[36px] text-card dark:text-white my-2">
                                    Statement Processor
                                </h1>
                            </div>
                            <Navigation />
                            {children}
                        </div>
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
