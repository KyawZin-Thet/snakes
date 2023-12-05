import { snakesData } from "@/utils/data";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SnakeDetail() {
  const router = useRouter();
  const id = router.query.id;

  const currentSnake = snakesData.find((item) => item.Id === Number(id));

  if (!currentSnake) return null;
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "100vh",
          flexwrap: "wrap",
        }}
      >
        <Image
          src={`/${currentSnake.Id}.jpg`}
          alt={currentSnake.MMName}
          width={650}
          height={550}
          // layout="responsive"
          style={{ borderRadius: "20px", margin: "20px" }}
        />

        <Box
          sx={{ height: "550px", overflow: "scroll", bgcolor: "primary.main" }}
          className="detail"
        >
          <Box
            sx={{
              color: "info.main",
              mx: 4,
              py: 3,
              bgcolor: "success.main",
              height: "fit-content",
              borderRadius: 3,
            }}
          >
            <Box
              sx={{
                m: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{ bgcolor: "info.main", height: "2px", width: "40px" }}
              ></Box>
              <Typography fontWeight={"bold"} variant="h3" lineHeight={3}>
                {currentSnake.MMName}
              </Typography>
              <Typography variant="h6">{currentSnake.EngName}</Typography>
            </Box>
            <Divider sx={{ bgcolor: "info.main" }} variant="middle"></Divider>
            <Box
              sx={{
                m: 3,
                height: "fit-content",
              }}
            >
              {" "}
              {currentSnake.Detail}
            </Box>
          </Box>
        </Box>
      </Box>
      <Link
        style={{ textDecoration: "none", marginBottom: "30px" }}
        href={"https://www.facebook.com/groups/1305497066495597"}
      >
        <Typography>
          Ref from Snakes Of Myanmar FaceBook Group (click to explore the group)
        </Typography>
      </Link>
    </Box>
  );
}
