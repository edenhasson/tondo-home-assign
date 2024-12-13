import { Box, Typography, Button, Stack, Link } from "@mui/material";
import { Launch } from "../interfaces/Launch.interface";
import { useNavigate } from "react-router-dom";

interface Props {
    launch: Launch;
}

export default function LaunchDetails({ launch }: Props) {
    const navigate = useNavigate();

    const routeBack = (path: string) => {
        navigate(path);
    };

    const formatDateTime = (date: string) => {
        const options: Intl.DateTimeFormatOptions = {
            dateStyle: "medium",
            timeStyle: "short",
        };
        return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
    };

    return (
        <Box
            sx={{
                position: "relative",
                height: "100vh",
                width: "100%",
                overflow: "hidden",
                background: `url(${launch.img || "/default-image.jpg"}) no-repeat center center/cover`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                textShadow: "0 4px 12px rgba(0, 0, 0, 0.8)",
            }}
        >
            {/* Overlay for Glass Effect */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    zIndex: 1,
                }}
            />

            {/* Content Box */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    width: "85%",
                    maxWidth: "900px",
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(20px)",
                    borderRadius: "20px",
                    padding: 5,
                    textAlign: "center",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
                }}
            >
                {/* Header Section */}
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: "bold",
                        marginBottom: 3,
                        fontFamily: "Roboto, sans-serif",
                    }}
                >
                    {launch.name || "Launch Details"}
                </Typography>

                {/* Image Section */}
                {launch.img && (
                    <Box
                        component="img"
                        src={launch.img}
                        alt={launch.name}
                        sx={{
                            width: "100%",
                            maxHeight: "400px",
                            objectFit: "cover",
                            borderRadius: "12px",
                            marginBottom: 3,
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                        }}
                    />
                )}

                {/* Launch Details */}
                <Typography
                    variant="body1"
                    sx={{
                        marginBottom: 3,
                        fontSize: "1rem",
                        lineHeight: 1.6,
                        textAlign: "left",
                        fontFamily: "Roboto, sans-serif",
                    }}
                >
                    <strong>Mission Name:</strong> {launch.missionName || "N/A"}
                    <br />
                    <strong>Launch Date:</strong>{" "}
                    {launch.launchDate ? formatDateTime(launch.launchDate) : "N/A"}
                    <br />
                    <strong>Rocket Name:</strong> {launch.rocketName || "N/A"}
                    <br />
                    <strong>Flight Number:</strong> {launch.flightNumber || "N/A"}
                    <br />
                    <strong>Outcome:</strong> {launch.success ? "Success" : "Failure"}
                    <br />
                    <strong>Description:</strong>{" "}
                    {launch.description || "No description available."}
                </Typography>

                {/* Additional Link */}
                {launch.link && (
                    <Typography
                        variant="body2"
                        sx={{
                            marginBottom: 2,
                            color: "#90caf9",
                            textAlign: "left",
                            fontSize: "1rem",
                        }}
                    >
                        <Link
                            href={launch.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: "#90caf9" }}
                        >
                            See on youtube
                        </Link>
                    </Typography>
                )}

                <Stack direction="row" spacing={2} justifyContent="center">
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{
                            padding: "10px 24px",
                            borderRadius: 3,
                            fontWeight: "bold",
                            textTransform: "none",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                        }}
                        onClick={() => routeBack("/")}
                    >
                        Go Back
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}
