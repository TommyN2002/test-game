import { useAppStore } from "@/Store/useAppStore";
import { Stat } from "@/data/Types";
import { Text, Stack, Grid, Progress, Title } from "@mantine/core";
import { PlayStatBar } from "./PlayStatBar";
export function Stats() {
  const [hp, stamina, mana] = useAppStore((s) => [s.hp, s.stamina, s.mana]);

  return (
    <Stack>
      <PlayStatBar category="Health" value={hp} />
      <PlayStatBar category="Stamine" value={stamina * 2} />
      <PlayStatBar category="Mana" value={mana * 4} />

      {/* <Text>HP : {hp}</Text>
      <Text>STAMINA : {stamina}</Text>
      <Text>MANA : {mana}</Text>
      <Text>GOLD : {gold}</Text>
      <Text>EXP : {exp}</Text>
      <Text>ATTACK : {attack}</Text> */}
    </Stack>
  );
}
