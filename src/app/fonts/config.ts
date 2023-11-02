import localFont from 'next/font/local';

export const myriad = localFont({
    display: 'swap',
    variable: '--font-myriad',
    src: [
        {
            path: './myriad/MYRIADPRO-REGULAR.woff',
            weight: '400',
            style: 'normal'
        },
        {
            path: './myriad/MYRIADPRO-SEMIBOLDIT.woff',
            weight: '600',
            style: 'italic'
        }
    ]
});
