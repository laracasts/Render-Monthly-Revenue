<?php

use App\Performance;
use Carbon\Carbon;

Route::get('/', function () {
    $revenue = Performance::thisYear()
        ->selectRaw('strftime("%m", created_at) as month, sum(revenue) as revenue')
        ->groupBy('month')
        ->pluck('revenue', 'month');
    
    return view('welcome', compact('revenue'));
});
