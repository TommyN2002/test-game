import { create } from 'zustand'

type State = {
    hp : number,
    stamina : number,
    mana : number,
    exp : number,
    gold : number,
    enemyHp : number,
    attack : number,
    enemyAttack : number,
    playerDamaged5 : number,
    setExp(exp : number): void,
    setStamina(stamina : number): void,
    setMana(mana : number): void,
    setHp(hp : number): void,
    setGold(gold : number): void,
    setAttack(attack : number): void,
    setEnemyAttack(enemyAttack : number): void,
    setEnemyHp(enemyHp : number): void,
    setPlayerDamaged5(playerDamaged5 : number): void,
}

export const useAppStore = create<State>((set) => ({
  hp: 100,
  stamina: 50,
  mana: 25,
  exp: 0,
  gold:0,
  enemyHp:100,
  attack:5,
  enemyAttack:1,
  playerDamaged5:5,
  setExp: (exp : number) => set({ exp }),
  setHp: (hp : number) => set({ hp }),
  setStamina: (stamina : number) => set({ stamina }),
  setMana: (mana : number) => set({ mana }),
  setGold: (gold : number) => set({ gold }),
  setAttack: (attack : number) => set({ attack }),
  setEnemyAttack: (enemyAttack : number) => set({ enemyAttack }),
  setEnemyHp: (enemyHp : number) => set({ enemyHp }),
  setPlayerDamaged5: (playerDamaged5 : number) => set({ playerDamaged5 }),
}))