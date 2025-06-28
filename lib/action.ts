
export const generateWords = (id: string): string[] => {

    const createWords = (id: string, letters: string[], inclLastLetter: number) => {
        return Array.from({ length: arrLength }, () => {
            const wordLength = Math.random() < 0.5 ? 4 : (Math.random() < 0.7 ? 3 : 5);
            return Array.from({ length: wordLength }, () => {
                const randomIndex = Math.floor(Math.random() * (letters.length - inclLastLetter));
                return letters[randomIndex];
            }).join("");
        });
    }
    const l1 = ['a', 's', 'd', 'f', 'g'];// left
    const l2 = ['h', 'j', 'k', 'l', ';'];
    const l3 = ['z', 'x', 'c', 'v', 'b'];//left
    const l4 = ['n', 'm', ',', '.', '/'];
    const l5 = ['q', 'w', 'e', 'r', 't'];//left
    const l6 = ['y', 'u', 'i', 'o', 'p'];
    const arrLength = 40;
    switch (id) {
        case "1":
            return createWords(id, l1, 1);
        case "2":
            return createWords(id, l2, 1);
        case "3":
            return createWords(id, l1, 0);
        case "4":
            return createWords(id, l2, 0);
        case "5":
            return createWords(id, l3, 1);
        case "6":
            return createWords(id, l4, 1);
        case "7":
            return createWords(id, l3, 0);
        case "8":
            return createWords(id, l4, 0);
        case "9":
            return createWords(id, l5, 1);
        case "10":
            return createWords(id, l6, 1);
        case "11":
            return createWords(id, l5, 0);
        case "12":
            return createWords(id, l6, 0);
        case "13":
            return createWords(id, [...l1, ...l3, ...l5], 1);
        case "14":
            return createWords(id, [...l2, ...l4, ...l6], 1);
        case "15":
            return createWords(id, [...l1, ...l2, ...l3, ...l4, ...l5, ...l6], 1);
    }
    return createWords(id, [...l1, ...l2, ...l3, ...l4, ...l5, ...l6], 1);
}