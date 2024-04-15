import bousse from '../images/bousse.jpg'
import voodoo from '../images/voodoo.jpg'
import grodan from '../images/grodan.jpg'
import andraTaket from '../images/andraTaket.jpg'
import koksvaggen from '../images/koksvaggen.jpg'
import angsvaggen from '../images/angsvaggen.jpg'
import mpfc from '../images/mpfc.jpg'
import dodsdoden from '../images/dodsdoden.jpg'
import trollblocket from '../images/trollblocket.jpg'

export const data = [
    {
        id: "1",
        title: "La bousse blocket",
        position: {
            lat: 57.745164259687314,
            lng: 12.05678674544462,
        },
        gboLink: "",
        cragLink: "",
        boulders: [
            {
                id: "1",
                path: "m167,374c0,0 -6,-144 -6,-144",
                name: "Helt Namnlös",
                description: "Rakt upp från det stora underclinget",
                grade: "6A",
            },
            {
                id: "2",
                path: "m205.12707,423.07556c-10.76921,-151.28177 -35.89587,-182.56264 -34.35816,-204.10162c1.53771,-21.53898 49.74275,-110.25676 49.23067,-110.76902",
                name: "Kermit",
                description: "Snett upp åt höger längs areten.",
                grade: "6C",
            },
            {
                id: "3",
                path: "m206.66553,424.61402c-11.79485,-112.8203 -8.71793,-66.66654 -12.30692,-133.84534c30.2556,-105.12857 90.25549,-206.15402 89.74342,-206.66628",
                name: "Dritbaggecombo",
                description: "Start i Kermit sedan upp höger och bort i La Bouse",
                grade: "6C",
            },
            {
                id: "4",
                path: "",
                name: "Magic Bouse",
                description: "",
                grade: "7C",
            },
            {
                id: "5",
                path: "m205.12707,427.17812c0,0 41.02556,-129.23053 57.94936,-143.07609c73.33245,7.17891 81.02474,-4.10312 128.20489,-11.79485c8.71719,-15.38515 -5.64176,-80.51323 -93.84598,-145.12793c-10.76996,-21.53898 -9.2315,-43.59022 -9.74357,-44.10248",
                name: "El Toro",
                description: "Börja i La Bousse ss, avsluta i El Maco.",
                grade: "7C",
            },
            {
                id: "6",
                path: "m213.33136,425.55318l44.44559,-140.5541c-0.55684,-33.33422 -60.55665,-92.77848 -50.55668,-120.55617c9.99997,-27.77769 38.88876,-69.44422 38.3345,-69.99877",
                name: "La Bouse SS",
                description: "Sittstart till klassikern. Börjar nere till vänster.",
                grade: "7B+",
            },
            {
                id: "7",
                path: "m257.77566,282.77587c0,0 -53.88872,-93.33303 -53.33187,-108.88754c0.55684,-15.55451 41.10969,-77.22297 40.55542,-77.77753",
                name: "La Bouse",
                description: "Start från stenen på krimpar",
                grade: "7B",
            },
            {
                id: "8",
                path: "m381.10859,276.10922c0,0 2.22222,-56.11093 -2.77648,-66.1099c-4.9987,-9.99897 -77.77624,-71.66544 -84.99973,-79.99974c-7.22349,-8.33431 -15.55679,-44.4453 -16.11106,-44.99985",
                name: "El Maco",
                description: "Ståstart från hålet vid tvärsprickan",
                grade: "7A+",
            },
            {
                id: "9",
                path: "m452.77503,439.99758c0,0 51.11095,-150.55507 39.4456,-148.33186c0.55427,0.55456 -90.55655,-14.4454 -112.77741,-13.88884c-43.89003,9.44342 -98.3343,10.55452 -112.22315,6.11009c-25.55547,-22.7777 -53.88872,-87.7775 -55.55409,-102.77645c1.10982,-36.66755 37.22082,-88.33405 36.66655,-88.8886",
                name: "El nombre del nino",
                description: "Starta i El Maco ss och kläyttra vänster in i La bouse",
                grade: "8A",
            },
            {
                id: "10",
                path: "m464.94479,428.86787c10.40686,-46.84477 50.98133,-138.94094 31.2206,-140.53431c-36.85584,-4.2142 -108.90721,-3.40047 -110.56752,-12.64259c-11.70185,-30.22535 -27.31431,-86.70767 -35.10555,-90.67604c-18.3146,-18.15223 -49.47835,-40.77373 -54.94379,-54.45669l-26.65119,-43.33319",
                name: "El Maco SS",
                description: "'Sittstart' (mer en låg etableringsstart) vid Los Lobos",
                grade: "7C",
            },
            {
                id: "11",
                path: "m467.59777,427.3743c0,0 37.98883,-126.81564 28.49162,-135.75419c0,0 -30.72626,-34.63687 -32.96089,-49.72067c-11.73184,-45.81006 -25.13966,-156.42458 -25.13966,-156.42458",
                name: "Los lobos SS",
                description: "Sitt-/etablerings-start på list",
                grade: "7B",
            },
            {
                id: "12",
                path: "m501.67598,288.82682c0,0 -64.24581,-201.67598 -64.80447,-201.67598",
                name: "Los lobos",
                description: "etablera på uppenbart grepp och sedan upp",
                grade: "6C",
            },
            {
                id: "13",
                path: "m584,296c0,0 -151,-208 -151,-208",
                name: "Fletch",
                description: "Rätt upp i det lilla hörnet via tvärsprickan",
                grade: "5+",
            },
            {
                id: "14",
                path: "m629.60894,475.41899c0,0 -32.96089,-65.92179 -32.96089,-94.41341c-4.46927,-20.11173 -2.7933,-83.24022 -7.82123,-97.76536c-5.02793,-14.52514 -151.95531,-196.64804 -152.51397,-196.64804",
                name: "Sex med babylon",
                description: "Vänster hand på go pinch, höger hand på slopat sidgrep",
                grade: "7B",
            },
            {
                id: "15",
                path: "m675.41899,469.8324c0.55866,-0.55866 39.6648,-66.48045 44.13408,-108.93855c0,-35.19553 -12.84916,-51.95531 -27.3743,-73.18436c-17.31844,-30.72626 -233.51955,-196.08939 -233.51955,-196.64804",
                name: "I'm Chevy Chase and you're not ss",
                description: "",
                grade: "6A",
            },
            {
                id: "16",
                path: "m726.25698,302.23464c0,0 -265.36313,-208.93855 -265.92179,-208.93855",
                name: "I'm Chevy Chase and you're not",
                description: "Start i det lilla hörnet, sedan rakt upp via tvärspricka",
                grade: "4",
            },
        ],
        images: [bousse],
    },
    {
        id: "2",
        title: "Voodoo blocket",
        position: {
            lat: 57.7450511,
            lng: 12.0589301,
        },
        gboLink: "",
        cragLink: "",
        boulders: [
            {
                id: "",
                path: "",
                description: "",
                name: "",
                grade: "",
            },
        ],
        images: [voodoo],
    },
    {
        id: "3",
        title: "Köksväggen",
        position: {
            lat: 57.745642,
            lng: 12.057577,
        },
        gboLink: "",
        cragLink: "",
        boulders: [
            {
                id: "",
                path: "",
                description: "",
                name: "",
                grade: "",
            },
        ],
        images: [koksvaggen],
    },
    {
        id: "4",
        title: "Björnberget",
        position: {
            lat: 57.748318,
            lng: 12.050203,
        },
        gboLink: "",
        cragLink: "",
        boulders: [
            {
                id: "",
                path: "",
                description: "",
                name: "",
                grade: "",
            },
        ],
        images: [],
    },
    {
        id: "5",
        title: "Fjällbo dammen",
        position: {
            lat: 57.7448,
            lng: 12.0709,
        },
        gboLink: "",
        cragLink: "",
        boulders: [
            {
                id: "",
                path: "",
                description: "",
                name: "",
                grade: "",
            },
        ],
        images: [],
    },
    {
        id: "6",
        title: "Fjällbo, Plan 8",
        position: {
            lat: 57.7430,
            lng: 12.0693,
        },
        gboLink: "",
        cragLink: "",
        boulders: [
            {
                id: "",
                path: "",
                description: "",
                name: "",
                grade: "",
            },
        ],
        images: [],
    },
    {
        id: "7",
        title: "Fjällbo Plan 9, Hollywood",
        position: {
            lat: 57.7444,
            lng: 12.0694,
        },
        gboLink: "",
        cragLink: "",
        boulders: [
            {
                id: "",
                path: "",
                description: "",
                name: "",
                grade: "",
            },
        ],
        images: [],
    },
    {
        id: "8",
        title: "Tornväktaregatan",
        position: {
            lat: 57.7445,
            lng: 12.0524,
        },
        gboLink: "",
        cragLink: "",
        boulders: [
            {
                id: "",
                path: "",
                description: "",
                name: "",
                grade: "",
            },
        ],
        images: [],
    },
    {
        id: "9",
        title: "Trollblocket",
        position: {
            lat: 57.7467,
            lng: 12.0563,
        },
        gboLink: "",
        cragLink: "",
        boulders: [
            {
                id: "",
                path: "",
                description: "",
                name: "",
                grade: "",
            },
        ],
        images: [trollblocket],
    },
    {
        id: "10",
        title: "Ekhyllan (Plan 5)",
        position: {
            lat: 57.7434,
            lng: 12.0632,
        },
        gboLink: "",
        cragLink: "",
        boulders: [
            {
                id: "",
                path: "",
                description: "",
                name: "",
                grade: "",
            },
        ],
        images: [],
    },
    {
        id: "11",
        title: "Nordväst om ängen",
        position: {
            lat: 57.7457,
            lng: 12.0561,
        },
        gboLink: "",
        cragLink: "",
        boulders: [
            {
                id: "",
                path: "",
                description: "",
                name: "",
                grade: "",
            },
        ],
        images: [],
    },
    {
        id: "12",
        title: "Lilla Ängsväggen",
        position: {
            lat: 57.7455704,
            lng: 12.0569600,
        },
        gboLink: "",
        cragLink: "",
        boulders: [
            {
                id: "",
                path: "",
                description: "",
                name: "",
                grade: "",
            },
        ],
        images: [angsvaggen],
    },
    {
        id: "13",
        title: "Ängsareten, Jazzbyxa",
        position: {
            lat: 57.7450908,
            lng: 12.0579561,
        },
        gboLink: "",
        cragLink: "",
        boulders: [
            {
                id: "",
                path: "",
                description: "",
                name: "",
                grade: "",
            },
        ],
        images: [],
    },
    {
        id: "14",
        title: "Det andra taket",
        position: {
            lat: 57.7453608,
            lng: 12.0587621,
        },
        gboLink: "",
        cragLink: "",
        boulders: [
            {
                id: "",
                path: "",
                description: "",
                name: "",
                grade: "",
            },
        ],
        images: [andraTaket],
    },
    {
        id: "15",
        title: "Grodan",
        position: {
            lat: 57.7451030,
            lng: 12.0596499,
        },
        gboLink: "",
        cragLink: "",
        boulders: [
            {
                id: "",
                path: "",
                description: "",
                name: "",
                grade: "",
            },
        ],
        images: [grodan],
    },
    {
        id: "16",
        title: "MPFC",
        position: {
            lat: 57.7448586,
            lng: 12.0605605,
        },
        gboLink: "",
        cragLink: "",
        boulders: [
            {
                id: "",
                path: "",
                description: "",
                name: "",
                grade: "",
            },
        ],
        images: [mpfc],
    },
    {
        id: "17",
        title: "Dödsdöden",
        position: {
            lat: 57.7448459,
            lng: 12.0614759,
        },
        gboLink: "",
        cragLink: "",
        boulders: [
            {
                id: "",
                path: "",
                description: "",
                name: "",
                grade: "",
            },
        ],
        images: [dodsdoden],
    },
]