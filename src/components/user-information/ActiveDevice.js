import React from "react";
import { CardHeader, Button, Card, CardBody} from "shards-react";
import { Link } from "react-router-dom";

const ActiveDevice = ({ devices }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <div className="m-0 header_content">
        <div className="heavy">Active Device</div>
        <Button outline pill theme="secondary" tag={Link} to="/add-device">add device</Button>
      </div>
    </CardHeader>
    <CardBody className="p-0 pb-3">
      <table className="table mb-0">
        <thead className="bg-light">
          <tr>
            <th scope="col" className="border-0">
              #
            </th>
            <th scope="col" className="border-0">
              Divce Id
            </th>
            <th scope="col" className="border-0">
              Registerd Time
            </th>
            <th scope="col" className="border-0">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
        {devices.map((item, idx) => (
          <tr key={idx}>
            <td>{idx + 1}</td>
            <td>{item.id}</td>
            <td>{item.regTime.split('T')[0]}</td>
            <td>online</td>
          </tr>
        ))}
        </tbody>
      </table>
    </CardBody>
   </Card>
)

export default ActiveDevice;
