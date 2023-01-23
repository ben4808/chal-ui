import { Chal } from "../models/Chal";
import { Solve } from "../models/Solve";

export async function createChal(chal: Chal): Promise<void> {
}

export async function getChal(id: string): Promise<Chal> {
    return {
        id: 'testID',
        creator: 'bzoon',
        createdDate: new Date(),
        clue: 'What is the highest mountain on Earth?',
        answer: 'Mount Everest',
    } as Chal;
}

export async function createSolve(solve: Solve): Promise<void> {
}
