
import express from 'express';

const app = express();

app.get('/', (request, response) => { // .get means to retrieve data.
    const data = "HARE KRISHNA... Server is ready...";
    // response.send("Server is ready");
    response.send(data);
});

app.get('/api/coding_languages', (req, res) => {
    const code = [
        {
            id: 1,
            language: 'c',
            fileSize: "10kb"
        },
        {
            id: 2,
            language: 'cpp',
            fileSize: "12kb"
        },
        {
            id: 3,
            language: 'java',
            fileSize: "15kb"
        },
        {
            id: 4,
            language: 'javascript',
            fileSize: "12kb"
        },
        {
            id: 5,
            language: 'python',
            fileSize: "7kb"
        },
        {
            "id": 6,
            "language": "ruby",
            "fileSize": "11kb"
        },
        {
            "id": 7,
            "language": "go",
            "fileSize": "13kb"
        },
        {
            "id": 8,
            "language": "swift",
            "fileSize": "16kb"
        },
        {
            "id": 9,
            "language": "typescript",
            "fileSize": "14kb"
        },
        {
            "id": 10,
            "language": "rust",
            "fileSize": "8kb"
        },
        {
            "id": 11,
            "language": "csharp",
            "fileSize": "9kb"
        },
        {
            "id": 12,
            "language": "kotlin",
            "fileSize": "14kb"
        },
        {
            "id": 13,
            "language": "php",
            "fileSize": "17kb"
        },
        {
            "id": 14,
            "language": "perl",
            "fileSize": "13kb"
        },
        {
            "id": 15,
            "language": "scala",
            "fileSize": "6kb"
        },
        {
            "id": 16,
            "language": "haskell",
            "fileSize": "10kb"
        },
        {
            "id": 17,
            "language": "lua",
            "fileSize": "12kb"
        },
        {
            "id": 18,
            "language": "elixir",
            "fileSize": "15kb"
        },
        {
            "id": 19,
            "language": "clojure",
            "fileSize": "12kb"
        },
        {
            "id": 20,
            "language": "dart",
            "fileSize": "7kb"
        },
        {
            "id": 21,
            "language": "fsharp",
            "fileSize": "11kb"
        },
        {
            "id": 22,
            "language": "r",
            "fileSize": "13kb"
        },
        {
            "id": 23,
            "language": "matlab",
            "fileSize": "16kb"
        },
        {
            "id": 24,
            "language": "vba",
            "fileSize": "14kb"
        },
        {
            "id": 25,
            "language": "objective-c", 
            "fileSize": "8kb"
        },
        {
            "id": 26,
            "language": "groovy",
            "fileSize": "9kb"
        },
        {
            "id": 27,
            "language": "julia",
            "fileSize": "14kb"
        },
        {
            "id": 28,
            "language": "shell",
            "fileSize": "17kb"
        },
        {
            "id": 29,
            "language": "powershell",
            "fileSize": "13kb"
        },
        {
            "id": 30,
            "language": "assembly",
            "fileSize": "6kb"
        },
        {
            "id": 31,
            "language": "fortran",
            "fileSize": "10kb"
        },
        {
            "id": 32,
            "language": "cobol",
            "fileSize": "12kb"
        },
        {
            "id": 33,
            "language": "ada",
            "fileSize": "15kb"
        },
        {
            "id": 34,
            "language": "pascal",
            "fileSize": "12kb"
        },
        {
            "id": 35,
            "language": "lisp",
            "fileSize": "7kb"
        },
        {
            "id": 36,
            "language": "prolog",
            "fileSize": "11kb"
        },
        {
            "id": 37,
            "language": "erlang",
            "fileSize": "13kb"
        },
        {
            "id": 38,
            "language": "smalltalk",
            "fileSize": "16kb"
        },
        {
            "id": 39,
            "language": "scheme",
            "fileSize": "14kb"
        },
        {
            "id": 40,
            "language": "ocaml",
            "fileSize": "8kb"
        },
        {
            "id": 41,
            "language": "racket",
            "fileSize": "9kb"
        },
        {
            "id": 42,
            "language": "nim",
            "fileSize": "14kb"
        },
        {
            "id": 43,
            "language": "crystal",
            "fileSize": "17kb"
        },
        {
            "id": 44,
            "language": "elm",
            "fileSize": "13kb"
        },
        {
            "id": 45,
            "language": "f#",
            "fileSize": "6kb"
        },
        {
            "id": 46,
            "language": "apl",
            "fileSize": "10kb"
        },
        {
            "id": 47,
            "language": "awk",
            "fileSize": "12kb"
        },
        {
            "id": 48,
            "language": "bash",
            "fileSize": "15kb"
        },
        {
            "id": 49,
            "language": "tcl",
            "fileSize": "12kb"
        },
        {
            "id": 50,
            "language": "rexx",
            "fileSize": "7kb"
        },
        {
            "id": 51,
            "language": "sas",
            "fileSize": "11kb"
        },
        {
            "id": 52,
            "language": "stata",
            "fileSize": "13kb"
        },
        {
            "id": 53,
            "language": "sml",
            "fileSize": "16kb"
        },
        {
            "id": 54,
            "language": "verilog",
            "fileSize": "14kb"
        },
        {
            "id": 55,
            "language": "vhdl",
            "fileSize": "8kb"
        },
        {
            "id": 56,
            "language": "abap",
            "fileSize": "9kb"
        },
        {
            "id": 57,
            "language": "d",
            "fileSize": "14kb"
        },
        {
            "id": 58,
            "language": "forth",
            "fileSize": "17kb"
        },
        {
            "id": 59,
            "language": "icon",
            "fileSize": "13kb"
        },
        {
            "id": 60,
            "language": "modula-2",
            "fileSize": "6kb"
        },
        {
            "id": 61,
            "language": "pl/sql", 
            "fileSize": "10kb"
        },
        {
            "id": 62,
            "language": "postscript",
            "fileSize": "12kb"
        },
        {
            "id": 63,
            "language": "snobol",
            "fileSize": "15kb"
        },
        {
            "id": 64,
            "language": "zsh",
            "fileSize": "12kb"
        },
        {
            "id": 65,
            "language": "ksh",
            "fileSize": "7kb"
        },
        {
            "id": 66,
            "language": "sed",
            "fileSize": "11kb"
        },
        {
            "id": 67,
            "language": "makefile",
            "fileSize": "13kb"
        },
        {
            "id": 68,
            "language": "cmake",
            "fileSize": "16kb"
        },
        {
            "id": 69,
            "language": "nix",
            "fileSize": "14kb"
        },
        {
            "id": 70,
            "language": "puppet",
            "fileSize": "8kb"
        },
        {
            "id": 71,
            "language": "chef",
            "fileSize": "9kb"
        },
        {
            "id": 72,
            "language": "ansible",
            "fileSize": "14kb"
        },
        {
            "id": 73,
            "language": "terraform",
            "fileSize": "17kb"
        },
        {
            "id": 74,
            "language": "hcl",
            "fileSize": "13kb"
        },
        {
            "id": 75,
            "language": "jsonnet",
            "fileSize": "6kb"
        }
    ];

    res.send(code);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});