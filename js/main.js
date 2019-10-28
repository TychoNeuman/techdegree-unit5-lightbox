const $m_sSearchBox = $('#searchbox');

let l_sUserInput = '';
let l_sDataTitle = '';

//Let's look for the results once the user starts typing
$m_sSearchBox.keyup(function(){

    //Gets the value of the user input once they start typing in the search box
    l_sUserInput = $m_sSearchBox.val();
    
    /**
     * If the inserted string in not empty, that means that we should probably start filtering images too
     * display user input. Now we loop through the 'a'-tags to see if the data-title contains the value we need.
     */
    $("a").each(function() {
        if(l_sUserInput !== ''){
            l_sDataTitle = $(this).attr('data-title').toLowerCase();
            if(l_sDataTitle.indexOf(l_sUserInput.toLowerCase()) > -1){
                $(this).show();
            } else{
                $(this).hide();
            }
        }else{
            $(this).show();
        }
    })
});