import React, { useEffect, useState } from 'react';
import { Button, Text,Card ,CardHeader,Heading,CardBody,Column,Row, Input, Textarea, CardFooter} from '@innovaccer/design-system';
import {connect} from 'react-redux';
import {setTask,setTaskDeleted,setTaskCompleted} from '../../Redux/Task/Task.actions';
import { DatePicker } from '@innovaccer/design-system';
import Homecards from './homecards';
import { Redirect } from 'react-router';
import image from '../../lime-list-is-empty.png';
import Axios from 'axios';

  
const Home = (props) => {
    let cards;

    const [hidden,setHidden] = useState(false);
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [date,setDate] = useState(null);
    const [pendingtask,setPendintask] = useState(null);
    const [deletedtask,setDeletedtask] = useState(false);
    const [completedtask,setCompletedTask] = useState(false);

    useEffect(()=> {
      const options = {
        url : "https://jsonplaceholder.typicode.com/todos",
        method: 'GET'
      };
      Axios(options).then((res) => {
        console.log(res.data);
        props.setTask(res.data);
        setPendintask(res.data);
      });
    },[])
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
      
      console.log(task);
      let s=[...props.task,task];
      setPendintask(s);
      console.log(s);
      props.setTask(pendingtask);

      
    }
    console.log(props.task);

    return (
        <div style={{width: "70%" , 
        margin: "20px" , 
        display:"flex", 
        flexDirection: "row",
        padding:"30px", 
        textAlign:"center",
        transform:"translateY(-100px) translateX(100px)"}}>
        <div style={{width: "50%"}}>
          <div style={{display: "flex", flexDirection:"column"}}>
            <img src={image} style={{height:"400px" ,width:"450px"}}/>
            <div style={{transform:"translateY(-80px) translate(50px)"}} >
        <Row>
      <Column size="10">
        <Card className="px-4 py-6 mt-6" style={{padding: "20px"}}>
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
    </Row>
    </div>
      </div>
        </div>
            
        <div style={{width: "50%"}}>
          {
            (pendingtask) ?
            pendingtask.map(ta => {
              
              return(
                <Homecards title={ta.title} description={ta.desc} date={ta.date} onDeleted={onDeleteHandler} onCompleted={onCompleteHandler}/>

              );
            })
            :
            null
          }
        </div> 
       
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