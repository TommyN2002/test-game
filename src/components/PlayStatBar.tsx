import { useAppStore } from "@/Store/useAppStore";
import { Stat } from "@/data/Types";
import { Text, Stack, Grid, Progress, Title } from "@mantine/core";

interface playerStatsProps {
  category: string;
  value: number;
}

export function PlayStatBar(props: playerStatsProps) {
  const [hp, exp, gold, attack, stamina, mana] = useAppStore((s) => [
    s.hp,
    s.exp,
    s.gold,
    s.attack,
    s.stamina,
    s.mana,
  ]);

  return (
    // <Progress color="green" radius={1} value={100}>
    //   <Progress.Root size="x2">
    //     <Progress.Label>props.category : {props.value}</Progress.Label>
    //   </Progress.Root>
    // </Progress>
    <Progress.Root size="xl">
      <Progress.Section value={props.value} color="cyan">
        <Progress.Label>{props.category}</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}
