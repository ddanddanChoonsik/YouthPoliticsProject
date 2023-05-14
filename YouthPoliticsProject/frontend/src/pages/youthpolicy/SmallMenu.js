import React from 'react';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


  const SmallMenu = () => {
    // const PolicyDetailMenu = ({num, onEditReviewDetail, onDelete}) => {
    const [anchorEl, setAnchorEl] = React.useState(null); //배열...
    const editopen = Boolean(anchorEl); //배열
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const editeHandleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div>
             <Button
                              id="basic-button"
                              aria-controls={editopen ? 'basic-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={editopen ? 'true' : undefined}
                              onClick={handleClick}
                              sx={{color:'gray'}}
                            >
                              ⋮
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEl}
                              open={editopen}
                              onClose={editeHandleClose}
                              MenuListProps={{
                                'aria-labelledby': 'basic-button',
                              }}
                              
                            >
                              
                                <div>
                              <MenuItem >수정하기</MenuItem>
                              <MenuItem>삭제하기</MenuItem>
                              </div>
                              {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                            </Menu>
        </div>
    );
};

export default SmallMenu;