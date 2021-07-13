import React from 'react';
import {connect} from 'react-redux';
import {  Text,Card ,CardHeader,CardBody} from '@innovaccer/design-system';

const Deletedtask = (props) =>{
    return(
        <div style={{width: "100%" , margin: "0 auto",display: "flex", flexDirection:"row",fontFamily: "'Lobster', cursive"}}>
            <div style={{width: "50%", transform:"translateX(300px)"}}>
            <h1 style={{fontFamily: "'Lobster', cursive"}}>
                Deleted tasks
            </h1>
            <img style={{height:"500px" , width:"500px"}} src="https://cdni.iconscout.com/illustration/premium/thumb/delete-user-3148748-2624925.png"/>
            </div>
            <div style={{width: "50%",transform: "translateX(100px)"}}>
            {
                props.deletedtask ?
                props.deletedtask.map((task,key) => {
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
                }):<h1>No tasks deleted yet!!!</h1>
            }
            </div>
        </div>
    );
}

let mapStateToProps = function mapStateToProps (state){
    return {
        deletedtask : state.task.taskDeleted
    }
}

export default connect(mapStateToProps)(Deletedtask);