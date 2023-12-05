import { snakesData } from "@/utils/data";
import { Box } from "@mui/material";
import Card from "./components/Card";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {snakesData.map((item) => (
        <Card
          key={item.Id}
          Id={item.Id}
          MMName={item.MMName}
          EngName={item.EngName}
        />
      ))}
    </Box>
  );
}
