import React from "react";
import '../componentStyles/AuthorStyle.css';

export default class Author extends React.Component {
    render() {
        return <div className="cont">
                    <h1 className="title">Class component created by</h1>
                    <div className="card" style={{width: "35rem"}}>
                        <img className="card-img-top"
                            src="https://i.pinimg.com/564x/42/55/d8/4255d83c9d4bd19c113db36c20f2ed2b.jpg"
                            alt="Card image cap" />
                        <div className="card-body">
                            <h2 className="card-title">{this.props.name}</h2>
                            <p className="card-text">These are some of my hobbies ⬇
                            </p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Anime</li>
                            <li className="list-group-item">Skateboarding</li>
                            <li className="list-group-item">Nature</li>
                            <li className="list-group-item">Genshin impact</li>
                            <li className="list-group-item">Music</li>
                        </ul>
                        <div className="card-body">
                            <a href="https://github.com/fernandoreki" className="card-link" target="_blank">GitHub</a>
                        </div>
                    </div>
                </div>;
    }
}