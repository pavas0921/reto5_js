function myFunction(objX, objY) {

    const array = [objX, objY]
    let objZ = {}

    for(let i=0; i<array.length; i++){
        const element =  array[i]
        
        for(let key in element){
            const value = element[key];
            if(objZ[key] == undefined){
                objZ[key] = value
            }

        }
    }



    return objZ
  }

  console.log(myFunction({a:1,b:2,c:3},{d:4,b:5,e:6}))
  console.log(myFunction({a:1,b:2,c:3},{a:4,d:5,e:6}))
  console.log(myFunction({a:1,b:2,c:3},{d:4,b:5,c:6}))