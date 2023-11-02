import { ErrorType, StatementProps, StatementWithError } from '@/lib/types';
import { WithId } from 'mongodb';

export const validateStatements = (statements: StatementProps[]) => {
    const referenceErrors = statements.map((item) => {
        const count = statements.filter(
            (statement) => statement.reference === item.reference
        ).length;

        if (count > 1) {
            return {
                ...item,
                ...{ error: ErrorType.Reference }
            } as StatementWithError;
        }
    });

    const balanceErrors = statements.map((item) => {
        const balanceCheck =
            Number((item.start + item.mutation).toFixed(2)) == item.end;
        if (!balanceCheck) {
            return {
                ...item,
                ...{ error: ErrorType.Balance }
            } as StatementWithError;
        }
    });

    return [...referenceErrors, ...balanceErrors].filter((item) => !!item);
};
