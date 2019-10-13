(function($) {
    $(document).ready(function() {
        $('#generatelink').click(function() {
            var sharingurl = $.trim($('#sharingurl').val());
            if (sharingurl.length <= 0) {
                $('#errormsg').css({
                    display: 'block'
                }).text('Please enter the Google Drive sharing URL');
                return;
            }
            var googleid = '';
            var regexp = /https:\/\/drive\.google\.com\/file\/d\/(.*?)\/(edit|view)\?usp=sharing/;
            var match = sharingurl.match(regexp);
            if (match) {
                googleid = match[1];
            } else {
                regexp = /https:\/\/drive\.google\.com\/open\?id\=(.*?)$/;
                match = sharingurl.match(regexp);
                if (match) {
                    googleid = match[1];
                }
            }
            if (googleid) {
                $('#errormsg').css({
                    display: 'none'
                });
                var googledriveapikey = $.trim($('#googledriveapikey').val());
                if (googledriveapikey.length > 0) {
                    $('#googlelink').val('https://www.googleapis.com/drive/v3/files/' + googleid + '?alt=media&key=' + googledriveapikey);
                } else {
                    $('#googlelink').val('https://drive.google.com/uc?export=download&id=' + googleid);
                }
            } else {
                $('#errormsg').css({
                    display: 'block'
                }).text('Please enter a valid Google Drive sharing URL');
            }
        });
    });
}
