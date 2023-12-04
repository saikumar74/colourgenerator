 function getcolor()
{
    const randomno=Math.floor(Math.random()*1678151)
    console.log(Math.random())
    const randomcode="#"+randomno.toString(16)
    document.body.style.backgroundColor=randomcode
    document.getElementById('colour').innerText=randomcode
  
}