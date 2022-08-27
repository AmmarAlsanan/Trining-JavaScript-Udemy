

//mutable
class MutalbeGlass{
    constructor(amount,content){
            this.amount =amount;
this.content =content;
    }
    takeDrink(value){
        this.amount =Math.max(this.amount -value,0)
        return this
    }

}

const mg1=new MutalbeGlass(1000,'water')

const mg2 =mg1.takeDrink(20)
// console.log(mg1===mg2)
// console.log(mg1.amount===mg2.amount)


//immutable

class ImmutableGlass{
    constructor(content, amount){
        this.content=content
        this.amount=amount
    }

    takeDrink(value){
        return new ImmutableGlass(this.content,Math.max(this.amount-value,0))
    }
}

const mg3= new ImmutableGlass(100,'water');
const mg4 =mg3.takeDrink(20)

// console.log(mg3 ===mg4)
// console.log(mg3.amount ===mg4.amount)


//Currying 



const add1=(x)=>{
    return (y)=>{
        return x+y
    }
}

const add2=x=>y=>x+y;

// console.log(add1(21)(1))
// console.log(add2(21)(2))

//Partial 
const getFromApi =baseURL=>endpoint=>cb=>
fetch(`${baseURL}${endpoint}`)
.then(res=>res.json()).then(data=>cb(data)).catch(err=>{console.log(err.message)})

const getGithub=getFromApi('https://api.github.com')
 const getGithubUsers=getGithub('/users')

 getGithubUsers(data=>{
    console.log(data)
 })



 const getFormRequest =(baseUrl)=>(endpoint)=>(callbackFunction)=>{
    fetch(`${baseUrl}${endpoint}`).then(res=>res.json()).then(data=>callbackFunction(data)).catch(err=>err.message)
 }
 