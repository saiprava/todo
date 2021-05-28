import React, { useEffect, useState } from 'react';
import { Button, Text,Card ,CardHeader,Heading,CardBody,Column,Row, Input, Textarea, CardFooter} from '@innovaccer/design-system';
import {connect} from 'react-redux';
import {setTask,setTaskDeleted,setTaskCompleted} from '../../Redux/Task/Task.actions';
import { DatePicker } from '@innovaccer/design-system';
import Homecards from './homecards';
import { Redirect } from 'react-router';


  
const Home = (props) => {
    let cards;

    const [hidden,setHidden] = useState(false);
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [date,setDate] = useState(null);
    const [pendingtask,setPendintask] = useState([]);
    const [deletedtask,setDeletedtask] = useState(false);
    const [completedtask,setCompletedTask] = useState(false);

    useEffect(()=> {
      setPendintask(props.task);   
    },[pendingtask,props.task])
    console.log(pendingtask);

    const onDeleteHandler = (title) => {
      console.log(title)
     props.setTaskDeleted(title);

    }

    const onCompleteHandler = (title) => {
      props.setTaskCompleted(title);
    }

   const onClickHandler = () => {
     const datev= new Date(date).toString();
      let task = {
        title,
        desc,
        date: datev
      };
      props.setTask(task);
      console.log(props.task);
    }
    console.log(props.task);

    return (
      deletedtask?<Redirect to="/deleted-task"/>:
      completedtask?<Redirect to="/completed-task"/>:
        <div style={{width: "70%" , margin: "0 auto"}}>
        <h1>
            TO-DO Lists 
        </h1>
        <Button className="mt-7 mb-7" type="button" size="large" appearance="basic" onClick={() => setHidden(!(hidden))} >ADD TASK</Button>
        <Button className="mt-7 mb-7 mr-7" type="button" size="large" appearance="basic" onClick={()=>setDeletedtask(!(deletedtask))} >View deleted tasks</Button>
        <Button className="mt-7 mb-7 mr-7" type="button" size="large" appearance="basic" onClick={() => setCompletedTask(!(completedtask))}>View completed tasks</Button>
        {
            hidden ?

            <Row>
      <Column size="8">
        <Card className="px-6 py-6" style={{padding: "20px"}}>
          <CardHeader style={{padding: "5px"}}>
            <Heading size="l">
              ADD YOUR TASK HERE!!
            </Heading>
          </CardHeader>
          <CardBody >
            <Input className="mb-6" type="text" placeholder="enter the task title" value={title}  onChange={(e)=> setTitle(e.target.value)}/>
            <Textarea className="mb-6" type="text" placeholder="enter the task description" value={desc} onChange = {(e)=> setDesc(e.target.value)}/>
            <DatePicker className="mb-6"  disabledBefore={date} inputOptions={{
          required: true
        }} onDateChange={(dateVal)=> setDate(dateVal)} withInput={true} />
            <Button className="mt-6" type="submit" onClick={onClickHandler} >Submit</Button>
          </CardBody>
        </Card>
      </Column>
    </Row> : null
        }
        {cards}
        { <div>
          {
            (pendingtask.length>0) ?
            pendingtask.map(ta => {
              {console.log(ta)}
              return(
                <Homecards title={ta.title} description={ta.desc} date={ta.date} onDeleted={onDeleteHandler} onCompleted={onCompleteHandler}/>

              );
            })
            :
            null
          }
        </div> }
       
        </div>

    )
}

let mapStateToProps = function mapStateToProps(state) {
  return {
    task: state.task.task
  }
}

let mapDispatchToProps = (dispatch) => ({
    setTask: (task) => dispatch(setTask(task)),
    setTaskDeleted: (deletetask) => dispatch(setTaskDeleted(deletetask)),
    setTaskCompleted: (completedtask) => dispatch(setTaskCompleted(completedtask))
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);