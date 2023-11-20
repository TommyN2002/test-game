import {
  Button,
  Card,
  Container,
  Progress,
  Text,
  Image,
  Group,
  Badge,
  Box,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { Enemy } from "../components/Enemy";
import { GameHeader } from "@/components/GameHeader";
import { Battlefield } from "@/components/Battlefield";
import { CharacterInfo } from "@/components/CharacterInfo";
import { SkillsList } from "@/components/SkillsList";
import { Inventory } from "@/components/Inventory";

export default function Home() {
  const [hp, setHp] = useState(10);

  const attack = () => {
    if (hp <= 0) {
      setHp(10);
      return;
    }
    setHp(hp - 1);
  };

  return (
    <Container h={"100vh"} fluid>
      <GameHeader />
      <Battlefield />

      <Group justify="space-between" align="center" grow>
        <CharacterInfo />
        <Title h={1}>
          Inventory:
          <Inventory />
        </Title>

        <SkillsList />
      </Group>
    </Container>
  );
}
