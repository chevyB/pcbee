<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories')->upsert([
            ['label' => 'Charger'],
            ['label' => 'Battery'],
            ['label' => 'Keyboard'],
            ['label' => 'Motherboard'],
            ['label' => 'Flex'],
            ['label' => 'LCD'],
            ['label' => 'Case'],
            ['label' => 'Speaker'],
            ['label' => 'Fan'],
        ],  ['label'], ['created_at', 'updated_at']);
    }
}
