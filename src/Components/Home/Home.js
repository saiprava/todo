import React, { useEffect, useState } from 'react';
import { Button, Text,Card ,CardHeader,Heading,CardBody,Column,Row, Input, Textarea, CardFooter} from '@innovaccer/design-system';
import {connect} from 'react-redux';
import {setTask} from '../../Redux/Task/Task.actions';
import { DatePicker } from '@innovaccer/design-system';


  
const Home = (props) => {
    let cards;

    const [hidden,setHidden] = useState(false);
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [date,setDate] = useState(null);
    const [pendingtask,setPendintask] = useState([]);

    useEffect(()=> {
      setPendintask(props.task);
    },[pendingtask])

   const onClickHandler = () => {
      let task = {
        title : {title},
        description : {desc},
        date: {date}
      };
      props.setTask(task);
      console.log(props.task);
    }
    console.log(props.task);

    return (
        <div style={{width: "70%" , margin: "0 auto"}}>
        <h1>
            TO-DO Lists 
        </h1>
        <Button className="mt-7 mb-7" type="button" size="large" appearance="basic" onClick={() => setHidden(!(hidden))} >ADD TASK</Button>
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
            <DatePicker className="mb-6"  disabledBefore={1421692200000} inputOptions={{
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
              <Card className="w-50" style={{
                height: '250px'
              }}>
                <CardHeader>
                <Text size="large" weight="strong">
                  {ta.title.title}
                </Text>
                </CardHeader>
                <CardBody>
                     <div>
                      {ta.description.description}
                      </div>
                      <p>Due on {ta.date.date}</p>
                </CardBody>
                <CardFooter>
                  <Button appearance="alert">
                    Delete
                  </Button>
                  <Button appearance="basic">
                    Mark as done
                  </Button>
                </CardFooter>
                </Card>
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
    setTask: (task) => dispatch(setTask(task))
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);