import {useState} from "react";
import {Home} from "./home";

export const Terminal = () =>{
    const [value, setValue] = useState("");
    const [draft, setDraft] = useState("");
    let [showCommandOutput, setShowCommandOutput] = useState(false);
    let output = useState("");

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
                return "returning to original website";
            default:
                return "Unknown command encountered - type 'help' for list of commands.";
        }
    };

    const handleValue = (cmd) =>{
        console.log("passed cmd: ", cmd);
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
            setValue(draft);
            console.log("Command: ", value);
            handleValue(draft);
            commandHelp(draft);
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
            {showCommandOutput && value == "help" ? "'help' - list all commands" : ""}
            <p/>
            {showCommandOutput && value == "help" ? "'cat' - open contents of a file" : ""}
            <p/>
            {showCommandOutput && value == "help" ? "'ls' - list contents of this website (type .md)" : ""}
            <p/>
            {showCommandOutput && value == "help" ? "'clear' - clears the screen" : ""}
            <p/>
            {showCommandOutput && value == "help" ? "'curl' - opens a URL (type .url)" : ""}
            <p/>
            {showCommandOutput && value == "help" ? "'ret' - return to normal view of website" : ""}
        </div>
        <div>
            {showCommandOutput && value == "ls" ? "'resume.md' 'portfolio.md' 'linkedin.url'" : ""}
            <p></p>
            {showCommandOutput && value == "ls" ? "'github.url' 'skills.md' 'myCode.lua'" : ""}
        </div>
        <div>
            {showCommandOutput && value == "cat" ? "catting a file" : ""}
        </div>
        <div>
            {showCommandOutput && value == "clear" ? "clear" : ""}
        </div>
        <div>
            {showCommandOutput && value == "curl" ? "expecting an argument" : ""}
        </div>
        <div>
            {showCommandOutput && value == "ret" ? "return to main website" : ""}
        </div>
        </div>
    )
};

export default Terminal;