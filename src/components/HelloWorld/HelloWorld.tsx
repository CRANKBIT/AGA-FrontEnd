/**
 * The HelloWorld component renders an alert with
 * the package name, version and environment.
 */

// External imports
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import { AlertProps, BoxProps } from "@mui/material";

// Local imports
// import styles from "./index.module.scss";

// Component props
export interface HelloWorldProps {
  /**
   * The alert message styles.
   * See: https://mui.com/material-ui/api/alert
   */
  alert?: AlertProps;
  /**
   * The box container styles.
   * See: https://mui.com/material-ui/api/box
   */
  box?: BoxProps;
  text?: string;
}

// Component definition
function HelloWorld({ alert, box, text }: HelloWorldProps) {
  const defaults = HelloWorld.defaultProps;
  const boxProps = { ...defaults.box, ...box } as BoxProps;
  const alertProps = { ...defaults.alert, ...alert } as AlertProps;

  return (
    <Box {...boxProps}>
      <Alert {...alertProps}>
        <AlertTitle>{text}</AlertTitle>
      </Alert>
    </Box>
  );
}

// Default props
HelloWorld.defaultProps = {
  alert: {
    severity: "success",
    sx: { width: 300 },
    variant: "filled",
  },
  box: {},
  text: "hello-world",
};

// Default export
export default HelloWorld;
