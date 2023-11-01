import { ObjectId } from 'mongodb';

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

export type StatementWithError = StatementProps & {
    error: string;
};

export type FileProps = {
    ref: string;
    timestamp: Date;
    ids: ObjectId[];
};

export enum ErrorType {
    Reference = 'Transaction reference should be unique',
    Balance = 'End balance is not valid'
}
