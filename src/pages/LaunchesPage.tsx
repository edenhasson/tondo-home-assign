import { useCallback, useState } from "react";
import {
  CircularProgress,
  Pagination,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { LaunchResponse } from "../interfaces/Response.interface";
import Header from "../components/Header";
import useFetch from "../hooks/useFetch";
import { Launch } from "../interfaces/Launch.interface";
import LaunchList from "../components/LaunchList";
const launchesPerPage = 8;

export default function LaunchesPage() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: launches,
    error,
    loading,
    loadData: loadLaunches,
  } = useFetch<LaunchResponse[]>("https://api.spacexdata.com/v4/launches");

  const handleInputChange = useCallback((value: string) => {
    setSearchTerm(value);
    setPage(1);
  }, []);

  const handlePageChange = useCallback((_: unknown, value: number) => {
    setPage(value);
  }, []);

  let children;

  if (loading) {
    children = (
      <CircularProgress sx={{ display: "block", margin: "auto", mt: 4 }} />
    );
  }

  if (error) {
    children = (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h6" color="error" sx={{ marginBottom: 2 }}>
          Something went wrong...
        </Typography>
        <Button variant="contained" color="primary" onClick={loadLaunches}>
          Retry
        </Button>
      </Box>
    );
  }

  if (launches) {
    const filteredLaunches: Launch[] = launches
      .filter((launch) =>
        launch.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((launch) => ({
        id: launch.id,
        img: launch.links.patch.large,
        name: launch.name,
        missionName: launch.name,
        launchDate: launch.date_utc,
        rocketName: launch.rocket,
        success: launch.success,
        flightNumber: launch.flight_number,
      }));
    children = (
      <>
        <LaunchList
          launches={filteredLaunches.slice(
            (page - 1) * launchesPerPage,
            page * launchesPerPage
          )}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: 4,
          }}
        >
          <Pagination
            count={Math.ceil(filteredLaunches.length / launchesPerPage)}
            page={page}
            onChange={handlePageChange}
            color="primary"
            sx={{
              "& .MuiPaginationItem-root": {
                fontWeight: "bold",
              },
            }}
          />
        </Box>
      </>
    );
  }

  return (
    <Box
      sx={{
        padding: 4,
        paddingTop: 15,
      }}
    >
      <Header onInputChange={handleInputChange} />
      {children}
    </Box>
  );
}
