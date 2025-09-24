import {useState} from "react";

export const Terminal = () =>{
    let [value, setValue] = useState("");
    let [showCommandOutput, setShowCommandOutput] = useState(false);
    let output = useState("");

    const commandHelp = (cmd) =>{
        switch (cmd) {
            case "help":
                return "Triggered the `help` command";
            case "cat":
                
            case "ls":
                
            case "clear":
                
            case "curl":
                
            case "ret":
                
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
        if (e.key == "Enter"){
            console.log("Command", value);
            handleValue(value);
            commandHelp(value);
            setValue("");
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
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
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
            {showCommandOutput ? commandHelp(value) : "cleared"}
        </div>
        </div>
    )
};

export default Terminal;