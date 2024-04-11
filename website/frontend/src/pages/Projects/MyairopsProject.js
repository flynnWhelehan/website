import React from 'react';
import { Helmet } from 'react-helmet';

function MyairopsProject() {
    return (
        <div>
            <Helmet>
                <title>Myairops Project - Flynn's Portfolio</title>
                <meta name="description" content="Details about my project at Myairops" />
            </Helmet>
            <h1>Myairops Project</h1>

            <section id="role">
                <h2>My Role</h2>
                <p>...</p>
            </section>

            <section id="video-interview">
                <h2>Video Interview</h2>
                <p>...</p>
                <a href="https://myairops.com/spotlight/2024/03/industrial-placement-update-ben-flynn/">Read the full blog post</a>
            </section>

            <section id="technology">
                <h2>Technology Used</h2>
                <p>...</p>
            </section>

            <section id="objectives">
                <h2>Stretch Objectives</h2>
                <p>...</p>
            </section>

            <section id="interviewing">
                <h2>Interviewing Candidates</h2>
                <p>...</p>
            </section>

            <section id="challenges">
                <h2>Challenges</h2>
                <p>...</p>
            </section>
        </div>
    );
}

export default MyairopsProject;