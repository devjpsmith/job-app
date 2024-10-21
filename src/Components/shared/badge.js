import './badge.css'


function getBadgeLevel(years) {
    if (years > 5) return 'medal-gold';
    if (years < 3) return 'medal-bronze';
    return 'medal-silver';
}

export default function Badge({years}) {
    return (
        <div className={`medal ${getBadgeLevel(years)}`}>
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 -960 960 960">
                <defs>
                    <linearGradient id="gold-shimmer" x2="-0.35" y2="1">
                        <stop offset="0%" stop-color="#AC9100"/>
                        <stop offset="15%" stop-color="#AC9100"/>
                        <stop offset="35%" stop-color="#EAEAEA"/>
                        <stop offset="56%" stop-color="#AC9100"/>
                        <stop offset="100%" stop-color="#AC9100"/>
                    </linearGradient>
                    <linearGradient id="silver-shimmer" x2="-0.35" y2="1">
                        <stop offset="0%" stop-color="#B0B0B0"/>
                        <stop offset="15%" stop-color="#B0B0B0"/>
                        <stop offset="35%" stop-color="#EAEAEA"/>
                        <stop offset="56%" stop-color="#B0B0B0"/>
                        <stop offset="100%" stop-color="#B0B0B0"/>
                    </linearGradient>
                </defs>
                <path
                    d="M480-450q-45 0-77.5-32.5T370-560q0-45 32.5-77.5T480-670q45 0 77.5 32.5T590-560q0 45-32.5 77.5T480-450ZM244-40v-304q-45-47-64.5-103T160-560q0-136 92-228t228-92q136 0 228 92t92 228q0 57-19.5 113T716-344v304l-236-79-236 79Zm236-260q109 0 184.5-75.5T740-560q0-109-75.5-184.5T480-820q-109 0-184.5 75.5T220-560q0 109 75.5 184.5T480-300ZM304-124l176-55 176 55v-171q-40 29-86 42t-90 13q-44 0-90-13t-86-42v171Zm176-86Z"/>
            </svg>
        </div>
    );
}