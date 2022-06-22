import { makeStyles } from "@material-ui/core";
import { COLOR } from "../../constants";
import { Outlet, useLocation } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./SideBar";
import { menuList } from "./ListMenu";
import MenuLeft from "./MenuLeft";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
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
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    //margin: 100,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: 70,
    width: "100%",
  },
  icon: {
    color: COLOR.orange,
    width: 60,
    height: 60,
  },
}));
var styles1 = {
  body: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
};

export default function MiniDrawer() {
  const profileRef = useRef(null);
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const classes = useStyles();
  const callBackOpen = () => {
    setOpen(!open);
  };
  const handleClickItemList = (event, index) => {
    setSelectedIndex(index);
  };
  useEffect(() => {
    for (var i in styles1.body) {
      document.body.style[i] = styles1.body[i];
    }
    return () => {
      for (var i in styles1.body) {
        document.body.style[i] = null;
      }
    };
  }, []);
  return (
    <div className={classes.root}>
      <Sidebar
        changeRef={() => profileRef.current.click()}
        nameBreadcrumb={
          menuList[
            selectedIndex === -1
              ? location.pathname === "/danh-sach-phan-hoi"
                ? 0
                : location.pathname === "/quan-ly-nguoi-dung"
                ? 1
                : location.pathname === "/thong-tin-ca-nhan"
                ? 2
                : 0
              : selectedIndex
          ].name
        }
        open={open}
        callBackOpen={callBackOpen}
      />
      <MenuLeft
        profileRef={profileRef}
        selectedIndex={
          selectedIndex === -1
            ? location.pathname === "/danh-sach-phan-hoi"
              ? 0
              : location.pathname === "/quan-ly-nguoi-dung"
              ? 1
              : location.pathname === "/thong-tin-ca-nhan"
              ? 2
              : 0
            : selectedIndex
        }
        handleClickItemList={handleClickItemList}
        open={open}
        callBackOpen={callBackOpen}
      />
      <main className={classes.content}>
        <Outlet />
      </main>
    </div>
  );
}
