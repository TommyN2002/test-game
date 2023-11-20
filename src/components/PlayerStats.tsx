import { useAppStore } from "@/Store/useAppStore";
import { Stat } from "@/data/Types";
import { Text, Stack, Grid, Progress, Title } from "@mantine/core";

export function PlayerStats() {
  const [hp, exp, gold, attack, stamina, mana] = useAppStore((s) => [
    s.hp,
    s.exp,
    s.gold,
    s.attack,
    s.stamina,
    s.mana,
  ]);

  return (
    <Progress color="red" radius={1} value={100}>
      <Title>Health : {hp}</Title>
    </Progress>
  );
}
