import { Launch } from "../interfaces/Launch.interface";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

interface Props {
    launch: Launch;
}

export default function LaunchCard({ launch }: Props) {
    const navigate = useNavigate();
    const handleCardClick = (launchId: string) => {
        navigate(`/launch/${launchId}`);
    };

    return (
        <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          borderRadius: 3,
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <CardMedia
          component="img"
          image={
            launch.img ||
            "https://archive.org/download/placeholder-image/placeholder-image.jpg"
          }
          alt={launch.name}
          sx={{
            height: 180,
            objectFit: "cover",
            borderRadius: "3px 3px 0 0",
          }}
        />
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 1,
            }}
          >
            {launch.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              textAlign: "center",
            }}
          >
            {launch.launchDate
              ? new Date(launch.launchDate).toLocaleDateString()
              : "N/A"}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: "center",
          }}
        >
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={() => handleCardClick(launch.id)}
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: 2,
            }}
          >
            View Details
          </Button>
        </CardActions>
      </Card>
    );
}
