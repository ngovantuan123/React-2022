import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useTheme } from "@material-ui/core/styles";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import {
  AccountCircle,
  List as ListIcon,
  AssignmentInd,
  ContactMail,
  ExitToApp,
} from "@material-ui/icons";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from "clsx";
import DialogConfirm from "./DialogCustom";
import { USER_TOKEN } from "../../constants";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStyles } from "./styleMenuLeft";
import { menuList } from "./ListMenu";

const MenuLeft = (props) => {
  const { callBackOpen, handleClickItemList, selectedIndex, profileRef } =
    props;
  const [questionLogout, setQuestionLogout] = useState();
  const history = useNavigate();
  const theme = useTheme();
  const classes = useStyles();
  const handleDrawerClose = () => {
    callBackOpen();
  };
  const getIcon = (icon) => {
    switch (icon) {
      case "List":
        return (
          <ListIcon
            className={
              selectedIndex === 0 ? classes.iconMenuClick : classes.iconMenu
            }
          />
        );
      case "AssignmentIndIcon":
        return (
          <AssignmentInd
            className={
              selectedIndex === 1 ? classes.iconMenuClick : classes.iconMenu
            }
          />
        );
      case "AccountCircleIcon":
        return (
          <AccountCircle
            className={
              selectedIndex === 2 ? classes.iconMenuClick : classes.iconMenu
            }
          />
        );
      default:
        return <ContactMail />;
    }
  };
  const onLogout = () => {
    localStorage.removeItem(USER_TOKEN);
    history("/login");
  };
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: props.open,
        [classes.drawerClose]: !props.open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: props.open,
          [classes.drawerClose]: !props.open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {menuList.map((item) => (
          <Link
            style={{ textDecoration: "none" }}
            to={item.link}
            key={item.index}
          >
            <ListItem
              innerRef={item.index === 2 ? profileRef : null}
              className={
                selectedIndex === item.index
                  ? classes.itemMenuClick
                  : classes.itemMenu
              }
              button
              selected={selectedIndex === item.index}
              onClick={(event) => handleClickItemList(event, item.index)}
            >
              <ListItemIcon>{getIcon(item.icon)}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </Link>
        ))}
      </List>
      <ListItem
        button
        onClick={() => {
          setQuestionLogout(true);
          console.log("đăng xuất");
        }}
      >
        <ListItemIcon>
          <ExitToApp />
        </ListItemIcon>
        <ListItemText primary={"Đăng xuất"} />
      </ListItem>
      <DialogConfirm
        open={questionLogout}
        title="Xác nhận"
        cancelButton
        confirmButton
        confirmText="Ở lại"
        cancelText="Đăng xuất"
        content="Bạn có chắc chắn muốn đăng xuất khỏi tài khoản này không?"
        onConfirm={() => setQuestionLogout(false)}
        onCancel={onLogout}
      />
    </Drawer>
  );
};

export default MenuLeft;
MenuLeft.propTypes = {
  handleClickItemList: PropTypes.func,
};
