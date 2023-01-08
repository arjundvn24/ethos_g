import './minDashboard.css';
import Card from '../components/Card';
import { useState } from 'react';
const json=require('../file1.json')

function MinDash() {
  // for side bar
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="App">
      <div className={"cards " + (!collapsed && "blur")}>
        {json.map(({title,label})=>(
        <Card title={title}  data={label} blue={true}/>
        ))}
      </div>
    </div>
  );
}

export default MinDash;
