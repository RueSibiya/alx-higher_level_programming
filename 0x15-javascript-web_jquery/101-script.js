<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function() {
            $("#add_item").click(function() {
                $("ul.my_list").append("<li>Item</li>");
            });

            $("#remove_item").click(function() {
                $("ul.my_list li:last-child").remove();
            });
            $("#clear_list").click(function() {
                $("ul.my_list").empty();
            });
        });
    </script>
</head>
<body>
    <div id="controls">
        <div id="add_item">Add Item</div>
        <div id="remove_item">Remove Last Item</div>
        <div id="clear_list">Clear List</div>
    </div>
    <ul class="my_list">
    </ul>
</body>
</html>
