import { Dispatch, SetStateAction, KeyboardEvent, ChangeEvent, useState } from "react";

interface IEditor {
    markdown: string;
    setMarkdown: Dispatch<SetStateAction<string>>;
    id: string;
}
const Editor = (props: IEditor) => {
    const [markdown, setMarkdown, id] = [
        props.markdown,
        props.setMarkdown,
        props.id,
    ];

    const [cursorPos, setCursorPos] = useState(0);
    const [charCount, setCharCount] = useState(0);


    // const pushChanges = async (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     setMarkdown(e.currentTarget.value);
    // };

    // const onSpaceDown = async (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     if (e.key === ' ') {
    //         e.preventDefault();
    //         setMarkdown(e.currentTarget.value + " ");
    //         await fetch("/api/updateChannelText", {
    //             headers: { "Content-Type": "application/json" },
    //             method: "POST",
    //             body: JSON.stringify({
    //                 id: id,
    //                 markdown: e.currentTarget.value + " "
    //             })
    //         })
    //     }
    //     else if (e.key === "Enter") {
    //         e.preventDefault();
    //         setMarkdown(e.currentTarget.value + "\n");
    //         await fetch("/api/updateChannelText", {
    //             headers: { "Content-Type": "application/json" },
    //             method: "POST",
    //             body: JSON.stringify({
    //                 id: id,
    //                 markdown: e.currentTarget.value + "\n"
    //             })
    //         })
    //     }
    // }

    const makeChange = async (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMarkdown(e.currentTarget.value)
        if(charCount === 3) {
            // * Push changes and set back to 0
            await fetch("/api/updateChannelText", {
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify({
                    id: id,
                    markdown: e.currentTarget.value
                })
            })

            setCharCount(0);
        }
        else {
            // * Increment charCount by 1
            setCharCount(charCount + 1)
        }
    }

    return (
            <div className="w-full h-full p-4">
                <textarea
                    value={markdown}
                    onChange={e => makeChange(e)}
                    // onKeyDown={e => onSpaceDown(e)}
                    id="quill"
                    className="w-full h-full font-mono text-start text-black text-lg resize-none p-2 border-2 border-black rounded-md" />
            </div>
    );
};

export default Editor;
