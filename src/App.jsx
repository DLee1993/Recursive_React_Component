import { useState } from "react";

let nodes = [
    {
        name: "Home",
        folders: [
            {
                name: "Movies",
                folders: [
                    {
                        name: "Action",
                        folders: [
                            {
                                name: "1993",
                                folders: [
                                    {
                                        name: "Popular",
                                        folders: [{ name: "ActionMovieList.txt" }],
                                    },
                                ],
                            },
                            {
                                name: "2000s",
                                folders: [
                                    {
                                        name: "Popular",
                                        folders: [{ name: "Popular2000sMovieList.txt" }],
                                    },
                                ],
                            },
                        ],
                    },
                    { name: "Comedy", folders: [{ name: "ComedyMovieList.txt" }] },
                ],
            },
            {
                name: "Music",
                folders: [
                    { name: "Rock", folders: [{ name: "RockSongs.txt" }] },
                    {
                        name: "Classical",
                        folders: [{ name: "ClassicalSongs.txt" }],
                    },
                ],
            },
            {
                name: "Empty Folder",
                folders: [],
            },
            { name: "Documents", folders: [{ name: "passwords.txt" }] },
        ],
    },
];

/* eslint-disable react/prop-types */
function FolderIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 30 30"
            fill="#fff"
        >
            <path d="M 4 3 C 2.895 3 2 3.895 2 5 L 2 8 L 13 8 L 28 8 L 28 7 C 28 5.895 27.105 5 26 5 L 11.199219 5 L 10.582031 3.9707031 C 10.221031 3.3687031 9.5701875 3 8.8671875 3 L 4 3 z M 3 10 C 2.448 10 2 10.448 2 11 L 2 23 C 2 24.105 2.895 25 4 25 L 26 25 C 27.105 25 28 24.105 28 23 L 28 11 C 28 10.448 27.552 10 27 10 L 3 10 z"></path>
        </svg>
    );
}
function FileIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 30 30"
            fill="#"
        >
            <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2 V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
        </svg>
    );
}
function ChevronIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={10} fill="#fff">
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
    );
}

function FileSystemItem({ node }) {
    const [isOpen, setisOpen] = useState(false);

    return (
        <li key={node.name}>
            <span>
                {node.folders && node.folders.length > 0 && (
                    <button
                        style={{ transform: isOpen ? "rotate(0deg)" : "rotate(-90deg)" }}
                        onClick={() => setisOpen(!isOpen)}
                    >
                        <ChevronIcon />
                    </button>
                )}
                {node.folders ? (
                    <span style={{ marginLeft: node.folders.length === 0 ? "30px" : "" }}>
                        <FolderIcon />
                    </span>
                ) : (
                    <span>
                        <FileIcon />
                    </span>
                )}
                {node.name}
            </span>

            {isOpen && (
                <ul style={{ marginLeft: "60px" }}>
                    {node.folders?.map((node) => (
                        <FileSystemItem node={node} key={node.name} />
                    ))}
                </ul>
            )}
        </li>
    );
}

function App() {
    return (
        <>
            <ul>
                {nodes.map((node) => (
                    <FileSystemItem node={node} key={node.name} />
                ))}
            </ul>
        </>
    );
}

export default App;
