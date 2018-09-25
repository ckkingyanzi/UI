

var num = 0;
window.onload = function () {
    //输入框
    $(".input-money input").focus(function(){
        $("#ulcost li").removeClass("Highlight");
        $(".recharge-amount-bottom span").text(Number(0));
        $(".btn-confirm span").text(Number(0));
    });
    $(".input-money input").keyup(function(){
        $(this).val($(this).val().replace(/\D|^0/g,''));
        num = $(".input-money input").val();
        $(".recharge-amount-bottom span").text(Number(num)*10);
        $(".btn-confirm span").text(Number(num)+"元");
        $('#input_amount').attr("value",Number(num));
    });

    //选择支付金额
    $("#ulcost li").click(function(){
        $(".input-money input").val("");
        $("#ulcost li").removeClass("on");
		//$(this).parent().find(" span").removeClass("c_f8");
	   
        $(this).addClass("on");
		 $("#ulcost li p span").removeClass("c_ff");
		 $(this).find(" span").addClass("c_ff");
        var showcost = $(this).text();
        var shuzi = showcost.split("元");
        $(".recharge-amount-bottom span").text(Number(shuzi[0])*10);
        $('#input_amount').attr("value",Number(shuzi[0]));
        $(".btn-confirm span").text(showcost);
    });

    //选择支付方式
    $(".payment-tu li").click(function(){
        $(".payment-tu li").find(".img1").show();
        $(".payment-tu li").find(".img2").hide();
        $(this).find(".img1").hide();
        $(this).find(".img2").show();
    });      
}

 

