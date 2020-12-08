import React from "react";

export default function Meme({template, onCLick }) {
    return (
        <img 
            className="meme-img ml-2 mt-2" 
            key={template.id} 
            src={template.url} 
            alt={template.name}
            onClick={onCLick}
        />
    );
}