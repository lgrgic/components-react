import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Luka" 
        timeAgo="Today at 2 PM."
        text="Cool post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Biba"
        timeAgo="Today at 12 PM."
        text="React is so amazing!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Mimijan"
        timeAgo="Yesterday at 2 PM."
        text="So far so good..."
        avatar={faker.image.avatar()}
      />
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
