import React, { useState } from 'react';
import Logo from '../components/Logo';
import Nav from '../components/Nav';

const Blog = () => {

    const [content, setContent] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(content.length < 140){
            setError(true);
        } else {
            setError(false);
        }
    }

    return (
        <div className='blog-container'>
           <Logo />
           <Nav />
           <h1>Blog</h1>

           <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder='Nom'/>
                <textarea 
                style={{border: error ? '1px solid red' : '1px solid #61dafb'}}
                placeholder='Message' 
                onChange={(e) => setContent(e.target.value)}></textarea>
                { error && <p>Veuillez rédiger un message comprenant au minimum 140 caractères</p>}
                <input type="submit" value="Envoyer" />
           </form>
           <ul></ul>
        </div>
    );
};

export default Blog;