import { snakesData } from "@/utils/data";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

export default function SnakeDetail() {
  const router = useRouter();
  const id = router.query.id;

  const currentSnake = snakesData.find((item) => item.Id === Number(id));

  if (!currentSnake) return null;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        bgcolor: "primary.main",
        width: "100vw",
      }}
    >
      <Box sx={{ width: { xs: "345px" } }}>
        <Image
          src={`/${currentSnake.Id}.jpg`}
          alt={currentSnake.MMName}
          width={550}
          height={550}
          layout="responsive"
          style={{ borderRadius: "20px" }}
        />
      </Box>
      <Box
        sx={{
          width: { sm: "595px", md: "890px", lg: "550px" },
          height: "550px",
          overflow: "scroll",
          bgcolor: "primary.main",
          mt: 3,
          borderRadius: 12,
        }}
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
            <Typography
              fontWeight={"bold"}
              variant={"h4"}
              sx={{ fontSize: { xs: "30px", sm: "40px" } }}
              lineHeight={2}
            >
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
  );
}
