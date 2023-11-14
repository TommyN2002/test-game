import {
  Button,
  Card,
  Container,
  Progress,
  Text,
  Image,
  Group,
  Badge,
} from "@mantine/core";
import { useState } from "react";
import { Enemy } from "./components/Enemy";
import { Experience } from "./components/Experience";
import { Currency } from "./components/Stats";

export default function Home() {
  const [hp, setHp] = useState(10);

  const attack = () => {
    if (hp <= 0) {
      setHp(10);
      return;
    }
    setHp(hp - 1);
  };
  const [mob, setMob] = useState(1);
  if (mob < 1) {
    setMob(2);
    return;
  }
  setMob(1);
  return (
    <Container fluid>
      <Enemy />
      <Experience />
      <Currency />
      <Progress color="teal" value={hp * 10} />
      <Text>{hp}</Text>
      <Button variant="filled" color="lime" onClick={attack}>
        test
      </Button>
      <Group grow wrap="nowrap"></Group>
    </Container>
  );
}
