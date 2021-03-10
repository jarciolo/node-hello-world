import React from "react";
import DataTable from "react-data-table-component";
import { Chart } from "react-google-charts";
import TableData from "../fixture/table";
import { List, ListItem, makeStyles, NativeSelect, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import TuneIcon from '@material-ui/icons/Tune';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
      'label + &': {
          marginTop: theme.spacing(3),
      },
  },
  input: {
      borderRadius: 8,
      position: 'relative',
      backgroundColor: "#eff2f5",
      fontSize: 14,
      padding: '12px 26px 12px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
          borderRadius: 8,
          backgroundColor: "#eff2f5"
      },
  },
}))(InputBase);

const useStyles = makeStyles(() => ({
  tableContainer: {
    marginTop: 50
  },
  tableTopStrip: {
    marginBottom: 10,
    display:  "flex",
    justifyContent: "space-between"
  },
  watchList: {
    backgroundColor: "#eff2f5",
    "&:hover": {
      backgroundColor: "#eff2f5 !important",
    }
  },
  tableLinkArea: {
    display: "flex",
    "& .MuiListItem-root": {
      width: "auto",
      "& a": {
        padding: [[8, 18]],
        borderRadius: 8,
        color: "#58667e",
        marginRight: 5,
        fontWeight: "500",
        fontSize: 14,
        "&:hover": {
          backgroundColor: "#fbfbfb",
        },
        "&.active": {
          backgroundColor: "#f0fff2",
          color: "#00bf71",
        },
        "& svg": {
          fontSize: 18,
          marginRight: 5,
          verticalAlign: "text-top"
        },
        "& span": {
          verticalAlign: "text-bottom"
        }
      }
    }
  },
  lineDivider: {
    height: 16,
    width: 1,
    margin: [[0, 15, 0, 10]],
    display: "inline-block",
    verticalAlign: "middle",
    backgroundColor: "rgb(207, 214, 228)"
  },
  tableControlArea: {
    display: "flex",
    alignItems: "center"
  },
  tableControlSizer: {
    marginRight: 10,
    "& span": {
      fontSize: 14,
      marginRight: 10
    }
  },
  tableControFilter: {
    fontSize: 14,
    backgroundColor: "#eff2f5",
    padding: [[8, 15]],
    borderRadius: 8,
    cursor: "pointer",
    "& svg": {
      fontSize: 18,
      verticalAlign: "text-top"
    },
    "& span": {
      verticalAlign: "text-bottom",
      fontWeight: "500"
    }
  }
}));
const customStyles = {
  table: {
    style: {
      border: "1px solid #e5ecf2",
      borderRadius: 10,
      overflow: "hidden"
    }
  },
  header: {
    style: {
      padding: 0,
      backgroundColor: "transparent",
      "& div": {
        fontWeight: "bold",
        marginBottom: 15  ,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        color: "#152c5b"
      }
    }
  },
  headRow: {
    style: {
      borderColor: "#e5ecf2",
    }
  },
  headCells: {
    style: {
      paddingLeft: "15px",
      paddingRight: "15px",
      fontSize: "14px",
      color: "#8793ac",
      backgroundColor: "#fff",
      "&:last-child": {
        justifyContent: "center"
      }
    },
  },
  rows: {
    style: {
      fontSize: "15px",
      minHeight: "48px",
      "&:not(:last-of-type)": {
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        borderColor: "#e5ecf2",
        backgroundColor:"#ffffff"
      },
    },
    denseStyle: {
      minHeight: "32px",
    },
  },
  cells: {
    style: {
      paddingLeft: "15px",
      paddingRight: "15px",
      fontSize: "14px",
      color: "#152c5b",
      backgroundColor: "#ffffff !important",
    },
  },
  pagination: {
    style: {
      border: 0,
      justifyContent: "flex-start",
      "& span": {
        "&:nth-child(3)": {
          order: 1,
          marginLeft: 0
        },
        "&:first-child": {
          order: 3
        }
      },
      "& div": {
        "&:nth-child(2)": {
          order: 4,
          "& select": {
            paddingRight: 24
          }
        },
        "&:last-child": {
          margin: "0 auto",
          order: 2
        }
      }
    }
  }
};

const Table = (props) => {
  const classes = useStyles();
  const columns = [
    {
      name: "#",
      selector: "index",
      sortable: true,
      format: (row) => `${row.index}`,
      grow: 0,
    },
    {
      name: "Name",
      selector: "name",
      wrap: true,
      sortable: true,
      cell: (row) => `${row.name}`,
    },
    {
      name: "Price",
      selector: "price",
      wrap: true,
      sortable: true,
      cell: (row) => "$ " + `${row.price}`,
    },
    {
      name: "24h",
      selector: "change",
      wrap: true,
      sortable: true,
      cell: (row) => `${row.change}`,
    },
    {
      name: "7d",
      selector: "7d",
      wrap: true,
      sortable: true,
      cell: (row) => `${row.week}`,
    },
    {
      name: "Market Cap",
      selector: "marketcup",
      wrap: true,
      sortable: true,
      cell: (row) => `${row.marketcup}`,
    },
    {
      name: "Volume",
      selector: "volume",
      wrap: true,
      sortable: true,
      cell: (row) => `${row.volume}`,
    },
    {
      name: "Circulating Supply",
      selector: "circulatingsupply",
      wrap: true,
      sortable: true,
      cell: (row) => `${row.circulatingsupply}`,
    },
    {
      name: "Last 7 Days",
      cell: (row) => (
        <Chart
          width={"200px"}
          height={"50px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["", ""],
            [0, 0],
            [1, 10],
            [2, 23],
            [3, 17],
            [4, 18],
            [5, 9],
            [6, 11],
            [7, 27],
            [8, 33],
            [9, 40],
            [10, 32],
            [11, 35],
          ]}
          options={{
            backgroundColor: '#ffffff',
            color: '#ffffff',
            hAxis: {
              baselineColor: "#ffffff",
              gridlineColor: "#ffffff",
              textPosition: "none",
            },
            vAxis: {
              baselineColor: "#ffffff",
              gridlineColor: "#ffffff",
              textPosition: "none",
            },
            legend: { position: "none" },
          }}
          rootProps={{ "data-testid": "0" }}
        />
      ),
      width: "230px",
    },
  ];

  const goToDashboard = () => {
    props.history.push("/dashBoard");
  };

  const [rowPerPage, setRowPerPage] = React.useState('');

  const handleShowRowPerPage = (event) => {
      setRowPerPage(event.target.value);
  };

  return (
    <>
      {/* <HeaderPage /> */}
      <div  className={classes.tableContainer}>
        <div id="tableTopStrip" className={classes.tableTopStrip}>
          <List className={classes.tableLinkArea}>
            <ListItem disableGutters><Link className={classes.watchList} to="/"><StarBorderIcon/><span>Watchlist</span></Link></ListItem>
            <ListItem disableGutters><span className={classes.lineDivider}></span></ListItem>
            <ListItem disableGutters><Link className="active" to="/"><span>Cryptocurrencies</span></Link></ListItem>
            <ListItem disableGutters><Link to="/"><span>Derivatives</span></Link></ListItem>
            <ListItem disableGutters><Link to="/"><span>DeFi</span></Link></ListItem>
            <ListItem disableGutters><Link to="/"><span>Polkadot Eco</span></Link></ListItem>
            <ListItem disableGutters><Link to="/"><span>NFTs & Collectibles</span></Link></ListItem>
            <ListItem disableGutters><Link to="/"><span>Yield Farming</span></Link></ListItem>
          </List>
          <div id="tableControlArea" className={classes.tableControlArea}>
            <div className={classes.tableControlSizer}>
                <span>Show rows</span>
                <NativeSelect
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={rowPerPage}
                  displayEmpty
                  onChange={handleShowRowPerPage}
                input={<BootstrapInput />}
                >
                  <option value="">100</option>
                  <option value="accounting">200</option>
                  <option value="managing">500</option>
                </NativeSelect>
            </div>
            <div className={classes.tableControFilter}>
              <TuneIcon/> <span>Filters</span>
            </div>
          </div>
        </div>
        <DataTable
          // title="Top 100 Cryptocurrencies by Market Cap"
          columns={columns}
          data={TableData}
          pagination={true}
          paginationPerPage={100}
          paginationComponentOptions= {{
            rowsPerPageText: "Show rows"
          }}
          paginationRowsPerPageOptions={[100,200,500]}
          customStyles={customStyles}
        />
      </div>
    </>
  );
};
export default Table;
