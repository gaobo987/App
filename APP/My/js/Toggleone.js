$(document).ready(function(){
		$("#os").click(function(){
			$("#os").css({"border-bottom":"0.033rem solid orangered","color":"orangered"});
			$("#og").css({"border-bottom":"0px solid orangered","color":"black"});
			$("#oz").css({"border-bottom":"0px solid orangered","color":"black"});
			$("#of").css({"border-bottom":"0px solid orangered","color":"black"});
			$("#oa").css({"border-bottom":"0px solid orangered","color":"black"});
			$(".osbox").show();
			$(".ogbox").hide();
			$(".ozbox").hide();
			$(".ofbox").hide();
			$(".oabox").hide();
		})
		$("#og").click(function(){
			$("#og").css({"border-bottom":"0.03rem solid orangered","color":"orangered"});
			$("#os").css({"border-bottom":"0px solid orangered","color":"black"});
			$("#oz").css({"border-bottom":"0px solid orangered","color":"black"});
			$("#of").css({"border-bottom":"0px solid orangered","color":"black"});
			$("#oa").css({"border-bottom":"0px solid orangered","color":"black"});
			$(".osbox").hide();
			$(".ogbox").show();
			$(".ozbox").hide();
			$(".ofbox").hide();
			$(".oabox").hide();
		});
		$("#oz").click(function(){
			$("#oz").css({"border-bottom":"0.03rem solid orangered","color":"orangered"});
			$("#og").css({"border-bottom":"0px solid orangered","color":"black"});
			$("#os").css({"border-bottom":"0px solid orangered","color":"black"});
			$("#of").css({"border-bottom":"0px solid orangered","color":"black"});
			$("#oa").css({"border-bottom":"0px solid orangered","color":"black"});
			$(".osbox").hide();
			$(".ogbox").hide();
			$(".ozbox").show();
			$(".ofbox").hide();
			$(".oabox").hide();
		});
		$("#of").click(function(){
			$("#of").css({"border-bottom":"0.03rem solid orangered","color":"orangered"});
			$("#og").css({"border-bottom":"0px solid orangered","color":"black"});
			$("#os").css({"border-bottom":"0px solid orangered","color":"black"});
			$("#oz").css({"border-bottom":"0px solid orangered","color":"black"});
			$("#oa").css({"border-bottom":"0px solid orangered","color":"black"});
			$(".osbox").hide();
			$(".ogbox").hide();
			$(".ozbox").hide();
			$(".ofbox").show();
			$(".oabox").hide();
		});
		$("#oa").click(function(){
			$("#of").css({"border-bottom":"0px solid orangered","color":"black"});
			$("#og").css({"border-bottom":"0px solid orangered","color":"black"});
			$("#os").css({"border-bottom":"0px solid orangered","color":"black"});
			$("#oz").css({"border-bottom":"0px solid orangered","color":"black"});
			$("#oa").css({"border-bottom":"0.03rem solid orangered","color":"orangered"});
			$(".osbox").hide();
			$(".ogbox").hide();
			$(".ozbox").hide();
			$(".ofbox").hide();
			$(".oabox").show();
		});
	});
	