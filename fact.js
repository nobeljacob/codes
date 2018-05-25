function fact()
{
var x=document.getElementById("number").value;
var n=parseInt(x);
document.getElementById("answer").innerHTML=facto(n);


}
function facto(n)
{
if((n==0)||(n==1))

    return 1;

else
return n*facto(n-1); 
}


