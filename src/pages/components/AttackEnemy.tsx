import { useAppStore } from "@/Store/useAppStore";
import { Button, Container, Progress, Group } from "@mantine/core";

export default function Home() {
  const [enemyHp, setEnemyHp, attack, exp, setExp, gold, setGold] = useAppStore(
    (s) => [
      s.enemyHp,
      s.setEnemyHp,
      s.attack,
      s.exp,
      s.setExp,
      s.gold,
      s.setGold,
    ]
  );

  const attackEnemy = () => {
    const newHp = enemyHp - attack;

    if (newHp <= 0) {
      setEnemyHp(100);
      setExp(exp + 1);
      setGold(gold + 1);
      return;
    }

    setEnemyHp(newHp);
  };

  return (
    <Container fluid>
      <Progress color="red" value={enemyHp} />
      <Button variant="filled" color="orange" onClick={attackEnemy}>
        Attack Enemy
      </Button>
      <Group grow wrap="nowrap"></Group>
    </Container>
  );
}
