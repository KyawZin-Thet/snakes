import { useAppSelector } from "@/store/hooks";
import { snakesData } from "@/utils/data";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Card from "./components/Card";

export default function Home() {
  const snakes = useAppSelector((store) => store.snakes.items);

  return (
    <Box>
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
      <Box
        sx={{
          width: "100vw",
          backgroundColor: "#232D3F",
          padding: 1,
        }}
      >
        <Link
          style={{
            textDecoration: "none",
          }}
          href={"https://www.facebook.com/groups/1305497066495597"}
        >
          <Typography variant="body2" textAlign={"center"} color={"info.main"}>
            Ref from Snakes Of Myanmar FB Group(click to visit)
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}
