import { ActionIcon, Box, Group, Menu, Title } from "@mantine/core";
import { IconSettings } from "@tabler/icons-react";

export function GameHeader() {
  return (
    <Box h={"10%"}>
      <Group justify="space-between">
        <Title>Test Game</Title>
        <ActionIcon>
          <IconSettings />
        </ActionIcon>
      </Group>
    </Box>
  );
}
