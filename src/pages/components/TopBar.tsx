import { useAppDispatch } from "@/store/hooks";
import { setSnakes } from "@/store/slices/snakeSlice";
import { snakesData } from "@/utils/data";
import HomeIcon from "@mui/icons-material/Home";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

export default function TopBar() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const id = router.query.id;
  const handleSearch = (value: string) => {
    const searchText = value.toLocaleLowerCase();
    const result = snakesData.filter(
      (item) =>
        item.EngName?.toLowerCase().includes(searchText) ||
        item.MMName?.toLowerCase().includes(searchText)
    );
    dispatch(setSnakes(result));
  };
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        top: 0,
        width: "100vw",
        p: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginX: 5,
          bgcolor: "primary.main",
        }}
      >
        <Image src={"/greenSnake.png"} alt="logo" width={45} height={45} />
        <Typography variant="body2" textAlign={"center"} color={"info.main"}>
          Kyaw Zin Thet
        </Typography>
        {id ? (
          <Button onClick={() => router.push("/")}>
            <HomeIcon sx={{ color: "info.main", fontSize: 40 }} />
          </Button>
        ) : (
          <TextField
            sx={{
              border: "3px solid #005B41",
              borderRadius: 3,
              bgcolor: "secondary.main",
              width: "500px",
              input: { color: "info.main" },
              mb: 1,
            }}
            placeholder="Search.."
            onChange={(evt) => handleSearch(evt.target.value)}
          ></TextField>
        )}
      </Box>
      <Divider sx={{ bgcolor: "info.main" }} variant="middle" />
    </Box>
  );
}
