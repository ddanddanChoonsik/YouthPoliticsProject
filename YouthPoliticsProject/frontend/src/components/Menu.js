import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Ayong from '../images/IMG_1503.JPG';
import Button from '@mui/material/Button';
import MuiMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../styles/menu.css';
//import YouthPolicy from '../pages/youthpolicy/PolicyList';
import { useNavigate } from 'react-router-dom';

const Menu = ({location}) => {
    const pages = ['청년정책','청년공간','청년모임','공지사항'];
    const pageLinks = ['youthpolicy/list','','group/list','notice/list'];
    const navi = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [login, setLogin] =useState();
    const [loginOk, setLoginOk] = useState(false);

    const handleClick = (event) => {
        
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const LoginClick =(e) =>{
        // console.log("event:",e.target);
        // setLogin(Ayong);
        // setLoginOk(true);
        navi("/login");
        // navi("/join");
        handleClose();
    }
    const JoinClick = (e) =>{
        navi("/join");
        handleClose();
    }


    const LogOutClick = (e)=>{
        setLogin();
        setLoginOk(false);
        handleClose();
    }

    const MyPage = (e) =>{
        navi("/mypage/profile");
        handleClose();
    }

    const YouthPolicy =(e)=>{
        navi("/policy/list/1");
        window.location.replace("/policy/list/1");
    }
    return (
        <div id="menu">
            <div className="icon">
                <Link to="/">
                <span className='fa-solid fa-seedling'>
                </span><span>&nbsp;YouthPolitics</span>
                </Link>
            </div>
            <ul className="nav"> 
            <li onClick={YouthPolicy}>청년정책</li>
                <li><Link to="/policy/area">청년공간</Link></li>
                <li ><Link to="/group/list">청년모임</Link></li>
                <li><Link to="/notice/list">공지사항</Link></li>
            </ul>

            <div className="login">
                <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                 >
                 <Avatar alt="ProfileIMG" src={login} />
             </Button>
                {loginOk == true ?
                            <MuiMenu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{'aria-labelledby': 'basic-button',}}
                            style={{height:'inherit'}}
                        >
                <MenuItem onClick={LogOutClick}>LogOut</MenuItem>
                <MenuItem onClick={MyPage}>MyPage</MenuItem>
                </MuiMenu>
                :
                <MuiMenu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{'aria-labelledby': 'basic-button',}}
                style={{height:'inherit'}}
            >
                {/* <MenuItem onClick={LoginClick}>Login</MenuItem> */}
                <MenuItem onClick={LoginClick}>Login</MenuItem>
                <MenuItem onClick={JoinClick}>Join</MenuItem>
                </MuiMenu>
                   }

                {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}

                {/* <button type="button" class="btn btn-primary" style={{marginRight:'10px'}}>Join</button>
                <button type="button" class="btn btn-primary">Login</button> */}
            </div>
        </div>
    );
};

export default Menu;