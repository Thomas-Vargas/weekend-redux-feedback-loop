import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const allFeedback = useSelector((store) => store.allFeedback);
  const dispatch = useDispatch();

  const getAllFeedback = () => {
    axios
      .get("/feedback")
      .then((result) => {
        dispatch({
          type: "SET_ALL_FEEDBACK",
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteFeedback = (id) => {
    console.log(id);
    axios
      .delete(`/feedback/${id}`)
      .then(result => {
        console.log('Successfully delete feedback with id', id);
        getAllFeedback();
      })
      .catch(error => {
        console.log('Error deleting feedback', error)
      })
  }

  useEffect(() => {
    getAllFeedback();
  }, []);

  return (
    <>
      <h1>Feedback Results</h1>

      <div className="table-container">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Feeling</TableCell>
                <TableCell align="right">Comphrehension</TableCell>
                <TableCell align="right">Support</TableCell>
                <TableCell align="right">Comments</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allFeedback.map((individualFeedback) => (
                <TableRow
                  key={individualFeedback.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    {individualFeedback.feeling}
                  </TableCell>
                  <TableCell align="right">
                    {individualFeedback.understanding}
                  </TableCell>
                  <TableCell align="right">
                    {individualFeedback.support}
                  </TableCell>
                  <TableCell align="right">
                    {individualFeedback.comments}
                  </TableCell>
                  <TableCell align="right">
                    <Button onClick={() => deleteFeedback(individualFeedback.id)} variant="contained" startIcon={<DeleteIcon />}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Admin;
