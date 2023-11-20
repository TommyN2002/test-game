import { useAppStore } from "@/Store/useAppStore";
import { Skill, Skills, Stat } from "@/data/Types";
import { Text, Stack, Card, Title, Button, SimpleGrid } from "@mantine/core";
import { useMemo } from "react";

export function SkillsList() {
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

  const attackEnemy = (skill: Skill) => {
    if (skill.resource === "mana") {
      if (mana < skill.cost) {
        mana - skill.cost;
        return;
      }
    }
    if (skill.resource === "stamina") {
      if (stamina < skill.cost) {
        stamina - skill.cost;
        return;
      }
    }

    const newHp = enemyHp - skill.value;

    console.log(newHp);
    if (newHp <= 0) {
      setEnemyHp(100);
      setExp(exp + 1);
      setGold(gold + 1);
      return;
    }

    setEnemyHp(newHp);
  };

  const renderSkills = Skills.map((skill) => (
    <Card key={skill.name} withBorder>
      <Title order={4}>
        {skill.name} - {skill.value}{" "}
      </Title>
      <Button
        color={skill.resource === "mana" ? "cyan" : "orange"}
        onClick={() => attackEnemy(skill)}
      >
        Use ({skill.cost})
      </Button>
    </Card>
  ));

  return <SimpleGrid cols={3}> {renderSkills}</SimpleGrid>;
}
