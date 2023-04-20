import { AppBar, Toolbar, Typography, Box, InputBase, Badge, Avatar} from '@mui/material'
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Pets, Mail, Notifications} from '@mui/icons-material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({

    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"

}))

const Icons = styled(Box)(({ theme }) => ({

    display:"none", 
    gap:"20px", 
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
    
    

}))

const UserBox = styled(Box)(({ theme }) => ({

    display:"flex", 
    gap:"10px", 
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
    

}))

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                    Divya Chhabra
                </Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder={"search..."} /></Search>
                <Icons> 
                <Badge badgeContent={4} color="error">
                    <Mail />
                </Badge>
                <Badge badgeContent={2} color="error">
                    <Notifications color="action" />
                </Badge>
                <Avatar src=""  sx={{width:30, height:30}}  onClick={()=>setOpen(true)}/>
                </Icons>
                <UserBox>
                    <Avatar src=""  sx={{width:30, height:30}} onClick={()=>setOpen(true)}/>
                    <Typography variant='span'>
                        Divya
                    </Typography>
                </UserBox>
            </StyledToolbar>

            <div>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </div>


        </AppBar>

    )
}

export default Navbar
