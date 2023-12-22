<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::all();
        return response()->json(['orders' => $orders]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'store_id' => 'required|exists:stores,id',
            'category_id' => 'required|exists:categories,id',
            'job_order' => 'nullable|integer',
            'order_number' => 'required|integer',
            'brand' => 'required|string',
            'model' => 'nullable|string',
            'downpayment' => 'numeric',
            'quantity' => 'required|integer',
            'status' => 'nullable|in:delivered,open,in-transit,cancelled,onhold',
            'link' => 'nullable|string',
            'notes' => 'nullable|string',
            'image_paths' => 'nullable|array',
            'image_paths.*' => 'nullable|string',
            'order_at' => 'nullable|date',
        ]);

        $order = Order::create($validatedData);
        return response()->json(['order' => $order], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $order = Order::findOrFail($id);
        return response()->json(['order' => $order]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $order = Order::findOrFail($id);
        $order->update($request->all());
        return response()->json(['message' => 'Order updated successfully', 'order' => $order]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $order = Order::findOrFail($id);
        $order->delete();
        return response()->json(['message' => 'Order deleted successfully']);
    }
}
