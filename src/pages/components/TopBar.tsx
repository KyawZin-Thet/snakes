import { Box, Button } from "@mui/material";
import Image from "next/image";

export default function TopBar() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", width: "100vw" }}
    >
      <Image src={"/snakeLogo.jpg"} alt="logo" width={100} height={100} />
      <Button variant="contained">click</Button>
    </Box>
  );
}
