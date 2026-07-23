import "./style.css";

window.onload = function () {

    window.poupfun = function () {
        document.getElementById("m").classList.add("visible");
    };
 
    document.getElementById("m5").addEventListener("click", function () {
       
        document.getElementById("m").classList.remove("visible");
    });

};
       
    const o =document.getElementById("m3");
    o.addEventListener("click", function (){
        const v = document.getElementById("m1").value;
        if (v === ""){
            document.getElementById("m4").innerHTML += '<p class="text-gray-500 text-center mt-2">ples inter valid value</p>'
           
        }
        if (v !== ""){
            const v = document.getElementById("m1").value;
            const t =new Date().toLocaleDateString();
          document.getElementById("m2").innerHTML += `

        <div class="task h-22  border-2 border-solid   mt-4 flex flex-row w-130 rounded-xl justify-between pl-3 pr-3 drop-shadow-lg delay-150 duration-300  hover:zoom-110  ">

            <div  class=" flex gap-4  justify-center items-center">
                <button  class="border-solid rounded-2xl w-13 border-2 border-solid rounded-xl h-13 hover:bg-blue-400 " onclick= "edittask(this)">&#128219</button>
                <button class="border-solid rounded-2xl w-13 border-2 border-solid rounded-xl h-13 hover:bg-red-600" onclick="deleteTask(this)">&#128465</button>
                <button class="border-solid rounded-2xl w-13  border-2 border-solid rounded-xl h-13 hover:bg-green-500" onclick="doneTask(this)">&#10003</button>
            </div>

            <div class="flex flex-col justify-center items-center ">
                <strong class="">${v}</strong><br>
                <small>${t}</small>
            </div>

        </div>
        `;
         document.getElementById("m").classList.remove("visible");
        }
        document.getElementById("m1").value = "";
    })
     document.getElementById("m1").value = "";


     window.edittask=function(){
        document.getElementById("m1").value = "";
       document.getElementById("m").classList.add("visible");
       

     }

      window.deleteTask = function(button) {
    const element = button.closest(".task");
    element.classList.add(

        "animate__animated",
        "animate__fadeOut");
    task.addEventListener("animationend", () => {
        task.remove();
    });
        
      }
    

        // .document.getElementById("m3").addEventListener("click",function(){
        //     if (value ==""){
        //         document.getElementById("m").classList.add("invisible");

        //     }
        // });

      
//       function saveRow(r) {
//     let row = r.closest("tr");

//     let task = row.cells[0].innerText;
//     let time = row.cells[1].innerText;

//     let list = JSON.parse(localStorage.getItem("tasks")) || [];

//     list.push({ task, time });

//     localStorage.setItem("tasks", JSON.stringify(list));
// }
//     }
//     function deleteTask(r) {
//     r.closest("tr").remove();
//     }
//     function doneTask(r) {
//     var row = r.closest("tr");
//     row.style.backgroundColor = "lightgreen";
   
// }
// function edittask(r){
//   deleteTask(r);
//   poupfun();
    
// }

// localStorage.getItem("task");
// localStorage.getItem("done")


