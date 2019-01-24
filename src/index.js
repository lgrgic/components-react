import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Luka"
          timeAgo="Today at 2 PM."
          text="Cool post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Biba"
          timeAgo="Today at 12 PM."
          text="React is so amazing!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Mimijan"
          timeAgo="Yesterday at 2 PM."
          text="So far so good..."
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
