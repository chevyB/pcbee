<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories')->insert([
            ['label' => 'Charger'],
            ['label' => 'Battery'],
            ['label' => 'Keyboard'],
            ['label' => 'Motherboard'],
            ['label' => 'Flex'],
            ['label' => 'LCD'],
            ['label' => 'Case'],
            ['label' => 'Speaker'],
            ['label' => 'Fan'],
        ]);
    }
}
