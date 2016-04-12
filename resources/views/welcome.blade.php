<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>
    </head>
    <body>
        <graph :keys="{{ $revenue->keys() }}" 
               :values="{{ $revenue->values() }}"></graph>
        
        <script src="/js/main.js"></script>
    </body>
</html>
