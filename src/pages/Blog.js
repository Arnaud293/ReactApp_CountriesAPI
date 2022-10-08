import React from 'react';
import Logo from '../components/Logo';
import Nav from '../components/Nav';

const Blog = () => {
    return (
        <div className='blog-container'>
           <Logo />
           <Nav />
           <h1>Blog</h1>

           <form>
                <input type="text" placeholder='Nom'/>
                <textarea placeholder='Message'></textarea>
                <input type="submit" value="Envoyer" />
           </form>
           <ul></ul>
        </div>
    );
};

export default Blog;