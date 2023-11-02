'use client';

import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
    const pathname = usePathname();
    return (
        <>
            <Separator />
            <nav className="flex">
                <Link
                    href="/dashboard"
                    className={
                        pathname == '/dashboard' ? 'text-primary p-2' : 'p-2'
                    }
                >
                    Processor
                </Link>
                <Link
                    href="/dashboard/archive"
                    className={
                        pathname == '/dashboard/archive'
                            ? 'text-primary p-2'
                            : 'p-2'
                    }
                >
                    Archive
                </Link>
            </nav>
            <Separator />
        </>
    );
}
