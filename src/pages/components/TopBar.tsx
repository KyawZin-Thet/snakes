import { snakesData } from "@/utils/data";
import { Box, Divider, TextField } from "@mui/material";
import Image from "next/image";

export default function TopBar() {
  const handleSearch = (value: string) => {
    const searchText = value.toLocaleLowerCase();
    const result = snakesData.filter((item) =>
      item.EngName?.toLowerCase().includes(searchText)
    );
    return result;
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
      </Box>
      <Divider sx={{ bgcolor: "info.main" }} variant="middle" />
    </Box>
  );
}
