import Post from "./Post"
import '../styles/style.css'
import './babel'

const post = new Post('Webpack Post')

console.log('Post to String', post.toString())