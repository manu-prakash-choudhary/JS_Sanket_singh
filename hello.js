function fetchdata(data) {
    console.log(data, 'fetching started')
    return new Promise((resolve, reject) => {
        resolve(`data fetch succesfully ${data}`)
    })
   
    
}
let x = fetchdata("asdfdf")
x.then((value => {
    console.log(value)
}))

