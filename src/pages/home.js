import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

export const Home = () =>{
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        method: "GET",
        headers:{
          "Authorization": `Bearer BQCp7qytK8GDeQHcKNTvYDr0zOpgB3fQG3gQdTv6SDWc7Tl2c0mpIvqsurpua8diL7LLRq_7b9qRl2UnSI8tyJnRi8YoK338w0SYx8gDPQVFdi32ZY5PZle1i3gWx_TpPPEnrL8B51PoV8LJPQ7jjU4ezMDAeD4rO9Er17Z50uYYE_sNyBWQqqT21nIB3iEUMAcpQ5CFA9EMKHSrxYT5GOrqG8g8_Ik`,
        },
      })
        .then((res) => res.json())
        .then((json) => setData({name: json.item.name, artist: json.item.album.artists.map(artists => artists.name)}))
        .catch((err) => console.error(err));
    }, []);
    return(
        <div className="App">
            <Navbar></Navbar>

              <header className="App-header">
                <p className="Title Spacing">
                  Jack Harris
                </p>
                <p className="Subtitle">
                  Software Engineer / Aspiring 'The lighting guy'
                </p>
                <p className="Subtitle icon">
                  <a href="https://github.com/4ubiks" target="_blank" rel="noreferrer"><DiGithubBadge/></a><a href="https://www.linkedin.com/in/jack-harris-professional/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
                </p>
                <p className="Subtitle icon Padding_top">
                  currently listening to:
                </p>
                  {data ? <pre className="">{data.name} by {data.artist[0]}</pre> : "No song found..."}
              </header> 
              <Footer></Footer>
            </div>
          );
}