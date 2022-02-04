

// post comment

//var strUser = e.options[e.selectedIndex].value;

async function submitComment() {
    let iname = document.querySelector("#username");
    let icomment = document.querySelector("#comment");
    var x = document.getElementById("presence").selectedIndex;
    var y = document.getElementById("presence").options;
    console.log(y[x].index);
    await axios({
        method: 'post',
        url: '/api/comment',
        data: {
            user: iname.value,
            comment: icomment.value,
            presence: y[x].index
        },
        Headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Access-Control-Allow-Origin": "*"
        }
        })
        .then(function (response) {
            console.log(response);
            })
        .catch(function (error) {
            console.log(error)
        });
}

// get comment
//let cardComment = document.querySelector("#card__comment");
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
axios({
    method: 'get',
    url: '/api/comment',
    Headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Access-Control-Allow-Origin": "*"
    }
}).then(async function (response) {
    let cardComment = document.querySelector("#card__comment");

    

      if(response.data.data !== undefined) {
          for (let i = 0; i < response.data.data.length; i++) {
              
              let comment = response.data.data[i];
              let card = document.createElement("div");
              
              
              card.className = "card-body";
            
           
              card.innerHTML = `
      
              <div class="card-body" style="padding: 2rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" style="margin-top: -2rem;">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                <div style="margin-top: -3.5rem;margin-left: 4rem;">
                  <small style="color: rgb(0, 0, 0);">
                  ${comment.user}
                    ${comment.presence === 1 ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16" style="margin-top: -0.2rem;color: green;">
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                  </svg>` : " "}
                    ${comment.presence === 2 ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16" style="margin-top: -0.2rem;color: rgb(128, 0, 0);">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                  </svg>` : " "}
                    ${comment.presence === 3 ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-question-fill" viewBox="0 0 16 16" style="margin-top: -0.2rem;color: rgb(66, 66, 66);">
                    <path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"/>
                  </svg>` : " "}
                    
                  </small><br>
                  <small style="font-size: 12px;color: rgb(150, 150, 150);">${comment.createdAt.toLocaleString()}</small><br>
                  <small>${comment.comment}</small><br>
                  <button id=${comment._id} onClick=(putComment(this)) style="text-decoration: none;color: brown;font-size: 11px; text-decoration: none;color: brown;font-size: 11px;margin-left: 0.5rem; border: none; background: none;">Reply</button>
                  <button  id=${comment._id}  onClick=(deleteComment(this)) class="delete__btn"  style="text-decoration: none;color: brown;font-size: 11px;margin-left: 0.5rem; border: none; background: none;">Delete</button>
                </div>
              </div>
    
              `;
              console.log( typeof comment.presence)
              
              insertAfter(cardComment, card);
          }
      } else {
          return "No comment";
      }
})

// delete comment



async function deleteComment (obj) {
    
    await axios({
        method: 'delete',
        url: `/api/comment/${obj.id}`,
        data: {
            id: obj.id
        },
        Headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Access-Control-Allow-Origin": "*"
        }
        })
        .then(function (response) {
            window.location.reload();
            })
        .catch(function (error) {
            console.log(error)
        });
}


// count all comment
axios({
    method: 'get',
    url: '/api/comment',
    Headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Access-Control-Allow-Origin": "*"
    }
}).then(function (response) {
    let countComment = document.querySelector(".count__comment");
    
    let count = document.createElement("div");
    if(response.data.data !== undefined) {
        let hadir = 0;
        let tidakHadir = 0;
        let ragu = 0;
        let total = 0;
        
        for(let i = 0; i < response.data.data.length; i++) {
            console.log(typeof response.data.data[i].presence);
            if(response.data.data[i].presence === 1) {
                hadir++;
                
            } else if(response.data.data[i].presence === 2) {
                tidakHadir++;
            }
            else if(response.data.data[i].presence === 3) {
                ragu++;
            }
        }
        total += hadir + tidakHadir + ragu;
        
        // count.innerHTML = response.data.data.length;
        // <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16" style="margin-top: -0.2rem;color: green;">
        //         <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
        //       </svg>

              count.innerHTML = `
                <h6 style="color: rgb(145, 61, 75);text-align: center;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-open" viewBox="0 0 16 16" style="margin-top: -0.2rem;">
                    <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z"/>
                </svg>
                <b>${total} Ucapan</b>
                </h6>
                <ul class="nav justify-content-center">
                <li class="nav-item">
                    <div class="alert alert-success text-center" role="alert" style="width: 7rem;font-size: 12px;border: none;">
                    <b>
                        <p style="margin-top: -0.5rem;margin-bottom: -0.2rem;">${hadir}</p>
                        <p style="margin-bottom: -0.5rem;">Hadir</p>
                    </b>
                    </div>
                </li>
                <li class="nav-item">
                    <div class="alert alert-danger text-center" role="alert" style="width: 7rem;margin-left: 1rem;margin-right: 1rem;font-size: 12px;border: none;">
                    <b>
                        <p style="margin-top: -0.5rem;margin-bottom: -0.2rem;">${tidakHadir}</p>
                        <p style="margin-bottom: -0.5rem;">Tidak Hadir</p>
                    </b>
                    </div>
                </li>
                <li class="nav-item">
                    <div class="alert alert-secondary text-center" role="alert" style="width: 7rem;font-size: 12px;border: none;">
                    <b>
                        <p style="margin-top: -0.5rem;margin-bottom: -0.2rem;">${ragu}</p>
                        <p style="margin-bottom: -0.5rem;">Ragu</p>
                    </b>
                    </div>
                </li>
                </ul>
              `
        countComment.appendChild(count);
    } else {
        count.innerHTML = 0;
    }
});

// put comment
async function putComment(id, presence) {
    let data = {
        presence: presence
    }
    let response = await axios({
        method: 'put',
        url: `/api/comment/${id}`,
        data: data,
        Headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Access-Control-Allow-Origin": "*"
        }
    });
    return response;
}


