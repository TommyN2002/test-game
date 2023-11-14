import { useAppStore } from "@/Store/useAppStore";
import { Text, Stack } from "@mantine/core";

export function Stats() {
  const [hp, exp, gold, attack, stamina, mana] = useAppStore((s) => [
    s.hp,
    s.exp,
    s.gold,
    s.attack,
    s.stamina,
    s.mana,
  ]);

  return (
    <Stack>
      <Text>HP : {hp}</Text>
      <Text>STAMINA : {stamina}</Text>
      <Text>MANA : {mana}</Text>
      <Text>GOLD : {gold}</Text>
      <Text>EXP : {exp}</Text>
      <Text>ATTACK : {attack}</Text>
    </Stack>
  );
}
