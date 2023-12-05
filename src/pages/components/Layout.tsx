import { Box } from "@mui/material";
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
        bgcolor: "primary.main",
        borderBottom: "1px",
      }}
    >
      <TopBar />
      {children}
    </Box>
  );
}
