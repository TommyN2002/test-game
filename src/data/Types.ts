export type Resource = "mana" | "stamina";

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


export type Mobs = {
    name:  string;
    health: number;
    attackpower: number;
}

export const Mobs: Mobs[] = [
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