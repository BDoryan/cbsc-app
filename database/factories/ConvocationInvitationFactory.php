<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ConvocationInvitationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        //  random response to the invitation
        $accepted = $this->faker->boolean();
        return [
            "convocation_id" => \App\Models\Convocation::factory(),
            "user_id" => \App\Models\User::factory(),
            "accepted" => $accepted,
            "declined" => !$accepted,
            "responded_at" => $this->faker->dateTimeThisYear(),
        ];
    }
}
