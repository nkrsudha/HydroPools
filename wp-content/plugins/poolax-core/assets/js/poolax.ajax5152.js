/*

[Main Script]

Project: Poolax
Version: 1.0
Author : Themeholy

*/
;(function($){
    "use strict";
/* ------------------------------------------------------------------------- *

    * Mail Chimp ajax

    * ------------------------------------------------------------------------- */

    var $widgetsubscribeForm = $('form.footer-newsletter');

    // Subscribe Shortcode MailChimp ajax
    $widgetsubscribeForm.on('submit',function(e){
        let $emailAdd = $(this).find('input[type="email"]').val();
        $.ajax({
            type: 'POST',
            url: poolaxajax.action_url,
            data:{
                sectsubscribe_email: $emailAdd,
                security: poolaxajax.nonce,
                action: 'poolax_subscribe_ajax'
            },

            success: function(data){
                $('form.footer-newsletter input[type="email"]').val('');
                $('.footer-newsletter').append(data);
            },

            error: function(){
                $('.footer-newsletter').append('<div class="alert alert-danger mt-2" role="alert">Something Goes Wrong</div>');

            }
        });
        e.preventDefault();
    });

})(jQuery);