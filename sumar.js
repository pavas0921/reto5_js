function myFunction(obj) {

    let suma = 0;
    for (var llave in obj) {
        if (obj.hasOwnProperty(llave)) {
          suma = suma + obj[llave]
        }
      }
    return suma
  }

  console.log(myFunction({a:1,b:2,c:3}))
  console.log(myFunction({j:9,i:2,x:3,z:4}))
  console.log(myFunction({w:15,x:22,y:13}))