export interface Rubik {
    price: number;
    name: string;
    complexity: number;
}

export function createRubik({ price, name, complexity }: Partial<Rubik>): Rubik {
    return { price, name, complexity };
}
