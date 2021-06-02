import React from 'react';
import {connect} from 'react-redux';
import {  Text,Card ,CardHeader,CardBody} from '@innovaccer/design-system';

const Deletedtask = (props) =>{
    console.log(props.deletedtask.length);
    return(
        <div style={{width: "70%" , margin: "0 auto"}}>
            <h1>
                Deleted tasks
            </h1>
            {
                props.deletedtask.length>0 ?
                props.deletedtask.map((task) => {
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
                }):null
            }
        </div>
    );
}

let mapStateToProps = function mapStateToProps (state){
    return {
        deletedtask : state.task.taskDeleted
    }
}

export default connect(mapStateToProps)(Deletedtask);