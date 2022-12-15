export interface Recensione{
    id: BigInt;
    titolo: string;
    testo: string;
    numeroMiPiace: number;
    numeroNonMiPiace: number;
    scrittaDa: Utente;
    ristorante: Ristorante;
}

export interface Utente{
	nome: string;
	cognome: string;
}

export interface Ristorante{
    nome: string;
}