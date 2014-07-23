/*$(document).ready(function(){
		$('ul#featured').innerfade({
			speed: 1000,
			timeout: 5000,
			type: 'sequence',
			containerheight: 	'11px',
			slide_timer_on: 	'yes',
			slide_ui_parent: 	'featured',
			slide_ui_text:		null,
			pause_button_id: 	'pause_button',
			slide_nav_id:		'slide_nav'
		});
		$.setOptionsButtonEvent();
		});
		*/

$(document).ready(function() {

	var flags = $('input[name="flag"]');

	if(flags == null) return true; /* to be fixed */
	$(flags).eq(0).val('0');
	$(flags).eq(1).val('1');


	var newsTitle = $('h1.newsSingleTitle').text();

	$(flags).eq(1).parent().parent().find('p.pageTitle').html(newsTitle);

    $('.colleague').click(function(){
        $('#right .tx-friend-pi1').fadeIn('slow');
		$('#right form').next('#contentmessages').html('');
    });


    $('.closeSend').click(function() {
        $(this).parent().parent('.tx-friend-pi1').fadeOut('slow');
		$(this).parent().find("form input[name='from']").val('Your Name');
		$(this).parent().find("form input[name='nameto']").val('Your Colleague\'s Name');
		$(this).parent().find("form input[name='emailto']").val('Your Colleague\'s Email Address');
    });

    $('.recommend').click(function(){
        $('.tx-friend-pi1').fadeIn('slow');
		$('form').next('#contentmessages').html('');
    });

    $(".submit-recfriend").click(function(e) {
        e.preventDefault();
		form = $(this).parent();
        var from = $(form).find("input#from").val();
        var nameto = $(form).find("input#nameto").val();
        var emailto = $(form).find("input#emailto").val();
        var address = $(form).find("input#address").val();
		var flag = $(form).find("input[name='flag']").val();

        var dataString = 'from='+ from + '&nameto=' + nameto + '&emailto=' + emailto + '&address=' + address + '&flag=' + flag;

        var message;

                if((from != " " && from != "Your Name") && (nameto != " " && nameto != "Your Colleague's Name") && (emailto != " " && emailto != "Your Colleague's Email Address"))
                {
                    if(validEmail(emailto))
                    {
                        $.ajax({
                                type: "POST",
                                url: "http://www.londonbridgehospital.com/sendmail.php",
                                data: dataString,

                                success: function(response) {
                                    response = eval('('+response+')');
                                    if(response['result'] == 1)
                                    {
                                        message = "<div class='h3Send'>Message sent!</div>";

										$(form).find("input[name='from']").val('Your Name');
										$(form).find("input[name='nameto']").val('Your Colleague\'s Name');
										$(form).find("input[name='emailto']").val('Your Colleague\'s Email Address');

										setTimeout(function () {
											$(form).parent().parent().parent('.tx-friend-pi1').fadeOut();


										}, 1500);



                                    }else{
                                        message = "";
                                        for (N in response['error'])
                                        {
                                          message +=   "<div class='h3Send'>"+response['error'][N]+"</div>"
                                        }
                                        message += "<div class='h3Send'>Message has not been sent!</div>";
                                    }
                                    $(form).next('#contentmessages').html(message)
                                            .hide()
                                            .fadeIn(1500, function() {
                                    });
                                  }
                            });
                    }else{
                        message = "<div class='h3Send'>Email Incorrect!</div>";
                        $(form).next('#contentmessages').html(message)
                            .hide()
                            .fadeIn(1500, function() {
                        });
                    }
                }else{
                    message = "";
                    if (from == " " || from == "Your Name")
                    {
                        message += "<div class='h3Send'>Your Name is Required!</div>";
                    }
                    if (nameto == " " || nameto == "Your Colleague's Name")
                    {

                        message += "<div class='h3Send'>Your Colleague's Name is Required!</div>";
                    }
                    if (emailto == " " || emailto == "Your Colleague's Email Address")
                    {
                        message += "<div class='h3Send'>Your Colleague's Email Address is Required!</div>";
                    }
                    $(form).next('#contentmessages').html(message)
                    .hide()
                    .fadeIn(1500, function() {

                    });
                }
    });

});





// Function for Validate email in JS
function validEmail(mail) {
    invalidChars = " /:,;"

    if (mail == "") { // cannot be empty
        return false
    }
    for (i=0; i<invalidChars.length; i++) { // does it contain any invalid characters?
        badChar = invalidChars.charAt(i)
        if (mail.indexOf(badChar,0) > -1) {
            return false
        }
    }
    atPos = mail.indexOf("@",1) // there must be one "@" symbol
    if (atPos == -1) {
        return false
    }
    if (mail.indexOf("@",atPos+1) != -1) { // and only one "@" symbol
        return false
    }
    periodPos = mail.indexOf(".",atPos)
    if (periodPos == -1) { // and at least one "." after the "@"
        return false
    }
    if (periodPos+3 > mail.length) { // must be at least 2 characters after the "."
        return false
    }
    return true
}

 $(document).ready(function() {
			/*$('.list-treatment-hide').click(function(){
					$('#content5').hide();
					$('#content6').show();
			});

			$('.list-treatment-show').click(function(){
					$('#content5').show();
					$('#content6').hide();
			}); */

			$('.list-treatment-inner-hide').click(function(){
					$('.list-treatment-inner-show').show();
					$('.list-treatment-inner-hide').hide();
					$('.treatmet-inner-list').show();
			});

			$('.list-treatment-inner-show').click(function(){
					$('.list-treatment-inner-hide').show();
					$('.list-treatment-inner-show').hide();
					$('.treatmet-inner-list').hide();
			});

			$('#tabs .consultant').click(function(){
					$('#consultant-box').show();
					$('#treatment-box').hide();
					$('#cancer-box').hide();
					$(".consultant").addClass("active");
					$(".treatment").removeClass("active");
					$(".cancer").removeClass("active");
			});

			$('#tabs .treatment').click(function(){
					$('#treatment-box').show();
					$('#consultant-box').hide();
					$('#cancer-box').hide();
					$("#tabs .treatment").addClass("active");
					$("#tabs .consultant").removeClass("active");
					$("#tabs .cancer").removeClass("active");
			});

			$('#tabs .cancer').click(function(){
					$('#cancer-box').show();
					$('#consultant-box').hide();
					$('#treatment-box').hide();
					$("#tabs .cancer").addClass("active");
					$("#tabs .consultant").removeClass("active");
					$("#tabs .treatment").removeClass("active");
			});

			$('#news-tabs .news').click(function(){
					$('.news-box').show();
					$('.press-box').hide();
					$('.blog-box').hide();
					$("#news-tabs .news").addClass("active");
					$("#news-tabs .articles").removeClass("active");
					$("#news-tabs .blog").removeClass("active");
			});
			$('#news-tabs .articles').click(function(){
					$('.press-box').show();
					$('.news-box').hide();
					$('.blog-box').hide();
					$("#news-tabs .articles").addClass("active");
					$("#news-tabs .news").removeClass("active");
					$("#news-tabs .blog").removeClass("active");
			});

			$('#news-tabs .blog').click(function(){
					$('.blog-box').show();
					$('.press-box').hide();
					$('.news-box').hide();
					$("#news-tabs .blog").addClass("active");
					$("#news-tabs .articles").removeClass("active");
					$("#news-tabs .news").removeClass("active");
			});
/*
			$('#treatment-tabs .find-consultant').click(function(){
					$('#find-consultant-box').show();
					$('.treatments-specialties').hide();
					$('.consult-specialties').show();
					$('#find-treatment-box').hide();
					$('#find-cancer-box').hide();
					$("#treatment-tabs .find-consultant").addClass("active");
					$("#treatment-tabs .find-treatment").removeClass("active");
					$("#treatment-tabs .find-cancer").removeClass("active");
			});
			*/
		/*
			$('#treatment-tabs .find-treatment').click(function(){
					$('#find-treatment-box').show();
					$('.treatments-specialties').show();
					$('.consult-specialties').hide();
					$('#find-consultant-box').hide();
					$('#find-cancer-box').hide();
					$("#treatment-tabs .find-treatment").addClass("active");
					$("#treatment-tabs .find-consultant").removeClass("active");
					$("#treatment-tabs .find-cancer").removeClass("active");
			});
			*/
		/*
			$('#treatment-tabs .find-cancer').click(function(){
					$('#find-cancer-box').show();
					$('#find-consultant-box').hide();
					$('#find-treatment-box').hide();
					$("#treatment-tabs .find-cancer").addClass("active");
					$("#treatment-tabs .find-consultant").removeClass("active");
					$("#treatment-tabs .find-treatment").removeClass("active");
			});
			*/
		
			var actionFirst = $('#treatment-list option:first').val();
			$("#treatment").attr("action", actionFirst);

			$("#treatment-list").change(function() {
					var action = $(this).val();
					$("#treatment").attr("action", action);
      });
/*
			$('#treatment-tabs .find-cancer ul li a').click(function(e){
				e.preventDefault();
			});
			*/
			$('.nurse-staff a').click(function(e){
				e.preventDefault();
			});
			$('.location-direction a').click(function(e){
				e.preventDefault();
			});


 });
    $(document).ready(function() {
        $('.nurse-staff a').click(function(){
            $('.staff-descr').hide();
            $('.arrow').hide();
						$(".nurse-staff a").removeClass("helight");
            var team = $(this).attr('class');
						//var team ='team5';
            $(this).parent().find('.arrow').fadeIn();
            $(".staff-descr[rel='" + team + "']").fadeIn();
						$(this).parent().find('a').addClass("helight");
        });

     });


    $(document).ready(function() {

								$(".nurse-staff a").mouseover(function(){
												$(this).parent().find('.img-bord').addClass("helight1");
								}).mouseout(function(){
												$(this).parent().find('.img-bord').removeClass("helight1");
								});
     });
					
					
		$(document).ready(function() {
        $('.location-direction a').click(function(){
            $('.location-descr').hide();
            $('.arrow-location').hide();
            var location = $(this).attr('class');
						$(".arrow-location[rel='" + location + "']").fadeIn();
            $(".location-descr[rel='" + location + "']").fadeIn();
        });
				$('.location a.close').click(function(){
            $('.location-descr').hide();
            $('.arrow-location').hide();
        });

     });

	$(document).ready(function() {
				var myval=$("#outsideuk").val();
				
				if (myval=="India") {
					$('#hide-form').hide();
					$('#section-country').show();
				}
			    if (myval=="Pakistan") {
					$('#hide-form').hide();
					$('#section-country').show();
				}
			    if (myval=="Nigeria") {       
					$('#hide-form').hide();
					$('#section-country').show();
				}
				
				$('#outsideuk').removeClass("required");
				var selected_radio = $("input[name='baseduk']:checked").val();
				if (selected_radio == 'Yes'){
						$('.base-location').hide();
						$('#outsideuk').removeClass("required");
				}
				else{
						$('.base-location ').show();
						$('#outsideuk').addClass("required");
				}
			  $("input[name='baseduk']").change(function(){
						var selected_radio = $("input[name='baseduk']:checked").val();
						if (selected_radio == 'Yes'){
								$('.base-location').hide();
								$('#outsideuk').removeClass("required");
						}
						else{
								$('.base-location ').show();
								$('#outsideuk').addClass("required");
						}
					});
					
			 $("#outsideuk").change(function(){
				
				var myval=$("#outsideuk").val();
				
				if (myval!="India"){
					$('#section-country').hide();
					$('#section-country').val('');
					$('#hide-form').show();
				}
				if (myval!="Pakistan"){
					$('#section-country').hide();
					$('#section-country').val('');
					$('#hide-form').show();
				 }
				if (myval!="Nigeria"){
					$('#section-country').hide();
					$('#section-country').val('');
					$('#hide-form').show();
				}

			    if (myval=="India") {
					$('#hide-form').hide();
					$('#section-country').show();
				}
			    if (myval=="Pakistan") {
					$('#hide-form').hide();
					$('#section-country').show();
				}
			    if (myval=="Nigeria") {       
					$('#hide-form').hide();
					$('#section-country').show();
				}
			});
	});
 $(document).ready(function() {
		$("#engform").validate();
		$("#emailform").validate();
		$("#requestform").validate();
		$("#appointform").validate();
		$("#appointformPhysio").validate();
 });
//  $(document).ready(function(){
//    if ($('ul#featured-history').length > 0) {
//      $('ul#featured-history').innerfade({
//        speed: 1000,
//        timeout: 5000,
//        type: 'sequence',
//        containerheight: 	'11px',
//        slide_timer_on: 	'yes',
//        slide_ui_parent: 	'featured',
//        slide_ui_text:		null,
//        pause_button_id: 	'pause_button',
//        slide_nav_id:		'slide_nav'
//      });
//      $.setOptionsButtonEvent();
//    }
//});
