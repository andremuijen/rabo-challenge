export type CSVProps = {
    Reference: string;
    'Account Number': string;
    Description: string;
    'Start Balance': string;
    Mutation: string;
    'End Balance': string;
};

export type StatementProps = {
    reference: string;
    iban: string;
    description: string;
    start: number;
    end: number;
    mutation: number;
};
