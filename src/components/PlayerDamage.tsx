import { useAppStore } from "@/Store/useAppStore";
import { Button, Container, Progress, Group } from "@mantine/core";

export function PlayerDamage() {
  const [hp, setHp, exp, setExp, gold, setGold, playerDamaged5] = useAppStore(
    (s) => [s.hp, s.setHp, s.exp, s.setExp, s.gold, s.setGold, s.playerDamaged5]
  );

  const playerHit = () => {
    const newHp = hp - playerDamaged5;

    if (newHp <= 0) {
      setHp(100);
      setExp(exp - 10);
      setGold(gold - 10);
      return;
    }

    setHp(newHp);
  };

  return (
    <Container fluid>
      <Progress color="green" value={hp} />
      <Button variant="filled" color="orange" onClick={playerHit}>
        Attack Player
      </Button>
      <Group grow wrap="nowrap"></Group>
    </Container>
  );
}
