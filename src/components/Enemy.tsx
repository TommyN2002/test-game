import { useAppStore } from "@/Store/useAppStore";
import { Mobs, Skill, Skills } from "@/data/Types";
import { Text, Stack, Card, Title, Button } from "@mantine/core";
import { useMemo } from "react";

export function Enemy() {
  const [
    hp,
    exp,
    gold,
    attack,
    stamina,
    mana,
    enemyHp,
    setEnemyHp,
    setExp,
    setGold,
  ] = useAppStore((s) => [
    s.hp,
    s.exp,
    s.gold,
    s.attack,
    s.stamina,
    s.mana,
    s.enemyHp,
    s.setEnemyHp,
    s.setExp,
    s.setGold,
  ]);

  const spawnEnemy = (mobs: Mobs) => {
    if (mobs.health <= 0) {
      return;
    }
    spawnEnemy(mobs);
  };

  const renderMobs = Mobs.map((Mobs) => (
    <Card key={Mobs.name} withBorder>
      <Title order={3}>
        {Mobs.name} - {Mobs.health} - {Mobs.attackpower}{" "}
      </Title>
      <Button color="purple"></Button>
    </Card>
  ));

  return <Stack>{renderMobs}</Stack>;
}
