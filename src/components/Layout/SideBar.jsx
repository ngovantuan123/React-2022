import {
  Avatar,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { USER_TOKEN } from "../../constants";
import Breadcrumb from "./BreadCrumb";
const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    background: "linear-gradient(45deg, #667FEF 30%, #3E3EEF 90%)",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  rightHeader: {
    display: "flex",
    flexDirection: "row",
  },
}));
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({}))(MenuItem);
const SideBar = (props) => {
  const { nameBreadcrumb, changeRef } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerOpen = () => {
    props.callBackOpen();
  };
  const onLogout = () => {
    localStorage.removeItem(USER_TOKEN);
  };
  useEffect(() => {}, []);
  return (
    <Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: props.open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Breadcrumb nameBreadcrumb={nameBreadcrumb} />
          <div className={classes.grow} />
          <Grid className={classes.rightHeader}>
            <ListItem
              button
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={changeRef}
            >
              <span style={{ fontSize: 15, color: "white", marginRight: 10 }}>
                Xin chào,
                <span style={{ marginLeft: 10 }}>Ngô Văn Tuân</span>
              </span>
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSmIuCdbW9FiDKZsWG0LEW4qKxAab7BxVydg&usqp=CAU"
                alt="Ngô Văn Tuân"
              />
            </ListItem>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem>
                <ListItemIcon>
                  <AccountCircleIcon fontSize="default" />
                </ListItemIcon>
                <Link to="/thong-tin-ca-nhan">
                  <ListItemText primary="Tài khoản" onClick={handleClose} />
                </Link>
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon>
                  <ExitToAppIcon fontSize="default" />
                </ListItemIcon>
                <Link to="/login">
                  <ListItemText onClick={onLogout} primary="Đăng xuất" />
                </Link>
              </StyledMenuItem>
            </StyledMenu>
          </Grid>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default SideBar;
