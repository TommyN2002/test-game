import { Container, Group } from "@mantine/core";
import { Stats } from "../components/Stats";
import AttackEnemy from "../components/AttackEnemy";
import { PlayerDamage } from "../components/PlayerDamage";
import { Skills } from "@/data/Types";
import { SkillsList } from "../components/SkillsList";
import { Enemy } from "../components/Enemy";
export default function Home() {
  return (
    <Container fluid>
      <Group grow wrap="nowrap"></Group>
      <Enemy />
      <AttackEnemy />
      <PlayerDamage />
      <Group grow wrap="nowrap"></Group>
      <Stats />
      <SkillsList />
    </Container>
  );
}
