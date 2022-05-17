import React, { useState } from 'react'
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Language'},
    {id: 2, title: 'React', body: 'Learting React'},
    {id: 3, title: 'Deadman', body: 'Nothing interesting'},
  ])


  return (
    <div className='App'>
        <form>
          <input type={'text'} placeholder='Name of post'/>
          <input type={'text'} placeholder='Description'/>
          <MyButton>Create post</MyButton>
        </form>
        <PostList posts={posts} title={'List of posts 1'}/>
    </div>
  );
}

export default App;
