<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <title>Zakyus | The TasksCollector </title>

    <!-- Fonts -->


    <!-- Styles -->

    <style>
        body {
            font-family: "ubuntu";
        }

    </style>
</head>

<body class="antialiased">
    <div id="example"></div>
    <script src="{{ mix('js/app.js') }}"></script>
</body>

</html>
