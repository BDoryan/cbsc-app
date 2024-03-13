<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'phone',
        'birthdate',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public static $rules = [
        'firstname' => 'required',
        'lastname' => 'required',
        'email' => 'required|email|unique:users',
        'phone' => 'required|min:10|max:10|unique:users',
        'birthdate' => 'required|date',
    ];

    public function licensed(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(LicensedUser::class);
    }

    public function managing(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(ManagingUser::class);
    }
}
