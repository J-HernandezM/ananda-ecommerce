import { IconButton, InputBase, Paper } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import styled from "@emotion/styled";

export default function Header() {
    return(
        <StyledHeader>
            <div className="header-left">
                <img src="" alt="logo" />
            </div>
            <div className="header-right">
                <CustomizedInputBase />
                <img src="" alt="cart" />
            </div>
        </StyledHeader>
    )
}

function CustomizedInputBase() {
    return (
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Buscar"
          inputProps={{ 'aria-label': 'Buscar' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    );
}

const StyledHeader = styled.header`
    display: flex;
    border: 1px solid red;
    justify-content: space-between;
    padding: 10rem 0;
`