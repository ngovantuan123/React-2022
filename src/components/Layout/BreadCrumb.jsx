import React from "react";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

const colorCustomer = createMuiTheme({
  palette: {
    primary: {
      main: "#bdbdbd",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});
const Breadcrumb = (props) => {
  return (
    <Typography variant="h6" noWrap>
      <ThemeProvider theme={colorCustomer}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="primary" href="#">
            Admin
          </Link>
          <Typography color="secondary">{props.nameBreadcrumb}</Typography>
        </Breadcrumbs>
      </ThemeProvider>
    </Typography>
  );
};

export default Breadcrumb;
