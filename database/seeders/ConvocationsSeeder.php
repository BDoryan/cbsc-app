<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ConvocationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Convocation::factory(10)->create();
    }
}
