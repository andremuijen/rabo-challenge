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
        // {
        //     path: './myriad/MYRIADPRO-CONDIT.woff',
        //     weight: '400',
        //     style: 'italic'
        // },
        {
            path: './myriad/MYRIADPRO-BOLD.woff',
            weight: '700',
            style: 'bold'
        }
    ]
});

/**
 * @font-face {
 *     font-family: 'Myriad Pro';
 *     font-style: normal;
 *     font-weight: 400;
 *     src: local('Myriad Pro'), url('https://fonts.cdnfonts.com/s/492/MYRIADPRO-REGULAR.woff') format('woff');
 * }
 * @font-face {
 *     font-family: 'Myriad Pro';
 *     font-style: normal;
 *     font-weight: 400;
 *     src: local('Myriad Pro'), url('https://fonts.cdnfonts.com/s/492/MYRIADPRO-COND.woff') format('woff');
 * }
 * @font-face {
 *     font-family: 'Myriad Pro';
 *     font-style: italic;
 *     font-weight: 400;
 *     src: local('Myriad Pro'), url('https://fonts.cdnfonts.com/s/492/MYRIADPRO-CONDIT.woff') format('woff');
 * }
 * @font-face {
 *     font-family: 'Myriad Pro';
 *     font-style: normal;
 *     font-weight: 300;
 *     src: local('Myriad Pro'), url('https://fonts.cdnfonts.com/s/492/MyriadPro-Light.woff') format('woff');
 * }
 * @font-face {
 *     font-family: 'Myriad Pro';
 *     font-style: normal;
 *     font-weight: 600;
 *     src: local('Myriad Pro'), url('https://fonts.cdnfonts.com/s/492/MYRIADPRO-SEMIBOLD.woff') format('woff');
 * }
 * @font-face {
 *     font-family: 'Myriad Pro';
 *     font-style: italic;
 *     font-weight: 600;
 *     src: local('Myriad Pro'), url('https://fonts.cdnfonts.com/s/492/MYRIADPRO-SEMIBOLDIT.woff') format('woff');
 * }
 * @font-face {
 *     font-family: 'Myriad Pro';
 *     font-style: normal;
 *     font-weight: 700;
 *     src: local('Myriad Pro'), url('https://fonts.cdnfonts.com/s/492/MYRIADPRO-BOLDCOND.woff') format('woff');
 * }
 * @font-face {
 *     font-family: 'Myriad Pro';
 *     font-style: normal;
 *     font-weight: 700;
 *     src: local('Myriad Pro'), url('https://fonts.cdnfonts.com/s/492/MYRIADPRO-BOLD.woff') format('woff');
 * }
 * @font-face {
 *     font-family: 'Myriad Pro';
 *     font-style: italic;
 *     font-weight: 700;
 *     src: local('Myriad Pro'), url('https://fonts.cdnfonts.com/s/492/MYRIADPRO-BOLDIT.woff') format('woff');
 * }
 * @font-face {
 *     font-family: 'Myriad Pro';
 *     font-style: italic;
 *     font-weight: 700;
 *     src: local('Myriad Pro'), url('https://fonts.cdnfonts.com/s/492/MYRIADPRO-BOLDCONDIT.woff') format('woff');
 * }
 */
