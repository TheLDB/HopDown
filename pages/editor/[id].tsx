import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Editor from "../../components/Editor";
import Preview from "../../components/Preview";
import Toolbar from "../../components/Toolbar";
import { useReadChannelState } from "@onehop/react";

const DocumentEditor = () => {
  const router = useRouter();
  const { id } = router.query;
  const [channelExists, setChannelExists] = useState(true);
  const [markdown, setMarkdown] = useState<string>(
    "# Welcome to HopDown!\n\nHopDown is a easy to use.. blah"
  );

  const ensureChannelExists = async () => {
    if (id) {
      const channelQuery = await fetch("/api/ensureChannelExists", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          id: id,
        }),
      });

      if(channelQuery.status === 200) {
        setChannelExists(true)
      }
      else {
        setChannelExists(false);
        Router.push("/")
      }
    } else {
      console.log("no id?");
    }
  };

  const { state } = useReadChannelState(id as string);
  useEffect(() => {
    setMarkdown(state?.markdown as string);
  }, [state])
  useEffect(() => {
    ensureChannelExists().catch((e) => console.log(e));
  }, []);
  return (
    <div className="w-screen h-screen">
      {/* // * Toolbar */}
      <div className="w-full h-28">
        <Toolbar id={id as string} />
      </div>
      {/* // * Content Section (editor & preview) */}
      <div className="w-full h-[calc(100%-7rem)] flex">
        <div className="w-1/2 h-full">
          <Editor markdown={markdown} setMarkdown={setMarkdown} id={id as string} />
        </div>
        <div className="w-1/2 h-full">
          <Preview markdown={markdown} />
        </div>
      </div>
    </div>
  );
};

export default DocumentEditor;

export async function getServerSideProps() {
  // * WHy does this make the dynamic route work???????
  return {
    props: {}
  };
}
