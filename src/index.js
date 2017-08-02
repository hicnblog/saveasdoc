(function($){
    $(document).ready(function(){
        var toolbarOptions = [
            ['bold', 'italic', 'underline', 'strike'],

            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],

            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['image'],
            [{ 'color': [] }, { 'background': [] }],

            ['clean']
        ];
        var quill = new Quill('#editor', {
            modules: {
                toolbar: {
                    container : toolbarOptions,
                }
            },
            placeholder: 'Compose an epic...',
            theme: 'snow' 
        });

        var justHtmlContent = document.getElementById('justHtml');
        quill.on('text-change', function() {
            var justHtml = quill.root.innerHTML;
            justHtmlContent.innerHTML = justHtml;
        });

        var d = new Date();
        var month = d.getMonth()+1;
        var day = d.getDate();

        var current_date = d.getFullYear() + '-' +
            ((''+month).length<2 ? '0' : '') + month + '-' +
            ((''+day).length<2 ? '0' : '') + day;

        $("a.word-export").click(function(event) {
            var fileName = $("input#filename").val();

            if(fileName === ""){
                fileName = "noname-"+current_date;
            } else {
                fileName = fileName.replace(/[^\w ]+/g,'').replace(/ +/g,'-');
            }

            $("#justHtml").wordExport(fileName);
        });
       
        });
})(jQuery);