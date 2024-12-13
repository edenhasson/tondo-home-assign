import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const SearchInput = styled(InputBase)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(0.5, 2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  width: "100%",
  maxWidth: 400,
}));

export default function Header({ onInputChange }: { onInputChange: (value: string) => void }) {
  return (
    <AppBar sx={{ background: "#0d47a1" }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="h1" sx={{ fontWeight: "bold" }}>
            SpaceX Launches
          </Typography>
        </Box>
        <SearchInput placeholder="Search launches..." onChange={(e) => onInputChange(e.target.value)}/>
      </Toolbar>
    </AppBar>
  );
}
