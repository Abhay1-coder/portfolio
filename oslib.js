const os = require('os');
console.log("total free memoroy inside my pc", os.freemem()/1000000000);
console.log('Home Directory:', os.platform());
console.log("Network Interfaces", os.networkInterfaces());
console.log('upTime',os.uptime());
console.log("total memeory",os.totalmem());

var d;
//checking file info
const fs = require('fs');
fs.readFile('file1.txt', (err,data)=>{
    if(err=== null){
        d=data.toString();
        console.log(data.toString());
    }else{
        console.log(date.toString());
    }
});

//writing data in file1.txt
fs.writeFile('file1.txt',d.toString()+ "abhay is coming in", (err)=>{
    if(err===null){
        console.log("sucessfully write  data!");
    }else{
        console.log(err.message);
    }
} );