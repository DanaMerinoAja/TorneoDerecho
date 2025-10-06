import { Bolt, Construction, Drill, Shield, Zap } from 'lucide-astro';
import conocimiento from '@assets/images/beneficios/derechio_conocimiento.png'
import oratoria from '@assets/images/beneficios/derecho_oratoria.png'
import premio from '@assets/images/beneficios/derecho_premio.webp'
import formacion from '@assets/images/beneficios/derecho_formacion.png'
import fiesta from '@assets/images/beneficios/fiesta.jpeg'
import type { ImageMetadata } from 'astro';
// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
    icon: LucideIcon;
    title: string;
    image: ImageMetadata;
    link: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Zap,
                title: 'Desarrolla habilidades de oratoria y argumentación jurídica',
                image: oratoria,
                link:"/servicios/mantenimiento-mecanico-electrico/"
            },
            {
                icon: Shield,
                title: 'Conecta con profesionales y expertos nacionales.',
                image: conocimiento,
                link:"/servicios/mantenimiento-neumaticos/"
            },
            {
                icon: Drill,
                title: 'Experiencia académica que suma a tu formación profesional',
                image: formacion,
                link:"/servicios/fabricacion-estructuras-metalicas/"
            },
            {
                icon: Drill,
                title: 'Beneficio económico',
                image: premio,
                link:"/servicios/fabricacion-estructuras-metalicas/"
            },
            {
                icon: Drill,
                title: 'Celebración de bienvenida y clausura',
                image: fiesta,
                link:"/servicios/fabricacion-estructuras-metalicas/"
            }
        ]
    }
};
