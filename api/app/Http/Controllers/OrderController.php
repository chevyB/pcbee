<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderRequest;
use App\Models\Category;
use App\Models\Order;
use Aws\S3\S3Client;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = $request->perPage ?? 5;
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
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $filePath = $file->store('path/to/uploaded', 's3');
    
            $s3Client = new S3Client([
                'credentials' => [
                    'key'    => config('filesystems.disks.s3.key'),
                    'secret' => config('filesystems.disks.s3.secret'),
                ],
                'region' => config('filesystems.disks.s3.region'),
                'version' => 'latest',
            ]);
    
            $url = $s3Client->getObjectUrl(config('filesystems.disks.s3.bucket'), $filePath, '+5 minutes');
            $validatedData['file_url'] = $url;
        }
        $category = Category::firstOrCreate(
            ['label' => $validatedData['category_label']],
        );
        $validatedData['category_id'] = $category->id;
        
        $validatedData['user_id'] = Auth::id();
        unset($validatedData['category_label']);
        
        $order = Order::create($validatedData);
        
        return response()->json(['orders' => $order], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $order = Order::with('store', 'category')->findOrFail($id);
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
