import { Chal } from "../models/Chal";
import { Solve } from "../models/Solve";
import settings from "../settings.json";

const baseUrl = settings.api_base_url;

export async function createChal(chal: Chal): Promise<void> {
    try {
        let url = `${baseUrl}/createChal`;
        let response = await fetch(url, {
            method: 'post',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(chal),
        });

        await response.json();
    }
    catch (e: any) {
        console.log("Error calling createChal: " + e.message);
        throw e;
    }
}

export async function getChal(id: string): Promise<Chal> {
    try {
        let url = `${baseUrl}/getChal?id=${id}`;
        let response = await fetch(url, {credentials: 'include'});
        let jsonResponse = await response.json();
        
        return jsonResponse as Chal;
    }
    catch (e: any) {
        console.log("Error calling getChal: " + e.message);
        throw e;
    }
}

export async function createSolve(solve: Solve): Promise<void> {
    try {
        let url = `${baseUrl}/createSolve`;
        let response = await fetch(url, {
            method: 'post',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(solve),
        });

        await response.json();
    }
    catch (e: any) {
        console.log("Error calling createSolve: " + e.message);
        throw e;
    }
}
