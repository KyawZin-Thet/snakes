import { useAppSelector } from "@/store/hooks";
import { snakesData } from "@/utils/data";
import { Box } from "@mui/material";
import Card from "./components/Card";

export default function Home() {
  const snakes = useAppSelector((store) => store.snakes.items);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "primary.main",
      }}
    >
      {snakes.length > 0
        ? snakes.map((item) => (
            <Card
              key={item.Id}
              Id={item.Id}
              MMName={item.MMName}
              EngName={item.EngName}
            />
          ))
        : snakesData.map((item) => (
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
