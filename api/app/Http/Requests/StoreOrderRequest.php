<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
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
            'part_model' => 'required|string',
        ];
    }
}
