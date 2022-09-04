import { ArrowUpOnSquareStackIcon, ArrowDownOnSquareStackIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface IToolbar {
    id: string;
    markdown: string;
}
const Toolbar = (props: IToolbar) => {
    const [linkCopied, setLinkCopied] = useState(false);
    const [savingFile, setSavingFile] = useState(false);
    const copyLink = () => {
        setLinkCopied(true);
        navigator.clipboard.writeText(`https://hopdown.hop.sh/editor/${props.id}`);
        setTimeout(() => {
            setLinkCopied(false)
        }, 2000)
    }

    const saveFile = () => {
        setSavingFile(true)
        const element = document.createElement("a");
        const file = new Blob([props.markdown], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = `${props.id}.md`;
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        setTimeout(() => {
            setSavingFile(false)
        }, 2000)
    }

    return (
        <div className="w-full h-full flex justify-center items-center relative">
            <h1 className="font-sans font-bold text-black text-3xl">Doc Code: {props.id}</h1>
            <div className="h-1/2 w-auto absolute right-4 flex justify-center items-center space-x-4">
                <div onClick={copyLink} className={`w-14 h-14 bg-white rounded-xl drop-shadow-xl border-2 ${linkCopied ? 'border-green-500' : 'border-gray-300'} flex justify-center items-center transition-all duration-200 hover:cursor-pointer`}>
                    <ArrowUpOnSquareStackIcon className={`w-10 h-10 ${linkCopied ? 'text-green-500' : 'text-black'} transition-all duration-300`} />
                </div>
                <div id="saveFile" onClick={saveFile} className={`w-14 h-14 bg-white rounded-xl drop-shadow-xl border-2 ${savingFile ? 'border-green-500' : 'border-gray-300'} flex justify-center items-center transition-all duration-200 hover:cursor-pointer`}>
                    <ArrowDownOnSquareStackIcon className={`w-10 h-10 ${savingFile ? 'text-green-500' : 'text-black'} transition-all duration-300`} />
                </div>
            </div>
        </div>
    )
}

export default Toolbar;