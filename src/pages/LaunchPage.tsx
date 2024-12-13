import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { LaunchResponse } from "../interfaces/Response.interface";
import LaunchDetails from "../components/LaunchDetails";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function LaunchPage() {
  const navigate = useNavigate();
  const returnToHome = () => {
    navigate("/");
  };
  const { id } = useParams();
  const {
    data: launch,
    error,
    loading,
  } = useFetch<LaunchResponse>("https://api.spacexdata.com/v4/launches/" + id);

  let children;
  if (loading) {
    children = (
      <CircularProgress sx={{ display: "block", margin: "auto", mt: 4 }} />
    );
  }

  if (error) {
    children = (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
          padding: 4,
          backgroundColor: "#f8d7da",
          borderRadius: "8px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          maxWidth: 500,
          margin: "0 auto",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h5"
            color="error"
            sx={{
              fontWeight: "bold",
              marginBottom: 3,
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              letterSpacing: 1.2,
            }}
          >
            Oops! Something went wrong.
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ marginBottom: 4 }}
          >
            {error}
          </Typography>
          <Button
            id="goBackButton"
            variant="contained"
            color="error"
            sx={{
              padding: "10px 20px",
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: 3,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                backgroundColor: "#d32f2f",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
              },
            }}
            onClick={returnToHome}
          >
            Go Back
          </Button>
        </Box>
      </Box>
    );
  }

  if (launch) {
    children = (
      <LaunchDetails
        launch={{
          id: launch.id,
          img: launch.links.patch.large,
          name: launch.name,
          missionName: launch.name,
          launchDate: launch.date_utc,
          rocketName: launch.rocket,
          success: launch.success,
          flightNumber: launch.flight_number,
          description: launch.details,
          link: launch.links.webcast,
        }}
      />
    );
  }

  return children;
}
