import { v4 as uuidv4} from 'uuid';
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header'
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './components/pages/AboutPage';
import Card from './components/shared/Card';
import Post from './components/Post';

import FeedBackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

function App(){

    const [feedback, setFeedback] = useState(FeedBackData);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item)=> item.id !== id))
        }
        
    }


    return (
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                            
                        </>
                    }></Route>

                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/post/*' element={<Post />} />
                    

                </Routes>

                <AboutIconLink />
            </div>
        </Router>

    )
}

// function App(){
//     const title = 'Blog Post';
//     const body = 'This is my blog post';
//     const comments = [
//         {id: 1, text: 'Comment one'},
//         {id: 2, text: 'Comment two'},
//         {id: 3, text: 'Comment three'},
//     ]

//     const loading = false;
//     const showComments = true;

//     const commentBlock = (
//         <div className='comments'>
//             <h3>Comments ({comments.length})</h3>
//             <ul>
//                 {comments.map((comment, index) => (
//                     <li key={index}>{comment.text}</li>
//                 ))}
//             </ul>
//          </div>
//     );

//     if(loading) return <h1>Loading...</h1>

//     return (
//         <div className='container'>
//             <h1>{title}</h1>
//             <p>{body}</p>
//             {showComments && commentBlock}
            
//         </div>

//     )
// }

export default App