import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

DialogCustom.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  icon: PropTypes.node,
  cancelButton: PropTypes.bool,
  confirmButton: PropTypes.bool,
};
DialogCustom.defaultProps = {
  title: "Bạn có chắc chắn",
  cancelText: "Hủy",
  confirmText: "Đồng ý",
};
const useStyles = makeStyles((theme) => ({
  container: {
    width: 600,
    background: "red",
  },
  buttonConfirm: {
    width: 120,
    background: "linear-gradient(45deg, #667FEF 30%, #3E3EEF 90%)",
  },
  buttonCancel: {
    color: "#fff",
    background: "#8A96A1",
    width: 120,
    "&:hover": {
      backgroundColor: "#707070",
    },
  },
  image: {
    width: "50%",
    height: "60%",
    objectFit: "contain",
  },
  wrapContent: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    minWidth: 400,
  },
}));
function DialogCustom(props) {
  const classes = useStyles();
  const {
    open,
    onClose,
    title,
    content,
    cancelText,
    confirmText,
    onConfirm,
    onCancel,
    icon,
    cancelButton,
    confirmButton,
  } = props;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      // TransitionComponent={Transition}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent className={classes.wrapContent}>
        {icon ? icon : null}
      </DialogContent>
      {title && (
        <DialogTitle id="alert-dialog-title" className={classes.wrapContent}>
          {title}
        </DialogTitle>
      )}
      {content && (
        <DialogContent className={classes.wrapContent}>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
      )}
      <DialogActions className={classes.wrapContent}>
        {cancelButton && (
          <Button
            className={classes.buttonCancel}
            onClick={onCancel}
            type="button"
            variant="contained"
            color="inherit"
          >
            {cancelText}
          </Button>
        )}
        {confirmButton && (
          <Button
            className={classes.buttonConfirm}
            onClick={onConfirm}
            type="button"
            variant="contained"
            color="primary"
            autoFocus
          >
            {confirmText}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}

export default DialogCustom;
