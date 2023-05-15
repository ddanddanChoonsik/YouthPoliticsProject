import React from 'react';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


  const SmallMenu = () => {
    // const PolicyDetailMenu = ({num, onEditReviewDetail, onDelete}) => {
    // const [anchorEl, setAnchorEl] = React.useState(null); //배열...
    // const editopen = Boolean(anchorEl); //배열
    // const handleClick = (event) => {
    //   setAnchorEl(event.currentTarget);
    // };
    // const editeHandleClose = () => {
    //   setAnchorEl(null);
    // };

       const [anchorEl, setAnchorEl] = React.useState(null); //배열...
   const editopen = Boolean(anchorEl); //배열
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
     console.log("?:",event.currentTarget);
   };
   const handleClose = () => {
     setAnchorEl(null);
   };


    return (
        <div>
             {/* <Button
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
                           {/*} </Menu> */}
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
                          onClose={handleClose}
                          MenuListProps={{
                            'aria-labelledby': 'basic-button',
                          }}
                        >
                          <MenuItem onClick={handleClose}>공유하기</MenuItem>
                          <MenuItem onClick={handleClose}>즐겨찾기</MenuItem>
                        </Menu>
        </div>
    );
};

export default SmallMenu;