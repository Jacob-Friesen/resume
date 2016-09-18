Jacob Friesen's Resume
======================
This contains all the contents and commands to generate Jacob Friesen's resume from one base file (`Jacob_Friesen_Resume.pug`). It is part of an effort to put all online profile information into a series of private and public repositories to greatly reduce update times across all online media.

Compiled files are kept due to convenience and their small size.

Process (UNIX Only)
-------------------
    ./to_html
    ./to_pdf
    ./to_server production

1. Translate from Pug to HTML
2. Translate HTML into PDF
3. Copy the resume to a server location that stores the resume
  * Fill in the templated content from to_server.template to get this file.

Install
-------

    # Note that the wrong version is installed when you don't manually specify like below
    npm install pug-cli@1.0.0-alpha1 -g
    # Install wkhtmltopdf from http://wkhtmltopdf.org/downloads.html