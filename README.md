# Space Explorer Website

# What is it about?

A website that gives you any exciting astronomical data including images, videos and neat details. 
It is the easiest way to find which type of space objects for a user to look for their hobbies.
(User who uses Telescope, Astrophotography and other hobbies)

# Technology Used and Referenced With

React
CSS
Bruno
Postman (NASA Provided)
Github
Vercel

# APIs Used

NASA Open API:
https://api.nasa.gov/

# Wireframes

![Screenshot1](https://github.com/vinniejipsk/space-explorer/blob/main/src/assets/images/5.wireframe.jpg)
This is my initial stage in the development of the website.

# User Stories

![Screenshot2](https://github.com/vinniejipsk/space-explorer/blob/main/src/assets/images/1.search_nil.jpg)
This is how it looks like in the main page. You will be feeling astronomical.

![Screenshot3](https://github.com/vinniejipsk/space-explorer/blob/main/src/assets/images/2.search_results_summary.jpg)
Users can search for their own keywords or use the tags and filter them out by distance and size.

![Screenshot4](https://github.com/vinniejipsk/space-explorer/blob/main/src/assets/images/3.apod.jpg)
Each day, NASA sends a image and a summary to let you learn about a fact/detail. 

![Screenshot5](https://github.com/vinniejipsk/space-explorer/blob/main/src/assets/images/4.videos.jpg)
If you want to see how NASA scientist works or space explanations, you can check out on the videos here.

# The progress for Planning and developing the webpage

Week 0

1. Found an interesting API for astronomical purposes. (Given from Public APIs in the Github)

2. Created Trello board and Wireframes with Figma.

Week 1

1. Set up the VITE project and commit to GitHub.

2. Tested the APIs for both NASA Image and Video Library and Exoplanets. All worked.

3. Created React Routes for Astronomy of the Day page and Videos page.

4. Created image and summary for Apod page.
  
5. Created a few columns of Video thumbnails for Videos page.

6. Discarded of implementing the exoplanet data. No images and it fetches very slow.

7. Created Search Bar to search for images with useState.

8. Created the columns of images once the user searches a keyword.

9. Set up/Adjust the styles with CSS PART 1.

Week 2

1. Used state to see a bigger image and full summary after a user clicks on one image.

2. Used state for a favourite button to let user to favourite their item.

3. Created a comment form. Used state for a delete button to let user deletes item off from Favourite list.

4. Able to made video autoplay after a user clicks on a video thumbnail with useState. Created sorting buttons to find latest or oldest videos with useState.

5. Created a JSON format data for my sorting purposes.

5. Created different type of sorting for the Search Bar with useState.

6. Added a background video (Included into React Router).

7. Set up/Adjust the styles with CSS PART 2.

8. Deployed the project on Vercel. Tested the link.

9. Finished my Readme.

*** Both weeks are trials and errors of putting in the logics and props. ***

# Favorite API call

Of course is the Astronomy of the Day API!

# What was my biggest challenge? My key learnings?

1. Making the search bar works. (Exoplanets API failed me.)
   - Used another API for the search.
   
2. Sorting buttons for my Search Bar. (4 different type of sorting that sometime doesn't work in the initial stage.)
   - Thought of using AI to help me find the celestial objects with my given values and insert in. Threw away the idea.
   - Created a JSON format data with famous celestial objects for the sorting. (with distance and size)
   - Converted light year's to km's for the script to work. Made sure the data are correct.

3. Making the video to autoplay. (It looks easy but apparently it takes me hours to debug it.)
   - Adding in "key=". It helps React identify which items have changed, are added, or are removed.
   
4. Styling for my website. (Minior problem but I needed to WOW the users.)
   - I should have use outsource materials.
  
# What should I have achieve more?

1. Able to drag and drop the favourite items in the list.
2. Able to click on a favourite item to check on the summary. 
3. Think of more interactive ways for users to click and implement it.
