import ReactMarkdown from "react-markdown";

const ContentDisplay = ({ content }: { content: any }) => {
  return (
    <div className="content-display">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default ContentDisplay;
