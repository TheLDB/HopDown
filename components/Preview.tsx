import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

const MDPreview = dynamic(() => import("@uiw/react-markdown-preview").then(mod => mod.default), { ssr: false })

interface IPreview {
    markdown: string;
}

const Preview = (props: IPreview) => {
    const markdown = props.markdown;

    return (
    <div className="w-full h-full p-4" data-color-mode="light">
        <MDPreview source={markdown} className="bg-white" />
    </div>
    );
};
export default Preview;
