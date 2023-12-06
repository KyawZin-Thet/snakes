import { Box, Card, CardMedia, Slide, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
interface Props {
  Id: number;
  MMName: string;
  EngName?: string;
}

export default function Home({ Id, MMName, EngName }: Props) {
  const [slideValue, setSlideValue] = useState<boolean>(false);

  // useEffect(() => setChecked(true), []);
  return (
    <Box sx={{ color: "info.main" }}>
      <Link style={{ textDecoration: "none" }} href={`/snake-details/${Id}`}>
        <Card
          onMouseOver={() => setSlideValue(true)}
          onMouseOut={() => setSlideValue(false)}
          elevation={3}
          sx={{ maxWidth: 345, m: 3, borderRadius: "5px" }}
        >
          <Box position={"relative"}>
            <CardMedia
              component="img"
              height="fit-content"
              image={`/${Id}.jpg`}
              alt={EngName}
              sx={{
                "&:hover": {
                  filter: " blur(8px)",
                },
              }}
            />

            <Slide direction="up" in={slideValue} unmountOnExit>
              <Typography
                gutterBottom
                component="div"
                variant="h5"
                color="info.main"
                sx={{
                  position: "absolute",
                  bottom: 50,
                  left: 3,
                  fontWeight: "bold",
                  // stroke: "red",
                  // strokeWidth: 5,
                }}
              >
                {MMName}
              </Typography>
            </Slide>
            <Slide direction="up" in={slideValue} unmountOnExit>
              <Typography
                gutterBottom
                component="div"
                variant="inherit"
                color="info.main"
                sx={{
                  position: "absolute",
                  bottom: 1,
                  left: 3,
                }}
              >
                {EngName}
              </Typography>
            </Slide>
          </Box>
        </Card>
      </Link>
    </Box>
  );
}
