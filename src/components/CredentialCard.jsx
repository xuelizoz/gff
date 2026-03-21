import React from 'react';

const CredentialCard = ({ credential }) => {
    return (
        <div className="credential-card">
            <h3>{credential.degree}</h3>
            <p><strong>Institution:</strong> {credential.institution}</p>
            <p><strong>Year:</strong> {credential.year}</p>
            <p>{credential.description}</p>
        </div>
    );
};

export default CredentialCard;