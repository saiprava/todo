import React from 'react';
import {connect} from 'react-redux';
import {  Text,Card ,CardHeader,CardBody} from '@innovaccer/design-system';

const Donetask = (props) => {
    return(
        <div  style={{width: "70%" , margin: "0 auto"}}>
             <h1>
                Completed tasks
            </h1>
            {
                props.completedtask.length>0 && 
                props.completedtask.map((task) => {
                    return(
                        <Card className="w-50 mt-9" style={{
                            height: '150px'
                          }} shadow="dark">
                            <CardHeader>
                            <Text size="large" weight="strong">
                              {task.title}
                            </Text>
                            </CardHeader>
                            <CardBody>
                                  {task.desc}
                            </CardBody>
                            </Card>
                    );
                })
            }
        </div>
    );
}

let mapStateToProps = function mapStateToProps(state) {
    return {
        completedtask : state.task.taskCompleted
    }
}

export default connect(mapStateToProps)(Donetask);