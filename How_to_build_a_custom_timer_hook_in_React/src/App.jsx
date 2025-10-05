import TimerComponent from "./TimerComponent";
import { Container, Typography } from "@mui/material";
import './App.css'

function App() {
  return (
    <>
      <Container>
        <Typography variant='h2' color="black" >CodeKaroge ?</Typography>
        <TimerComponent />
      </Container>
    </>
  );
}

export default App;
