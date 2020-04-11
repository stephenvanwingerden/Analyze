import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Dashboard as DashboardIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  LocalFlorist as FlowerIcon,
  EditLocation as LocationIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, type: "title", label: "DASHBOARDS" },
  {
    id: 1,
    label: "Sales",
    link: "/app/dashboard",
    icon: <DashboardIcon />,
  },
  {
    id: 2,
    label: "Inventory",
    link: "/app/typography",
    icon: <TypographyIcon />,
  },
  {
    id: 3,
    label: "Tables",
    link: "/app/tables",
    icon: <TableIcon />,
  },
  {
    id: 4,
    label: "Notifications",
    link: "/app/notifications",
    icon: <NotificationsIcon />,
  },
  {
    id: 5,
    label: "UI Elements",
    link: "/app/ui",
    icon: <UIElementsIcon />,
    children: [
      { label: "Icons", link: "/app/ui/icons" },
      { label: "Charts", link: "/app/ui/charts" },
      { label: "Maps", link: "/app/ui/maps" },
    ],
  },
  { id: 6, type: "divider" },
  { id: 7, type: "title", label: "MAINTENANCE" },
  { id: 8, label: "Locations", link: "/app/locations", icon: <LocationIcon /> },
  { id: 9, label: "Items", link: "/app/items", icon: <FlowerIcon /> },
  { id: 10, label: "FAQ", link: "", icon: <FAQIcon /> },
  { id: 11, type: "divider" },
  { id: 12, type: "title", label: "PROJECTS" },
  {
    id: 13,
    label: "My recent",
    link: "",
    icon: <Dot size="small" color="warning" />,
  },
  {
    id: 14,
    label: "Starred",
    link: "",
    icon: <Dot size="small" color="primary" />,
  },
  {
    id: 15,
    label: "Background",
    link: "",
    icon: <Dot size="small" color="secondary" />,
  },
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
