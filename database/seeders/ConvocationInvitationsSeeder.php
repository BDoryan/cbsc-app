<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ConvocationInvitationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\ConvocationInvitation::factory(10)->create();
    }
}
