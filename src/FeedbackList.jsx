
import { useContext } from 'react' 
import FeedbackItem from './components/FeedbackItem'
import FeedbackContext from './context/FeedbackContext'

function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
        return <p>No feedback yet</p>
    }

  return (
    
    <div className='feedback-list'>

        <div>
            {
                feedback.map(

                    (item)=>(
                        <FeedbackItem
                            key={item.id} 
                            item = {item} 
                        />
                    )
                )
            }
        </div>

    </div>
  )
}


export default FeedbackList