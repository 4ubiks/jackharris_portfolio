import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Home} from "./home";

export const Terminal = () =>{
    const [value, setValue] = useState("");
    const [draft, setDraft] = useState("");
    const [argument, setArgument] = useState("");
    let [showCommandOutput, setShowCommandOutput] = useState(false);
    let [catFile, setCatFile] = useState(false);
    let output = useState("");

    const commandOutputs = {
        help: [
            "'help' - list all commands",
            "'cat' - open contents of a file (type .md)",
            "'ls' - list contents of this website",
            "'clear' - clears the screen",
            "'curl' - opens a URL (type .url)",
            "'ret' - return to normal view of website"
        ],
        ls: [
            "'resume.md' 'portfolio.md' 'linkedin.url'",
            "'github.url' 'skills.md' 'myCode.lua'",
            "'about.md'"
        ],
        ll: [
        	"drwxrwxrwx 1 jack jack 512 Today Date Time: 'about.md'",
        	"drwxrwxrwx 1 jack jack 512 Today Date Time: 'github.url'",
        	"drwxrwxrwx 1 jack jack 512 Today Date Time: 'linkedin.url'",
        	"drwxrwxrwx 1 jack jack 512 Today Date Time: 'myCode.lua'",
        	"drwxrwxrwx 1 jack jack 512 Today Date Time: 'portfolio.md'",
        	"drwxrwxrwx 1 jack jack 512 Today Date Time: 'resume.md'"
        ],
        cat: [""],
        clear: [""],
        curl: ["Use: `curl file.url`"],
        ret: ["return to main website"],
        cd: ["inode->i_block[EXT2_FIRST_INDIRECT_BLOCK] == EMPTY"],
        mkdir: ["no filesystem, you can't do that."],
        zoey: ["she's pretty"]
    };
    const navigate = useNavigate();

    const argSwitch = (argument) => {
        if (value === "curl"){
            switch (argument){
                case "linkedin.url":
                    console.log(argument);
                    window.open("https://www.linkedin.com", "_blank");
                case "github.url":
                    window.open("https://www.github.com/4ubiks", "_blank");
        }
        }
        
    }

    const commandHelp = (cmd) =>{
        switch (cmd) {
            case "help":
                return "Triggered the `help` command";
            case "cat":
                return "meow";
            case "ls":
                return "listing";
            case "clear":
                return "clearing screen";
            case "curl":
                return "go to url";
            case "ret":
                navigate("/");
                return "returning to original website";
            default:
                return "Unknown command encountered - type 'help' for list of commands.";
        }
    };

    const handleValue = (cmd) =>{
        if (cmd == "help"){
            setShowCommandOutput(true);
            console.log("Asked for help");
        }
        else if (cmd == "cat"){
            setShowCommandOutput(true);
            console.log("Attempting to open a file");
        }
        else if (cmd == "ls"){
            setShowCommandOutput(true);
            console.log("Listing contents");
        }
        else if (cmd == "clear"){
            setShowCommandOutput(false);
            console.log("Clearing the screen");
        }
        else if (cmd == "curl"){
            setShowCommandOutput(true);
            console.log("Curling to a website");
        }
        else if (cmd == "ret"){
            setShowCommandOutput(true);
            console.log("Returning to normal view");
        }
        else{
            setShowCommandOutput(true);
            console.log("Unknown command encountered");
        }    
    }

    const handleKeyDown = (e) =>{
        if (e.key === "Enter"){
        	console.log("ENTER pressed. ", draft.split(/\s/)[0]);
            setValue(draft.split(/\s/)[0]);
            handleValue(draft.split(/\s/)[0]);
            commandHelp(draft.split(/\s/)[0]);
            if (draft.split(/\s/)[1]){
                setArgument(draft.split(/\s/)[1]);
                setCatFile(true);
                argSwitch(draft.split(/\s/)[1]);
            }
            else{
                setCatFile(false);
            }
            setDraft("");
        }
        else if (e.ctrlKey && e.key == "c"){
            console.log("CTRL+C Encountered");
            setValue("");
        }
    }

    return(
        <div className="Terminal">
            <p>
                > jackharris@lighting:~$ {" "}
                <input
                    type="text"
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={handleKeyDown}
                    style={{
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    font: "inherit"
                    }}
                />
            </p>
        <div>
            {showCommandOutput &&
            (commandOutputs[value]?.map((line) => (
                <p>{line}</p>
            )) || <p>Unknown command: '{value}', Use 'help' to see available commands</p>)
            }
        </div>
        <div>
            {catFile && argument == "resume.md" ? "i have experience" : ""}
        </div>
        <div>
            {catFile && argument == "portfolio.md" ? "i do lighting" : ""}
        </div>
        <div>
            {catFile && argument == "skills.md" ? "i am skilled" : ""}
        </div>
        <div>
            {catFile && argument == "about.md" ? "i like lighting" : ""}
        </div>
        </div>
    )
};

export default Terminal;
