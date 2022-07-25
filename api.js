
//loading db data
const url='http://localhost:3000/employees';
async function loadDBData(){
    try{
    let res=await fetch(url);
    let data=await res.json();
    return data;
    }catch(e){
        console.error('failed in loading....',e);
    }
}

//adding data into DB
async function addDB(obj){
   try{
    let req={
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(obj)
    }
    let res=await fetch(url,req);
    let data=await res.json();
    return data;
   }catch(e){console.error('error in adding.....',e)}
}

//deleting data into DB
async function deleteDB(id){
 try{
    let req={
        'method':'DELETE',
        };
      const deleteUrl=url+'/'+id;
      let res=await fetch(deleteUrl,req);
      let data=await res.json();
      return data;
 }catch(e){console.error('error in deleting....',e)}
}

//updating DB
async function updateDB(id,obj){
    let req={
        method:'PATCH',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(obj)
    }
    let updateUrl=url+'/'+id;
    let res=await fetch(updateUrl,req);
    return await res;
}
