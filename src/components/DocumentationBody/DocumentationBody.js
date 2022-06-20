import React, { Component } from "react";
import './DocumentationBody.css';

const DocumentationBody = () => {

    // TODO (bdang) Change the base url here
    const baseUrl = 'http://localhost:3001/';

    return (<div className="documentationBody">
        <h1>Documentation</h1>
        <div>
            <h2>Base URL</h2>
            <p>The Base URL is the root URL for all of the API, if you ever make a request to this api and you get back a 404 NOT FOUND response then check the Base URL first.</p>
            <p>The Base URL for this api is:</p>
            <pre>
                <p>
                    {baseUrl}
                </p>
            </pre>
            {/* Get All Information */}
            <h2>Get All Information</h2>
            <h3>Endpoints</h3>
            <ul>
                <li>
                    <code>
                        "/all"
                    </code>
                    -- Gets all the information for Love Letter.
                </li>
            </ul>
            <h3>Example Request</h3>
            <pre>
                <p>
                    {baseUrl + "all"}
                </p>
            </pre>
            {/* Get Overview */}
            <h2>Overview Section</h2>
            <h3>Endpoints</h3>
            <ul>
                <li>
                    <code>
                        "/overview"
                    </code>
                    -- Gets the overview for Love Letter.
                </li>
            </ul>
            <h3>Example Request</h3>
            <pre>
                <p>
                    {baseUrl + "overview"}
                </p>
            </pre>
            {/* Get Contents */}
            <h2>Contents Section</h2>
            <h3>Endpoints</h3>
            <ul>
                <li>
                    <code>
                        "/contents"
                    </code>
                    -- Gets the contents of game materials for Love Letter.
                </li>
                <li>
                    <code>
                        "/contents/:index"
                    </code>
                    -- Given an index of a list, gets that particular material for Love Letter.
                </li>

            </ul>
            <h3>Example Request</h3>
            <pre>
                <p>
                    {baseUrl + "contents/0"}
                </p>
            </pre>
            {/* Get Setup */}
            <h2>Setup Section</h2>
            <h3>Endpoints</h3>
            <ul>
                <li>
                    <code>
                        "/setup"
                    </code>
                    --  Gets the setup rules for Love Letter.
                </li>
                <li>
                    <code>
                        "/setup/steps"
                    </code>
                    -- Gets the list of steps for Love Letter.
                </li>
                <li>
                    <code>
                        "/setup/steps/:index"
                    </code>
                    -- Given an index of a list, gets that particular step of the setup for Love Letter.
                </li>

            </ul>
            <h3>Example Request</h3>
            <pre>
                <p>
                    {baseUrl + "setup/steps/0"}
                </p>
            </pre>
            {/* Get Playing the Game */}
            <h2>Playing the Game Section</h2>
            <h3>Endpoints</h3>
            <ul>
                <li>
                    <code>
                        "/playing-the-game"
                    </code>
                    -- Gets the rules to play Love Letter.
                </li>
            </ul>
            <h3>Example Request</h3>
            <pre>
                <p>
                    {baseUrl + "playing-the-game"}
                </p>
            </pre>
            {/* Get Card Effects */}
            <h2>Card Effects Section</h2>
            <h3>Endpoints</h3>
            <ul>
                <li>
                    <code>
                        "/cardEffects"
                    </code>
                    --  Gets the card effects of all cards in Love Letter.
                </li>
                <li>
                    <code>
                        "/cardEffects/cards"
                    </code>
                    -- Gets the list of card effects for Love Letter.
                </li>
                <li>
                    <code>
                        "/cardEffects/cards/:index"
                    </code>
                    -- Given an index of a list, gets that particular card effect.
                </li>

            </ul>
            <h3>Example Request</h3>
            <pre>
                <p>
                    {baseUrl + "cardEffects/cards/0"}
                </p>
            </pre>
        </div>

    </div>);
}

export default DocumentationBody;