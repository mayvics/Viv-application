import './Page1.css'
import ActivityList from '../Page1/Activity-list/ActivityList'
import Sidebar from '../Page1/Sidebar/Sidebar';

const Page1 = () => {
  return (
    <div className='Page1'>
        <Sidebar />
        <ActivityList />
    </div>
  )
}

export default Page1;