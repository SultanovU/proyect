import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useReducer } from "react";

const AddCourse = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "changeInput":
        return { ...state, input: action.payload };
      default:
        return state;
      case "addTodo":
        return {
          ...state,
          total: [
            ...state.total,
            { id: state.total.length + 1, data: state.input },
          ],
          input: " ",
        };
      case "delete":
        const newData = state.total.filter(
          (value) => value.id !== action.payload
        );
        return { ...state, total: newData };
    }
  };
  const [todo, dispatch] = useReducer(reducer, { input: "", total: [] });
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box sx={{ padding: "5px" }}>
        <Box>
          <Typography sx={{ fontSize: "40px" }}>Add Course </Typography>
          <Typography sx={{ color: colors.greenAccent[500], fontSize: "25px" }}>
            O`zingiz qiziqqan kursda o`qing ☻
          </Typography>
        </Box>
        <Box sx={{ width: "100%", height: "90%", marginTop: "30px" }}>
          <Box
            sx={{
              width: "100%",
              height: "100px",
              backgroundColor: "#3e4396",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "600",
                color: "#4CCEAC",
              }}
            >
              Kurs qo`shing :{" "}
            </Typography>
            <TextField
              value={todo.input}
              label="add course"
              sx={{ width: "400px" }}
              onChange={(e) =>
                dispatch({ type: "changeInput", payload: e.target.value })
              }
            />
            <Button
              sx={{ color: "white", padding: "15px 60px" }}
              variant="contained"
              color="secondary"
              onClick={() => dispatch({ type: "addTodo" })}
            >
              Add
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "654px",
            border: "1px solid gray",
            padding: "30px 20px",
            overflow: "auto",
          }}
        >
          <ol>
            {todo.total.map((value) => {
              return (
                <li
                  key={value.id}
                  style={{ fontSize: "25px", fontFamily: "sans-serif" }}
                >
                  {value.data}{" "}
                  <Button
                    color="error"
                    variant="contained"
                    sx={{ marginLeft: "100px" }}
                    onClick={() =>
                      dispatch({ type: "delete", payload: value.id })
                    }
                  >
                    delete
                  </Button>
                </li>
              );
            })}
          </ol>
        </Box>
      </Box>
    </>
  );
};

export default AddCourse;
