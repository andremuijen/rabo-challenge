'use client';

import { ColumnDef } from '@tanstack/react-table';
import { StatementWithError } from '@/lib/types';
import { Badge } from '../ui/badge';

export const columns: ColumnDef<StatementWithError>[] = [
    {
        accessorKey: 'reference',
        header: 'Reference'
    },
    {
        accessorKey: 'description',
        header: 'Description'
    },
    {
        accessorKey: 'error',
        header: 'Error',
        cell: (props) => (
            <Badge variant="destructive">{props.row.original.error}</Badge>
        )
    }
];
