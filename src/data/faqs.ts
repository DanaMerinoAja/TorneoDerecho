export interface FaqItem {
    question: string;
    answer: string | string[];
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    main: {
        id: 'main',
        faqs: [
            {
                question: "Misión",
                answer: "El Torneo Nacional de Derecho Tributario busca ser un espacio académico inclusivo y participativo que fomente el interés por la materia tributaria entre estudiantes de Derecho, Economía y Contabilidad. Promueve la articulación entre teoría y práctica, el pensamiento crítico y el análisis de problemas reales del sistema tributario peruano. Además, contribuye a la formación de profesionales con valores éticos, compromiso con la justicia tributaria y sensibilidad hacia el desarrollo económico y social del país."
            },
            {
                question: "Visión",
                answer: "El concurso se proyecta a consolidarse como el evento académico de mayor prestigio nacional en el ámbito del Derecho Tributario, constituyendo un referente de excelencia en la formación profesional. Su visión es ser reconocido como una plataforma de innovación e integración universitaria, donde converjan estudiantes de distintas regiones del país en un ambiente de respeto, equidad y colaboración. En el mediano y largo plazo, aspira a contribuir a la creación de una cultura tributaria sólida, con profesionales capaces de responder a los retos de un sistema fiscal justo y eficiente, y comprometidos con el fortalecimiento institucional y el desarrollo sostenible del Perú."
            },
            {
                question: "Premios",
                answer: [
                    "Primer lugar: S/1200.00 (mil doscientos con 00/100 soles) + diploma de honor.",  
                    "Segundo lugar: S/600.00 (seiscientos con 00/100 soles) + diploma de participación.",
                    "Tercer lugar: S/400.00 (cuatrocientos con 00/100 soles) + diploma de participación"
                ]
            }
        ]
    }
};
