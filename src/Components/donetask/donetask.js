import React from 'react';
import {connect} from 'react-redux';
import {  Text,Card ,CardHeader,CardBody} from '@innovaccer/design-system';

const Donetask = (props) => {
    return(
        <div  style={{width: "70%" , margin: "0 auto", display:"flex",flexDirection:"row",fontFamily: "'Lobster', cursive"}}>
            <div style={{width: "50%"}}>
             <h1>
                Completed tasks
            </h1>
            <img src="https://st2.depositphotos.com/34031690/42061/v/600/depositphotos_420617258-stock-illustration-modern-vector-illustration-young-businessman.jpg"/>
            </div>
            <div style={{width: "50%",transform: "translateX(160px)"}}>
            {
                props.completedtask ? 
                props.completedtask.map((task,key) => {
                    return(
                        <Card className="w-50 mt-9" style={{
                            height: '80px'
                          }} shadow="dark">
                            <CardHeader>
                            <Text size="large" weight="strong">
                              {task.title}
                            </Text>
                            </CardHeader>
                            </Card>
                    );
                }):<h1>No tasks completed yet!!!</h1>
            }
            </div>
        </div>
    );
}

let mapStateToProps = function mapStateToProps(state) {
    return {
        completedtask : state.task.taskCompleted
    }
}

export default connect(mapStateToProps)(Donetask);