export type Resource = "mana" | "stamina" | "health";

export type Stat = {
    name: string;
    health: Resource;
    stamina: Resource;
    mana: Resource; 
}

export const Stats: Stat[] = [
    {
        name: "Player",
        health: "health",
        stamina: "stamina",
        mana: "mana"
        
    }
]


export type Skill = {
    name: string;
    cost: number;
    resource: Resource;
    value: number;
    duration?: number; 
}

export const Skills: Skill[] = [
    {
        name: "Bash",
        cost: 5,
        resource: "stamina",
        value: 6,
        duration:0,
    },
    {
        name: "Firebolt",
        cost: 5,
        resource: "mana",
        value: 20,
        duration: 0,
    },
    {
        name: "Voice of Strength",
        cost: 10,
        resource: "mana",
        value: 0,
        duration: 150,
    }
]


export type Mob = {
    name:  string;
    health: number;
    attackpower: number;
}

export const Mobs: Mob[] = [
    {
        name: "Slime",
        health: 100,
        attackpower: 5,
    },
    {
        name: "Wolf",
        health: 150,
        attackpower: 10,
    }

    
]

export type Item = {
    name: string;
    resource?: Resource;
    value?: number;
    attackpower?: number;
    duration?: number;
    uses?: number;
    durability?: number;
    defense?: number;
}

export const Potions: Item[] = [
    {
        name: "Health Potion",
        resource: "health",
        value: 5,
        attackpower: 0,
        duration: 0,
        uses: 1,
    },
    {
        name: "Stamina Potion",
        resource: "stamina",
        value: 5,
        attackpower: 0,
        duration: 0,
        uses: 1,
    },
    {
        name: "Mana Potion",
        resource: "mana",
        value: 10,
        attackpower: 0,
        duration: 0,
        uses: 1,
    },
]

export const Armor: Item[] = [
    {
        name: "Leather Armor",
        durability: 100,
        defense: 5,
    },
    {
        name: "Leather Pants",
        durability: 100,
        defense: 5,
    },
    {
        name: "Leather Boots",
        durability: 100,
        defense: 5,
    },
    {
        name: "Leather Helmet",
        durability: 100,
        defense: 5,
    },
]

export const Weapon: Item[] = [
    {
        name: "Wooden Sword",
        attackpower: 2,
    }
]