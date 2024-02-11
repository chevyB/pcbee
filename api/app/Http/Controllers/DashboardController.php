<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function show()
    {
        $delivered = Order::where('status', 'delivered')->count();
        $open = Order::where('status', 'open')->count();
        $intransit = Order::where('status', 'in-transit')->count();
        $cancelled = Order::where('status', 'cancelled')->count();
        $onhold = Order::where('status', 'onhold')->count();

        
        return response()->json([
            'delivered' => $delivered,
            'open' => $open,
            'in-transit' => $intransit,
            'cancelled' => $cancelled,
            'onhold' => $onhold

        ]);
    }
}
