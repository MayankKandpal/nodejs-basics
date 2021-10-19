const fs = require("fs")

// fs.readFile("./files/sample.txt",function(err,data){
//     if(err){
//  throw err
//     }
//    console.log(data)
// })

// var data = fs.readFileSync("./files/sample.txt")
// console.log(data.toString())

fs.writeFile("./files/write-data.txt","Hello world",function(err){
    if(err){
        throw err
    }
    console.log('Write Operation Completed!')
})
fs.appendFile("./files/write-data.txt","i am appending new text \n",function(err){
    if(err){
        throw err
    }
    console.log('Append operation completed')
})

fs.unlink("./files/sample.txt",function(err){
    if(err){
        throw err
    }
     console.log("Files deletion succesfull")
})