<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function stores()
    {
        return $this->belongsTo(Store::class);
    }

    public function categories()
    {
        return $this->belongsTo(Category::class);
    }
    public function partModels()
    {
        return $this->hasMany(PartModel::class);
    }
}
