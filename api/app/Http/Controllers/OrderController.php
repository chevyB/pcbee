<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderRequest;
use App\Models\Category;
use App\Models\Order;
use App\Models\OrderImage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = $request->perPage ?? 20;
        $orders = Order::with('store', 'category')
            ->orderBy('created_at', 'DESC')
            ->paginate($perPage);
        return response()->json(['orders' => $orders]);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrderRequest $request)
    {

        $validatedData = $request->validated();

        $category = Category::firstOrCreate(
            ['label' => $validatedData['category_label']],
        );
        $validatedData['category_id'] = $category->id;
        $validatedData['user_id'] = Auth::id();

        unset($validatedData['category_label']);

        $order = Order::create($validatedData);

        if ($request->hasFile('files')) {
            $filePath = [];
            foreach ($request->file('files') as $file) {
                $path = Storage::put('orders/file.jpg', $file);
                $filePath[] = [
                    'order_id' => $order->id,
                    'path' => $path
                ];
            }
            OrderImage::createMany($filePath);
        }

        return response()->json(['orders' => $order], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $order = Order::with('store', 'category', 'orderImages')->findOrFail($id);
        return response()->json(['order' => $order]);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(StoreOrderRequest $request, string $id)
    {
        $order = Order::findOrFail($id);

        $validatedData = $request->validated();

        if (isset($validatedData['category_label'])) {
            $category = Category::firstOrCreate(['label' => $validatedData['category_label']]);
            $validatedData['category_id'] = $category->id;
            unset($validatedData['category_label']);
        }
        $order->update($validatedData);

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
