import { Container} from "react-bootstrap";
import "./index.css";
import { person } from "./data";
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import DateAction from "./components/DateAction";
import { useEffect, useState } from "react";

function App() {
  const [personData,setPersonData]=useState(person)

  useEffect(() => {
    setPersonData([])
  },[])
  const onDelete=()=>{
    setPersonData([])
  }
  const onViewData=() => {
    setPersonData(person)
  }
  
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount person={personData} />
        <DatesList person={personData} />
        <DateAction deleteData={onDelete} showAll={onViewData}/>
      </Container>
    </div>
  );
}

export default App;
