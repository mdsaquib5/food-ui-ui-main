import { useState } from "react";
import images from "./images";
import "./styles.css";

export default function App() {
    const [index, setIndex] = useState(0);

    const prevIndex = (index - 1 + images.length) % images.length;
    const nextIndex = (index + 1) % images.length;

    return (
        <div className="page-bg">
            <div className="main-card">
                <div className="wrapper">

                    {/* LEFT */}
                    <div className="left">
                        <div className="brand">Bowls.</div>

                        <h1>
                            Embark on a <span>tasty</span><br />
                            adventure with a<br />
                            wholesome diet!
                        </h1>

                        <p className="desc">
                            Healthy and delicious meals crafted fresh and served piping hot.
                        </p>

                        <div className="buttons">
                            <button className="primary">Order Now</button>
                            <button className="secondary">View Our Menu</button>
                        </div>

                        {/* MINI CARDS — LEFT BOTTOM */}
                        <div className="mini-cards">
                            <div className="mini-card">
                                <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" />
                                <h4>Veg & Rice</h4>
                                <p>Healthy Bowl</p>
                                <button>Add</button>
                            </div>

                            <div className="mini-card">
                                <img src="https://images.unsplash.com/photo-1604908177522-4028b8c7b46b" />
                                <h4>Grilled</h4>
                                <p>Chicken Salad</p>
                                <button>Add</button>
                            </div>

                            <div className="mini-card">
                                <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd" />
                                <h4>Power Bowl</h4>
                                <p>Fresh Veggies</p>
                                <button>Add</button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="right">
                        <div className="carousel">

                            {images.map((img, i) => {
                                let cls = "food hidden";
                                if (i === index) cls = "food center";
                                else if (i === nextIndex) cls = "food next";
                                else if (i === prevIndex) cls = "food prev";

                                return (
                                    <div className={cls} key={i}>
                                        <img src={img} alt="food" />
                                    </div>
                                );
                            })}

                            <div className="controls">
                                <button onClick={() => setIndex(prevIndex)}>‹</button>
                                <button onClick={() => setIndex(nextIndex)}>›</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
