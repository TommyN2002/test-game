import { useAppStore } from "@/Store/useAppStore";
import { Stat } from "@/data/Types";
import { Text, Stack, Grid, Progress, Title } from "@mantine/core";
import { PlayStatBar } from "./PlayStatBar";
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
      <PlayStatBar category="Health" value={100} />
      <PlayStatBar category="Stamine" value={50} />
      <PlayStatBar category="Mana" value={25} />

      {/* <Text>HP : {hp}</Text>
      <Text>STAMINA : {stamina}</Text>
      <Text>MANA : {mana}</Text>
      <Text>GOLD : {gold}</Text>
      <Text>EXP : {exp}</Text>
      <Text>ATTACK : {attack}</Text> */}
    </Stack>
  );
}
