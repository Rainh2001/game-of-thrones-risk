export interface Game {
    id: string;
    startTime: Date;
    endTime: Date | undefined;
    players: Player[];
    eventLog: RiskEvent[];
}

export interface RiskEvent {
    id: string;
    time: Date;
    player: Player;
}

export interface InvadeEvent extends RiskEvent {
    otherPlayer: Player;
    territory: Territory;
    result: boolean;
}

export interface ArmyEvent extends RiskEvent {
    type: CardEventType;
}

export interface Player {
    id: string;
    name: string;
    territories: Territory[];
    regions: Region[];
    cards: Territory[];
    // These values can be generated from territories array
    ports: number;
    castles: number;
    score: number;
}

export enum CardType {
    KNIGHT = "KNIGHT",
    CATAPULT = "CATAPULT",
    CASTLE = "CASTLE"
}

export enum CardEventType {
    KNIGHTS = "KNIGHTS",
    CATAPULTS = "CATAPULTS",
    CASTLES = "CASTLES",
    MIX = "MIX"
}

// Implement graph of territories in the future
export interface Territory {
    id: string;
    name: string;
    castle: boolean;
    port: boolean;
    cardType: CardType;
    region: Region;
}

export interface Region {
    id: string;
    name: string;
    territories: Territory[];
    value: number;
}

