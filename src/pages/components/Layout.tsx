import { Box, Typography } from "@mui/material";
import Link from "next/link";
import TopBar from "./TopBar";

interface Props {
  children: string | JSX.Element | JSX.Element[];
}
export default function Layout({ children }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        bgcolor: "primary.main",
        borderBottom: "1px",
      }}
    >
      <TopBar />
      {children}

      <Link
        style={{
          textDecoration: "none",
          width: "100vw",
          backgroundColor: "#232D3F",
          position: "absolute",
          bottom: 0,
          padding: 1,
        }}
        href={"https://www.facebook.com/groups/1305497066495597"}
      >
        <Typography variant="body2" textAlign={"center"} color={"info.main"}>
          Ref from Snakes Of Myanmar FB Group(click to visit)
        </Typography>
      </Link>
    </Box>
  );
}
