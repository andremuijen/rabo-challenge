import React from 'react';

export const Box = ({ children }: { children: React.ReactNode }) => {
    return <div className="bg-card p-5 my-5 rounded-lg">{children}</div>;
};
