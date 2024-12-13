import {Launch} from "../interfaces/Launch.interface";
import LaunchCard from "./LaunchCard";
import {Grid} from "@mui/material";

interface Props {
    launches: Launch[];
}
export default function LaunchList({launches}: Props) {
    return (<Grid
        container
        spacing={4}>
        {launches.map((launch) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={launch.id}>
                <LaunchCard launch={launch} />
            </Grid>
        ))}
    </Grid>)
}
