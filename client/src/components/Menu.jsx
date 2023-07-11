import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = ({ cat }) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/?cat=${cat}`);
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [cat]);

    // const posts = [
    //     {
    //         id: 1,
    //         title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, corrupti.",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, officia.",
    //         img: "https://www.realsimple.com/thmb/P1yrTQKP9zTQbQpoWYIKiIBY3Us=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/health-benefits-of-grapes-realsimple-GettyImages-954325346-f083fbc489ec4898887e9c30004cad48.jpg",
    //     },
    //     {
    //         id: 2,
    //         title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, corrupti.",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, officia.",
    //         img: "https://www.realsimple.com/thmb/P1yrTQKP9zTQbQpoWYIKiIBY3Us=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/health-benefits-of-grapes-realsimple-GettyImages-954325346-f083fbc489ec4898887e9c30004cad48.jpg",
    //     }
    // ];

    return (
        <div className="menu">
            <h1>Other posts you may like</h1>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <img src={`../upload/${post.img}`} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    );
};

export default Menu;