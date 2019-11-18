# Shareed-BackEnd
  
Project Shareed
  
## installation

`npm install`

## How to run

`npm run start` but for windows

you can check the api work by using GET `localhost:3000/ping`

## API Documents

### Request respone
  
  **Access** | respone status `250`
  
  **Server not respone** | respone status `251`
  
  **Error catch** | respone status `500`
  
### Authenication `disabled`

<details>
  <summary>POST /register</summary>
  
  - requirement
  
    **parameter**: `Email KMUTT` | `password` | `username`\
    **respone body**: -
  
</details>
<details>
  <summary>POST /login</summary>
  
  - requirement
  
    **parameter**: `Email KMUTT` | `password`\
    **respone body**: -
  
</details>
<details>
  <summary>POST /request-new-password</summary>
  
  - requirement
  
    **parameter**: `Email KMUTT`\
    **respone body**: -
  
</details>
<details>
  <summary>PUT /reset-password</summary>
    
  - requirement
  
    **parameter**: `new password`\
    **respone body**: -
  
</details>
  
### Guest Home `disabled`
  
<details>
  <summary>GET /geust-home</summary>
    
  - requirement
  
    **parameter**: -\
    **respone body**: -
  
</details>
  
### User Home `disabled`
  
<details>
  <summary>GET /user-home</summary>
    
  - requirement
  
    **parameter**: -\
    **respone body**: -
  
</details>
  
### Share Note

<details>
  <summary>GET /share-note</summary>
    
  - requirement
  
    **parameter**: -\
    **respone body**: `Main Picture` | `Subject Name` | `Post Date`
  
</details>
<details>
  <summary>GET /share-note/:id</summary>
    
  - requirement
  
    **parameter**: -\
    **respone body**: `Main Picture` | `Subject Name` | `Section` | `Instractor name` | `Semester` | `Tag` | `Title` | `Picture` | `Write Down` | `Owner`
  
</details>
<details>
  <summary>POST /share-note</summary>
    
  - requirement
  
    **parameter**: `Main Picture` | `Subject name` | `Section` | `Instractor name` | `Semester` | `Tag` | `Title` | `Picture`\
    **respone body**: -
  
</details>
<details>
  <summary>PUT /share-note/:id</summary>
    
  - requirement
  
    **parameter**: `Main Picture` | `Subject name` | `Section` | `Instractor name` | `Semester` | `Tag` | `Title` | `Picture`\
    **respone body**: -
  
</details>
<details>
  <summary>DELETE /share-note/:id</summary>
    
  - requirement
  
    **parameter**: -\
    **respone body**: -
  
</details>
  
  ### Share Event
  
<details>
  <summary>GET /share-event</summary>
    
  - requirement
  
    **parameter**: -\
    **respone body**: `Main Picture` | `Event Name` | `Post Date`
  
</details>
<details>
  <summary>GET /share-event/:id</summary>
    
  - requirement
  
    **parameter**: -\
    **respone body**: `Main Picture` | `Event Name` | `Location` | `Condition` | `Register here` | `Tag` | `Date & Time` | `Description` | `Picture` | `Write Down` | `Owner`
  
</details>
<details>
  <summary>POST /share-event</summary>
    
  - requirement
  
    **parameter**: `Main Picture` | `Event name` | `Location` | `Condition` | `Register here` | `Tag` | `Date & Time` | `Description` | `Picture`\
    **respone body**: -
  
</details>
<details>
  <summary>PUT /share-event/:id</summary>
    
  - requirement
  
    **parameter**: `Main Picture` | `Event name` | `Location` | `Condition` | `Register here` | `Tag` | `Date & Time` | `Description` | `Picture`\
    **respone body**: -
  
</details>
<details>
  <summary>DELETE /share-event/:id</summary>
    
  - requirement
  
    **parameter**: -\
    **respone body**: -
  
</details>
  
  ### Review Book
  
<details>
  <summary>GET /review-book</summary>
    
  - requirement
  
    **parameter**: -\
    **respone body**: `Main Picture` | `Title Name` | `Post Date`
  
</details>
<details>
  <summary>GET /review-book/:id</summary>
    
  - requirement
  
    **parameter**: -\
    **respone body**: `Main Picture` | `Subject ID` | `Subject Name` | `Title Name` | `Written by` | `Register here` | `Edition` | `Tag` | `Link To Library` | `Description` | `Picture` | `Write Down` | `Owner`
  
</details>
<details>
  <summary>POST /review-book</summary>
    
  - requirement
  
    **parameter**: `Main Picture` | `Subject ID` | `Subject Name` | `Title Name` | `Written by` | `Register here` | `Edition` | `Tag` | `Link To Library` | `Description` | `Picture`\
    **respone body**: -
  
</details>
<details>
  <summary>PUT /review-book/:id</summary>
    
  - requirement
  
    **parameter**: `Main Picture` | `Subject ID` | `Subject Name` | `Title Name` | `Written by` | `Register here` | `Edition` | `Tag` | `Link To Library` | `Description` | `Picture`\
    **respone body**: -
  
</details>
<details>
  <summary>DELETE /review-book/:id</summary>
    
  - requirement
  
    **parameter**: -\
    **respone body**: -
  
</details>
  
  ### Review Tutor
  
<details>
  <summary>GET /review-tutor</summary>
    
  - requirement
  
    **parameter**: -\
    **respone body**: `Main Picture` | `Title Name` | `Post Date`
  
</details>
<details>
  <summary>GET /review-tutor/:id</summary>
    
  - requirement
  
    **parameter**: -\
    **respone body**: `Main Picture` | `Title Name` | `Tutor Name` | `Academy` | `The coures is taught` | `Contact` | `Description` | `Tag` | `Picture` | `Write Down` | `Owner`
  
</details>
<details>
  <summary>POST /review-tutor</summary>
    
  - requirement
  
    **parameter**: `Main Picture` | `Title Name` | `Tutor Name` | `Academy` | `The coures is taught` | `Contact` | `Description` | `Tag` | `Picture`\
    **respone body**: -
  
</details>
<details>
  <summary>PUT /review-tutor/:id</summary>
    
  - requirement
  
    **parameter**: `Main Picture` | `Title Name` | `Tutor Name` | `Academy` | `The coures is taught` | `Contact` | `Description` | `Tag` | `Picture`\
    **respone body**: -
  
</details>
<details>
  <summary>DELETE /review-tutor/:id</summary>
    
  - requirement
  
    **parameter**: -\
    **respone body**: -
  
</details>
  
  ### Review Subject
  
<details>
  <summary>GET /review-subject</summary>
    
  - requirement
  
    **parameter**: -\
    **respone body**: `Main Picture` | `Title Name` | `Post Date`
  
</details>
<details>
  <summary>GET /review-subject/:id</summary>
    
  - requirement
  
    **parameter**: -\
    **respone body**: `Main Picture` | `Title Name` | `Subject ID` | `Subject Name` | `Teach By` | `Section` | `Condition` | `Tag` |  `Description` | `Picture` | `Write Down` | `Owner`
  
</details>
<details>
  <summary>POST /review-subject</summary>
    
  - requirement
  
    **parameter**: `Main Picture` | `Title Name` | `Subject ID` | `Subject Name` | `Teach By` | `Section` | `Condition` | `Tag` |  `Description` | `Picture`\
    **respone body**: -
  
</details>
<details>
  <summary>PUT /review-subject/:id</summary>
    
  - requirement
  
    **parameter**: `Main Picture` | `Title Name` | `Subject ID` | `Subject Name` | `Teach By` | `Section` | `Condition` | `Tag` |  `Description` | `Picture`\
    **respone body**: -
  
</details>
<details>
  <summary>DELETE /review-subject/:id</summary>
    
  - requirement
  
    **parameter**: -\
    **respone body**: -
  
</details>
  
  ### FAQ
  
<details>
  <summary>GET /faq</summary>
    
  - requirement
  
    **parameter**: -\
    **respone body**: `Title Name` | `Post Date`
  
</details>
<details>
  <summary>GET /faq/:id</summary>
    
  - requirement
  
    **parameter**: -\
    **respone body**: `Title Name` | `Descirption` | `Tag` | `Write Down` | `Owner`
  
</details>
<details>
  <summary>POST /faq</summary>
    
  - requirement
  
    **parameter**: `Title Name` | `Descirption` | `Tag`\
    **respone body**: -
  
</details>
<details>
  <summary>PUT /faq/:id</summary>
    
  - requirement
  
    **parameter**: `Title Name` | `Descirption` | `Tag`\
    **respone body**: -
  
</details>
<details>
  <summary>DELETE /faq/:id</summary>
    
  - requirement
  
    **parameter**: -\
    **respone body**: -
  
</details>
  
  ### Comment
  
<details>
  <summary>GET /comment/:post-id/:user-id</summary>
    
  - requirement
  
    **parameter**: -\
    **respone body**: fetch comment by `post-id` && check owner by `user-id`
  
</details>
<details>
  <summary>POST /comment/:post-id/:user-id</summary>
    
  - requirement
  
    **parameter**: `post-id`, `user-id`, `comment-id`\
    **respone body**: -
  
</details>
<details>
  <summary>PUT /comment/:post-id/:user-id/:comment-id</summary>
    
  - requirement
  
    **parameter**: `post-id`, `user-id`, `comment-id`\
    **respone body**: -
  
</details>
<details>
  <summary>DELETE /comment/:post-id/:user-id/:comment-id</summary>
    
  - requirement
  
    **parameter**: -\
    **respone body**: -
  
</details>
