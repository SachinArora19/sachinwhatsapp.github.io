$(document).ready(function(){
	$('.chatArea').hide();
	$(window).on('resize', function(){
		resizeFunction();
	});
	$('.firstChat').click(function() {
		$('.firstChat').find('.chatTabDetailName').empty();
		$('.firstChat').find('.chatTabDetailName').append(`<span class="friendsName" data-name="Kopal Arora">Kopal Arora</span>`);
		$('.firstChat').find('.friendsName').css('font-weight','');
		$('.firstChat').find('.friendsName').css('font-size','');
	});
	$(".newMessage").click(function() {
		$('.firstChat').find('.chatTabDetailName').empty();
		$('.firstChat').find('.chatTabDetailName').append(`<span class="friendsName" data-name="Kopal Arora">Kopal Arora</span><span class="heading-online"style="color:blue">I have send you a ...</span>`);
		$('.firstChat').find('.friendsName').css('font-weight','bold');
		$('.firstChat').find('.friendsName').css('font-size','1.2em');
		var dateVal = new Date();
		$('#chatWindow').append(`<div class="row message-body">
            <div class="col-sm-12 message-main-receiver">
              <div class="receiver">
                <div class="message-text">
                 I have send you a new message.
                 whatever you have build it is really awesome Sachin. Good Going!!!
                </div>
                <span class="message-time pull-right">
                  ${dateVal.getHours()}:${dateVal.getMinutes()}
                </span>
              </div>
            </div>
          </div>`);
		$('#chatWindow').scrollTop($('#chatWindow').height());
	});
	$('.backToChatList').hide();
    $(".fvrtProgramsLi").click(function() {
    	let nameFriend=$(this).find('.friendsName').attr('data-name');
    	let avatarHtml=$(this).find('.avatar-icon')[0].innerHTML.trim();
    	$('.heading-name').empty();
    	$('.heading-avatar-icon').empty();
    	$('.heading-avatar-icon').append(avatarHtml);
		$('.heading-name').append(`<a style="color:white;">${nameFriend}</a><span class="heading-online">Online</span>`);
		$('.chatArea').show();
		$(".chatListSubDiv").removeClass('activeClass1');
		$(".chatArea").addClass('activeClass1');
		resizeFunction();
	});

    $(".backToChatList").click(function() {
    	$('.chatArea').hide();
    	$(".chatListSubDiv").addClass('activeClass1');
		$(".chatArea").removeClass('activeClass1');
		resizeFunction();
    });

	$('.favoriteProgramsdropdown-container').on('input', '.favoriteProgramsdropdown-search', function () {
		var target = $(this);
        var search = target.val().toLowerCase();
        if (!search) {
            $('.fvrtProgramsLi').show();
            return false;
        }
        $('.fvrtProgramsLi').each(function () {
            var text = $(this).text().toLowerCase();
            var match = text.indexOf(search) > -1;
            $(this).toggle(match);
        });
    });
    $("#replyMessage").bind("keypress", {}, keypressInBox);
    function keypressInBox(e) {
	    var code = (e.keyCode ? e.keyCode : e.which);
	    if (code == 13) {
	        e.preventDefault();
	        var dateVal = new Date();
	        $('#chatWindow').append(`<div class="row message-body">
	            <div class="col-sm-12 message-main-sender">
	              <div class="sender">
	                <div class="message-text">
	                  ${$("#replyMessage").val()}
	                </div>
	                <span class="message-time pull-right">
	                  ${dateVal.getHours()}:${dateVal.getMinutes()}
	                </span>
	              </div>
	            </div>
	          </div>
	        </div>`);
	        $("#replyMessage").val('');
	        $('#chatWindow').scrollTop($('#chatWindow').height());
	    }
	};
	function resizeFunction()
	{
		if($(window).width()<=767)
		{
			$('.backToChatList').show();
			$('.chatArea').addClass('chatAreaSmallScreenCss');
			if($(".chatArea").hasClass('activeClass1'))
			{
				$(".chatListSubDiv").css({
		    		"left": "-100%"
		  		});
		  		$(".chatAreaSmallScreenCss").css({
		    		"left": "0"
		  		});
	  		}
	  		else
	  		{
				$(".chatListSubDiv").css({
		    		"left": "0"
		  		});
		  		$(".chatArea").css({
		    		"left": "-100%"
		  		});
	  		}
		}
		else
		{
			$('.backToChatList').hide();
			$('.chatArea').removeClass('chatAreaSmallScreenCss');
			$(".chatListSubDiv").css({
	    		"left": "0"
	  		});
	  	$(".chatArea").css({
	    	"left": "0"
	  		});
	  }
	}
});