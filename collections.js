var product = document.getElementById("product")
var searchele = document.getElementById("search")
var productlist = product.querySelectorAll("div")

searchele.addEventListener("keyup", function(){
        var enteredvlu = event.target.value.toUpperCase()

        for(count=0; count<productlist.length; count++)
            {
                var proname = productlist[count].querySelector("p").textContent

                if(proname.toUpperCase().indexOf(enteredvlu)< 0)
                {
                    productlist[count].style.display="none"
                }
                else{
                    productlist[count].style.display="block"
                }
            }
})