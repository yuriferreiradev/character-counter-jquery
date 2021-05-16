$('textarea').on('keyup paste', function(){
    setTimeout(function(){
        let textarea = $('textarea').val().length;
        let words    = $('textarea').val().split(' ').length;
        let lines    = $('textarea').val().split('\n').length;

        $('.characters').text(textarea);
        $('.words').text(words);
        $('.lines').text(lines);
    }, 100);
});