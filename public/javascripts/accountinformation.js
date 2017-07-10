
//Account Information

jQuery(document).ready(function(){
    jQuery("#ChangeInfo").click(function(){
        jQuery("#ChangeInfo").hide();
        jQuery("#CancelChange").show();
        jQuery("#SaveChange").show();
        jQuery("#view_info").hide();
        jQuery("#change_info").show();
        // //jQuery("input" ).prop( "disabled", false );
        // jQuery("#username" ).prop( "disabled", true );
        // jQuery("#emailaddress" ).prop( "disabled", false );
        // jQuery("#fullname" ).prop( "disabled", false );
        // jQuery("#sex" ).prop( "disabled", false );
        // jQuery("#phonenumber").prop( "disabled", false );
        // jQuery("#address").prop( "disabled", false );
    })

    /*
    jQuery("#CancelChange").click(function(){
        jQuery("#ChangeInfo").show();
        jQuery("#CancelChange").hide();
        jQuery("#SaveChange").hide();
        // jQuery("#username" ).prop( "disabled", true );
        // jQuery("#emailaddress" ).prop( "disabled", true );
        // jQuery("#fullname" ).prop( "disabled", true );
        // jQuery("#sex" ).prop( "disabled", true );
        // jQuery("#phonenumber").prop( "disabled", true );
        // jQuery("#address").prop( "disabled", true );
    })
    jQuery("#SaveChange").click(function(){
        jQuery("#ChangeInfo").show();
        jQuery("#CancelChange").hide();
        jQuery("#SaveChange").hide();
        // jQuery("#username" ).prop( "disabled", true );
        // jQuery("#emailaddress" ).prop( "disabled", true );
        // jQuery("#fullname" ).prop( "disabled", true );
        // jQuery("#sex" ).prop( "disabled", true );
        // jQuery("#phonenumber").prop( "disabled", true );
        // jQuery("#address").prop( "disabled", true );
    })
*/
});