import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {

    const [posts, setPosts] = useState([]);

    const cat = useLocation().search;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts${cat}`);
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

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent;
    }

    return (
        <div className="home">
            <div className="posts">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={`../upload/${post.img}`} alt="" />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{getText(post.desc)}</p>
                            <Link className="link" to={`/post/${post.id}`}>
                                <button>Read More</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;