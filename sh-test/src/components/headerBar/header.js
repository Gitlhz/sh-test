import {useState,useEffect,useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import styles from "./form.module.css";
import logo from "@/static/images/mhlogo.png";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { GlobalContext } from '@/pages/_app';


const pages = [
  {label:'Donors',path:'/donor/list'},
  {label:'Favorites',path:'/favorites'}]
const settings = [
  {label:'Orders',path:'/order/list'},
  {label:'Account',path:'/account'},
  {label:'Dashboard',path:'/'},
  {label:'Logout',path:'/'}];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { loggedIn, setLoggedIn } = useContext(GlobalContext);
  useEffect(() => {
    if(localStorage.getItem("userInfo")){
      setLoggedIn(true)
    }
  }, []);

  const router = useRouter();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    console.log(e)
    if(e.path){
      router.push(e.path)
    }

    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (e) => {
    console.log(e)
    if(e.path){
      if(e.path==='/'){
        console.log('Logout')
        localStorage.removeItem("userInfo")
        setLoggedIn(false)
      }
      router.push(e.path)
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ background:'linear-gradient(to right, #41D2BF 0%, #6dd7ca 100%)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              disableScrollLock={true}
            >
              {pages.map((page) => (
                <MenuItem key={page.label}
                          onClick={()=>{
                            handleCloseNavMenu(page)
                          }}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <div className={styles.logoWrap}>
            <Image className={styles.logo} src={logo}
                   alt="logo" onClick={()=>{
              router.push('/')
            }}/>
          </div>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,paddingRight:'30px',justifyContent:'flex-end'}}>
            {loggedIn?pages.map((page) => (
                <Button
                  key={page.label}
                  onClick={()=>{
                    handleCloseNavMenu(page)
                  }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <span className={styles.btnLabel}>{page.label}</span>
                </Button>
              )):''}

          </Box>


          <Box sx={{ flexGrow: 0 }}>
            {loggedIn?<Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="">
                </Avatar>
              </IconButton>
            </Tooltip>:<>

              <Button className={styles.btn} variant="text" color="secondary" size="small"
                      onClick={() => { router.push("/register") }}>
                Sign Up
              </Button>
              <Button className={styles.btn} variant="outlined" color="secondary" size="small"
                      onClick={() => { router.push("/login") }}>
                Sign In
              </Button>
            </>}

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              disableScrollLock={true}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.label} onClick={()=>{
                  handleCloseUserMenu(setting)
                }}>
                  <Typography textAlign="center">{setting.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
