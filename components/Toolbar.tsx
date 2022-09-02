import { Dispatch, SetStateAction } from "react";

interface IToolbar {
    tool: string;
    selectTool: Dispatch<SetStateAction<string>>;
}

const Toolbar = (props: IToolbar) => {
    return (
            <div className="absolute w-1/2 h-32 bottom-0 rounded-t-3xl drop-shadow-2xl bg-white left-0 right-0 m-auto flex justify-center items-center space-x-4">
                <button className="">Pencil</button>
                <button className="">Pen</button>
                <button className="">Brush</button>
                <button className="">Text</button>

            </div>
    )
}

export default Toolbar;