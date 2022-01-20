const Logibutton = document.getElementById("Login-id");
 Logibutton.addEventListener("click",function(){

    document.getElementById("Logiarea").style.display="none"

    document.getElementById("account-area").style.display="block"


 })




 const dipositFromAmount = document.getElementById("depositButons");
 dipositFromAmount.addEventListener("click",function(){

   const alldata = document.getElementById('dipositamount').value;
   const DipositNumber = parseFloat(alldata);


   const CurrentAmount = document.getElementById("DipoAmount").innerText;
   const CurrentAmounts= parseFloat(CurrentAmount);

   const totaldiposit =DipositNumber+CurrentAmounts;
   document.getElementById("DipoAmount").innerText=totaldiposit;
   document.getElementById('dipositamount').value="";


   const mainbalenceadd = document.getElementById("Mainblance").innerText;
   const mainbalenceadds= parseFloat(mainbalenceadd);

    var nowBalance = mainbalenceadds+DipositNumber;
    mainbalenceadd =document.getElementById("Mainblance").innerText=nowBalance;

   


 })


  
const netwithdrow = document.getElementById("withdroBtn");

 netwithdrow.addEventListener("click", function(){

   const Wihdarowamount = document.getElementById('WithdrwFromAmount').value;
   const WithdrowAmount = parseFloat(Wihdarowamount);

 
     const Previuswithdro = document.getElementById("MainNetWithdrow").innerText;
     const preWithdrow = parseFloat(Previuswithdro);
     console.log(preWithdrow);

     const NowShowInWithdeow = preWithdrow+WithdrowAmount;
 
     document.getElementById("MainNetWithdrow").innerText=NowShowInWithdeow;


     document.getElementById('WithdrwFromAmount').value="";
     

     
     const fainal = document.getElementById("Mainblance").innerText;
     const fianlamount = parseFloat (fainal);
     
     var TotalBalance =-1 *  WithdrowAmount+ fianlamount;

     const allend = document.getElementById("Mainblance").innerText=TotalBalance;
     



 })





 