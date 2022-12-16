function myFunction(obj, key) {

    const llaves = Object.keys(obj);

    for (var i=0; i < llaves.length; i++) {
        if(llaves[i]== key){
            delete obj[key]
        }
}

    return obj
  }

  console.log(myFunction({a:1,b:2,c:3},'b'))
  console.log(myFunction({a:1,b:2,c:3},'a'))
  console.log(myFunction({a:1,b:2,c:3},'c'))