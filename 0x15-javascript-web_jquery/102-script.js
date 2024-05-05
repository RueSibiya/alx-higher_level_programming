!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function() {
            $("#btn_translate").click(function() {
                var languageCode = $("#language_code").val();
                $.ajax({
                    url: "https://www.fourtonfish.com/hellosalut/hello/",
                    data: { lang: languageCode },
                    success: function(response) {
                        $("#hello").text(response.hello);
                    },
                    error: function() {
                        $("#hello").text("Translation not available");
                    }
                });
            });
        });
    </script>
</head>
<body>
    <input type="text" id="language_code" placeholder="Enter language code (e.g., es, fr, en)">
    <input type="button" id="btn_translate" value="Translate">
    <div id="hello"></div>
</body>
</html>
