import "./footer.css";
import * as React from "react";

export class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container-fluid footer">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="pull-right list-unstyled">
                                <li>
                                    <a href="">Contact Us</a>
                                </li>
                                <li>
                                    © React {new Date().getFullYear()}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
