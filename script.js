const fleetData = {
    'f15-card': {
        name: 'F-15 Eagle',
        details: 'El F-15 Eagle es un caza táctico bimotor para cualquier clima, diseñado para obtener y mantener la superioridad aérea en el combate. \n\n• Primer vuelo: 1972\n• Unidades construidas: +1,198\n• Récord: 104 victorias, 0 derrotas.'
    },
    'f22-card': {
        name: 'F-22 Raptor',
        details: 'El F-22 Raptor es un avión de combate de sigilo táctico de quinta generación. \n\n• Tecnología Stealth avanzada\n• Supercrucero sin postcombustión\n• Costo unitario: ~$150 millones.'
    },
    'f18-card': {
        name: 'F18',
        details: 'El F16 es un jet de combate bimotor, supersónico, para todo clima, capaz de ser portado por portaaviones. \n\n• Versátil: Aire-Aire y Aire-Tierra\n• Utilizado por los Blue Angels\n• columna vertebral de la US Navy.'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const cardId = card.id;
            const data = fleetData[cardId];

            if (data) {
                alert(`----- ${data.name} -----\n\n${data.details}`);
            } else {
                console.log('Datos clasificados.');
            }
        });
    });
});
