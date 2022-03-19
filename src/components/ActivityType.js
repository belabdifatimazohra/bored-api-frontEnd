import { React} from 'react';
import { Form } from "react-bootstrap";
function ActivityType(params) {
    
    return (
        <Form.Select aria-label="Default select example"

            onChange={e => params.handleTypeChange(e)}>
            <option>Select Activity Type</option>
            <option value="education">Education</option>
            <option value="recreational">Recreational</option>
            <option value="social">Social</option>
            <option value="diy">Diy</option>
            <option value="charity">Charity</option>
            <option value="cooking">Cooking</option>
            <option value="relaxation">Relaxation</option>
            <option value="music">Music</option>
            <option value="busywork">Busywork</option>

        </Form.Select>
    );
}

export default ActivityType;