## Overview
A recipe planning website.

Data Retrieval, cleaning and hosting:
A text file with a link to the csv file used as our base dataset is provided in backend/data_manipulation, called data_download_link.txt
A python notebook is provided in backend/data_manipulation, called new_data_manip.ipynb
It has been setup to show the data cleaning process.

## Deployment
To deploy, use
`docker-compose build && docker-compose up -d` in main directory.

Access localhost:3000 for the website. (Frontend)

Access for the API is on localhost:3001. (Backend, see routes in Backend folder for query points)


