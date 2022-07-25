let arr;
let table=document.getElementById('my-table');
let empName=document.getElementById('name');
let desig=document.getElementById('desig');
let salary=document.getElementById('salary');
let updateBtn=document.getElementById('update-btn');
let addBtn=document.getElementById('btn');
let lastClickIndex=-1;


//loading data on start 
(async function loadHTML(){
     arr=await loadDBData();
     if(arr)
     addToTable();
})();

//addding HTML
function addToTable(){
    let data='';
    arr.forEach((obj) => {
        data=data+`<tr>
        <td>${obj.name}</td>
        <td>${obj.job}</td>
        <td>${obj.salary}</td>
        <td>
        <div class="between">
           <button type="button" onclick="updateData(${obj.id})"><b>Edit</b></button>
           <button type="button" onclick="deleteData(${obj.id})"><b>Delete</b></button>
        </div>
        </td>
        </tr>`
    });
    table.innerHTML=data;     
}

//adding data to table
async function enterData(){
  let empname=empName.value;
  let empsalary=salary.value;
  let empjob=desig.value;
  console.log(empname,empsalary,empjob);
  if((empname=='' || empsalary=='' || empjob=='')){
    alert('please fill the field');
  }else{
    let obj={id:arr.length,name:empname,job:empjob,salary:empsalary};
    let d=await addDB(obj);
  }
  empName.value=''; salary.value=''; desig.value='';
}

//deleting data from table
async function deleteData(id){
  let d=await deleteDB(id);
}

function updateData(id){
  addBtn.style.display='none';
  updateBtn.style.display='block';
  empName.value=arr[id].name; desig.value=arr[id].job;  salary.value=arr[id].salary;
  lastClickIndex=id;
}

async function updatingData(){
    let empname=empName.value;
    let empsalary=salary.value;
    let empjob=desig.value;
    console.log(empname,empsalary,empjob);
    if((empname=='' || empsalary=='' || empjob=='')){
      alert('please fill the field');
    }else{
     let obj={id:lastClickIndex,name:empname,salary:empsalary,job:empjob};
     let d=await updateDB(lastClickIndex,obj);
    }
}