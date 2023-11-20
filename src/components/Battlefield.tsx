import { Box, Group } from "@mantine/core";
import { Enemy } from "./Enemy";

export function Battlefield() {
  return (
    <Box h={"50%"}>
      <Group grow wrap="nowrap">
        <Enemy />
        <Enemy />
        <Enemy />
        <Enemy />
      </Group>
    </Box>
  );
}
