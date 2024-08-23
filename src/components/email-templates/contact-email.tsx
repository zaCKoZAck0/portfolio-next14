import * as React from 'react';
import { Sora } from 'next/font/google';
import { JetBrains_Mono } from 'next/font/google';

const sora = Sora({ subsets: ['latin'] });
const mono = JetBrains_Mono({ subsets: ['latin'] });

interface EmailTemplateProps {
  name: string;
  message: string;
  reason: string;
  company?: string;
}

export const ContactEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  message,
  reason,
  company,
}) => (
  <div style={container}>
    <h1 style={header}>Hi, {name}! 
        {company && <span> from {company}</span>}
    </h1>
    <p style={block}>Thank you for reaching out regarding <strong>{reason}</strong>.</p>
        <div style={chatbubble}>
        <p style={chatbubbleHeader}>Message from {name}:</p>
        <p style={chatbubbleContent}>{message}</p>
        </div>
    <hr />
    <p style={block}>This is the start of our conversation, please feel free to reply to this thread as necessary.</p>
    <p style={block}>I will try to look into this mail ASAP.</p>
    <p style={block}>Regards</p>
    <p style={block}>Ayush.</p>
    <br />
    <div style={footer}> 
        <p style={block}>Meanwhile please free to read my blogs: 
            {" "}<a style={url} href="https://zackozack.xyz/blogs" target="_blank" rel="noopener noreferrer">zackozack.xyz/blogs</a>
        </p>
    </div>
  </div>
);

const block: React.CSSProperties = {
    display: 'block',
}

const container: React.CSSProperties = {
    ...block,
    textAlign: 'left',
    padding: '1rem',
    margin: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: "#ffffff",
    color: "#24292e",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"'
}

const header: React.CSSProperties = {
    ...block,
    fontSize: '1.5rem',
    fontWeight: 'bold',
}

const chatbubble: React.CSSProperties = {
    ...block,
    backgroundColor: '#f9f9f9',
    padding: '1rem',
    borderRadius: '3px',
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
    borderLeft: '3px solid blue',
    border: '2px solid #ccc',
}

const chatbubbleHeader: React.CSSProperties = {
    ...block,
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#333',
}

const chatbubbleContent: React.CSSProperties = {
    ...block,
    fontSize: '1rem',
    color: '#333',
}

const footer: React.CSSProperties = {
    ...block,
    paddingTop: '1rem',
    fontSize: '1rem',
    color: '#333',
    borderTop: '2px solid #24292e',
}

const url: React.CSSProperties = {
    color: '#007bff',
    textDecoration: 'none',
}

