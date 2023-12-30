# Sequence diagram exercises:

Each folder contain one of the sequence diagram that i made to represent simple POST and GET requests as a exercise. For simplicity, you can see all three of them below:

## Sequence diagram of the network requests between browser and server after making a POST request
```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: Asks to do a HTTP GET request
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML file
    deactivate server

    browser->>server: https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "newnote", "date": "2023-12-30T18:59:22.933Z" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
```

## Sequence diagram of the network requests between browser and server after accessing a SPA (Single-page application) version of the same site of the first exercise:
```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML file
    deactivate server

    browser->>server: https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [[{"content":"what","date":"2023-12-30T08:08:25.930Z"}, ...]]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
```
## Sequence diagram of the network requests between browser and server after making a POST request at a SPA (Single-page application) version of the same site of the first exercise:
```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: STATUS CODE 2011 (created), {"message: "note created"}
    deactivate server


    Note right of browser: The browser executes the callback function that renders the notes
```

