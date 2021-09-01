export function formatPrice(cents) {
    return (cents / 100).toLocaleString("en-CA", {
        style: "currency",
        currency: "CAD"
    });
}

export function rando(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
}

export function getFunName() {
    const adjectives = [
        "adorable",
        "beautiful",
        "clean",
        "drab",
        "elegant",
        "fancy",
        "glamorous",
        "handsome",
        "long",
        "magnificent",
        "old-fashioned",
        "plain",
        "quaint",
        "sparkling",
        "ugliest",
        "unsightly",
        "angry",
        "bewildered",
        "clumsy",
        "defeated",
        "embarassed",
        "repulsive",
        "scary",
        "thoughtless",
        "uptight",
        "worried"
    ];

    const nouns = [
        "women",
        "men",
        "children",
        "teeth",
        "feet",
        "people",
        "leaves",
        "mice",
        "geese",
        "halves",
        "knives",
        "wives",
        "lives",
        "eleves",
        "loaves",
        "potatoes",
        "tomatoes",
        "cacti",
        "foci",
        "fungi",
        "nuclei",
        "syllabuses",
        "analyses",
        "diagnoses",
        "oases",
        "theses",
        "crises",
        "phenomena",
        "criteria",
        "data"
    ];

    return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}