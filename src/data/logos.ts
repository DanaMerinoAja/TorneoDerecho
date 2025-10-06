import type { ImageMetadata } from 'astro';

// Import your logo images
// Replace these imports with your actual logo files
import ausp1 from '@assets/images/logos/ausp1.jpg'
import ausp2 from '@assets/images/logos/aus2.jpg'
import ausp3 from '@assets/images/logos/ausp3.jpg'
import ausp4 from '@assets/images/logos/ausp4.jpg'
import ausp5 from '@assets/images/logos/ausp5.jpg'
import ausp6 from '@assets/images/logos/ausp6.jpg'
import ausp7 from '@assets/images/logos/ausp7.jpg'
import ausp8 from '@assets/images/logos/ausp8.jpg'
import ausp9 from '@assets/images/logos/ausp9.jpg'
import ausp10 from '@assets/images/logos/ausp10.jpg'
import ausp11 from '@assets/images/logos/ausp11.jpg'
import ausp12 from '@assets/images/logos/ausp12.png'
import ausp13 from '@assets/images/logos/ausp13.jpg'

export interface Logo {
    src: ImageMetadata;
    alt: string;
}

export interface LogoList {
    id: string;
    logos: Logo[];
}

// Example logo lists with imported images
export const logoLists: Record<string, LogoList> = {
    main: {
        id: 'main',
        logos: [
            
            {
                src: ausp1,
                alt: 'SyMiSRL',
            },
            {
                src: ausp2,
                alt: 'SyMiSRL',
            },
            {
                src: ausp3,
                alt: 'SyMiSRL',
            },
            {
                src: ausp4,
                alt: 'SyMiSRL',
            },
            {
                src: ausp5,
                alt: 'SyMiSRL',
            },

            {
                src: ausp6,
                alt: 'SyMiSRL',
            },
            {
                src: ausp7,
                alt: 'SyMiSRL',
            },
            {
                src: ausp8,
                alt: 'SyMiSRL',
            },
            {
                src: ausp9,
                alt: 'SyMiSRL',
            },
            {
                src: ausp10,
                alt: 'SyMiSRL',
            },
            {
                src: ausp11,
                alt: 'SyMiSRL',
            },
{
                src: ausp12,
                alt: 'SyMiSRL',
            },
            {
                src: ausp13,
                alt: 'SyMiSRL',
            },
        ]
    }
};
