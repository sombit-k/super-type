
export const generateWords = (id: string): string[] => {

    const createWords =(id:string, letters:string[],inclLastLetter:number) =>{
        return Array.from({ length: arrLength }, () => {
            const wordLength = Math.random() < 0.5 ? 4 : 5;
            return Array.from({ length: wordLength }, () => {
                const randomIndex = Math.floor(Math.random() * (l1.length - inclLastLetter));
                return l1[randomIndex];
            }).join("");
        });
    }
    const l1 = ['a', 's', 'd', 'f', 'g'];
    const l2 = ['h', 'j', 'k', 'l', ';'];
    const l3 = ['z', 'x', 'c', 'v', 'b'];
    const l4 = ['n', 'm', ',', '.', '/'];
    const l5 = ['q', 'w', 'e', 'r', 't'];
    const l6 = ['y', 'u', 'i', 'o', 'p'];
    const arrLength = 72;

    if (id == "1") {
        return createWords(id, l1, 1);
    }

    return ["a"];

}