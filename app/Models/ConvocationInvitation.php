<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConvocationInvitation extends Model
{
    use HasFactory;

    protected $fillable = [
        'accepted',
        'declined',
        'responded_at',
    ];

    public function convocation() {
        return $this->belongsTo(Convocation::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
