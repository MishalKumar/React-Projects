import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return(
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div class="container-md">
                    <a class="navbar-brand text-info" href="#">SAUDA TECH</a>
                    <button class="navbar-toggler">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Features</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Pricing</a>
                                    </li>
                            </ul>
                        </div>
                </div>
            </nav>
        )
    }
}