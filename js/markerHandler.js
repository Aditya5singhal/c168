AFRAME.registerComponent("markerhandler",{
    init: async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("markerisfound")
        });

        this.el.addEventListener("markerLost",()=>{
            console.log("markerislost")
        })
    },
    handleMarkerFound:function(){
      //changing button div visibility
      var buttonDiv=document.getElementById("button-div");
      buttonDiv.style.display="flex";

      var ratingButton=document.getElementById("rating-button");
      var orderButton=document.getElementById("order-button");

      //handling click events
      ratingButton.addEventListener("click", function(){
        swal({

            icon:"warning",
            title:"rate dish",
            text:"work in progress",

        })   
      })

      orderButton.addEventListener("click", ()=>{
        swal({

            icon:"https://i.imgur.com/4NZ6uLY.jpg",
            title:"thanks for ordering!",
            text:"your order will be served soon",

        })

      })
    },
    handleMarkerLost:function(){
      //changing  button div visibility
      var buttonDiv=document.getElementById("button-div");
      buttonDiv.style.display="none";
    }
    
})