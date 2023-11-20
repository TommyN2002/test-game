import { Potions, Weapon } from "@/data/Types";
import {
  Button,
  Card,
  Container,
  Grid,
  SimpleGrid,
  Title,
} from "@mantine/core";

export function Inventory() {
  const renderPotions = Potions.map((Potions) => (
    <Card key={Potions.name} withBorder>
      <Title order={6}>
        {Potions.name} - {Potions.value}{" "}
      </Title>
      <Button>Use</Button>
    </Card>
  ));

  const renderWeapon = Weapon.map((Weapon, i) => (
    <Grid key={i}>
      <Card key={Weapon.name} withBorder>
        <Title order={6}>
          {Weapon.name} - {Weapon.attackpower}{" "}
        </Title>
      </Card>
    </Grid>
  ));
  return (
    <SimpleGrid cols={3}>
      {" "}
      {renderPotions} {renderWeapon}{" "}
    </SimpleGrid>
  );
}
