import React from 'react';
import { Button, Text,Card ,CardHeader,CardBody, CardFooter} from '@innovaccer/design-system';
 
const Homecards = (props) =>{
    return(
    <Card className="w-50 mt-9" style={{
        height: '200px'
      }} shadow="dark">
        <CardHeader>
        <Text size="large" weight="strong">
          {props.title}
        </Text>
        </CardHeader>
        <CardBody>
             <div>
              {props.description}
              </div>
              <p>Due on {props.date}</p>
        </CardBody>
        <CardFooter>
          <Button appearance="alert" className="ml-6 mr-6" onClick={()=> {
              props.onDeleted(props.title)
          }}>
            Delete
          </Button>
          <Button appearance="basic" className="ml-6 mr-6" onClick={()=> {
              props.onCompleted(props.title)
          }}>
            Mark as done
          </Button>
        </CardFooter>
        </Card>
    );
}

export default Homecards;