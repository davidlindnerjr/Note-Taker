# Note-Taker [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Note-Taker is an application that allows the user to write, save, and delete notes. When writing a note the user enters a title and text; when the user is finished writing they press the save icon in the upper right-hand corner and the note is sent and saved to the data base and the title will appear of the left-hand side. To analyze a note previously written the user clicks on the note title on the left-hand side. To delete a note the user can select a note from the left-hand side and click the corresponding trash icon; the note will be deleted from the data base and will no longer appear to the left.

This project was one of the more stressful ones I have completed. Understanding express is one thing, creating routes and so on, but connecting to a database is a challenge all in itself. The biggest hurdle I had was connecting express routes/ calls to the local .json file used as the database. I tried to trouble shoot with YouTube tutorials and stackoverflow but they were all dealing with either an external database or an array initialized within the app.js file itself. Finally, I was able to figure it out and I learned quite a bit so I believe I got some invaluable knowledge and practice when I was troubleshooting.

## Links

* Heroku deploy: https://note-taker-dl.herokuapp.com/

## Routes 
 
 * https://note-taker-dl.herokuapp.com/
 * https://note-taker-dl.herokuapp.com/notes.html
 * https://note-taker-dl.herokuapp.com/api/notes
 * https://note-taker-dl.herokuapp.com/api/notes/:id
 
 ## Screenshots of Deployed Application
 
![Note Taker - Google Chrome 9_13_2020 12_07_49 PM](https://user-images.githubusercontent.com/65383133/93026564-b86c0d80-f5bb-11ea-9671-8b0a6893d712.png)
![Note Taker - Google Chrome 9_13_2020 12_08_26 PM](https://user-images.githubusercontent.com/65383133/93026567-bb66fe00-f5bb-11ea-9efb-df26707eb22e.png)
![Note Taker - Google Chrome 9_13_2020 12_09_26 PM](https://user-images.githubusercontent.com/65383133/93026570-befa8500-f5bb-11ea-965e-15812f67d72c.png)
![Note Taker - Google Chrome 9_13_2020 12_09_46 PM](https://user-images.githubusercontent.com/65383133/93026573-c15cdf00-f5bb-11ea-84dc-12544d952b66.png)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT License

Copyright (c) 2020 David Lindner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
